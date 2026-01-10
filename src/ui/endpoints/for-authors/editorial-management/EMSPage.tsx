

export default function EMSPage() {
  return (
    <section className="max-w-7xl mx-auto p-6 bg-white shadow-sm rounded-lg space-y-10 leading-relaxed mt-4">
      <h1 className="text-2xl font-semibold">Step-by-Step Guide for Authors</h1>

      {/* 1 */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">1️⃣ How to Submit an Article</h2>

        <h3 className="font-medium">Step 1: Create an Account</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide your Author Name, Email ID, and Mobile Number.</li>
          <li>After account creation, log in using your credentials.</li>
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Ensure your email and mobile number are correct. All notifications will be
          sent to your registered email and mobile.
        </p>

        <h3 className="font-medium">Step 2: Submit Your Article</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Click on <strong>New Submission</strong>.</li>
          <li>Fill in the required details carefully:</li>
          <ul className="list-disc pl-10 space-y-1 text-gray-700">
            <li>Research Area</li>
            <li>Mode of Process</li>
            <li>Type of Article</li>
            <li>Type of Issue</li>
          </ul>
        </ul>
      </div>

      {/* 2 */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">2️⃣ How to Track Article Progress 📊</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your article undergoes an Editorial Check, which may include:</li>
          <ul className="list-disc pl-10 space-y-1 text-gray-700">
            <li>Plagiarism Check</li>
            <li>Peer Review</li>
          </ul>
        </ul>
        <p>You can track the status of your article anytime through your author dashboard.</p>
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Use the <em>Track Article Progress</em> section inside your dashboard.
        </p>
      </div>

      {/* 3 */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">3️⃣ How the Review Process Works 📝</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>After plagiarism check, the article is assigned to reviewers based on your research area.</li>
          <li>The Editor-in-Chief receives feedback from reviewers.</li>
          <li>The final decision is communicated to the author:</li>
          <ul className="list-disc pl-10 text-gray-700 space-y-1">
            <li>Accept</li>
            <li>Accept with Minor Corrections</li>
            <li>Reject</li>
          </ul>
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Review progress can be monitored inside your dashboard.
        </p>
      </div>

      {/* 4 */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">4️⃣ How to Know if Your Article is Accepted 📄</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>If reviewers’ comments are satisfactory, the Editor-in-Chief releases the Acceptance Letter.</li>
          <li>The letter includes the tentative publication date.</li>
          <li>You can view the Acceptance Letter in the <strong>Acceptance Tab</strong> of your account.</li>
        </ul>
      </div>

      {/* 5 */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">5️⃣ Procedure after Article Acceptance ✅</h2>
        <p>Once your article is accepted, submit the following within one week in the Final Submission Tab:</p>

        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <strong>Final Manuscript</strong> – Ensure it follows the journal’s formatting guidelines.
          </li>
          <li>
            <strong>Copyright Form</strong>
            <ul className="list-disc pl-8 space-y-1 text-gray-700">
              <li>Update your profile with necessary details (e.g., address).</li>
              <li>Generate and print the copyright form.</li>
              <li>The corresponding author must sign manually.</li>
            </ul>
          </li>
          <li>
            <strong>Article Processing Fee (APC) Receipt</strong> – Applicable with or without DOI.
          </li>
        </ol>

        <p className="text-sm text-gray-600">
          <strong>Note:</strong> After receiving all required documents, your article will be published
          within <strong>24–48 hours</strong>.
        </p>
      </div>

      {/* 6 */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">6️⃣ Final Submission 📤</h2>
        <p>To complete final submission:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Open your Article ID and go to the <strong>Final Submission Tab</strong>.</li>
          <li>Upload the following documents:</li>
          <ul className="list-disc pl-10 space-y-1 text-gray-700">
            <li>Final Manuscript</li>
            <li>Copyright Form</li>
            <li>APC Receipt</li>
          </ul>
          <li>Verify your uploads carefully.</li>
          <li>Click the <strong>Final Submit</strong> button.</li>
        </ul>
      </div>

      {/* 7 */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">7️⃣ Certificates and Published Article Access 🎓</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>All authors, including the corresponding author, will receive certificates.</li>
          <li>Authors can also download:</li>
          <ul className="list-disc pl-10 space-y-1 text-gray-700">
            <li>Published article copy</li>
            <li>Journal archive link</li>
            <li>Certificates for all authors</li>
          </ul>
        </ul>
        <p className="text-sm text-gray-600">Downloads are available under the <strong>File Tab</strong>.</p>
      </div>
    </section>
  );
}
