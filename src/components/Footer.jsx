import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import TiktokIcon from './TiktokIcon';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo-website-footer.png" alt="Pro Logistics Prep Logo" />
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted partner for FBA prep and e-commerce fulfillment services. 
              Fast turnaround, transparent pricing, and Amazon compliance guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-accent-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent-orange transition-colors">
                <TiktokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-900">Quick Links</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-600 hover:text-accent-orange transition-colors">About Us</Link>
              <Link to="/services" className="block text-gray-600 hover:text-accent-orange transition-colors">Services</Link>
              <Link to="/pricing" className="block text-gray-600 hover:text-accent-orange transition-colors">Pricing</Link>
              <Link to="/blog" className="block text-gray-600 hover:text-accent-orange transition-colors">Blog</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-accent-orange transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-900">Services</span>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">FBA Prep & Labeling</p>
              <p className="text-gray-600 text-sm">Order Fulfillment</p>
              <p className="text-gray-600 text-sm">Inventory Storage</p>
              <p className="text-gray-600 text-sm">Kitting & Bundling</p>
              <p className="text-gray-600 text-sm">Returns Processing</p>
              <p className="text-gray-600 text-sm">Multi-Channel Integration</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-gray-900">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-orange" />
                <span className="text-gray-600 text-sm">(281) 827-8643</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-orange" />
                <span className="text-gray-600 text-sm">info@prologisticsprep.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-orange" />
                <span className="text-gray-600 text-sm">Sugar Land, TX 77478</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © 2024 Pro Logistics Prep. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-accent-orange transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
