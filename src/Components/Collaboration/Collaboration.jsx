import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import './Collaboration.css'

const Collaboration = () => {
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();

    }
  };

  return (
    <div>

      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div style={{ maxHeight: '100vh', marginLeft: '10px' }} className='font'>
          <div field="ProductID" title="ID" width="50px">

     
            {/* <div className='list' title='Annexure-3'>

              <h2>Annexure-3</h2>

              <h3>Digital Books/PDFs on following subjects:</h3>

              <p>
                <p>1.Vision of Educaon (13 e-books)</p>
                <a href="https://drive.google.com/drive/folders/1gINQa0TfTfyUsorBQH5uFxRobMQT5xZn?usp=sharing">https://drive.google.com/drive/folders/1gINQa0TfTfyUsorBQH5uFxRobMQT5xZn?usp=sharing</a>
              </p>
              <p>
                <p>2.Assessments and Student Engagement (6 e-Books)</p>
                <a href="https://drive.google.com/drive/folders/1M_v96T6CKKVMBnLgD5pMevtTJzuqntnv?usp=sharing">https://drive.google.com/drive/folders/1M_v96T6CKKVMBnLgD5pMevtTJzuqntnv?usp=sharing</a>
              </p>
              <p>
                <p>3.ICT in Educaon (7 e-books) </p>
                <a href="https://drive.google.com/drive/folders/18SskAbYPFW8IeOKlu5BpZDBMuivd5bZC?usp=sharing">https://drive.google.com/drive/folders/18SskAbYPFW8IeOKlu5BpZDBMuivd5bZC?usp=sharing</a>
              </p>
              <p>
                <p>4.ICT in Educaon (7 e-books) </p>
                <a href="https://drive.google.com/drive/folders/18SskAbYPFW8IeOKlu5BpZDBMuivd5bZC?usp=sharing">https://drive.google.com/drive/folders/18SskAbYPFW8IeOKlu5BpZDBMuivd5bZC?usp=sharing</a>
              </p>
              <p>
                <p>5.Mindful Educaon (5 e-books)</p>
                <ul>
                  <li>
                    I.<a href="https://drive.google.com/drive/folders/1ZE7jqtPO4E1Dpwuru4dJNP9ezvClAKAP?usp=sharing">https://drive.google.com/drive/folders/1ZE7jqtPO4E1Dpwuru4dJNP9ezvClAKAP?usp=sharing</a>
                  </li>
                  <li>
                    <span>
                      II.<a href="https://eera-ecer.de/ecer-programmes/conference/26/network/684/">https://eera-ecer.de/ecer-programmes/conference/26/network/684/</a>(Assessments)</span>
                  </li>
                </ul>

              </p>


            </div>


            <div className='list' title='Annexure-4'>
              <h2>Annexure-4</h2>
              <h3>Resources on Future Skills & Future of Education (Research & Knowledge Papers)</h3>

              <p>I.<a href="https://portal.am/wp-content/uploads/2021/08/PortalAM_Web-3-Report-1.pdf">https://portal.am/wp-content/uploads/2021/08/PortalAM_Web-3-Report-1.pdf</a></p>
              <p>II.<a href="https://www.solacve.com/wp-content/uploads/2022/03/Report-An-Introducon-to-Web-3.0.pdf">https://www.solacve.com/wp-content/uploads/2022/03/Report-An-Introducon-to-Web-3.0.pdf</a></p>
              <p>III.<a href="https://www.goldmansachs.com/insights/pages/gs-research/framing-the-future-of-web-3.0-metaverseedion/report.pdf">https://www.goldmansachs.com/insights/pages/gs-research/framing-the-future-of-web-3.0-metaverseedion/report.pdf</a></p>
              <p>IV.<a href=" https://www.academia.edu/39468575/Web_3_0_The_New_Era_of_Data">https://www.academia.edu/39468575/Web_3_0_The_New_Era_of_Data</a></p>
              <p>V.<a href="https://www.hindawi.com/journals/edri/2022/6503139/">https://www.hindawi.com/journals/edri/2022/6503139/</a></p>



            </div> */}
            <div className='list' title='Annexure-5'>
              <h2>Annexure-5</h2>
              <h3>List of AI platforms and tools</h3>
               <div class="list1">
              <p>I. Some AI Ed apps that provide Personalization:</p>
             <ul>
              <li>ThinksterMath:<a href="https://hellothinkster.com/" target='_blank'>https://hellothinkster.com/</a></li>
              <li>Video:<a href="https://www.youtube.com/watch?v=rQ9oFA8Qt0s" target='_blank'>https://www.youtube.com/watch?v=rQ9oFA8Qt0s </a></li>
              <li>Dreambox Math:<a href="https://www.dreambox.com/resources/videos/welcome-to-dreambox-math">https://www.dreambox.com/resources/videos/welcome-to-dreambox-math</a></li>
              <li>Dreambox Reading:<a href="https://www.dreambox.com/soluons/reading">https://www.dreambox.com/soluons/reading</a></li>
              <li>Smart Sparrow:<a href="https://www.smartsparrow.com/soluons/highered/">https://www.smartsparrow.com/soluons/highered/</a></li>

              <li>Knewton:<a href="https://www.wiley.com/en-in/educaon/alta/courses">https://www.wiley.com/en-in/educaon/alta/courses</a></li>
              <li>Video:<a href="https://www.youtube.com/watch?v=0QBGdGuMVbQ">https://www.youtube.com/watch?v=0QBGdGuMVbQ</a></li>
              <li>Carnegie Learning:<a href="https://www.carnegielearning.com/">https://www.carnegielearning.com/</a></li>
              <li>Video:<a href="https://www.youtube.com/watch?v=QYO-8MRCPyo&t=55s">https://www.youtube.com/watch?v=QYO-8MRCPyo&t=55s</a></li>

              </ul>
              </div>


              <div class="list1">
              <p>II.Course and Lesson Planning:</p>
             <ul>
             <li>Education CoPilot:<a href="https://educationcopilot.com/">(https://educationcopilot.com/)</a></li>
             <li>ChatGPT:<a href="https://chat.openai.com/">(https://chat.openai.com/)</a></li>
             <li>ClassPoint:<a href="https://www.youtube.com/watch?v=QYO-8MRCPyo&t=55s">https://www.youtube.com/watch?v=QYO-8MRCPyo&t=55s</a></li>
            
              </ul>
              </div>

              <div class="list1">
              <p>III.Smart Content Creation</p>
             <ul>
             <li>DEMO:<a href="https://chat.openai.com/">https://chat.openai.com/ </a></li>
              </ul>
              </div>
              <div class="list1">
              <p>IV:Automac Grading & Feedback and Proctoring</p>
             <ul>
             <li>Gradescope<a href="https://www.gradescope.com/">(https://www.gradescope.com/) </a></li>
             <li>Video:<a href="https://www.youtube.com/watch?v=nJp_NN1oFcw">https://www.youtube.com/watch?v=nJp_NN1oFcw</a></li>
              </ul>
              </div>
             <div class="list1">
              <p>V:Proctoring</p>
             <ul>
             <li>AI App eklavvya<a href="https://www.eklavvya.com/">(https://www.eklavvya.com/) </a></li>
             <li>Video:<a href="https://www.youtube.com/watch?v=uEJiHHr38k">https://www.youtube.com/watch?v=uEJiHHr38k</a></li>
              </ul>
              </div>

               <div class="list1">
              <p>VI:Universal Access to Differently Challenged Students</p>
             <ul>
             <li>Braina (Brain Arficial) human language interface, automaon, voice recognition & dictaon software:<a href="https://www.brainaso.com/braina/ ">(https://www.brainaso.com/braina/ )</a></li>
             <li>Live speech to text captions on your device:<a href="https://www.ai-live.com/">https://www.ai-live.com/</a></li>
             <li>Presentaon Translator:<a href="https://www.microso.com/en-us/translator/APPS/PRESENTATIONTRANSLATOR/">https://www.microso.com/en-us/translator/APPS/PRESENTATIONTRANSLATOR/</a></li>
              </ul>
              </div>
               <div class="list1">
              <p>VII:Virtual & Augmented Reality</p>
             <ul>
             <li>AR Demo:<a href="https://www.youtube.com/watch?v=_-M6et9eKdw">https://www.youtube.com/watch?v=_-M6et9eKdw</a></li>
             <li>VR Product: Metaverse<a href="https://www.youtube.com/watch?v=4nwQ36m9aDE ">https://www.youtube.com/watch?v=4nwQ36m9aDE</a></li>
             <li>Demo: Virtual Medicine<a href="https://www.microso.com/en-us/translator/APPS/PRESENTATIONTRANSLATOR/">https://www.microso.com/en-us/translator/APPS/PRESENTATIONTRANSLATOR/</a></li>
              </ul>
              </div>
               <div class="list1">
              <p>VIII:Some Exam and & Quiz Generators:</p>
             <ul>
             <li>OpenAI's GPT:<a href="https://chat.openai.com/auth/login?next=%2Fchat ">https://chat.openai.com/auth/login?next=%2Fchat </a></li>
             <li>IBM Watson<a href="https://www.ibm.com/watson">https://www.ibm.com/watson</a></li>
             
              </ul>
              </div>  

              <div class="list1">
              <p>IX:Admin Tasks Automation:</p>
             <ul>
             <li>Examples Zapier:<a href="https://zapier.com/ai">https://zapier.com/ai</a></li>


             <p>AI Powered Acvies for Teachers & Students</p>
             <li>Khanmigo courses:<a href="https://www.khanacademy.org/">https://www.khanacademy.org/</a></li>
             <li>Long Demo (21 mins) by Sal Khan (founder):<a href="https://www.youtube.com/watch?v=rnIgnS8Susg">https://www.youtube.com/watch?v=rnIgnS8Susg</a></li>
             <li>Short Demo for Teachers::<a href="https://www.youtube.com/watch?v=Elnfgd7OzoM">: https://www.youtube.com/watch?v=Elnfgd7OzoM</a></li>
             <li>OpenAI Customer Success Story on Khanmigo:<a href="https://openai.com/customer-stories/khanacademy">https://openai.com/customer-stories/khanacademy</a></li>

              </ul>
              </div>




            </div>
          </div>
        </div>

      </PDFExport>
      <button onClick={exportPDFWithComponent} style={{ marginTop: '10px' }}>Export to PDF</button>
    </div>
  );
};



export default Collaboration;