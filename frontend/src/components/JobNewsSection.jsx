import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import PostItem from "./PostItem";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobNewsSection = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { posts } = useContext(BlogContext);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const categories = ["সরকারি চাকরি", "বেসরকারি চাকরি", "ব্যাংক চাকরি"];
      const filtered = posts.filter((post) =>
        categories.includes(post.category)
      );
      setFilteredPosts(filtered.slice(-6));
    }
  }, [posts]);

  return (
    <section
      className="container mx-auto p-4 mt-4"
      aria-labelledby="job-news-header"
    >
      {/* Header */}
      <header className="border-b-2 pb-2 mb-4 flex items-center">
        <Link
          to="/চাকরির খবর"
          id="job-news-header"
          className="text-lg font-bold flex items-center gap-3"
        >
          <span>চাকরির খবর</span>
          <FaArrowRightLong size={25} />
        </Link>
      </header>

      {/* Job News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item) => (
            <PostItem
              key={item._id}
              id={item._id}
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
              alt={item.title}
            />
          ))
        ) : (
          <p>No Post Available</p>
        )}
      </div>
    </section>
  );
};

export default JobNewsSection;
