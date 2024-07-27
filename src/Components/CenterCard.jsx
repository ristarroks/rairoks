import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiSolidMobile } from "react-icons/bi";
import descount_logo from "../assets/discount-icon.png";
import { MdWidthFull } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const CenterCard = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const numberElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = numberElement.current.value;
    console.log(number);
    if(/^\d{10}$/.test(number)){
      navigate('/recharge', { state: { number : number } })  //give link as url
      setError('')
    }else{
      setError('Please enter valid number !!')
    }
  };

  return (
    <>
      <div className="outer-card">
        <Card className="custom-card">
          <Card.Body className="custom-card-body">
            <Card.Title className="card-title">
              <BiSolidMobile className="mobile-icon" />
              Mobile Recharge
            </Card.Title>
            {/* <Card.Text> */}
            <form
              className="takeNumber"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="input-div">
                <div>
                  <label htmlFor="number-input" className="number-label">
                    Jio Mobile Number
                  </label>
                </div>
                <div>
                  <input
                    ref={numberElement}
                    id="number-input"
                    type="number"
                    pattern="[0-9]*"
                    placeholder="Enter your number"
                  />
                </div>
                <div className="error">
                  {error}
                </div>
              </div>
              {/* </Card.Text> */}
              <div className="second-card">
                <div className="recharge-card-icon">
                  <img
                    className="descountimg"
                    src={descount_logo}
                    alt="descount-img"
                  />
                </div>
                <div className="recharge-card-text">
                  Recharge with a ₹149 plan for a month full of digital
                  delights.
                </div>
              </div>
              <div className="recharge-btn-div">
                <button type="submit" className="recharge-btn">
                  Recharge
                </button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CenterCard;
