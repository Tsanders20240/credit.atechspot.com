"use client";
import { useMemo, useState } from "react";

export default function CreditTools(){
  const [balance,setBalance]=useState(1200); const [limit,setLimit]=useState(5000);
  const [debt,setDebt]=useState(4000); const [payment,setPayment]=useState(250); const [rate,setRate]=useState(18);
  const utilization=useMemo(()=>limit>0?Math.max(0,balance/limit*100):0,[balance,limit]);
  const payoff=useMemo(()=>{if(payment<=0)return null; const monthly=rate/1200; if(monthly===0)return Math.ceil(debt/payment); if(payment<=debt*monthly)return null; return Math.ceil(-Math.log(1-debt*monthly/payment)/Math.log(1+monthly));},[debt,payment,rate]);
  return <div className="tool-grid"><article className="tool"><h3>Credit Utilization Estimate</h3><div className="form-row"><label>Reported balance ($)<input type="number" min="0" value={balance} onChange={e=>setBalance(Number(e.target.value))}/></label><label>Total credit limit ($)<input type="number" min="1" value={limit} onChange={e=>setLimit(Number(e.target.value))}/></label></div><div className="result"><span>Estimated utilization</span><strong>{utilization.toFixed(1)}%</strong></div><p>Utilization is one factor and does not predict a particular score.</p></article><article className="tool"><h3>Debt Payoff Estimate</h3><div className="form-row three"><label>Balance ($)<input type="number" min="0" value={debt} onChange={e=>setDebt(Number(e.target.value))}/></label><label>Monthly payment ($)<input type="number" min="1" value={payment} onChange={e=>setPayment(Number(e.target.value))}/></label><label>APR (%)<input type="number" min="0" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))}/></label></div><div className="result"><span>Estimated payoff time</span><strong>{payoff?`${payoff} months`:"Payment too low"}</strong></div><p>Estimate assumes a fixed rate, no new charges, and consistent monthly payments.</p></article></div>
}
