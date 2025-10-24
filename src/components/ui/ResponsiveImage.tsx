import * as React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`responsive-image ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      style={{
        maxWidth: '100%',
        height: 'auto',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    />
  );
};
