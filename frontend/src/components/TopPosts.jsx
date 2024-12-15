import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";

const TopPosts = () => {
  const { posts } = useContext(BlogContext);
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const filterPosts = posts.filter((post) => post.popular === true);
    setPopularPosts(filterPosts);
  }, [posts]);

  if (popularPosts.length === 0) {
    return (
      <div className="container mx-auto p-4 mt-5">
        <p className="text-center text-gray-500">No popular posts available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main News Section */}
        <Link
          to={`/post/${encodeURIComponent(
            popularPosts[popularPosts.length - 1].title
          )}`}
          className="md:col-span-2"
        >
          <img
            src={popularPosts[popularPosts.length - 1].imageUrl}
            alt="Main News"
            className="w-full rounded-lg"
          />
          <div className="mt-4">
            <p className="text-lg font-semibold">
              {popularPosts[popularPosts.length - 1].title}
            </p>
            <p
              className="text-gray-600 mt-2 text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  popularPosts[popularPosts.length - 1].content.slice(0, 250) +
                  "....",
              }}
            ></p>
          </div>
        </Link>

        {/* Sidebar Section */}
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <PostItem
              key={post._id}
              id={post._id}
              title={post.title}
              createdAt={post.createdAt}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
