
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".mobile-toggle");
  const menu=document.querySelector(".menu");
  if(toggle&&menu)toggle.addEventListener("click",()=>menu.classList.toggle("open"));

  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

  const analytics=window.CREDIT_ANALYTICS||{};
  if(analytics.ga4 && !analytics.ga4.includes("REPLACE")){
    const s=document.createElement("script");s.async=true;s.src=`https://www.googletagmanager.com/gtag/js?id=${analytics.ga4}`;document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
    gtag("js",new Date());gtag("config",analytics.ga4);
  }
  if(analytics.clarity && !analytics.clarity.includes("REPLACE")){
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",analytics.clarity);
  }

  const utilForm=document.querySelector("#util-form");
  if(utilForm)utilForm.addEventListener("submit",e=>{
    e.preventDefault();
    const limit=Number(document.querySelector("#credit-limit").value||0);
    const balance=Number(document.querySelector("#credit-balance").value||0);
    const out=document.querySelector("#util-result");
    if(limit<=0||balance<0){out.textContent="Enter a valid credit limit and balance.";return;}
    const pct=(balance/limit)*100;
    out.textContent=`Estimated utilization: ${pct.toFixed(1)}%.`;
  });

  const loanForm=document.querySelector("#loan-form");
  if(loanForm)loanForm.addEventListener("submit",e=>{
    e.preventDefault();
    const p=Number(document.querySelector("#loan-amount").value||0);
    const annual=Number(document.querySelector("#loan-rate").value||0)/100;
    const years=Number(document.querySelector("#loan-years").value||0);
    const n=years*12,r=annual/12;
    const out=document.querySelector("#loan-result");
    if(p<=0||years<=0||annual<0){out.textContent="Enter valid loan values.";return;}
    const payment=r===0?p/n:p*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
    out.textContent=`Estimated monthly payment: $${payment.toFixed(2)}.`;
  });

  const debtForm=document.querySelector("#debt-form");
  if(debtForm)debtForm.addEventListener("submit",e=>{
    e.preventDefault();
    const balance=Number(document.querySelector("#debt-balance").value||0);
    const apr=Number(document.querySelector("#debt-apr").value||0)/100/12;
    const pay=Number(document.querySelector("#debt-payment").value||0);
    const out=document.querySelector("#debt-result");
    if(balance<=0||pay<=0||apr<0){out.textContent="Enter valid values.";return;}
    let b=balance,months=0,total=0;
    while(b>0 && months<1200){
      b+=b*apr;
      const actual=Math.min(pay,b);b-=actual;total+=actual;months++;
      if(pay<=balance*apr && months===1){out.textContent="Payment is too low to reduce the balance.";return;}
    }
    out.textContent=`Estimated payoff: ${months} months; total paid about $${total.toFixed(2)}.`;
  });

  const efForm=document.querySelector("#ef-form");
  if(efForm)efForm.addEventListener("submit",e=>{
    e.preventDefault();
    const expenses=Number(document.querySelector("#monthly-expenses").value||0);
    const months=Number(document.querySelector("#fund-months").value||0);
    const out=document.querySelector("#ef-result");
    if(expenses<=0||months<=0){out.textContent="Enter valid amounts.";return;}
    out.textContent=`Emergency fund target: $${(expenses*months).toFixed(2)}.`;
  });

  const budgetForm=document.querySelector("#budget-form");
  if(budgetForm)budgetForm.addEventListener("submit",e=>{
    e.preventDefault();
    const income=Number(document.querySelector("#income").value||0);
    const needs=Number(document.querySelector("#needs").value||0);
    const wants=Number(document.querySelector("#wants").value||0);
    const savings=Number(document.querySelector("#savings").value||0);
    const out=document.querySelector("#budget-result");
    const remaining=income-needs-wants-savings;
    out.textContent=`Remaining after entered categories: $${remaining.toFixed(2)}.`;
  });
});
