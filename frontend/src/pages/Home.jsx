import React, { useContext, useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate data fetching delay (replace with actual fetching logic if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated delay of 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [posts]); // Re-run effect when posts change

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    // Render loader when data is still loading
    return <Loading />;
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Search />

          {searchTerm ? (
            <div className="bg-white text-black mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                {filteredPosts.map((article) => (
                  <Link
                    to={`/post/${encodeURIComponent(article.title)}`}
                    key={article._id}
                    className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg"
                  >
                    <img
                      className="rounded-t-lg"
                      src={article.imageUrl}
                      alt={article.title}
                    />
                    <div className="p-5 bg-white">
                      <h5 className="mb-2 text-md font-bold tracking-tight text-gray-800">
                        {article.title}
                      </h5>
                      <p
                        className="mb-3 font-normal text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: article.content.slice(0, 100) + ".....",
                        }}
                      ></p>
                      <a
                        href={article.link}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        Read more
                        <FaArrowRight size={22} className="ps-2 pt-[3px]" />
                      </a>
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

          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-5 right-5 bg-blue-600 text-white w-10 h-10 text-2xl rounded-full shadow-lg hover:bg-blue-700 transition-opacity duration-300"
              aria-label="Back to top"
            >
              ↑
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
