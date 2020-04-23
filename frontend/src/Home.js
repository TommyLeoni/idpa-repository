import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from "@material-ui/icons/Add";
import { useDropzone } from 'react-dropzone'
import "./home.css"


export default function Home() {
    const [textFile, setTextFile] = useState(0);
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles) {
            setTextFile(acceptedFiles);
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className="container" id="container">
            <div className="row justify-content-center text-center h-100 m-0 p-0">
                <div className="col-10 my-auto">
                    <h1 className="mb-0 mt-n3 font-weight-bold" >AGB Analyzer</h1>
                    <small className="text-muted"><em>by Tomaso Leoni</em></small>
                </div>
                <div className="col-6">
                    <TextField id="outlined-basic" label="Paste the Terms and Conditions here ..." variant="outlined" fullWidth />
                    <div
                        className="grabbing w-25 mt-5 py-3 px-2 border rounded dropzone-border text-center d-inline-block "
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <AddIcon color="disabled" fontSize="large"/>
                        {isDragActive ? (
                            <p className="text-secondary my-auto">Drop it here ...</p>
                        ) : textFile ? <p className="text-secondary my-auto">{textFile.name}</p> : <p className="text-secondary my-auto">Drop your text file here</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}