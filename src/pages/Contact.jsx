import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx3b8Be3DQ-eBsALLY8DaG8EVW_0uA1RD-LcPIrhCr7_djEulsezn98NeLEnLt0OYGW/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append('fullName', formData.name);
      data.append('email', formData.email);
      data.append('company', formData.company || '');
      data.append('phone', formData.phone || '');
      data.append('service', formData.service || '');
      data.append('message', formData.message);

      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });

      toast({ title: 'Thank you!', description: 'Your message has been received and we will get be in touch soon.'});
      setFormData({ name:'', email:'', company:'', phone:'', service:'', message:'' });
    } catch (err) {
      toast({ title: 'Error sending message', description: 'Please try again later.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(281) 827-8643',
      description: 'Mon-Fri 9AM-5PM CST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@prologisticsprep.com',
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Sugarland, TX 77478'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-5PM CST'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you start processing my inventory?',
      answer:
        'We can typically start processing your inventory within 24-48 hours of receiving it at our facility, depending on the complexity of your requirements.'
    },
    {
      question: 'What integrations do you support?',
      answer:
        'We integrate with all major e-commerce platforms including Amazon Seller Central, Shopify, eBay, Walmart, Etsy, and many others. We also offer custom API integrations.'
    },
    {
      question: 'Do you provide insurance for stored inventory?',
      answer:
        'Yes, all inventory stored in our facility is covered by comprehensive insurance. We also maintain strict security protocols and climate-controlled environments.'
    },
    {
      question: 'What are your minimum volume requirements?',
      answer:
        'We work with businesses of all sizes. Our Starter plan has no minimums, making it perfect for new sellers or those testing our services.'
    },
    {
      question: 'How do you ensure Amazon compliance?',
      answer:
        'Our team stays up-to-date with all Amazon requirements and guidelines. We have a 99.9% compliance rate and guarantee that all prep work meets Amazon standards.'
    },
    {
      question: 'Can you handle international shipping?',
      answer:
        'Yes, we offer international shipping services and can handle all customs documentation and requirements for global fulfillment.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Contact Pro Logistics Prep - Get Your Free FBA Prep Quote Today
        </title>
        <meta
          name="description"
          content="Contact Pro Logistics Prep for FBA prep, fulfillment, and logistics services. Get a free quote, schedule consultation, or ask questions. Phone: (555) 123-4567"
        />
        <meta
          name="keywords"
          content="contact pro logistics prep, FBA prep quote, fulfillment consultation, logistics contact, Amazon prep services contact"
        />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to streamline your logistics? Contact us for a free
              consultation and custom quote tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl glass-effect hover:shadow-lg transition-shadow duration-300"
              >
                <info.icon className="h-12 w-12 text-[var(--primary-light-blue)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {info.title}
                </h3>
                <div className="text-lg font-medium text-gray-200 mb-1">
                  {info.details}
                </div>
                <div className="text-sm text-gray-400">{info.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <MessageCircle className="h-8 w-8 text-[var(--primary-light-blue)] mr-3" />
                <h2 className="text-2xl font-bold gradient-text">
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent transition-colors"
                  >
                    <option className="text-gray-900" value="">
                      Select a service
                    </option>
                    <option className="text-gray-900" value="fba-prep">
                      FBA Prep Services
                    </option>
                    <option className="text-gray-900" value="fulfillment">
                      Order Fulfillment
                    </option>
                    <option className="text-gray-900" value="storage">
                      Inventory Storage
                    </option>
                    <option className="text-gray-900" value="returns">
                      Returns Processing
                    </option>
                    <option className="text-gray-900" value="kitting">
                      Kitting & Bundling
                    </option>
                    <option className="text-gray-900" value="multi-channel">
                      Multi-Channel Integration
                    </option>
                    <option className="text-gray-900" value="consultation">
                      General Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg bg-transparent focus:ring-2 focus:ring-[var(--primary-light-blue)] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your logistics needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-white py-3 rounded-lg font-semibold"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Our Location
                </h3>
                <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-300">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">
                      730 IND BLVD, Sugar Land, TX, 77478
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[var(--primary-light-blue)]" />
                    <div>
                      <div className="font-medium text-white">
                        (281) 827-8643
                      </div>
                      <div className="text-sm text-gray-400">
                        Call for immediate assistance
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[var(--primary-light-blue)]" />
                    <div>
                      <div className="font-medium text-white">
                        info@prologisticsprep.com
                      </div>
                      <div className="text-sm text-gray-400">
                        Email for detailed inquiries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {faq.question}
                </h3>
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
              Don't wait - contact us today and discover how Pro Logistics Prep
              can transform your e-commerce operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
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

export default Contact;
