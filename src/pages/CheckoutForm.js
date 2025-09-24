import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ plan }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    // Show loading spinner or similar

    // For test: Use Stripe's default test card 4242 4242 4242 4242
    // This is only a demo, in production create a paymentIntent/Subscription from your backend.
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: 'Test User',
        email: 'test@example.com'
      }
    });
    if (error) {
      alert(error.message);
    } else {
      alert(`Card entered! Simulate backend charge for: ${plan.title} - ${plan.price}`);
      // In real project, now POST paymentMethod.id and plan to your server or Stripe API
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}>
        <CardElement options={{ hidePostalCode: true }} />
      </div>
      <button type="submit" style={{ padding: '11px 56px', marginTop: '12px', borderRadius: '40px', background: '#2a2a2a', color: '#fff', fontWeight: 'bold' }}>
        Pay {plan.price}
      </button>
    </form>
  );
};

export default CheckoutForm;
