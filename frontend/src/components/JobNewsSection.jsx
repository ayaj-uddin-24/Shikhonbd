import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import PostItem from "./PostItem";

const JobNewsSection = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { posts } = useContext(BlogContext);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const categories = ["সরকারি চাকরি", "বেসরকারি চাকরি", "ব্যাংক চাকরি"];
      const filtered = posts.filter((post) =>
        categories.includes(post.category)
      );
      setFilteredPosts(filtered);
    }
  }, [posts]);

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="border-b-2 pb-2 mb-4 flex items-center">
        <p className="text-lg font-bold">চাকরির খবর</p>
      </div>

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
            />
          ))
        ) : (
          <p>No Post Available</p>
        )}
      </div>
    </div>
  );
};

export default JobNewsSection;
