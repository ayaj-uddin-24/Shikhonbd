import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";

const Post = () => {
  const { posts } = useContext(BlogContext);
  const { title } = useParams();
  const [postDetails, setPostDetails] = useState([]);
  const decodeTitle = decodeURIComponent(title);

  useEffect(() => {
    const post = posts.find((p) => p.title === decodeTitle);
    setPostDetails(post);
  }, [posts]);

  if (!postDetails) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold text-red-600">
          Post not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Post Image */}
      {postDetails.imageUrl && (
        <img
          src={postDetails.imageUrl}
          alt={postDetails.title}
          className="w-full rounded-lg mb-5"
        />
      )}

      {/* Post Title */}
      <h1 className="text-3xl font-bold text-gray-800">{postDetails.title}</h1>

      {/* Metadata */}
      <div className="mt-2 mb-4 text-sm text-gray-500">
        <p>
          Category: <span className="font-medium">{postDetails.category}</span>
        </p>
        <p>Published on: {new Date(postDetails.createdAt).toLocaleString()}</p>
      </div>

      {/* Post Content */}
      <div
        className="text-gray-700 leading-7"
        dangerouslySetInnerHTML={{ __html: postDetails.content }}
      ></div>

      {/* Popular Badge */}
      {postDetails.popular && (
        <span className="inline-block mt-4 bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded">
          Popular Post
        </span>
      )}
    </div>
  );
};

export default Post;
