import React, {useRef, useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import cv from '../../assets/cv.pdf'


const PdfViewer = (props) => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(2)


    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages)
    }

    return (

        <div className={'container justify-content-center'}>
            <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
                {
                    Array.from(
                        new Array(numPages),

                        (el, index) =>
                            <>
                                {console.log(Array)}
                            <Page key={`page_${index+1}`} height={1000} width={800} pageNumber={index+1}/>
                            </>
                    )
                }

            </Document>
        </div>
    )

};

export default PdfViewer;
