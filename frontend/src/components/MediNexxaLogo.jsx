import React from 'react';

const MediNexxaLogo = ({ size = 'medium', className = '' }) => {
  const sizeStyles = {
    small: {
      width: '120px',
      height: '40px'
    },
    medium: {
      width: '180px',
      height: '60px'
    },
    large: {
      width: '240px',
      height: '80px'
    }
  };

  const currentSize = sizeStyles[size];

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className={className}
    >
      <img 
        src="/logo.png" 
        alt="MediNexxa Logo" 
        style={{
          width: currentSize.width,
          height: currentSize.height,
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default MediNexxaLogo;