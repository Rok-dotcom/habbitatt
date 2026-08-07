import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/mockData";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 pb-24 container-page text-center">
        <p className="text-navy-600 dark:text-white/60">Article not found.</p>
        <Link to="/blog" className="text-brand-600 font-medium">Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-2xl">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-navy-500 dark:text-white/50 hover:text-brand-600">
          <ArrowLeft size={14} /> Back to blog
        </Link>
        <div className="mt-6 h-48 rounded-3xl bg-mist dark:bg-white/5 flex items-center justify-center text-7xl">{post.image}</div>
        <span className="inline-block mt-6 text-[10px] font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-2.5 py-1 rounded-full">
          {post.category}
        </span>
        <h1 className="font-display mt-3 text-3xl font-bold text-navy-950 dark:text-white">{post.title}</h1>
        <div className="mt-3 flex items-center gap-3 text-xs text-navy-400 dark:text-white/40">
          <span>{post.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {post.readMinutes} min read</span>
        </div>
        <div className="mt-8 prose prose-navy dark:prose-invert max-w-none text-navy-700 dark:text-white/70 leading-relaxed space-y-4">
          <p>{post.excerpt}</p>
          <p>
            This is placeholder article content — swap it out with real editorial copy once your content
            team is ready. The layout, typography, and spacing are already tuned for long-form reading.
          </p>
          <p>
            Structure each article with short paragraphs, clear subheadings, and a closing takeaway so
            readers can scan quickly on mobile.
          </p>
        </div>
      </div>
    </div>
  );
}
