import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '1000+', label: 'Happy Clients', icon: Users },
    { number: '5M+', label: 'Items Processed', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '99.9%', label: 'Accuracy Rate', icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters in e-commerce logistics. We maintain the highest standards of accuracy in every process.'
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Fast turnaround times without compromising quality. Your business moves fast, and so do we.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on. We\'re here when you need us, every time.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We\'re not just a service provider - we\'re your logistics partner invested in your success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Pro Logistics Prep - Professional FBA Prep & E-commerce Fulfillment</title>
        <meta name="description" content="Learn about Pro Logistics Prep, your trusted partner for FBA preparation and e-commerce fulfillment. Professional team, state-of-the-art facilities, and commitment to excellence." />
        <meta name="keywords" content="about pro logistics prep, FBA prep company, e-commerce fulfillment team, logistics expertise, Amazon compliance specialists" />
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
              About Pro Logistics Prep
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in e-commerce logistics, dedicated to helping businesses 
              scale with professional FBA prep and fulfillment services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2018, Pro Logistics Prep began with a simple mission: to help 
                  e-commerce businesses succeed by providing reliable, professional logistics services. 
                  What started as a small operation has grown into a trusted partner for over 1,000 businesses.
                </p>
                <p>
                  Our founders, experienced Amazon sellers themselves, understood the challenges 
                  of managing inventory, prep requirements, and fulfillment logistics. They built 
                  Pro Logistics Prep to solve these pain points with transparency, efficiency, and expertise.
                </p>
                <p>
                  Today, we operate state-of-the-art facilities with advanced inventory management 
                  systems, serving businesses of all sizes from startups to established brands. 
                  Our commitment to excellence and customer success remains at the heart of everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                className="rounded-xl shadow-custom w-full h-96 object-cover"
                alt="Pro Logistics Prep team working in modern warehouse facility with advanced inventory systems"
               src="https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'CEO & Founder',
                description: 'Former Amazon seller with 10+ years of e-commerce experience. Passionate about helping businesses scale efficiently.'
              },
              {
                name: 'David Chen',
                role: 'COO',
                description: 'Logistics expert with extensive background in supply chain management and warehouse operations optimization.'
              },
              {
                name: 'Maria Rodriguez',
                role: 'Head of Customer Success',
                description: 'Dedicated to ensuring every client receives exceptional service and achieves their business goals.'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-custom text-center"
              >
                <img 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  alt={`${member.name} - ${member.role} at Pro Logistics Prep`}
                 src="https://images.unsplash.com/photo-1701878131592-3e22da496308" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                className="rounded-xl shadow-custom w-full h-96 object-cover"
                alt="State-of-the-art warehouse facility with climate control and security systems"
               src="https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                State-of-the-Art Facilities
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our 50,000 square foot warehouse facility is equipped with the latest 
                  technology and security systems to ensure your inventory is safe and 
                  efficiently managed.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Climate-controlled environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>24/7 security monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Advanced inventory management system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Fire suppression and insurance coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Dedicated prep and packaging areas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;