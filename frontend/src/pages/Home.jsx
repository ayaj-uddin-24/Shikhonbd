import React, { useContext } from "react";
import TopPosts from "../components/TopPosts";
import LatestPosts from "../components/LatestPosts";
import JobNewsSection from "../components/JobNewsSection";
import ScienceNewsSection from "../components/ScienceNewsSection";
import Search from "../components/Search";
import { BlogContext } from "../contexts/BlogContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const { posts, searchTerm } = useContext(BlogContext);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
    </div>
  );
};

export default Home;
