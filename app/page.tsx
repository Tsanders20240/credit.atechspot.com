import CreditTools from "./credit-tools";

const resources = [
  ["Reports", "Get your own reports at the federally authorized source.", "https://www.annualcreditreport.com/index.action"],
  ["Disputes", "Learn how to dispute suspected factual errors yourself for free.", "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/"],
  ["Identity theft", "Use the official recovery planning service.", "https://www.identitytheft.gov/"],
  ["Credit scores", "Learn why different scoring models may show different numbers.", "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/understand-your-credit-score/"],
];

export default function Home() {
  return <main id="top">
    <a className="skip" href="#content">Skip to main content</a>
    <div className="notice"><div className="shell notice-inner"><span>Free credit education and planning tools • Paid credit-repair services unavailable</span></div></div>
    <header className="header"><div className="shell nav">
      <a className="brand" href="#top"><img src="/atechucation-logo-enhanced.png" alt="A+ Techucation LLC"/><span><strong>A+ Credit Education Center</strong><small>Understand • Check • Plan</small></span></a>
      <nav aria-label="Main navigation"><a href="#content">Start</a><a href="#tools">Tools</a><a href="#pathway">Pathway</a><a href="#resources">Official Resources</a></nav>
      <a className="button primary compact" href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noopener noreferrer">Get Free Reports</a>
    </div></header>
    <div id="content"><section className="hero"><div className="shell hero-grid"><div>
      <div className="eyebrow">Credit literacy • Consumer rights • Free planning tools</div>
      <h1>Understand your credit and choose a sound next step.</h1>
      <p className="lead">Read your reports, check for possible factual errors, plan payments, and learn your right to dispute inaccuracies yourself for free. No score, approval, or 800 outcome is promised.</p>
      <div className="actions"><a className="button primary" href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noopener noreferrer">Get Your Own Reports</a><a className="button secondary" href="#tools">Use Free Tools</a></div>
      <div className="trust"><div><strong>Free education</strong><span>No paid credit-repair service offered</span></div><div><strong>No score promise</strong><span>Models and outcomes differ</span></div><div><strong>Consumer rights</strong><span>Dispute suspected errors yourself for free</span></div><div><strong>Privacy first</strong><span>No report upload or account credentials collected</span></div></div>
    </div><aside className="hero-card"><div className="eyebrow light">Start safely</div><h2>Keep control of your information.</h2><ul><li>Request your own reports from the authorized source</li><li>Never send bureau passwords</li><li>Do not email an unredacted report</li><li>Use official instructions for factual disputes</li></ul></aside></div></section>
    <section className="section" id="tools"><div className="shell"><div className="section-head"><div><div className="eyebrow">Free on-device estimates</div><h2>Put balances in context.</h2><p className="lead">These calculators do not collect your data or predict a credit score, lending decision, or interest rate.</p></div></div><CreditTools/></div></section>
    <section className="section cream" id="pathway"><div className="shell"><div className="section-head"><div><div className="eyebrow">Your learning pathway</div><h2>Check the facts. Make a realistic plan.</h2></div></div><div className="cards">
      <article><span>01</span><h3>Get your reports</h3><p>Use AnnualCreditReport.com to request your own reports and review the information from each bureau.</p></article>
      <article><span>02</span><h3>Document possible errors</h3><p>Record what appears inaccurate or incomplete. You can dispute suspected errors directly for free.</p></article>
      <article><span>03</span><h3>Plan payments</h3><p>Prioritize due dates and use the utilization and payoff estimates above to understand options.</p></article>
      <article><span>04</span><h3>Monitor over time</h3><p>Scoring models differ. No company can promise an 800 score or a fixed timeframe.</p></article>
    </div><p>Paid credit-repair services, report upload, power of attorney, and representative bureau access are unavailable on this site. Do not send sensitive financial documents by ordinary email.</p></div></section>
    <section className="section official" id="resources"><div className="shell"><div className="section-head light-head"><div><div className="eyebrow light">Official resources</div><h2>Start with authoritative guidance.</h2><p>A+ Techucation LLC is independent of these services and agencies.</p></div></div><div className="official-grid">{resources.map(([title,copy,href])=><a key={title} href={href} target="_blank" rel="noopener noreferrer"><h3>{title}</h3><p>{copy}</p><b>Open resource ↗</b></a>)}</div></div></section>
    </div><footer><div className="shell legal"><p>© 2026 A+ Techucation LLC. A+ Credit Education Center offers general education only. It is not a law firm, lender, credit bureau, or government agency. No credit-score increase, deletion, approval, or timeframe is guaranteed. You may dispute inaccuracies yourself for free.</p></div></footer>
  </main>;
}
