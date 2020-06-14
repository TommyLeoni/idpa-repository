import React from 'react';
import "./results.css";

function ResultsPage(props) {
    const items = props.results;
    const resultsList = items.map((d) => <ResultTile key={items.indexOf(d)} content={d.text} danger={d.danger} id={items.indexOf(d) + 1} />)

    return (
        <div className="container" id="container">
            <div className="row justify-content-center text-center h-100 m-0 p-0">
                <div className="col-10 my-auto overflow-auto">
                    <h1 className="font-weight-bold my-5 display-4">Ihre Resultate</h1>
                    {resultsList}
                </div>
            </div>
        </div>
    );
}

function ResultTile(props) {
    const content = props.content.split(props.danger);

    return (
        <div className="row p-3">
            <div className="col-2 bg-danger text-light py-4 my-2 rounded-corners-left shadow">
                <div className="my-auto">
                    <h1 className="font-weight-bold"><u>{props.id}</u></h1>
                </div>
            </div>
            <div className="col-10 bg-light py-4 my-2 rounded-corners-right text-left shadow">
    <p className="my-auto">{content[0]}<span className="bg-danger text-light">{props.danger}</span>{content[1]}</p>
            </div>
        </div>
    )
}

export default ResultsPage;