import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center text-text-primary space-y-4">
      <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-accent-soft text-accent border border-red-500/20 inline-block">
        404
      </span>

      <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary">
        Page Not Found
      </h1>

      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="pt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="btn-secondary-dark text-xs !py-2 !px-4 inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Go Back</span>
        </button>

        <Link
          to="/"
          className="btn-primary-red text-xs !py-2 !px-4 inline-flex items-center gap-1.5"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
