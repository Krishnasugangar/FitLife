import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const planTitle = location.state?.planTitle;

  if (!planTitle) {
    return <p>No subscription plan selected.</p>;
  }

  const handlePaymentConfirm = () => {
    // For demo, just redirect to dashboard after "payment"
    alert(`Payment successful for plan: ${planTitle}`);
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
      <h2>Payment</h2>
      <p>You are subscribing to the <strong>{planTitle}</strong> plan.</p>
      <p>Please enter payment details below.</p>

      {/* Simulated payment form */}
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

export default Payment;
