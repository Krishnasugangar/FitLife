import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';

import Layout from './components/Layout';
import Home from './pages/Home';
import ClassesOverview from './components/ClassesOverview';
import InstructorsPage from './components/InstructorsPage';
import LocationsPage from './pages/LocationsPage';
import ShopPage from './pages/ShopPage';
import JoinGymPage from './pages/JoinGymPage';
import PaymentPage from './pages/PaymentPage';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminPanel from './components/AdminPanel';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = React.useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => (
  <AuthProvider>
    <Router basename="/FitLife"> {/* Replace with your actual repo or subpath */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<ClassesOverview />} />
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/join" element={<JoinGymPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          {/* Wildcard redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  </AuthProvider>
);

export default App;
