import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import './Concern.css'

const HomePage = () => {
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div className='table-top'>
     
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div style={{ maxHeight: '600px',marginTop:'100px',marginLeft:'30px',marginRight:'30px'}}>
          <div field="ProductID" title="Marks" width="40px" className=''>
           <table>
           
           <tr className='segment'>
            <th colSpan={2}>Segment</th>
            <th>Total Marks</th>
            <th>Marks Obtained</th>
           </tr>
           <tr className='data'>
            <td className='num'>1.</td>
            <td className='text'>Child Development & Educational Psychology</td>
            <th className='num'>50</th>
            <th className='num'>50</th>
           </tr>
           <tr className='data'>
            <td className='num'>2.</td>
            <td className='text'>Inclusive Education</td>
            <th className='num'>50</th>
            <th className='num'>50</th>
           </tr>
           <tr className='data'>
            <td className='num'>3.</td>
            <td className='text'>Learning and Pedagogy</td>
            <th className='num'>50</th>
            <th className='num'>50</th>
           </tr>
           <tr className='data'>
            <td className='num'>4.</td>
            <td className='text'>Assessment</td>
           <th className='num'>50</th>
           <th className='num'>50</th>
           </tr>
           <tr className='data'>
            <td className='num'>5.</td>
            <td className='text'>Current Affairs in Education</td>
            <th className='num'>50</th>
            <th className='num'>50</th>
           </tr>
           <tr className='data'>
            
            <td colSpan={2}>Total</td>
            <th className='num'>250</th>
            <th className='num'>250</th>
           </tr>
           <tr className='segment'>
            <td colSpan={4}>Percentage: <span>100%</span></td>
           </tr>
    

           </table>
          </div>
         
        </div>
      </PDFExport>
      <button onClick={exportPDFWithComponent}>Export to PDF</button>
    </div>
  );
};

export default HomePage;
