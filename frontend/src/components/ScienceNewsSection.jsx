import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import PostItem from "./PostItem";

const ScienceNewsSection = () => {
  const [sciencePosts, setSciencePosts] = useState([]);
  const { posts } = useContext(BlogContext);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const filteredPosts = posts.filter((post) => post.category === "বিজ্ঞান");
      setSciencePosts(filteredPosts);
    }
  }, [posts]);

  return (
    <section
      className="container mx-auto p-4"
      aria-labelledby="science-news-header"
    >
      {/* Header */}
      <header className="border-b-2 pb-2 mb-4 flex items-center">
        <h2 id="science-news-header" className="text-lg font-bold">
          বিজ্ঞান
        </h2>
      </header>

      {/* Science News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sciencePosts.length > 0 ? (
          sciencePosts.map((item) => (
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

export default ScienceNewsSection;
