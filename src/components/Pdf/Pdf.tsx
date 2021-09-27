// import React, {useEffect, useState} from 'react';
import cv from '../../assets/cv.pdf';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Pdf() {
    // const [pdf, setPdf] = useState<string>('')

    // async function getPdf () {
    //     try {
    //         const {data} = await axios.get('https://docs.google.com/document/d/1yNuJ3PMUnjcGG0PsYRztt-KMz1J5B0COHqO2VLqgQCM/edit');
    //         console.log(data);
    //         setPdf(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     // getPdf();
    //     console.log(typeof(cv), "****");
    // })

    return (
        <div>
            <Document file={cv} onLoadError={console.error} >
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}
