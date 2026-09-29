"use client";

import { useState } from "react";
import { Check, CheckCircle2, ShieldCheck } from "lucide-react";
import { verificationItems } from "@/data/site";

export function VerifyPanel() {
  const [checked, setChecked] = useState([]);
  const toggle = (name) => setChecked((current) => current.includes(name)
    ? current.filter((item) => item !== name)
    : [...current, name]);

  return (
    <div className="card verify-panel">
      <div className="verify-panel-heading">
        <span className="verify-panel-icon"><ShieldCheck size={22} /></span>
        <div><span className="verify-panel-kicker">BEFORE YOU COMMIT</span><h3>A checklist worth keeping.</h3></div>
        <span className="verify-progress"><Check size={13} /> {checked.length}/{verificationItems.length}</span>
      </div>
      <p className="verify-panel-description">Mark the questions you have checked. Your progress stays here while you explore this page.</p>
      <div className="verify-checklist">{verificationItems.map(([name, text]) => {
        const isChecked = checked.includes(name);
        return (
          <button
            key={name}
            type="button"
            aria-pressed={isChecked}
            onClick={() => toggle(name)}
            className={`verify-check-item${isChecked ? " is-checked" : ""}`}
          >
            <span className="verify-check-box">{isChecked && <Check size={13} />}</span>
            <span><b>{name}</b><span className="verify-check-text">{text}</span></span>
            {isChecked && <CheckCircle2 className="verify-check-success" size={17} />}
          </button>
        );
      })}</div>
      <div className="verify-panel-note"><ShieldCheck size={16} /><span>Always confirm current details with the relevant official source.</span></div>
    </div>
  );
}
