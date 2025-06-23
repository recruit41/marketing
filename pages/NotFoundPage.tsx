
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-brandOrange-DEFAULT">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-brandGray-dark">Page Not Found</h2>
      <p className="mt-2 text-lg text-brandGray-DEFAULT">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button variant="primary" size="lg">
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
    