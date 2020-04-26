import React, { Component } from 'react';
import "./results.css";

class ResultsPage extends Component {
    render() {

        const items = ["nice bro danke alter", "kein thema brudi", "Die folgenden AGB werden durch den Einbezug in den Vertrag oder die Bestellung verbindlich. Ihre Anwendung ist für alle ICT-Beschaffungsstellen der Kantonsverwaltung obligatorisch (Ziff. 6.1 des Anhangs 1 zur Weisung des KAIO über die Standards der Informations- und Kommunikationstechnologie der Kantonsverwaltung; Art. 12 Abs. 1 Bst. d"];
        const resultsList = items.map((d) => <ResultTile key={items.indexOf(d)} content={d} id={items.indexOf(d)} />)


        return (
            <div className="container" id="container">
                <div className="row justify-content-center text-center h-100 m-0 p-0">
                    <div className="col-10 my-auto">
                        <h1 className="font-weight-bold mb-5 display-4">Your results</h1>
                        {resultsList}
                    </div>
                </div>
            </div>
        )
    }
}

function ResultTile(props) {
    return (
        <div className="row">
            <div className="col-2 bg-danger text-light py-4 my-2 rounded-corners-left">
                <div className="my-auto">
                    <h1 className="font-weight-bold"><u>{props.id}</u></h1>
                </div>
            </div>
            <div className="col-10 bg-light py-4 my-2 rounded-corners-right text-left">
                <p className="my-auto">{props.content}</p>
            </div>
        </div>
    )
}

export default ResultsPage;