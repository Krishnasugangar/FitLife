import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const plansInfo = {
  BASIC: {
    price: '₹40.00 every month',
    features: [
      'Full access to modern training facilities',
      'Use of cardio + weight equipment',
      'Locker room access',
      'Monthly guest pass',
    ],
  },
  PREMIUM: {
    price: '₹70.00 every month',
    features: [
      'All Basic perks, plus:',
      'Access to premium fitness classes (HIIT, strength, etc.)',
      'Use of rock wall and boxing ring',
      '1 free juice bar credit per month',
    ],
  },
  ELITE: {
    price: '₹100.00 every month',
    features: [
      'All Premium perks, plus:',
      'Monthly personal training session',
      'Personalized nutrition support',
      'Unlimited access to premium classes, rock wall, and boxing ring',
    ],
  },
};

const UserDashboard = () => {
  const { currentUser, logout } = useContext(AuthContext);

  if (!currentUser) {
    return <p>Please login to view the dashboard.</p>;
  }

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#f4f6f8' }}>
      <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Welcome to FitLife, {currentUser.email.split('@')[0]}!</h1>
        <button
          onClick={logout}
          style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>
      <p style={{ fontSize: '18px', marginBottom: 24 }}>
        Thank you for being a valued member of FitLife. Here are your current subscription plans:
      </p>

      {currentUser.subscriptions.length === 0 ? (
        <p>You do not have any active subscriptions. Please visit the Join page to select a plan.</p>
      ) : (
        <div style={{ display: 'flex', gap: '24px' }}>
          {currentUser.subscriptions.map((plan) => (
            <div
              key={plan}
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgb(0 0 0 / 0.1)',
                flex: '1',
                minWidth: '200px',
              }}
            >
              <h2>{plan} Plan</h2>
              <p style={{ fontWeight: 'bold' }}>{plansInfo[plan].price}</p>
              <ul>
                {plansInfo[plan].features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
