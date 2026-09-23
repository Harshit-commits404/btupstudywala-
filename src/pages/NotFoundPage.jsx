import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Compass, Home, Layers, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto px-4 py-16 sm:py-24 text-center">
      <div className="w-20 h-20 rounded-3xl bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-6">
        <Compass className="w-10 h-10 animate-spin-slow" />
      </div>

      <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-200 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 mb-4 inline-block">
        Error 404 • Page Not Found
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white mb-3">
        Lost in the Syllabus?
      </h1>

      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
        The page you are looking for doesn't exist or has moved. Explore the available semesters or return to the home dashboard.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          onClick={() => navigate(-1)}
          variant="secondary"
          size="md"
          icon={ArrowLeft}
          iconPosition="left"
        >
          Go Back
        </Button>

        <Link to="/">
          <Button
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
          >
            Home Dashboard
          </Button>
        </Link>

        <Link to="/semesters">
          <Button
            variant="outline"
            size="md"
            icon={Layers}
            iconPosition="left"
          >
            View Semesters
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
