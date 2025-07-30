import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './PdfViewer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Reset to first page on new PDF load
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    if (pageNumber > 1) {
      changePage(-1);
    }
  }

  function nextPage() {
    if (pageNumber < numPages) {
      changePage(1);
    }
  }

  return (
    <div className="pdf-viewer-container">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-document"
      >
        <Page pageNumber={pageNumber} width={800} />
      </Document>
      <div className="pdf-navigation">
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          ‹
        </button>
        <span>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </span>
        <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
          ›
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
