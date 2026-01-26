import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, style, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: '#f1f5f9',
            borderRadius: style?.borderRadius || 'inherit',
            ...style
        }} className={className}>
            {!isLoaded && !error && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite linear',
                }}>
                    <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 600 }}>Loading...</div>
                </div>
            )}
            {error ? (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f8fafc',
                    color: '#94a3b8'
                }}>
                    <span>Image unavailable</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setError(true)}
                    style={{
                        ...style,
                        width: '100%',
                        height: '100%',
                        objectFit: style?.objectFit || 'cover',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.4s ease-in-out',
                        position: isLoaded ? 'relative' : 'absolute'
                    }}
                    loading="lazy"
                />
            )}
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </div>
    );
};

export default OptimizedImage;
