'use client';
import React from 'react';

type TooltipProps = {
  text: string;
  visible: boolean;
};

const Tooltip: React.FC<TooltipProps> = ({ text, visible }) => {
  return (
    <div className={`tooltip ${visible ? 'tooltip--visible' : ''}`} role="status" aria-live="polite">
      {text}
      <span className="tooltip__arrow" />
    </div>
  );
};

export default Tooltip;


