import React, { useState } from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom";

function LoginScreen() {
    
  const [isActivediv3 ,setActivediv3] = useState(false);
  const [isActivediv2 ,setActivediv2] = useState(false);
  const [isActivediv1 ,setActivediv1] = useState(true);
  // const [signIn, setSignIn] = useState(false);

  const togglediv3 = () => {
    setActivediv3(true);
    setActivediv1(false);
    setActivediv2(false);
  };
  const togglediv1 = () => {
    setActivediv1(true);
    setActivediv2(false);
    setActivediv3(false);
  };
  const togglediv2 = () => {
    setActivediv2(true);
    setActivediv1(false);
    setActivediv3(false);
  };
    
  return (
    <div className="body">
      <div className="loginScreen">
        <div className="loginScreen_background">
          <img
            className="loginScreen_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
            {/* <button onClick={() => setSignIn(true)} */}
            <Link to="/login">
            <button className="loginScreen_btn">Sign In
             </button>
            </Link> 
          
    
          <div className="loginScreen_gradient" />
        </div>

        <div className="loginScreen_body">
            <React.Fragment>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email address" />

                  {/* <button onClick={() => setSignIn(true)} */}
                  <Link to="/login">
                  <button className="loginScreen_getStarted">Get Started 
                  <i className="fas fa-chevron-right"></i>
                  </button>
                  </Link>
                                
              </form>
            </div>
          </React.Fragment>

        </div>
      </div>

        <div>
          <section className="tabs">
            <div className="container">
              <div id="tab-1" className={`tab-item ${isActivediv1 ? 'tab-border' : null}`}
              onClick={togglediv1} >
                <i className="fas fa-door-open fa-3x" />
                <p className="hide-sm">Cancel at any time</p>
              </div>
              <div id="tab-2" className={`tab-item ${isActivediv2 ? 'tab-border' : null}`}
              onClick={togglediv2}>
                <i className="fas fa-tablet-alt fa-3x" />
                <p className="hide-sm">Watch anywhere</p>
              </div>
              <div id="tab-3" className={`tab-item ${isActivediv3 ? 'tab-border' : null}`}
              onClick={togglediv3}>
                <i className="fas fa-tags fa-3x" />
                <p className="hide-sm">Pick your price</p>
              </div>
            </div>
          </section>
          <section className="tab-content">
            <div className="container">
              {/* Tab Content 1 */}
              <div id="tab-1-content" className={`tab-content-item ${isActivediv1 ? 'show' : null}`}
               >
                <div className="tab-1-content-inner">
                  <div>
                    <p className="text-lg">
                      If you decide Netflix isn't for you - no problem. No
                      commitment. Cancel online anytime.
                    </p>
                    <a href="#" className="btn btn-lg">
                      Watch Free For 30 Days
                    </a>
                  </div>
                  <div>
                    <img
                      src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Tab Content 2 */}
              <div id="tab-2-content" className={`tab-content-item ${isActivediv2 ? 'show' : null}`}
              >
                <div className="tab-2-content-top">
                  <p className="text-lg">
                    Watch TV shows and movies anytime, anywhere — personalized
                    for you.
                  </p>
                  <a href="#" className="btn btn-lg">
                    Watch Free For 30 Days
                  </a>
                </div>
                <div className="tab-2-content-bottom">
                  <div>
                    <img
                      src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                      alt=""
                    />
                    <p className="text-md">Watch on your TV</p>
                    <p className="text-dark">
                      Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                      Blu-ray players and more.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                      alt=""
                    />
                    <p className="text-md">
                      Watch instantly or download for later
                    </p>
                    <p className="text-dark">
                      Available on phone and tablet, wherever you go.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                      alt=""
                    />
                    <p className="text-md">Use any computer</p>
                    <p className="text-dark">Watch right on Netflix.com.</p>
                  </div>
                </div>
              </div>
              {/* Tab 3 Content*/}
              <div id="tab-3-content" className={`tab-content-item ${isActivediv3 ? 'show' : null}`}
              >
                <div className="text-center">
                  <p className="text-lg">
                    Choose one plan and watch everything on Netflix.
                  </p>
                  <a href="#" className="btn btn-lg">
                    Watch Free For 30 Days
                  </a>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th />
                      <th>Basic</th>
                      <th>Standard</th>
                      <th>Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monthly price after free month ends on 6/19/19</td>
                      <td>$8.99</td>
                      <td>$12.99</td>
                      <td>$15.99</td>
                    </tr>
                    <tr>
                      <td>HD Available</td>
                      <td>
                        <i className="fas fa-times" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Ultra HD Available</td>
                      <td>
                        <i className="fas fa-times" />
                      </td>
                      <td>
                        <i className="fas fa-times" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Screens you can watch on at the same time</td>
                      <td>1</td>
                      <td>2</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Watch on your laptop, TV, phone and tablet</td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Unlimited movies and TV shows</td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>Cancel anytime</td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                    </tr>
                    <tr>
                      <td>First month free</td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                      <td>
                        <i className="fas fa-check" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <footer className="footer">
            <p>Questions? Call 1-866-579-7172</p>
            <div className="footer-cols">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Ways To Watch</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Netflix Originals</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Redeem Gift Cards</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Speed Test</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Buy Gift Cards</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
    </div>
  );
}

export default LoginScreen;
