import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

const ContactUs = () => {
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
     
    }
  };

  return (
    <div>
     
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div style={{ maxHeight: '400px' }}>
          <div field="ProductID" title="ID" width="40px">
          <h1>List of Annexures</h1>
    <div>
    <h2>Annexure-1</h2>
    <h3>Resources on Future Skills & Future of Education (Research & Knowledge Papers)</h3>
    <ul>
        <li><a href="https://drive.google.com/file/d/1PJPblvChw1EIcxHY402oTqw0Mf2fsRiC/view">I. Link 1</a></li>
        <li><a href="https://drive.google.com/file/d/1zmxNZpeitzDgQ7hVtj1u0FCm3EsXKk-t/view">II. Link 2</a></li>
        <li><a href="https://atos.net/wp-content/uploads/2021/03/future-of-skills-report.pdf">III. Link 3</a></li>
        <li><a href="https://indiaeducaonforum.org/pdf/ISR-2021.pdf">IV. Link 4</a></li>
        <li><a href="https://wheebox.com/assets/pdf/ISR_Report_2022.pdf">V. Link 5</a></li>
        <li><a href="https://nasscom.in/knowledge-center/publicaons/futureskills-talent-india-demand-supply-analysis">VI. Link 6</a></li>
       
    </ul>
    </div>
    <div>
    <h2>Annexure-2</h2>

    <h3>Top 18 Lesson Planning Resources (Most of them are free)</h3>
    <ul>
        <li><a href="https://www.readwritethink.org/">I. ReadWriteThink</a></li>
        <li><a href="https://phet.colorado.edu/en/teaching-resources">II. PhET Teaching Resources</a></li>

        <li><a href="https://www.scholasc.com/teachers/teaching-tools/home.html">III. Link 3</a></li>
        <li><a href="https://sheg.stanford.edu/">IV. Link 4</a></li>

        <li><a href="https://www.getepic.com/educators">V. Link 5</a></li>
        <li><a href="https://www.learningforjusce.org/">VI. Link 6</a></li>

        <li><a href="https://www.prodigygame.com/main-en/teachers/">VII. Link 7</a></li>
        <li><a href="https://www.howstuffworks.com/">VIII. Link 8</a></li>

        <li><a href="https://www.3plearning.com/">IX. Link 9</a></li>
        <li><a href="https://www.achieve3000.com/">X. Link 10</a></li>

        <li><a href="https://banzai.org/">XI. Link 11</a></li>
        <li><a href="https://www.readwritethink.org/">XII. Link 12</a></li>

        <li><a href="https://kids.naonalgeographic.com/">XIII. Link 13</a></li>
        <li><a href="https://www.starfall.com/h/">XIV. Link 14</a></li>

        <li><a href="https://www.classroomchampions.org/">XV. Link 15</a></li>
        <li><a href="https://www.bbc.co.uk/history/forkids/">XVI. Link 16</a></li>

        <li><a href="https://www.disneyjunior.ca/">XVII. Link 17</a></li>
        <li><a href="https://artsandculture.google.com/">XVIII. Link 18</a></li>
    </ul>
    </div>
    <div>

    <h2>Annexure-3</h2>

<h3>Digital Books/PDFs on following subjects:</h3>
<ul>
    <li>
        <p>Vision of Educaon (13 e-books)</p>
        <a href="https://drive.google.com/drive/folders/1gINQa0TfTfyUsorBQH5uFxRobMQT5xZn?usp=sharing">link-1</a>
    </li>
    <li>
        <p>Assessments and Student Engagement (6 e-Books)</p>
        <a href="https://drive.google.com/drive/folders/1M_v96T6CKKVMBnLgD5pMevtTJzuqntnv?usp=sharing">link-1</a>
    </li>
    <li>
        <p>ICT in Educaon (7 e-books) </p>
        <a href="https://drive.google.com/drive/folders/18SskAbYPFW8IeOKlu5BpZDBMuivd5bZC?usp=sharing">link-1</a>
    </li>
    <li>
        <p>ICT in Educaon (7 e-books) </p>
        <a href="https://drive.google.com/drive/folders/18SskAbYPFW8IeOKlu5BpZDBMuivd5bZC?usp=sharing">link-1</a>
    </li>
    <li>
        <p>Mindful Educaon (5 e-books)</p>
        <ul>
            <li>
                <a href="https://drive.google.com/drive/folders/1ZE7jqtPO4E1Dpwuru4dJNP9ezvClAKAP?usp=sharing">Link-4</a>
            </li>
            <li>
                <a href="https://eera-ecer.de/ecer-programmes/conference/26/network/684/">Assesment</a>
            </li>
        </ul>
       
    </li>

</ul>
</div>
</div>
</div>
        
      </PDFExport>
      <button onClick={exportPDFWithComponent} className=''>Export to PDF</button>
    </div>
  );
};



export default ContactUs