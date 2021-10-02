import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className="plansScreen">
      <div className="plans_container">
        <div className="plan_info">
          <div className="plan">
            <h4>Netflix Standard</h4>
            <h5>1080p</h5>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="plan_info">
          <div className="plan">
            <h4>Netflix Basic</h4>
            <h5>480p</h5>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="plan_info curr">
          <div className="plan">
            <h4>Netflix Premium</h4>
            <h5>4K+HDR</h5>
          </div>
          <button>Current Plan</button>
        </div>
      </div>
    </div>
  );
}

export default PlansScreen;
