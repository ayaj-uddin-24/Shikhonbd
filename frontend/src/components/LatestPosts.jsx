import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import PostItem from "./PostItem";

const LatestPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const { posts } = useContext(BlogContext);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setLatestPosts(posts.slice(-5));
    }
  }, [posts]);

  return (
    <section
      className="container mx-auto p-4 mt-5"
      aria-labelledby="latest-posts-header"
    >
      {/* Header */}
      <header className="border-b-2 pb-2 mb-4 flex items-center">
        <h1 id="latest-posts-header" className="text-lg font-bold">
          Latest Posts
        </h1>
      </header>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {latestPosts.length > 0 ? (
          latestPosts.map((item) => (
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

export default LatestPosts;
