import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import PostItem from "./PostItem";

const LatestPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const { posts } = useContext(BlogContext);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setLatestPosts(posts.slice(0, 5));
    }
  }, [posts]);

  return (
    <div className="container mx-auto p-4 mt-5">
      {/* Header */}
      <div className="border-b-2 pb-2 mb-4 flex items-center">
        <h2 className="text-lg font-bold">Latest</h2>
      </div>

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
            />
          ))
        ) : (
          <p>No Post Available</p>
        )}
      </div>
    </div>
  );
};

export default LatestPosts;
