import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { blogData } from '../../../mocks/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id || '0');
  const post = blogData[blogId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Artikel nicht gefunden</h2>
          <Link to="/blog" className="text-accent-gold hover:underline">
            Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = Object.values(blogData)
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <article className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent-gold text-primary text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-white/90">
              <span className="flex items-center space-x-2">
                <i className="ri-calendar-line"></i>
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-2">
                <i className="ri-time-line"></i>
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Author Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-12 pb-8 border-b border-neutral-200"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg">{post.author.name}</h3>
            <p className="text-neutral-600">{post.author.role}</p>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-neutral-700 leading-relaxed mb-6 text-base"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-neutral-200"
        >
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Share Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center space-x-4 mt-8"
        >
          <span className="text-neutral-600 font-semibold">Teilen:</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-accent-gold hover:text-primary transition-colors duration-300 cursor-pointer">
            <i className="ri-linkedin-fill text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-accent-gold hover:text-primary transition-colors duration-300 cursor-pointer">
            <i className="ri-twitter-x-fill text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-accent-gold hover:text-primary transition-colors duration-300 cursor-pointer">
            <i className="ri-facebook-fill text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-accent-gold hover:text-primary transition-colors duration-300 cursor-pointer">
            <i className="ri-mail-line text-lg"></i>
          </button>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-neutral-200">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 text-primary hover:text-accent-gold transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="font-semibold">Zurück zur Übersicht</span>
          </button>
          
          {blogId < Object.keys(blogData).length && (
            <Link
              to={`/blog/${blogId + 1}`}
              className="flex items-center space-x-2 text-primary hover:text-accent-gold transition-colors duration-300"
            >
              <span className="font-semibold">Nächster Artikel</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          )}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">
              Ähnliche Artikel
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent-gold text-primary text-xs font-semibold rounded-full mb-3">
                      {relatedPost.category}
                    </span>
                    
                    <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogDetail;