import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routing/routing';

export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={RoutePaths.Calculator}>Go to Calculator</Link>
    </div>
  );
}; 