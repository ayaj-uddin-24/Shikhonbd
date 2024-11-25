import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ id, imageUrl, title, createdAt }) => {
  return (
    <Link
      to={`/post/${encodeURIComponent(title)}`}
      key={id}
      className="flex items-start space-x-4"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-20 h-16 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-sm font-semibold leading-tight">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default PostItem;
