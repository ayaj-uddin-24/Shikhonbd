import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { url } from "../App";

export const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await axios.get(`${url}/api/post/get-post`);
      if (res.data.success) {
        setPosts(res.data.posts);
      }
    } catch (err) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  const value = {
    posts,
    setPosts,
    searchTerm,
    setSearchTerm: debouncedSearch,
    loading,
    setLoading,
    error,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default BlogContextProvider;
