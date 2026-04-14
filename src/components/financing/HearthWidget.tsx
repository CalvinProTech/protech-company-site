'use client';

import { useEffect, useRef } from 'react';

const HEARTH_HTML = `<!DOCTYPE html>
<html><head>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased}
a{text-decoration:none;color:white}
h2,h3,h4{margin:0}
h2{font-size:24px;line-height:24px;color:#1B4774;font-weight:bold}
h3{font-size:28px;line-height:40px}
h4{font-size:12px;line-height:20px;font-weight:600}
p{font-size:12px;line-height:16px}
select::-ms-expand{display:none}
select{-webkit-appearance:none;-moz-appearance:none}
.hrth-container{background-color:#F5F6FA;width:318px;height:769px;border:1px solid #E5E5E5;overflow:hidden;position:relative}
.hrth-header{padding:24px 24px 22px;text-align:center}
.hrth-hr{width:136px;height:0;border:1px solid #1B4774;margin:0 auto}
.hrth-body{padding:24px;position:relative}
label{font-size:12px;line-height:16px;margin-bottom:4px;display:block}
input,select{display:block;background:white;border:1px solid #C4C4C4;border-radius:4px;margin-bottom:16px;font-weight:600;font-size:12px;line-height:24px;padding:5px 12px;width:100%;font-family:Poppins;box-sizing:border-box}
.error{color:#FF5345;position:absolute;margin-top:-15px}
.hrth-result{text-align:center;display:block;margin:36px 0;font-size:12px;line-height:16px;color:#43B774}
.per-month{font-size:12px;line-height:16px;font-weight:normal;margin:0 6px}
small{font-size:8px;line-height:14px;color:#B6BCC2}
table{width:100%;border-spacing:0;margin:20px 0;background:rgba(90,112,138,0.12);border-radius:4px;font-size:12px;line-height:16px;padding:12px}
table tr td{padding-bottom:8px}
table tr:last-child td{border-top:1px solid #000;padding-top:12px;padding-bottom:0}
.cta-container{text-align:center;margin-top:16px}
.cta{background:#0154A4;border-radius:4px;font-weight:500;font-size:16px;line-height:24px;text-align:center;padding:10px 0;display:inline-block;width:100%}
.hrth-footer{background:white;padding:16px 22px;position:absolute;bottom:0;left:0;right:0}
.hrth-footer img{height:20px;margin-top:12px}
</style>
</head><body>
<div class="hrth-container">
<div class="hrth-header"><h2>Financing Calculator</h2></div>
<div class="hrth-hr"></div>
<div class="hrth-body">
<div class="hrth-inputs">
<label>Project cost</label>
<input type="text" id="amount" placeholder="$12,000" oninput="recalculate()"/>
<small class="error" id="error" style="display:none">Please choose an amount between $1,000 and $100,000.</small>
<label>Your credit score</label>
<select id="credit" onchange="recalculate()">
<option value="0.10489999999999999">Excellent (741 - 850)</option>
<option value="0.19370000000000001">Good (681 - 740)</option>
<option value="0.2359">Average (661 - 680)</option>
<option value="0.25819999999999999">Poor (500 - 660)</option>
</select>
</div>
<a class="hrth-result" href="https://api.gethearth.com/partners/protech-roofing-llc?utm_campaign=58594&utm_content=calculator&utm_medium=widget-calculator&utm_source=contractor&utm_term=widget" target="_blank">
Estimated<h3 id="monthly">$257.87<span class="per-month">/ mo.</span></h3>
</a>
<table>
<tr><td>Principal</td><td style="text-align:right" id="principal">$12,000.00</td></tr>
<tr><td>Interest</td><td style="text-align:right" id="interest">$3,472.04</td></tr>
<tr><td style="font-weight:600">Total Loan Cost Estimate</td><td style="text-align:right;font-weight:600" id="total">$15,472.04</td></tr>
</table>
<h4>Get your personalized rates.</h4>
<p>This takes two minutes and does not affect your credit score.</p>
<div class="cta-container">
<a class="cta" href="https://api.gethearth.com/partners/protech-roofing-llc?utm_campaign=58594&utm_content=calculator&utm_medium=widget-calculator&utm_source=contractor&utm_term=widget" target="_blank">
Get Financing Options
<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 0.667L5.06 1.607L8.78 5.333H0.667V6.667H8.78L5.06 10.393L6 11.333L11.334 6L6 0.667Z" fill="white"/></svg>
</a>
</div>
</div>
<div style="background:white;padding:12px 22px;position:absolute;bottom:0;left:0;right:0">
<small style="font-size:8px;line-height:14px;color:#B6BCC2">The estimated monthly payment is for information purposes only. Based on a 5 year loan term with 60 monthly payments at <span id="terms-apr">10.49</span>% APR. Powered by Hearth.</small>
</div>
</div>
<script>
function recalculate(){
var f=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'});
var e=document.getElementById("credit");
var apr=parseFloat(e.options[e.selectedIndex].value);
var raw=document.getElementById("amount").value.replace(/[^0-9.]/g,'')||12000;
var principal=parseFloat(raw);
var term=60;var mApr=apr/12;var mPow=Math.pow(1+mApr,term);
var monthly=mPow===1?(principal/term):(principal*mApr*mPow)/(mPow-1);
var total=term*monthly;var interest=total-principal;
document.getElementById("monthly").innerHTML=f.format(monthly)+"<span class='per-month'>/ mo.</span>";
document.getElementById("terms-apr").innerHTML=(apr*100).toFixed(2);
document.getElementById("principal").innerHTML=f.format(principal);
document.getElementById("interest").innerHTML=f.format(interest);
document.getElementById("total").innerHTML=f.format(total);
}
</script>
</body></html>`;

export default function HearthWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;
    const doc = iframeRef.current.contentDocument;
    if (doc) {
      doc.open();
      doc.write(HEARTH_HTML);
      doc.close();
    }
  }, []);

  return (
    <div className="mx-auto flex max-w-md justify-center">
      <iframe
        ref={iframeRef}
        title="Hearth Financing Calculator"
        width="320"
        height="771"
        scrolling="no"
        style={{ border: 'none', borderRadius: 12 }}
      />
    </div>
  );
}
