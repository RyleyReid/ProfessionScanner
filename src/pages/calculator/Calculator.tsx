import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routing/routing';

export const Calculator = () => {
  return (
    <div>
      <h1>Calculator</h1>
      <Link to={RoutePaths.Dashboard}>Back to Dashboard</Link>
    </div>
  );
}; 