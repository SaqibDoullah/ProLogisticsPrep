import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { blogData } from '@/lib/blogData';

const Blog = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const featuredPost = blogData.find(post => post.featured);
  const regularPosts = blogData.filter(post => !post.featured);

  const categories = useMemo(() => {
    const allCategories = blogData.map(post => post.category);
    return ['All Posts', ...new Set(allCategories)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All Posts') {
      return regularPosts;
    }
    return regularPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <>
      <Helmet>
        <title>E-commerce Logistics Blog - Pro Logistics Prep Insights & Tips</title>
        <meta name="description" content="Expert insights on FBA prep, e-commerce fulfillment, inventory management, and logistics optimization. Stay updated with the latest industry trends and best practices." />
        <meta name="keywords" content="FBA prep blog, e-commerce fulfillment tips, logistics insights, Amazon seller resources, inventory management, fulfillment strategies" />
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
              Logistics Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Expert insights, industry trends, and practical tips to help you optimize 
              your e-commerce logistics and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center mb-8">
                <Tag className="h-6 w-6 text-[var(--primary-light-blue)] mr-2" />
                <span className="text-lg font-semibold gradient-text">Featured Article</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="bg-white/10 text-[var(--primary-light-blue)] px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-300 font-medium">{featuredPost.author}</span>
                    </div>
                    
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="btn-primary text-white px-6 py-3 rounded-full">
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div>
                  <img
                    class="rounded-xl shadow-custom w-full h-80 object-cover"
                    alt={featuredPost.title}
                   src="https://images.unsplash.com/photo-1686643184179-e4b65e15022e" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[var(--primary-light-blue)] text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest insights and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    class="w-full h-48 object-cover"
                    alt={post.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                    <span className="bg-white/10 text-[var(--primary-light-blue)] px-2 py-1 rounded font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white hover:text-[var(--primary-light-blue)] transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <Button 
                        variant="ghost" 
                        className="text-[var(--primary-light-blue)] hover:text-white p-0"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get the latest logistics insights, industry trends, and exclusive tips 
              delivered directly to your inbox every week.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-dark-blue)]"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-[var(--primary-dark-blue)] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-sm text-white/70">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;