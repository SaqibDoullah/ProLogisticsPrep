import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { blogData } from '@/lib/blogData';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center text-white">
        <div>
          <h1 className="text-4xl font-bold">404 - Post Not Found</h1>
          <p className="mt-4 text-lg text-gray-300">The blog post you are looking for does not exist.</p>
          <Link to="/blog">
            <Button className="mt-8 btn-primary text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Pro Logistics Prep Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, ${post.title}, FBA prep, e-commerce fulfillment`} />
      </Helmet>

      <div className="pt-24">
        {/* Post Header */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/blog" className="flex items-center text-[var(--primary-light-blue)] hover:underline mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span className="bg-white/10 text-[var(--primary-light-blue)] px-3 py-1 rounded-full font-medium flex items-center">
                  <Tag className="h-4 w-4 mr-1.5" />
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1.5" />
                  {post.author}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Post Image */}
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                class="rounded-xl shadow-custom w-full h-auto max-h-[500px] object-cover"
                alt={post.title}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </motion.div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose lg:prose-xl max-w-none prose-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;