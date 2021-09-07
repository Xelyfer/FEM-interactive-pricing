import React from "react";

import BillingPlan from "./BillingPlan";
import PlanAgreement from "./PlanAgreement";

function Container() {
  return (
    <div className="container">
      <div className="top-container">
        <BillingPlan />
      </div>

      <div className="bottom-container">
        <PlanAgreement />
        <button className="btn-start">Start my trial</button>
      </div>
    </div>
  );
}

export default Container;
