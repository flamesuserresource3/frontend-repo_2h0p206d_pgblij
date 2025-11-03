import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/70">© {new Date().getFullYear()} Velodent. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:Velodent.ia@gmail.com" className="text-sm underline">Velodent.ia@gmail.com</a>
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
