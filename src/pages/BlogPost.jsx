
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
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4 py-8 md:py-16">
          <Link to="/blog" className="text-gray-300 hover:text-white mb-8 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap items-center text-sm text-gray-400 gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  <span>{post.category}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-gray-300">{post.excerpt}</p>
            </div>
            
            <div className="my-8">
              <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg object-cover shadow-lg" />
            </div>

            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </motion.div>
    </>
  );
};

export default BlogPost;
