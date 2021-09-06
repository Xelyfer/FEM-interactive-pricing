import React from "react";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>Simple, traffic-based pricing</h3>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>

      <div className="container">
        <div className="top-container">
          <div className="billing-plan">
            <p>100k Pageviews</p>
            <input type="range" min="0" max="100" name="" id="" />
            <div className="billing-cost">
              <h1>$16.00</h1>
              <span>/ month</span>
            </div>
            <div className="billing-type">
              <div>
                <p>Monthly Billing</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <p>Yearly Billing </p>
              </div>
              <p>-25%</p>
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <ul className="plan-agreement">
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>

          <button className="btn-start">Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default App;
