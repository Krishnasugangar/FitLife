import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const registerUser = (email, password) =>
  axios.post(`${BASE_URL}/auth/register`, null, { params: { email, password } });

export const loginUser = (email, password) =>
  axios.post(`${BASE_URL}/auth/login`, null, { params: { email, password } });

export const fetchPlans = (token) =>
  axios.get(`${BASE_URL}/subscriptions/plans`, { headers: { Authorization: `Bearer ${token}` } });

export const subscribePlan = (token, userId, planId) =>
  axios.post(`${BASE_URL}/subscriptions/subscribe`, null, {
    headers: { Authorization: `Bearer ${token}` },
    params: { userId, planId },
  });

export const fetchUserSubscriptions = (token, userId) =>
  axios.get(`${BASE_URL}/subscriptions/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const fetchAllSubscriptions = (token) =>
  axios.get(`${BASE_URL}/admin/subscriptions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
