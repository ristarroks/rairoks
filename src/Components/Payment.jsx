import React from "react";
import Card from "react-bootstrap/esm/Card";
import phonepe from "../assets/phonepe-icon.png";
import whatsapp from "../assets/wa-whatsapp-icon.png";
import gpay from "../assets/google-pay-icon.png";
import paytm from "../assets/paytm-icon.png";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { money } = location.state || {};
  // const reduceByTwentyPercent = (amount) => {
  //   return amount * 0.9;
  // };

  const reduceByTwentyPercent = (amount) => {
    return amount;
  };

  const url = `upi://pay?pa=bajajpay.6879729.06057497@indus&tn=Meesho%20Order&am=${reduceByTwentyPercent(
    money
  )}&pn=Meesho&mode=02&mc=8999&purpose=00&cu=INR&sign=AAuN7izDWN5cb8A5scnUiNME+LkZqI2DWgkXlN1McoP6WZABa/KkFTiLvuPRP6/nWK8BPg/rPhb+u4QMrUEX10UsANTDbJaALcSM9b8Wk218X+55T/zOzb7xoiB+BcX8yYuYayELImXJHIgL/c7nkAnHrwmbM97nRbCVVRvU0ku3Tr`;

  return (
    <>
      <div style={{ margin: "30px 15px" }}>
        <Card className="payment-card">
          <Card.Body className="payment-card-body">
            <Card.Title className="payment-card-title">
              <b>Pay ₹{money} using UPI</b>
            </Card.Title>
            <a href={url} target="_blank">
              <div className="payment-method-card">
                <div className="payment-method-icon-card">
                  <img className="payment-method-icon" src={phonepe} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div className="payment-method-name">Phone Pay</div>
                </div>
              </div>
            </a>
            <a href={url} target="_blank">
              <div className="payment-method-card">
                <div className="payment-method-icon-card">
                  <img className="payment-method-icon" src={gpay} alt="" />
                </div>
                <div className="payment-method-name">Google Pay</div>
              </div>
            </a>
            <a href={url} target="_blank">
              <div className="payment-method-card">
                <div className="payment-method-icon-card">
                  <img className="payment-method-icon" src={paytm} alt="" />
                </div>
                <div className="payment-method-name">Paytm</div>
              </div>
            </a>
            <a href={url} target="_blank">
              <div className="payment-method-card">
                <div className="payment-method-icon-card">
                  <img className="payment-method-icon" src={whatsapp} alt="" />
                </div>
                <div className="payment-method-name">Whatsapp Pay</div>
              </div>
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Payment;
