import React from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import Countdown from "./Countdown";

const RechargeTop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { number } = location.state || {};
  console.log("Top = ", number);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Card className="">
        <Card.Body className="">
          <div className="rechargeTopCard">
            <div>Recharging for {number}</div>
            <div>
              <li className="change-btn" onClick={handleClick}>
                Change
              </li>
            </div>
          </div>
          <div className="rechargeTopCard2">
            <div>Special offer ends in </div>
            <div className="innerRechargeTopCard">
              <div className="clock-icon">
                <FaClock />
              </div>
              <div className="countdown">
                <Countdown />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RechargeTop;
