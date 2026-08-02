import CreditTools from "./credit-tools";

const booking = "https://scheduler.zoom.us/a-plus-techucation/30-mins-with-a-plus";

const services = [
  ["CR", "Credit Report Review", "Compare bureau information, organize accounts, and identify possible factual concerns."],
  ["DOC", "Dispute-Document Support", "Organize evidence and prepare factual correspondence without disputing accurate information."],
  ["ID", "Identity-Theft Guidance", "Use official recovery channels, freezes, fraud alerts, and documentation steps."],
  ["EDU", "Credit Education", "Understand reports, scoring factors, utilization, inquiries, collections, and payment history."],
  ["PLAN", "Action Planning", "Prioritize realistic next steps based on your reports, goals, and available documentation."],
  ["NEXT", "Progress Consultation", "Review responses, organize follow-up, and decide on an informed next action."],
];

const education = [
  ["Reports", "Understand accounts, inquiries, personal information, and public-record reporting."],
  ["Scores", "Learn the common factors that may influence different credit-scoring models."],
  ["Collections", "Understand validation, reporting, documentation, and timing basics."],
  ["Identity Theft", "Know the first steps for freezes, fraud alerts, and federal recovery reports."],
  ["Student Loans", "Review how repayment status, delinquency, and servicing can affect reports."],
  ["Mortgage Readiness", "Organize the credit, debt, and document basics lenders may review."],
];

const official = [
  ["ACR", "AnnualCreditReport.com", "Request reports from Equifax, Experian, and TransUnion.", "https://www.annualcreditreport.com/index.action"],
  ["CFPB", "Dispute a Report Error", "Read federal instructions and use CFPB sample dispute letters.", "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/"],
  ["FTC", "IdentityTheft.gov", "Create an identity-theft report and personal recovery plan.", "https://www.identitytheft.gov/"],
  ["HELP", "CFPB Complaint Portal", "Submit complaints about credit reporting and financial products.", "https://www.consumerfinance.gov/complaint/"],
  ["OPT", "OptOutPrescreen", "Manage prescreened credit and insurance offers.", "https://www.optoutprescreen.com/"],
  ["FSA", "Federal Student Aid", "Use official federal student-loan information and account tools.", "https://studentaid.gov/"],
];

export default function Home() {
  return <main id="top">
    <a className="skip" href="#content">Skip to main content</a>
    <div className="notice"><div className="shell notice-inner"><span>Credit education and document support — no score or deletion guarantees</span><a href="tel:+17133962993">(713) 396-2993</a></div></div>
    <header className="header"><div className="shell nav">
      <a className="brand" href="#top"><img src="/atechucation-logo-enhanced.png" alt="A+ Techucation LLC"/><span><strong>A+ Credit Restoration</strong><small>Clarity • Accuracy • Progress</small></span></a>
      <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#process">Process</a><a href="#education">Learning</a><a href="#tools">Tools</a><a href="#rights">Consumer Rights</a><a href="#faq">FAQ</a></nav>
      <a className="button primary compact" href={booking} target="_blank" rel="noopener noreferrer">Book Consultation</a>
    </div></header>

    <div id="content">
      <section className="hero"><div className="shell hero-grid">
        <div><div className="eyebrow">Credit education • Report review • Document support</div><h1>Understand your credit. Correct genuine errors. Build a stronger next step.</h1><p className="lead">A+ Credit Restoration helps consumers understand credit reports, identify information that may be inaccurate or incomplete, organize documentation, and create a realistic action plan—without false promises.</p><div className="actions"><a className="button primary" href={booking} target="_blank" rel="noopener noreferrer">Book Credit Consultation</a><a className="button secondary" href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noopener noreferrer">Get Free Credit Reports</a></div>
        <div className="trust"><div><strong>No guaranteed score increase</strong><span>Outcomes vary by person and scoring model</span></div><div><strong>No inaccurate promises</strong><span>Accurate information is not targeted for deletion</span></div><div><strong>Review before payment</strong><span>Scope and eligibility are confirmed first</span></div><div><strong>Privacy-first intake</strong><span>Never send passwords or full account numbers</span></div></div></div>
        <aside className="hero-card"><div className="eyebrow light">Start safely</div><h2>Protect your information.</h2><ul><li>Do not send full Social Security numbers</li><li>Do not send bureau login credentials</li><li>Do not send full bank or card numbers</li><li>Use official sources for credit reports</li></ul><div className="stats"><div><b>3</b><span>major bureaus</span></div><div><b>1:1</b><span>guidance</span></div><div><b>Clear</b><span>written scope</span></div><div><b>Secure</b><span>intake process</span></div></div></aside>
      </div></section>

      <section className="section" id="services"><div className="shell"><div className="section-head"><div><div className="eyebrow">Professional services</div><h2>Education, review, documentation, and realistic planning.</h2><p className="lead">Every request starts with a consultation and eligibility review. Covered services proceed only with required disclosures and a written agreement.</p></div><a className="button secondary" href={booking} target="_blank" rel="noopener noreferrer">Discuss Your Situation</a></div><div className="cards">{services.map(([code,title,copy])=><article key={title}><span>{code}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="section process" id="process"><div className="shell"><div className="eyebrow light">Transparent client path</div><h2>Know what happens before you commit.</h2><div className="steps"><article><b>01</b><h3>Book consultation</h3><p>Explain your goal without sharing sensitive credentials.</p></article><article><b>02</b><h3>Review fit and scope</h3><p>We identify the appropriate education or document-support service.</p></article><article><b>03</b><h3>Receive disclosures</h3><p>Review the written scope, price, limitations, and cancellation rights.</p></article><article><b>04</b><h3>Begin approved work</h3><p>Payment and service follow applicable requirements—no outcome is guaranteed.</p></article></div></div></section>

      <section className="section cream" id="education"><div className="shell"><div className="section-head"><div><div className="eyebrow">Education center</div><h2>Learn the part of credit that matters now.</h2></div></div><div className="education-grid">{education.map(([title,copy],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="section" id="tools"><div className="shell"><div className="section-head"><div><div className="eyebrow">Free planning tools</div><h2>Turn information into a practical plan.</h2><p className="lead">Estimate utilization and debt-payoff timing for education only. These estimates are not financial, lending, or score advice.</p></div></div><CreditTools/></div></section>

      <section className="section official"><div className="shell"><div className="section-head light-head"><div><div className="eyebrow light">Official resources</div><h2>Use trusted sources when accuracy matters.</h2><p>These links lead to federal agencies or authorized resources. A+ Credit Restoration is not affiliated with them.</p></div></div><div className="official-grid">{official.map(([code,title,copy,href])=><a href={href} target="_blank" rel="noopener noreferrer" key={title}><span>{code}</span><h3>{title}</h3><p>{copy}</p><b>Open official resource ↗</b></a>)}</div></div></section>

      <section className="section rights" id="rights"><div className="shell rights-grid"><div><div className="eyebrow">Consumer rights</div><h2>You can dispute inaccurate credit information yourself for free.</h2><p className="lead">Credit-service providers do not have a special legal right to remove accurate information.</p><div className="actions"><a className="button primary" href="https://www.ftc.gov/legal-library/browse/statutes/credit-repair-organizations-act" target="_blank" rel="noopener noreferrer">Review CROA</a><a className="button secondary" href="https://www.ftc.gov/legal-library/browse/statutes/fair-credit-reporting-act" target="_blank" rel="noopener noreferrer">Review FCRA</a></div></div><div className="rights-card"><h3>Before paying</h3><ul><li>Read every disclosure and the complete written agreement.</li><li>Confirm the exact services, price, and payment timing.</li><li>Review cancellation rights and keep copies.</li><li>Never sign blank documents or provide login passwords.</li><li>Never submit false identity-theft claims or inaccurate disputes.</li></ul></div></div></section>

      <section className="section cream" id="faq"><div className="shell faq-grid"><div><div className="eyebrow">Frequently asked questions</div><h2>Clear answers before you act.</h2><p className="lead">Education comes first. Results, approvals, score changes, deletions, and timelines are never guaranteed.</p></div><div className="faqs"><details open><summary>Does this site provide credit repair?</summary><p>We provide education, consultations, credit-report review, and factual dispute-document support where legally permitted and only after required disclosures and a written agreement.</p></details><details><summary>Can you guarantee results?</summary><p>No. We do not guarantee a score increase, deletion, financing approval, lender decision, or completion timeline.</p></details><details><summary>Can accurate negative information be removed?</summary><p>Accurate, current, and verifiable information cannot lawfully be removed merely because it is unfavorable.</p></details><details><summary>Can I dispute errors myself?</summary><p>Yes. You can dispute information you believe is inaccurate or incomplete directly with consumer reporting companies at no charge.</p></details><details><summary>Do you need my passwords?</summary><p>No. Never send bureau, banking, email, or credit-monitoring passwords through this website or email.</p></details></div></div></section>

      <section className="cta"><div className="shell cta-inner"><div><div className="eyebrow light">Ready for a clearer next step?</div><h2>Book an educational credit consultation.</h2><p>The consultation does not guarantee service or results.</p></div><a className="button gold" href={booking} target="_blank" rel="noopener noreferrer">Book Consultation</a></div></section>
    </div>

    <footer><div className="shell footer-grid"><div className="footer-brand"><img src="/atechucation-logo-enhanced.png" alt="A+ Techucation"/><h3>A+ Credit Restoration</h3><p>Credit education, report-review support, dispute-document organization, and personalized action planning from A+ Techucation LLC.</p></div><div><h3>Explore</h3><a href="#services">Services</a><a href="#process">Process</a><a href="#education">Learning Center</a><a href="#tools">Calculators</a><a href="#faq">FAQ</a></div><div><h3>Official Help</h3><a href="https://www.annualcreditreport.com/index.action" target="_blank">Free Credit Reports</a><a href="https://www.identitytheft.gov/" target="_blank">IdentityTheft.gov</a><a href="https://www.consumerfinance.gov/complaint/" target="_blank">CFPB Complaints</a><a href="#rights">Consumer Rights</a></div><div><h3>A+ Ecosystem</h3><a href="https://www.atechspot.com/">ATechSpot Corporate</a><a href={booking} target="_blank">Book Consultation</a><a href="tel:+17133962993">(713) 396-2993</a><a href="mailto:aplustechucation@gmail.com">aplustechucation@gmail.com</a></div></div><div className="shell legal"><p>© 2026 A+ Techucation LLC. A+ Credit Restoration is not a law firm, lender, credit bureau, or government agency. No outcome is guaranteed. You may dispute inaccurate information directly with consumer reporting agencies at no charge.</p></div></footer>
  </main>;
}
