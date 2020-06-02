import spacy
from spacy_sentiws import spaCySentiWS
from spacy.lang.de.stop_words import STOP_WORDS


def analyze_text(text):
    nlp = spacy.load('de_core_news_sm')
    sentiws = spaCySentiWS(sentiws_path='data/sentiws/')
    nlp.add_pipe(sentiws)
    doc = nlp(text)

    results = []
    filtered_doc = []

    for word in doc:
        if not word.is_stop:
            filtered_doc.append(word)

    for token in filtered_doc:
        if token._.sentiws:
            if token._.sentiws < -0.3:
                results.append('{}, {}, {}'.format(token.text, token._.sentiws, token.pos_))

    return results
