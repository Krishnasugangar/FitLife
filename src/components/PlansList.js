import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const plansData = [
  {
    name: 'BASIC',
    price: 40,
    features: ['Full access to facilities', 'Cardio + weight equipment', 'Locker room access', 'Monthly guest pass'],
  },
  {
    name: 'PREMIUM',
    price: 70,
    features: [
      'All Basic perks, plus:',
      'Access to premium fitness classes',
      'Use of rock wall and boxing ring',
      '1 free juice bar credit per month',
    ],
  },
  {
    name: 'ELITE',
    price: 100,
    features: [
      'All Premium perks, plus:',
      'Monthly personal training session',
      'Personalized nutrition support',
      'Unlimited access to premium classes and facilities',
    ],
  },
];

const PlansList = () => {
  const { currentUser, subscribePlan } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const handleSubscribe = (planName) => {
    try {
      subscribePlan(planName);
      setMessage(`Subscribed to ${planName} successfully.`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (!currentUser) {
    return <p>Please login to see and subscribe to plans.</p>;
  }

  return (
    <div>
      <h2>Membership Plans</h2>
      {message && <div>{message}</div>}
      <div style={{ display: 'flex', gap: '20px' }}>
        {plansData.map((plan) => (
          <div key={plan.name} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <h3>{plan.name}</h3>
            <p>Price: ₹{plan.price}.00 per month</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {!currentUser.subscriptions.includes(plan.name) ? (
              <button onClick={() => handleSubscribe(plan.name)}>Subscribe</button>
            ) : (
              <button disabled>Subscribed</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansList;
