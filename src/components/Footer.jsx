import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Pro Logistics Prep</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for FBA prep and e-commerce fulfillment services. 
              Fast turnaround, transparent pricing, and Amazon compliance guaranteed.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Services</span>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">FBA Prep & Labeling</p>
              <p className="text-gray-300 text-sm">Order Fulfillment</p>
              <p className="text-gray-300 text-sm">Inventory Storage</p>
              <p className="text-gray-300 text-sm">Kitting & Bundling</p>
              <p className="text-gray-300 text-sm">Returns Processing</p>
              <p className="text-gray-300 text-sm">Multi-Channel Integration</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">(281) 827-8643</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">info@prologisticsprep.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">730 Industrial Blvd Sugar Land, TX 77478</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pro Logistics Prep. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;