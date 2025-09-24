import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const plans = [
  {
    title: 'BASIC',
    price: '₹40.00 every month',
    features: [
      'Full access to modern training facilities',
      'Use of cardio + weight equipment',
      'Locker room access',
      'Monthly guest pass',
    ],
  },
  {
    title: 'PREMIUM',
    price: '₹70.00 every month',
    features: [
      'All Basic perks, plus:',
      'Access to premium fitness classes (HIIT, strength, etc.)',
      'Use of rock wall and boxing ring',
      '1 free juice bar credit per month',
    ],
  },
  {
    title: 'ELITE',
    price: '₹100.00 every month',
    features: [
      'All Premium perks, plus:',
      'Monthly personal training session',
      'Personalized nutrition support',
      'Unlimited access to premium classes, rock wall, and boxing ring',
    ],
  },
];

const JoinGymPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleSubscribe = (planTitle) => {
    if (!currentUser) {
      navigate('/login', { state: { fromSubscribe: true, planTitle } });
    } else {
      navigate('/payment', { state: { planTitle } });
    }
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '50px 20px',
  };

  const heroStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    marginBottom: '50px',
  };

  const heroImgStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    filter: 'brightness(0.6)',
    borderRadius: '10px',
  };

  const heroTitleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '5px',
  };

  const plansGridStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    flex: '1 1 30%',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    padding: '30px 20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const priceStyle = {
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '20px',
  };

  const featuresListStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
    color: '#555',
    flexGrow: 1,
  };

  const subscribeBtnStyle = {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const subscribeBtnHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const dashboardLinkStyle = {
    marginTop: '40px',
    textAlign: 'center',
  };

  const dashboardAnchorStyle = {
    fontSize: '1.1rem',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <section style={heroStyle}>
        <img src="/class-hero.jpg" alt="Join our gym" style={heroImgStyle} />
        <h1 style={heroTitleStyle}>BECOME A MEMBER.</h1>
      </section>

      <section>
        <div style={plansGridStyle}>
          {plans.map((plan) => (
            <div style={cardStyle} key={plan.title}>
              <h2>{plan.title}</h2>
              <div style={priceStyle}>{plan.price}</div>
              <ul style={featuresListStyle}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                style={subscribeBtnStyle}
                onClick={() => handleSubscribe(plan.title)}
                onMouseOver={e => (e.target.style.backgroundColor = subscribeBtnHoverStyle.backgroundColor)}
                onMouseOut={e => (e.target.style.backgroundColor = subscribeBtnStyle.backgroundColor)}
              >
                SUBSCRIBE
              </button>
            </div>
          ))}
        </div>
      </section>

      <div style={dashboardLinkStyle}>
        {currentUser ? (
          <Link to="/dashboard" style={dashboardAnchorStyle}>
            Go to Your Dashboard
          </Link>
        ) : (
          <p style={{ color: '#666' }}>Please login or register to access your dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default JoinGymPage;
