
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Package, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-[var(--primary-teal)]" />
            <span className={cn(
                "text-xl font-bold transition-colors",
                isScrolled ? "text-gray-800" : "text-white"
              )}>
              Pro Logistics Prep
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[var(--primary-teal)]',
                  location.pathname === item.path ? 'text-[var(--primary-teal)]' : (isScrolled ? 'text-gray-700' : 'text-white')
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="btn-primary text-white px-6 py-2 rounded-full">
              <Phone className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-md',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block py-2 px-4 text-sm font-medium rounded-md transition-colors hover:bg-gray-100',
                  location.pathname === item.path ? 'text-[var(--primary-teal)] bg-teal-50' : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="btn-primary text-white px-6 py-2 rounded-full w-full mt-4">
              <Phone className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
