// import React, {useEffect, useState} from 'react';
import cv from '../../assets/cv.pdf';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Pdf() {
    
    return (
        <div>
            <Document file={cv} onLoadError={console.error} >
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}
