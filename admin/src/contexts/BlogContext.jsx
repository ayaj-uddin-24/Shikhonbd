import { createContext, useState, useEffect } from "react";
import { url } from "../App";
import axios from "axios";

export const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  const [posts, setPosts] = useState("");
  const [users, setUsers] = useState("");
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const postData = async () => {
    const res = await axios.get(`${url}/api/post/get-post`);
    setPosts(res.data.posts);
  };

  const userData = async () => {
    const res = await axios.get(`${url}/api/user/get-user`);
    setUsers(res.data.users);
  };

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.clear();
    }
    postData();
    userData();
  }, [user]);

  const value = { user, setUser, posts, users, setUsers };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
