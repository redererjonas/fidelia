import Testimonials from '../../components/feature/Testimonials';
import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <BlogHero />
        <BlogGrid />
        <Testimonials />
      </main>
    </div>
  );
};

export default BlogPage;