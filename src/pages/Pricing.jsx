import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const navigate = useNavigate();
  const [calculatorValues, setCalculatorValues] = useState({
    items: 100,
    orders: 50,
    storage: 1000
  });

  const handleCTAClick = () => {
    navigate('/contact');
  };

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for new sellers getting started',
      price: 'Pay as you go',
      features: [
        'FBA prep from $0.50/item',
        'Order fulfillment from $2.00/order',
        'Storage from $0.25/item/month',
        'Basic reporting',
        'Email support',
        'Standard processing times'
      ],
      popular: false
    },
    {
      name: 'Growth',
      description: 'Ideal for scaling businesses',
      price: '$99/month + usage',
      features: [
        'FBA prep from $0.45/item',
        'Order fulfillment from $1.75/order',
        'Storage from $0.20/item/month',
        'Advanced reporting & analytics',
        'Priority support',
        'Faster processing times',
        'Dedicated account manager',
        'Custom packaging options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For high-volume operations',
      price: 'Custom pricing',
      features: [
        'Volume-based pricing',
        'Custom SLA agreements',
        'White-label solutions',
        'API integrations',
        '24/7 phone support',
        'On-site visits',
        'Custom workflows',
        'Dedicated warehouse space'
      ],
      popular: false
    }
  ];

  const serviceRates = [
    {
      category: 'FBA Prep Services',
      services: [
        { name: 'Standard labeling', price: '$0.50' },
        { name: 'Poly-bagging', price: '$0.25' },
        { name: 'Bubble wrapping', price: '$0.75' },
        { name: 'Bundling (2-3 items)', price: '$1.50' },
        { name: 'Quality inspection', price: '$0.30' },
        { name: 'Expiration date check', price: '$0.20' }
      ]
    },
    {
      category: 'Fulfillment Services',
      services: [
        { name: 'Pick & pack (standard)', price: '$2.00' },
        { name: 'Pick & pack (oversized)', price: '$3.50' },
        { name: 'Custom packaging', price: '$1.00' },
        { name: 'Gift wrapping', price: '$2.50' },
        { name: 'Insert inclusion', price: '$0.25' },
        { name: 'International shipping prep', price: '$1.50' }
      ]
    },
    {
      category: 'Storage & Handling',
      services: [
        { name: 'Standard storage', price: '$0.25/item/month' },
        { name: 'Oversized storage', price: '$0.50/item/month' },
        { name: 'Receiving & check-in', price: '$0.15/item' },
        { name: 'Cycle counting', price: '$0.10/item' },
        { name: 'Photo documentation', price: '$0.50/item' },
        { name: 'Returns processing', price: '$1.25/item' }
      ]
    }
  ];

  const calculateEstimate = () => {
    const prepCost = calculatorValues.items * 0.50;
    const fulfillmentCost = calculatorValues.orders * 2.00;
    const storageCost = calculatorValues.storage * 0.25;
    return prepCost + fulfillmentCost + storageCost;
  };

  return (
    <>
      <Helmet>
        <title>Transparent FBA Prep & Fulfillment Pricing - Pro Logistics Prep</title>
        <meta name="description" content="Clear, competitive pricing for FBA prep, order fulfillment, and storage services. No hidden fees, pay-as-you-go options, and volume discounts available." />
        <meta name="keywords" content="FBA prep pricing, fulfillment costs, storage rates, logistics pricing, Amazon prep costs, transparent pricing" />
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
              Transparent, Competitive Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              No hidden fees, no setup costs. Pay only for what you use with our 
              straightforward pricing structure designed for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options that scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative glass-effect rounded-xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-[var(--primary-light-blue)] transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[var(--primary-light-blue)] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold gradient-text">{plan.price}</div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[var(--primary-light-blue)] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleCTAClick}
                  className={`w-full py-3 rounded-full font-semibold ${
                    plan.popular 
                      ? 'btn-primary text-white' 
                      : 'border border-gray-300 text-gray-300 hover:bg-white/10'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Detailed Service Rates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for all our services with no hidden fees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceRates.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
                      <span className="text-gray-300">{service.name}</span>
                      <span className="font-semibold text-[var(--primary-light-blue)]">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Calculator className="h-12 w-12 text-[var(--primary-light-blue)] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Cost Calculator
            </h2>
            <p className="text-xl text-gray-300">
              Estimate your monthly costs based on your volume
            </p>
          </motion.div>

          <div className="glass-effect rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Items to prep per month
                </label>
                <input
                  type="number"
                  value={calculatorValues.items}
                  onChange={(e) => setCalculatorValues({...calculatorValues, items: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-2 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Orders to fulfill per month
                </label>
                <input
                  type="number"
                  value={calculatorValues.orders}
                  onChange={(e) => setCalculatorValues({...calculatorValues, orders: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-2 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Items in storage
                </label>
                <input
                  type="number"
                  value={calculatorValues.storage}
                  onChange={(e) => setCalculatorValues({...calculatorValues, storage: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-2 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent"
                />
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-lg">
              <div className="text-sm text-gray-300 mb-2">Estimated Monthly Cost</div>
              <div className="text-4xl font-bold gradient-text">
                ${calculateEstimate().toFixed(2)}
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Based on standard rates • Volume discounts available
              </div>
            </div>

            <div className="text-center mt-6">
              <Button 
                onClick={handleCTAClick}
                className="btn-primary text-white px-8 py-3 rounded-full"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Pricing FAQ
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our pricing structure
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Are there any setup fees or monthly minimums?',
                answer: 'No setup fees for our Starter plan. Growth plan has a $99/month base fee but includes volume discounts. Enterprise plans are custom with no minimums.'
              },
              {
                question: 'How do volume discounts work?',
                answer: 'Volume discounts automatically apply based on your monthly usage. The more you use our services, the lower your per-unit costs become.'
              },
              {
                question: 'What payment terms do you offer?',
                answer: 'We offer flexible payment terms including weekly, bi-weekly, or monthly billing. Enterprise clients can arrange custom payment schedules.'
              },
              {
                question: 'Are there any hidden fees?',
                answer: 'Absolutely not. All our pricing is transparent and clearly outlined. You only pay for the services you use at the rates specified.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Contact us today for a custom quote tailored to your specific needs and volume requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCTAClick}
                className="bg-white text-[var(--primary-dark-blue)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Get Custom Quote
              </Button>
              <Button 
                onClick={handleCTAClick}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[var(--primary-dark-blue)] px-8 py-4 text-lg font-semibold rounded-full"
              >
                Schedule Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;