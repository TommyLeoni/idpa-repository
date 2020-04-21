import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./home.css"


export default function Home() {
    return (
        <div className="container" id="container">
            <div className="row justify-content-center text-center h-100 m-0 p-0">
                <div className="col-10 my-auto">
                    <h1 className="mb-0 mt-n3 font-weight-bold" >AGB Analyzer</h1>
                    <small class="text-muted"><em>by Tomaso Leoni</em></small>
                </div>
                <div className="col-6">
                    <TextField id="outlined-basic" label="Paste the Terms and Conditions here ..." variant="outlined" fullWidth />
                </div>
            </div>
        </div>
    );
}