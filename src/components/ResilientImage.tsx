import React, { useState } from 'react';
import { Scale } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  objectPosition?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  objectPosition = 'object-center',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1F3A] via-[#132D52] to-[#1E293B] text-white/80 p-6 text-center ${className}`}
      >
        <Scale className="w-8 h-8 text-[#C9A962] mb-3" strokeWidth={1.5} />
        {fallbackLabel && (
          <span className="font-serif text-sm tracking-wide text-slate-200 max-w-[18ch]">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={`${objectPosition} ${className}`}
    />
  );
};
