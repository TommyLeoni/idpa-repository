import os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

from senti import analyze_text
from model.response_encoder import ResponseEncoder

SECRET_KEY = os.urandom(24)
UPLOAD_FOLDER = r"C:\Users\tomas\Documents\Development\IDPA\idpa-repository\backend\uploads"
ALLOWED_EXTENSION = {'txt'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SECRET_KEY'] = SECRET_KEY
cors = CORS(app)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSION


@app.route('/api/textFileUpload', methods=['GET', 'POST'])
def text_file_upload():
    if request.method == 'POST':
        if 'file' not in request.files:
            return "No file in request"

        file = request.files['file']
        if file.filename == '':
            return "No file in request"

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            f = open(os.path.join("uploads", filename), "r", encoding="utf-8")
            file_content = f.read()
            results = analyze_text(file_content)
            return jsonify(results)


@app.route('/api/textRawUpload', methods=['POST'])
@cross_origin()
def text_raw_upload():
    data = request.get_json()
    results = analyze_text(data['content'])
    return jsonify(results)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
