import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import './HomePage.css'

const HomePage = () => {
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div className='top'>
      
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div className='pdf-file'>
          <div className='border'>
            <div className='box-1'>
          <div field="ProductID" title="ID" width="40px">
            <div className='gap' style={{marginTop:'0px'}}>
          <p className='margin'>Name of the Participant:</p>
          <h2 className='color'>Harish Sanduja</h2>
          </div>
          </div>
          <div field="ProductName" title="Name" width="250px">
            <div className="gap">
          <p className='margin'>City:</p>
          <h2 className='color'>Ghaziabad</h2>
          </div>
          </div>
          <div field="Category.CategoryName" title="CategoryName">
            <div className="gap" style={{marginBottom:'0px'}}>
          <p className='margin'>State:</p>
          <h2 className='color'>Uttar Pradesh</h2>
          </div>
          </div>
          </div>
          <div className='box-1' id='flex-2'>
          <div field="UnitPrice" title="Price" width="80px">
            <div className="gap" style={{marginTop:'0px'}}>
          <p className='margin'>Country:</p>
          <h2 className='color'>India</h2>
          </div>
          </div>
          <div field="UnitsInStock" title="In stock" width="80px">
            <div className="gap">
          <p className='margin'>Organisation:</p>
          <h2 className='color'>Jaipuria Group</h2>
          
          </div>
          </div>
          <div field="UnitsInStock" title="In stock" width="80px">
            <div className="gap" style={{marginBottom:'0px'}}>
          <p className='margin'>Designation:</p>
          <h2 className='color'>Director</h2>
          
          </div>
          </div>
          
          </div>
          </div>
        </div>
      </PDFExport>
      <button onClick={exportPDFWithComponent}>Export to PDF</button>
    </div>
  );
};

export default HomePage;
