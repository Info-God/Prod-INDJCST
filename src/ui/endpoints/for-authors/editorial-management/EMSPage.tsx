export default function EMSPage() {
  return (
    <section className="max-w-7xl mx-auto p-6 bg-white shadow-sm rounded-lg space-y-5 leading-relaxed mt-4">
      <h1 className="text-2xl font-semibold mb-3">🧭 EMS Dashboard – Author Interface Structure</h1>
       <h1 className="text-2xl font-semibold">🔷 Top Dashboard Sections (Quick Access Cards)</h1>

      {/* 1 */}
      <div className="space-y-3">
        <div>
        <h3 className="text-xl font-semibold ml-4 sm:ml-6 mb-2">1️. New Submission </h3>
        <ul className="list-disc space-y-1">
          <li className=" ml-12 sm:ml-24 mb-2">	Submit a new manuscript</li>
        </ul>

         <h3 className="text-xl font-semibold ml-4 sm:ml-6 mb-2">2. Submission Guidelines </h3>
        <ul className="list-disc  space-y-1">
        <li className="ml-12 sm:ml-24 mb-2">  step-by-step guide to Authors</li>
        </ul> 
         <h3 className="text-xl font-semibold ml-4 sm:ml-6 mb-2">3. View Article Process Timeline </h3>
         <ul className="list-disc space-y-1">
        <li className="ml-12 sm:ml-24 mb-2">Visual progress of the article <b>(Submission → Publication)</b></li>
        </ul> 
         <h3 className="text-xl font-semibold ml-4 sm:ml-6 mb-2">4. Review Process </h3>
        <ul className="list-disc space-y-1">
        <li className="ml-12 sm:ml-24 mb-2">	Review stages and current status</li>
        </ul> 
         <h3 className="text-xl font-semibold ml-4 sm:ml-6 mb-2">5. Action Required </h3>
         <ul className="list-disc space-y-1">
        <li className="ml-12 sm:ml-24 mb-2">	Pending actions related to the article
        </li>
        </ul > 
        <p className="ml-12 sm:ml-24">(Revisions, profile update, copyright, payment, final submission)</p>

        </div>
        <h3 className="text-xl font-semibold">📄 Article List Section</h3>
         <h3 className="text-xl font-semibold">In Article List View:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-6">Article ID / Paper ID, Article Title, Journal Name, Current Status</li>
          
        </ul>
        <h3 className="font-medium text-blue-500">➡️ Clicking the Paper ID opens the Detailed Article View, including:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-6">Article details, Workflow status, Review reports</li>
          <li className="ml-6">Acceptance / Payment / Final submission tabs</li>
        </ul>
      </div>
      <div>
          <img src="/EMS_NEW/emsindjcst1.webp" className="p-4" />
      </div>
      <div className="space-y-3">
         <h3 className="text-xl font-semibold text-blue-500">🆕 New Submission – Submit Your Article</h3>
        <p>To submit a new manuscript, please follow the steps below:</p>
        <h3 className="text-xl font-semibold ml-4 sm:ml-6 mb-2">🔹 Step 1: Start Submission </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">	Click on New Submission from the dashboard.</li>
          
        </ul>
        <h3 className="text-xl font-semibold ml-6 mb-2">🔹 Step 2: Enter Article Details </h3>
        <p className="ml-10 sm:ml-24">Fill in all required fields carefully:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">	Research Area</li>
          <li className="ml-10 sm:ml-16">	Mode of Process</li>
          <p className="ml-10 sm:ml-16">(Normal / Fast /Express Track, if applicable)</p>
          <li className="ml-10 sm:ml-16">Type of Article</li>
          <p className="ml-10 sm:ml-16">(Research Article, Review Article, Case Study, etc.)</p>
          <li className="ml-10 sm:ml-16">	Type of Issue</li>
          <p className="ml-10 sm:ml-16">(Regular Issue / Special Issue)</p>
          <li className="ml-10 sm:ml-16">Reviewer Referral ID (Optional)</li>
          
        </ul>
        <h3 className="text-xl font-semibold ml-6 mb-2">🔹 Step 3: Upload Manuscript </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">Upload your article file in PDF or Word format only</li>
          <li className="ml-10 sm:ml-16">Maximum file size: 10 MB</li>
          <li className="ml-10 sm:ml-16">Ensure the manuscript follows the journal guidelines</li>
        </ul>
        <h3 className="text-xl font-semibold ml-6 mb-2"> 🔹 Step 4: Submit </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">	Verify all entered details and uploaded file.</li>
          <li className="ml-10 sm:ml-16">	Click Submit to complete the submission process.</li>
        </ul>
      </div>
       <div>
          <img src="/EMS_NEW/emsindjcst2.webp" alt="EMS dashboard image" className="p-4" />
      </div>
      {/* 2 */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-blue-500">1️⃣ Details Tab</h3>
        <p><b>Purpose:</b> Provides complete manuscript and journal information</p>
        <p>Includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">Journal Details</li>
          <li className="ml-10 sm:ml-16">Article Information</li>
          <li className="ml-10 sm:ml-16">Processing Information</li>
          <li className="ml-10 sm:ml-16">	Type of Article</li>
          <li className="ml-10 sm:ml-16">Mode of Processing (Normal / Fast /Express Track, etc.)</li>
        </ul>
      </div>
      <div>
          <img src="/EMS_NEW/emsindjcst3.webp" alt="EMS dashboard image" className="p-4" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-blue-500">2️⃣ Task Tab – Workflow Overview</h3>
        <p><b>Purpose:</b> Displays the real-time editorial progress</p>
        <p>Workflow Stages:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li className="ml-10 sm:ml-16"> Editorial Check</li>
          <li className="ml-10 sm:ml-16"> Plagiarism Check</li>
          <li className="ml-10 sm:ml-16"> Peer Review</li>
          <li className="ml-10 sm:ml-16"> Acceptance</li>
          <li className="ml-10 sm:ml-16"> Proofreading</li>
          <li className="ml-10 sm:ml-16"> Layout Editing</li>
          <li className="ml-10 sm:ml-16"> Galley Correction</li>
          <li className="ml-10 sm:ml-16"> Publishing</li>
         
        </ol>
      </div>
      <div>
          <img src="/EMS_NEW/emsindjcst4.webp" alt="EMS dashboard image" className="p-4" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-blue-500">3️⃣ Files Tab</h3>
        <p><b>Purpose:</b> Central repository for all article-related documents</p>
        <p>Includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">Initially Submitted Manuscript</li>
          <li className="ml-10 sm:ml-16">Plagiarism Report</li>
          <li className="ml-10 sm:ml-16">Certificates downloads (All authors)</li>
          <li className="ml-10 sm:ml-16">	Published Article (Final PDF)</li>
        </ul>
      </div>
      <div>
          <img src="/EMS_NEW/emsindjcst5.webp" alt="EMS dashboard image" className="p-4" />
      </div>
       <div className="space-y-3">
        <h3 className="text-xl font-semibold text-blue-500">4️⃣ Review Tab</h3>
        <p><b>Purpose:</b> Review monitoring and transparency</p>
        <p>Includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">Review Status</li>
          <li className="ml-10 sm:ml-16">Reviewer Comments / Review Reports</li>
        </ul>
      </div>
      <div>
          <img src="/EMS_NEW/emsindjcst6.webp" alt="EMS dashboard image" className="p-4" />
      </div>
       <div className="space-y-3">
        <h3 className="text-xl font-semibold "><span className="text-blue-500">5️⃣ Acceptance Tab</span> (🔓 Auto-enable tabs based on article Acceptance status)</h3>
        <p><b>Purpose:</b> Official acceptance communication</p>
        <p>Includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">Acceptance Status</li>
          <li className="ml-10 sm:ml-16">Tentative Publication Date</li>
          <li className="ml-10 sm:ml-16">Acceptance Letter (Generated after author updates profile details)</li>
        </ul>
      </div>
      <div>
          <img src="/EMS_NEW/emsindjcst7.webp" alt="EMS dashboard image" className="p-4" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold"><span className="text-blue-500">6️⃣ Copyright Tab</span> (🔓 Auto-enable tabs based on article Acceptance status)</h3>
        <p><b>Purpose:</b> Copyright compliance</p>
        
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">Enabled <b>after acceptance</b></li>
          <li className="ml-10 sm:ml-16">Download copyright form</li>
          <li className="ml-10 sm:ml-16">	Author must <b>update profile details</b> to generate the form</li>
          <li className="ml-10 sm:ml-16">Upload <b>manually signed </b>copyright form</li>
        </ul>
      </div>
      <div>
          <img src="/EMS_NEW/emsindjcst8.webp" alt="EMS dashboard image" className="p-4" />
          
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold "><span className="text-blue-500">7️⃣ Payment Tab</span> (🔓 Auto-enable tabs based on article Acceptance status)</h3>
        <p><b>Purpose:</b> Article Processing Charge (APC) handling</p>
        
        <ul className="list-disc pl-5 space-y-1">
          <li className="ml-10 sm:ml-16">Enabled <b>after acceptance</b></li>
          <li className="ml-10 sm:ml-16">APC payment options:</li>
          <p className="ml-14 sm:ml-20">o Indian Authors</p>
          <p className="ml-14 sm:ml-20">o Non-Indian Authors</p>
        </ul>
      </div>
       <div>
          <img src="/EMS_NEW/emsindjcst9.webp" alt="EMS dashboard image" className="p-4" />
          
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-blue-500">8️⃣ Final Submission Tab</h3>
        <p><b>Purpose:</b> Final step before publication</p>
        <p>⏱ <b>Timeline:</b> Must be completed <b>within one week of acceptance</b></p>
        <p>Author must upload:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li className="ml-10 sm:ml-16"><b>Final Manuscript</b> (as per journal format)</li>
          <li className="ml-10 sm:ml-16"><b>	Signed Copyright Form</b></li>
          <li className="ml-10 sm:ml-16">	<b>Article Processing Fee Receipt</b></li>
          <p className="ml-14 sm:ml-20">o	With DOI / Without DOI (as applicable)</p>
          <p>➡️ After successful verification, the article proceeds to <b>publication.</b></p>
        </ol>
      </div>
       <div>
          <img src="/EMS_NEW/emsindjcst10.webp" alt="EMS dashboard image" className="p-4" />
          
      </div>
 
      
     
    </section>
  );
}
