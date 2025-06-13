'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#9d4edd',
        primaryTextColor: '#fff',
        primaryBorderColor: '#b589df',
        lineColor: '#9d4edd',
        secondaryColor: '#b589df',
        tertiaryColor: '#1a1a1a'
      }
    });

    if (elementRef.current) {
      mermaid.render('mermaid-svg', chart).then(({ svg }) => {
        if (elementRef.current) {
          elementRef.current.innerHTML = svg;
        }
      });
    }
  }, [chart]);

  return <div ref={elementRef} className="mermaid" />;
};

export default Mermaid; 