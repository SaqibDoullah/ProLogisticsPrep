
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Package, Truck, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Homepage = () => {
  const { toast } = useToast();

  const handleCTAClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  const services = [
    {
      icon: Package,
      title: 'FBA Prep Services',
      description: 'Complete Amazon FBA preparation including labeling, bundling, and poly-bagging'
    },
    {
      icon: Truck,
      title: 'Order Fulfillment',
      description: 'Fast and accurate order processing for all your e-commerce channels'
    },
    {
      icon: Shield,
      title: 'Secure Storage',
      description: 'Climate-controlled warehouses with 24/7 security and inventory tracking'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Same-day processing for urgent orders and 24-48 hour standard turnaround'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Amazon Seller',
      rating: 5,
      text: 'Pro Logistics Prep transformed our FBA business. Their attention to detail and fast turnaround times have increased our sales by 40%.'
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Brand',
      rating: 5,
      text: 'The best fulfillment partner we\'ve worked with. Transparent pricing, excellent communication, and zero compliance issues.'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Wholesale Distributor',
      rating: 5,
      text: 'Their multi-channel integration saved us countless hours. Now we can focus on growing our business while they handle logistics.'
    }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure & Insured' },
    { icon: Users, text: '1000+ Happy Clients' },
    { icon: CheckCircle, text: '99.9% Accuracy' }
  ];

  return (
    <>
      <Helmet>
        <title>Pro Logistics Prep - Your Trusted FBA Prep & E-commerce Fulfillment Partner</title>
        <meta name="description" content="Professional FBA prep services, order fulfillment, and e-commerce logistics. Fast turnaround, transparent pricing, Amazon compliance. Serving Amazon sellers, e-commerce brands, and wholesalers." />
        <meta name="keywords" content="FBA prep, Amazon fulfillment, e-commerce logistics, order fulfillment, inventory storage, Amazon compliance, multi-channel fulfillment" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="https://horizons-cdn.hostinger.com/videos/warehouse-packing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow leading-tight">
              Your Trusted FBA Prep & Fulfillment Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-shadow">
              Streamline your e-commerce operations with our fast, reliable, and compliant logistics services. Scale your business with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleCTAClick}
                size="lg"
                className="bg-[var(--primary-teal)] hover:bg-[var(--dark-teal)] text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleCTAClick}
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-semibold rounded-full backdrop-blur-sm"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <badge.icon className="h-8 w-8 text-[var(--primary-navy)]" />
                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Complete E-commerce Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From FBA prep to multi-channel fulfillment, we handle every aspect of your logistics 
              so you can focus on growing your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-custom hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <service.icon className="h-12 w-12 text-[var(--primary-navy)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Why Choose Pro Logistics Prep?
              </h2>
              <div className="space-y-4">
                {[
                  'Amazon compliance guaranteed with expert FBA prep',
                  'Real-time inventory tracking and updates',
                  'Discounted shipping rates with major carriers',
                  'Multi-channel integration (Amazon, Shopify, eBay, Walmart, Etsy)',
                  'Transparent pricing with no hidden fees',
                  '24/7 customer support and account management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[var(--primary-teal)] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleCTAClick}
                className="btn-primary text-white px-8 py-3 rounded-full mt-8"
              >
                Learn More About Our Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                className="rounded-xl shadow-custom w-full h-96 object-cover"
                alt="Modern warehouse with automated logistics systems and workers preparing FBA shipments"
               src="https://images.unsplash.com/photo-1579618216551-cc514029b1a9" />
              <div className="absolute -bottom-6 -right-6 bg-[var(--primary-navy)] text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied e-commerce businesses who trust us with their logistics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-custom"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Transparent, Competitive Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              No hidden fees, no setup costs. Pay only for what you use with our 
              straightforward pricing structure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-2xl font-bold text-[var(--primary-navy)]">$0.50</div>
                <div className="text-sm text-gray-600">per item FBA prep</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-2xl font-bold text-[var(--primary-teal)]">$2.00</div>
                <div className="text-sm text-gray-600">per order fulfillment</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-2xl font-bold text-gray-600">$0.25</div>
                <div className="text-sm text-gray-600">per item per month storage</div>
              </div>
            </div>
            <Button 
              onClick={handleCTAClick}
              className="btn-primary text-white px-8 py-3 rounded-full"
            >
              View Full Pricing
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Scale Your E-commerce Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join thousands of successful sellers who trust Pro Logistics Prep with their fulfillment needs. 
              Get started today with a free consultation and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCTAClick}
                className="bg-white text-[var(--primary-navy)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={handleCTAClick}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[var(--primary-navy)] px-8 py-4 text-lg font-semibold rounded-full"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
