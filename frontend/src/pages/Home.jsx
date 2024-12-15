import React, { useContext, useEffect } from "react";
import TopPosts from "../components/TopPosts";
import LatestPosts from "../components/LatestPosts";
import JobNewsSection from "../components/JobNewsSection";
import ScienceNewsSection from "../components/ScienceNewsSection";
import Search from "../components/Search";
import { BlogContext } from "../contexts/BlogContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Loading from "../components/Loading";

const Home = () => {
  const { posts, searchTerm, loading, setLoading } = useContext(BlogContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const truncateText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <div>
      <Search />
      {searchTerm ? (
        <div className="bg-white text-black mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
            {filteredPosts.map((article) => (
              <Link
                to={`/post/${article.title}`}
                key={article._id}
                className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg"
              >
                <img
                  className="rounded-t-lg"
                  src={article.imageUrl}
                  alt={article.title}
                />
                <div className="p-5 bg-white">
                  <p className="mb-2 text-md font-bold tracking-tight text-gray-800">
                    {article.title}
                  </p>
                  <p
                    className="mb-3 font-normal text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: truncateText(article.content, 100),
                    }}
                  ></p>
                  <Link
                    to={`/post/${article.title}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <FaArrowRight size={22} className="ps-2 pt-[3px]" />
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <>
          <TopPosts />
          <LatestPosts />
          <JobNewsSection />
          <ScienceNewsSection />
        </>
      )}
    </div>
  );
};

export default Home;
