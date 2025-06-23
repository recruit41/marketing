
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className = 'text-center mb-12',
  titleClassName = 'text-3xl md:text-4xl font-bold text-brandGray-dark',
  subtitleClassName = 'mt-2 text-lg text-brandGray-DEFAULT'
}) => {
  return (
    <div className={className}>
      <h2 className={titleClassName}>
        {title}
      </h2>
      {subtitle && (
        <p className={subtitleClassName}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
    