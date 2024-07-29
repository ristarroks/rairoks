import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/esm/Card";
import true5g from "../assets/true5g.svg";
import prime from "../assets/amazon-prime-icon.png";
import hotstar from "../assets/Hotstar-icon.png";
import jio from "../assets/jio_logo.png";
import jiocinema from "../assets/jio-cinema-icon.png";
import jiosaavan from "../assets/jio-saavan-icon.png";
import jiotv from "../assets/jio-tv-icon.png";
import netflix from "../assets/netflix-app-icon.png";
import zee5 from "../assets/Zee5-icon.png";
import jiocloud from "../assets/jiocloud-icon.webp";
import sonyliv from "../assets/sonyliv-icon.png";

const Rechargecenter = () => {
  const navigate = useNavigate();

  const handleRecharge = (event) => {
    const money = event.target.id;
    navigate('/payment', { state: { money: money } });
    console.log(money)
  }

  return (
    <>
      <div className="offer-heading">
        <h1>Special Offer Plans</h1>
        <p>Recommended(3)</p>
      </div>

      <div className="recharge-card-outer">
        <Card className="recharge-card">
          <Card.Body className="">
            <div className="special">SPECIAL</div>
            <div className="price-card">
              <div className="price-card-left">
                <div className="special-price">₹149</div>
                <div className="price">₹2999</div>
              </div>
              <div>
                <img src={true5g} alt="" />
              </div>
            </div>
            <div className="view-details">
              <b>View Detailes</b>
            </div>
            <div className="plan-info-head">
              <div className="plan-info-head-text">VALIDITY</div>
              <div className="plan-info-head-text">DATA</div>
              <div className="plan-info-head-text">VOICE</div>
              <div className="plan-info-head-text">SMS</div>
            </div>
            <div className="plan-info">
              <div className="plan-info-text">84 Days</div>
              <div className="plan-info-text">1.5 GB/Day</div>
              <div className="plan-info-text">Unlimited</div>
              <div className="plan-info-text">100/Day</div>
            </div>
            <div className="subscription-card">SUBSCRIPTION</div>
            <div className="subscription-icon-card">
              <img className="subscription-icon" src={jiotv} alt="" />
              <img className="subscription-icon" src={jiocinema} alt="" />
              <img className="subscription-icon" src={jiosaavan} alt="" />
              <img className="subscription-icon" src={jiocloud} alt="" />
            </div>
            <div className="recharge-btn-div">
              <button type="submit" className="recharge-btn" id="149" onClick={handleRecharge}>
                Recharge
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="recharge-card-outer">
        <Card className="recharge-card">
          <Card.Body className="">
            <div className="special">SPECIAL</div>
            <div className="price-card">
              <div className="price-card-left">
                <div className="special-price">₹199</div>
                <div className="price">₹1099</div>
              </div>
              <div>
                <img src={true5g} alt="" />
              </div>
            </div>
            <div className="view-details">
              <b>View Detailes</b>
            </div>
            <div className="plan-info-head">
              <div className="plan-info-head-text">VALIDITY</div>
              <div className="plan-info-head-text">DATA</div>
              <div className="plan-info-head-text">VOICE</div>
              <div className="plan-info-head-text">SMS</div>
            </div>
            <div className="plan-info">
              <div className="plan-info-text">84 Days</div>
              <div className="plan-info-text">2.0 GB/Day</div>
              <div className="plan-info-text">Unlimited</div>
              <div className="plan-info-text">100/Day</div>
            </div>
            <div className="subscription-card">SUBSCRIPTION</div>
            <div className="subscription-icon-card">
              <img className="subscription-icon" src={jiotv} alt="" />
              <img className="subscription-icon" src={jiocinema} alt="" />
              <img className="subscription-icon" src={jiosaavan} alt="" />
              <img className="subscription-icon" src={jiocloud} alt="" />
              <img className="subscription-icon" src={netflix} alt="" />
              <img className="subscription-icon" src={prime} alt="" />
            </div>
            <div className="recharge-btn-div">
              <button type="submit" className="recharge-btn" id="199" onClick={handleRecharge}>
                Recharge
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="recharge-card-outer">
        <Card className="recharge-card">
          <Card.Body className="">
            <div className="special">SPECIAL</div>
            <div className="price-card">
              <div className="price-card-left">
                <div className="special-price">₹249</div>
                <div className="price">₹1499</div>
              </div>
              <div>
                <img src={true5g} alt="" />
              </div>
            </div>
            <div className="view-details">
              <b>View Detailes</b>
            </div>
            <div className="plan-info-head">
              <div className="plan-info-head-text">VALIDITY</div>
              <div className="plan-info-head-text">DATA</div>
              <div className="plan-info-head-text">VOICE</div>
              <div className="plan-info-head-text">SMS</div>
            </div>
            <div className="plan-info">
              <div className="plan-info-text">170 Days</div>
              <div className="plan-info-text">3 GB/Day</div>
              <div className="plan-info-text">Unlimited</div>
              <div className="plan-info-text">100/Day</div>
            </div>
            <div className="subscription-card">SUBSCRIPTION</div>
            <div className="subscription-icon-card">
              <img className="subscription-icon" src={jiotv} alt="" />
              <img className="subscription-icon" src={jiocinema} alt="" />
              <img className="subscription-icon" src={jiosaavan} alt="" />
              <img className="subscription-icon" src={jiocloud} alt="" />
              <img className="subscription-icon" src={netflix} alt="" />
              <img className="subscription-icon" src={prime} alt="" />
              <img className="subscription-icon" src={hotstar} alt="" />
              <img className="subscription-icon" src={zee5} alt="" width="60px !important"/>
              <img className="subscription-icon" src={sonyliv} alt="" />
            </div>
            <div className="recharge-btn-div">
              <button type="submit" className="recharge-btn" id="249" onClick={handleRecharge}>
                Recharge
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Rechargecenter;
