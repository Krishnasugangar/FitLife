import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PaymentPage = () => {
  const {currentUser,  subscribePlan } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const planTitle = location.state?.planTitle;

  if (!planTitle) {
    return <p>No plan selected.</p>;
  }

  const handlePaymentConfirm = () => {
    try {
      subscribePlan(planTitle);
      alert(`Payment successful and subscribed to ${planTitle}`);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
      <h2>Payment</h2>
      <p>You are subscribing to the <strong>{planTitle}</strong> plan.</p>
      <p>Please enter payment details below.</p>
      <input type="text" placeholder="Card Number" />
      <br/><br/>
      <input type="text" placeholder="Expiry Date" />
      <br/><br/>
      <input type="text" placeholder="CVV" />
      <br/><br/>
      <button onClick={handlePaymentConfirm}>Confirm Payment</button>
    </div>
  );
};

export default PaymentPage;
