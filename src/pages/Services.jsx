import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, Warehouse, RotateCcw, Tags, ShoppingCart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/contact');
  };

  const mainServices = [
    {
      id: 'fba-prep-services',
      icon: Package,
      title: 'FBA Prep Services',
      description: 'Complete Amazon FBA preparation to ensure your products meet all requirements',
      features: [
        'Product labeling and barcoding',
        'Poly-bagging and bubble wrapping',
        'Bundling and kitting',
        'Quality inspection',
        'Compliance verification',
        'Expiration date management'
      ],
      image: 'FBA prep station with workers labeling and packaging products for Amazon fulfillment',
      imageSrc: '/prep services.jpeg'
    },
    {
      id: 'order-fulfillment',
      icon: Truck,
      title: 'Order Fulfillment',
      description: 'Fast and accurate order processing for all your sales channels',
      features: [
        'Same-day order processing',
        'Pick, pack, and ship services',
        'Custom packaging options',
        'Branded inserts and materials',
        'Real-time tracking updates',
        'International shipping'
      ],
      image: 'Order fulfillment center with workers picking and packing orders for shipment',
      imageSrc: '/fullfilment.jpeg'
    },
    {
      id: 'inventory-storage',
      icon: Warehouse,
      title: 'Inventory Storage',
      description: 'Secure, climate-controlled storage with advanced inventory management',
      features: [
        'Climate-controlled environment',
        '24/7 security monitoring',
        'Real-time inventory tracking',
        'Cycle counting and audits',
        'FIFO inventory rotation',
        'Damage protection insurance'
      ],
      image: 'Modern warehouse with organized inventory storage and climate control systems',
      imageSrc: '/inventory.jpeg'
    },
    {
      id: 'returns-processing',
      icon: RotateCcw,
      title: 'Returns Processing',
      description: 'Comprehensive returns management to recover maximum value',
      features: [
        'Return inspection and grading',
        'Refurbishment services',
        'Repackaging for resale',
        'Disposal of damaged items',
        'Return analytics reporting',
        'Customer communication'
      ],
      image: 'Returns processing area with workers inspecting and repackaging returned items',
      imageSrc: '/return processing.jpeg'
    },
    {
      id: 'kitting-and-bundling',
      icon: Tags,
      title: 'Kitting & Bundling',
      description: 'Custom product bundling and promotional packaging services',
      features: [
        'Multi-product bundling',
        'Promotional packaging',
        'Gift set assembly',
        'Seasonal packaging',
        'Custom insert creation',
        'Bundle optimization'
      ],
      image: 'Kitting station with workers assembling product bundles and promotional packages',
      imageSrc: '/bundling.jpeg'
    },
    {
      id: 'multi-channel-integration',
      icon: ShoppingCart,
      title: 'Multi-Channel Integration',
      description: 'Seamless integration with all major e-commerce platforms',
      features: [
        'Amazon FBA and FBM',
        'Shopify integration',
        'eBay managed delivery',
        'Walmart fulfillment',
        'Etsy order processing',
        'Custom API connections'
      ],
      image: 'Computer screens showing multiple e-commerce platform integrations and order management',
      imageSrc: '/integration.jpeg'
    }
  ];

  const additionalServices = [
    'Photography and listing optimization',
    'Inventory forecasting and planning',
    'Damaged goods liquidation',
    'Custom reporting and analytics',
    'Account management services',
    'Compliance consulting'
  ];

  return (
    <>
      <Helmet>
        <title>FBA Prep & E-commerce Fulfillment Services - Pro Logistics Prep</title>
        <meta name="description" content="Comprehensive FBA prep, order fulfillment, inventory storage, returns processing, and multi-channel integration services. Amazon compliance guaranteed with fast turnaround times." />
        <meta name="keywords" content="FBA prep services, order fulfillment, inventory storage, returns processing, kitting bundling, multi-channel fulfillment, Amazon compliance" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete E-commerce Logistics Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              From FBA prep to multi-channel fulfillment, we provide end-to-end logistics 
              solutions to help your business scale efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                id={service.id}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-[var(--primary-light-blue)] mr-4" />
                    <h2 className="text-3xl font-bold gradient-text">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-300 mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[var(--primary-light-blue)] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleCTAClick}
                    className="btn-primary text-white px-6 py-3 rounded-full"
                  >
                    Learn More
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    className="rounded-xl shadow-custom w-full h-80 object-cover"
                    alt={`${service.title} - ${service.description}`}
                   src={service.imageSrc || "https://images.unsplash.com/photo-1595872018818-97555653a011"} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive support services to optimize your e-commerce operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[var(--primary-light-blue)] flex-shrink-0" />
                  <span className="font-medium text-white">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Getting started with Pro Logistics Prep is easy and straightforward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your needs and create a custom logistics plan'
              },
              {
                step: '02',
                title: 'Setup',
                description: 'Quick onboarding and integration with your sales channels'
              },
              {
                step: '03',
                title: 'Ship Inventory',
                description: 'Send your products to our secure warehouse facility'
              },
              {
                step: '04',
                title: 'We Handle Everything',
                description: 'Sit back while we prep, store, and fulfill your orders'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 gradient-bg text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Streamline Your Logistics?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Let us handle your fulfillment so you can focus on growing your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCTAClick}
                className="bg-white text-[var(--primary-dark-blue)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;