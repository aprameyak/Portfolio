'use client';
import React, { useState } from 'react';
import Tooltip from './Tooltip';

type InteractiveObjectProps = {
  label: string;
  ariaLabel?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const InteractiveObject: React.FC<InteractiveObjectProps> = ({
  label,
  ariaLabel,
  onClick,
  children,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className="object-button"
      aria-label={ariaLabel ?? label}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="object-button__icon">{children}</span>
      <Tooltip text={label} visible={hovered} />
    </button>
  );
};

export default InteractiveObject;


