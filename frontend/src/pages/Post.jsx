import { useContext, useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import PostItem from "../components/PostItem";

const Post = () => {
  const { posts, loading } = useContext(BlogContext);
  const { title } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const decodeTitle = useMemo(() => decodeURIComponent(title), [title]);
  const shareUrl = useMemo(() => window.location.href, []);

  useEffect(() => {
    const post = posts.find((p) => p.title === decodeTitle);
    setPostDetails(post);

    if (post) {
      const related = posts.filter(
        (p) => p.category === post.category && p._id !== post._id
      );
      setRelatedPosts(related.slice(0, 5)); // Limit initial related posts
    }
  }, [posts, decodeTitle]);

  if (loading) return <Loading />;

  if (!postDetails) {
    return (
      <div className="container mx-auto p-4">
        <h3 className="text-center text-2xl font-bold text-red-600">
          Post not found!
        </h3>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 px-5 sm:px-[5vw] lg:px-[9vw]">
      <Helmet>
        <title>{postDetails.title} | Blog</title>
      </Helmet>
      <img
        src={postDetails.imageUrl}
        alt={postDetails.title}
        className="w-full rounded-lg mb-5"
        loading="lazy"
      />
      <h1 className="text-3xl font-bold text-gray-800">{postDetails.title}</h1>
      <p className="mt-2 text-gray-500">
        Published on: {new Date(postDetails.createdAt).toLocaleString()}
      </p>
      <div
        className="mt-5 text-gray-700"
        dangerouslySetInnerHTML={{ __html: postDetails.content }}
      ></div>
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-2">Share this post:</h3>
        <div className="flex space-x-3">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <PinterestShareButton url={shareUrl} media={postDetails.imageUrl}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default Post;
