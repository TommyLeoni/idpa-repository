import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import Dropzone from 'react-dropzone';
import { withRouter } from "react-router-dom";
import { Axios as axios } from "axios";
import "./home.css";


function HomePage(props) {
    const [textFile, setTextFile] = useState(0);
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles) {
            setTextFile(acceptedFiles[0]);
            console.log(acceptedFiles[0]);
        }
    }, []);

    const handleSubmit = () => {
        var formData = new FormData();
        formData.append("files")
        axios.post('http://localhost:3000/api/textUpload', {

        })
    }

    return (
        <div className="container" id="container">
            <div className="row justify-content-center text-center h-100 m-0 p-0">
                <div className="col-10 my-auto">
                    <h1 className="mb-0 mt-n3 font-weight-bold" >AGB Analyzer</h1>
                    <small className="text-muted"><em>by Tomaso Leoni</em></small>
                </div>
                <div className="col-6 my-auto">
                    <TextField id="outlined-basic" label="Paste the Terms and Conditions here ..." variant="outlined" fullWidth />
                    <Dropzone onDrop={onDrop} accept={"text/plain"} >
                        {({ getRootProps, getInputProps, isDragActive }) => (
                            <div
                                className="grabbing w-50 mt-5 py-3 px-2 border rounded dropzone-border text-center d-inline-block "
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <AddIcon color="disabled" fontSize="large" />
                                {isDragActive ? (
                                    <p className="text-secondary my-auto">Drop it here ...</p>
                                ) : textFile ? <p className="text-secondary my-auto overflow-hidden">{textFile.name}</p> : <p className="text-secondary my-auto">Drop your text file here</p>}
                            </div>
                        )}
                    </Dropzone>
                </div>
                <div className="col-12">
                    <Button variant="contained" color="primary">
                        submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HomePage);