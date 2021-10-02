import React from "react";
import { Link } from "react-router-dom";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  return (
    <div className="profileScreen nav__black">
      <div className={`nav`}>
        <div className="nav_contents">
          <div className="left">
          <Link to="/browse">
            <img
              className="nav_logo"
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />
           </Link> 
          </div>
        </div>
        <div className="right">
            <img
              className="nav_avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
        </div>
      </div>
      <div className="profileScreen_body">
          <h1>Edit Profile</h1>
          <div className="profileScreen__info">
              <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
              <div className="profileScreen_details">
                  <h2>abc@gmail.com</h2>
                  <div className="profileScreen_plans">
                    <h3>Plans (Current Plan: premium)</h3>
                    <p>Renewal date: 09/10/2021</p>
                    <PlansScreen />
                    <button className="profileScreen_signOut">Sign Out</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
