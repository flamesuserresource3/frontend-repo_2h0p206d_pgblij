import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Contact / Book Now', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-black/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">Velodent</a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 6).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-black/80 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={navItems[6].href}
            className="text-sm text-black/80 hover:text-black transition-colors"
          >
            {navItems[6].label}
          </a>
          <a
            href={navItems[7].href}
            className="ml-2 inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Book Now
          </a>
        </div>
        <div className="md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-black px-3 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
