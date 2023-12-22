import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import './Initiative.css'

const HomePage = () => {
    const pdfExportComponent = React.useRef(null);

    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };

    return (
        <div>

            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div style={{ maxHeight: '100%' }} className='aspect'>
                    <div field="ProductID" title="ID" width="40px">
                        <div>
                            <p>STTAR NTO has received overwhelming response and participation from teachers across India and beyond. Teachers of all specialties, domains and segments have taken the test for a completely independent and fair assessment of their knowledge and skills.</p>
                        </div>
                        <div class="triangle-row">
        <div class="triangle-box">
    <    div class="left-triangle">1</div>
    <div class="content">
      Box 1 content
    </div>
    <div class="right-triangle">2</div>
  </div>

  <div class="triangle-box">
    <div class="left-triangle">1</div>
    <div class="content">
      Box 2 content
    </div>
    <div class="right-triangle">2</div>
  </div>

  <div class="triangle-box">
    <div class="left-triangle">1</div>
    <div class="content">
      Box 3 content
    </div>
    <div class="right-triangle">2</div>
  </div>
                                 </div>

                                 <div>
                                    <h2 className='text-align'>MOST PROMINENT SCHOOLS ACROSS INDIA</h2>
                                    <div class="flex-school">
                                    <div>
                                        <ul className='font-size'>
                                            <li>Delhi Public Schools</li>
                                            <li>The Shri Ram Universal School</li>
                                            <li>Ramjas School</li>
                                            <li>Sancta Maria International</li>
                                            <li>Seth Mr Jaipuria</li>
                                            <li>The Sanskar Valley</li>
                                            <li>Sunbeam Schools</li>
                                            <li>Khaitan Schools</li>
                                            <li>St. Pauls Gujrat</li>
                                            <li>Shiv Nadar Schools</li>
                                            <li>Oakridge School Hyderabad</li>
                                            <li>Green Valley Kashmir</li>
                                            <li>Suchitra Academy</li>
                                            <li>Kasiga School Dehradun</li>
                                            <li>Gd Goenka School</li>
                                            <li>Mayo College</li>
                                            <li>Giis Noida</li>
                                            <li>Pathways World</li>
                                            <li>Mc Kejriwal Kolkata</li>
                                            <li>Manav Rachna International</li>
                                            <li>Birla Open Mind</li>
                                        </ul>
                                     </div>
                                    <div>
                                        <ul className='font-size'>
                                        <li>National Public Schools</li>
                                        <li>Viva The World School</li>
                                        <li>Lodha Group Of Schools</li>
                                        <li>Podar International</li>
                                        <li>Reliance Foundation</li>
                                        <li>Childrens Academy</li>
                                        <li>Edify Group Of Schools</li>
                                        <li>Bluebells International</li>
                                        <li>Cambridge International</li>
                                        <li>Sai International School</li>
                                        <li>Indrapuram Public Schools</li>
                                        <li>Scottish High International</li>
                                        <li>Vidya Global Schools</li>
                                        <li>Amity International</li>
                                        <li>Sanskriti School Delhi</li>
                                        <li>Lotus Valley International</li>
                                        <li>The Aditya Birla Schools</li>
                                        <li>Maharaja Agarsein Public School</li>
                                        <li>City Montessori Lucknow</li>
                                        <li>& Many More…</li>
                                        </ul>
                                    </div>
                                    </div>
                                 </div>


                    </div>

                </div>

            </PDFExport>
            <button onClick={exportPDFWithComponent} style={{marginTop:'1000px'}}>Export to PDF</button>
        </div>
    );
};

export default HomePage;
