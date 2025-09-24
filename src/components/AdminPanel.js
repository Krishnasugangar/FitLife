import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminPanel = () => {
  const { users, currentUser } = useContext(AuthContext);

  if (!currentUser || currentUser.email !== 'admin@fitlife.com') {
    return <p>Access denied. Admins only.</p>;
  }

  return (
    <div>
      <h2>Admin Panel - All Users and Subscriptions</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Email</th>
            <th>Subscriptions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.subscriptions.join(', ') || 'None'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
