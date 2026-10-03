import React, { useState } from 'react';

/**
 * EducationalFigure component for physics chapter notes.
 *
 * Integrates cleanly with both Light Mode & Dark Mode:
 * - Subtle border, rounded corners, subtle crimson accent on top
 * - Responsive centering and scaling (no horizontal overflow)
 * - Clear, high-contrast educational caption
 * - Clean source / attribution line
 * - Supports web-sourced images with lazy loading and error fallback
 * - Supports direct SVG/children diagrams with clean background
 */
export const EducationalFigure = ({
  src,
  alt = 'Educational Visual Diagram',
  caption,
  source = 'Wikimedia Commons',
  sourceUrl,
  license = 'Open Educational License',
  children,
  fallback,
  maxWidth = 'max-w-xl',
  className = '',
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <figure
      className={`my-8 mx-auto w-full ${maxWidth} rounded-xl border border-border bg-surface shadow-card-light dark:shadow-card-dark overflow-hidden border-t-2 border-t-accent transition-colors ${className}`}
    >
      {/* Diagram container */}
      <div className="w-full flex items-center justify-center p-3 sm:p-5 bg-secondary/50 dark:bg-black/40 overflow-hidden min-h-[140px]">
        {children ? (
          <div className="w-full flex items-center justify-center">{children}</div>
        ) : src && !imageFailed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="w-full max-h-[380px] object-contain rounded-md transition-opacity duration-300"
          />
        ) : fallback ? (
          <div className="w-full flex items-center justify-center">{fallback}</div>
        ) : (
          <div className="py-8 text-center text-xs text-text-muted font-mono">
            [Educational Visual Diagram]
          </div>
        )}
      </div>

      {/* Caption & Source Footer */}
      {(caption || source) && (
        <figcaption className="p-3 sm:px-4 sm:py-2.5 border-t border-border bg-surface select-text">
          {caption && (
            <p className="text-xs sm:text-sm font-medium text-text-primary text-center leading-snug">
              {caption}
            </p>
          )}
          {source && (
            <div className="mt-1 text-[11px] text-text-muted text-center flex flex-wrap items-center justify-center gap-1.5">
              <span>Source:</span>
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline inline-flex items-center gap-0.5 font-medium"
                >
                  {source}
                </a>
              ) : (
                <span className="text-text-secondary font-medium">{source}</span>
              )}
              {license && (
                <>
                  <span className="text-border">•</span>
                  <span className="text-text-muted">{license}</span>
                </>
              )}
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default EducationalFigure;
