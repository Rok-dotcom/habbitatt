import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock } from "lucide-react";
import { blogPosts } from "../data/mockData";

const categories = ["All", "Wellness", "Technology", "Heart Health", "Family"];

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogPosts.filter(
    (p) => (category === "All" || p.category === category) && p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24">
      <div className="container-page">
        <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400">Blog</span>
        <h1 className="font-display mt-3 text-4xl font-bold text-navy-950 dark:text-white">Medical articles worth your time</h1>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white placeholder:text-navy-400 focus:border-brand-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-xs font-medium px-3.5 py-2 rounded-full transition-colors ${
                  category === c ? "bg-brand-500 text-white" : "bg-navy-900/5 text-navy-700 dark:bg-white/5 dark:text-white/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="rounded-3xl border border-navy-900/8 dark:border-white/10 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-32 rounded-2xl bg-mist dark:bg-white/5 flex items-center justify-center text-5xl">{post.image}</div>
              <span className="inline-block mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="font-display mt-3 font-bold text-navy-950 dark:text-white leading-snug">{post.title}</h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-white/55 line-clamp-2">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-navy-400 dark:text-white/40">
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readMinutes} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
