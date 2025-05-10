'use client';

const Footer = () => {
  return (
    <footer className="bg-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-text">
            © {new Date().getFullYear()} Aprameyak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 