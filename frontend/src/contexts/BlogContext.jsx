import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { url } from "../App";

export const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const res = await axios.get(`${url}/api/post/get-post`);

    if (res.data.success) {
      setPosts(res.data.posts);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const value = {
    posts,
    setPosts,
    searchTerm,
    setSearchTerm,
    loading,
    setLoading,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
