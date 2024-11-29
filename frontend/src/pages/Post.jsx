import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import Loading from "../components/Loading";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import PostItem from "../components/PostItem";

const Post = () => {
  const { posts, loading, setLoading } = useContext(BlogContext);
  const { title } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const decodeTitle = decodeURIComponent(title);

  useEffect(() => {
    const post = posts.find((p) => p.title === decodeTitle);
    setPostDetails(post);

    if (post) {
      const related = posts.filter(
        (p) => p.category === post.category && p._id !== post._id
      );
      setRelatedPosts(related);
    }
  }, [posts, decodeTitle]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [posts]);

  const handleRelatedPostClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return <Loading />;
  }

  if (!postDetails) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold text-red-600">
          Post not found!
        </h1>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const titleText = postDetails.title;

  return (
    <div className="container mx-auto p-6">
      {postDetails.imageUrl && (
        <img
          src={postDetails.imageUrl}
          alt={postDetails.title}
          className="w-full rounded-lg mb-5"
        />
      )}
      <h1 className="text-3xl font-bold text-gray-800">{postDetails.title}</h1>
      <div className="mt-2 mb-4 text-sm text-gray-500">
        <p>
          Category: <span className="font-medium">{postDetails.category}</span>
        </p>
        <p>Published on: {new Date(postDetails.createdAt).toLocaleString()}</p>
      </div>

      <div
        className="text-gray-700 leading-7"
        dangerouslySetInnerHTML={{ __html: postDetails.content }}
      ></div>

      <div className="mt-6">
        <span className="font-medium text-gray-700 block mb-2">Share:</span>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <FacebookShareButton url={shareUrl} quote={titleText}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={titleText}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <PinterestShareButton
            url={shareUrl}
            media={postDetails.imageUrl || ""}
            description={titleText}
          >
            <PinterestIcon size={40} round />
          </PinterestShareButton>
          <WhatsappShareButton url={shareUrl} title={titleText}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
          <EmailShareButton url={shareUrl} subject={titleText}>
            <EmailIcon size={40} round />
          </EmailShareButton>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-5">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((post) => (
              <div key={post._id} onClick={handleRelatedPostClick()}>
                <PostItem
                  id={post._id}
                  imageUrl={post.imageUrl}
                  title={post.title}
                  content={post.content}
                  createdAt={post.createdAt}
                />
              </div>
            ))
          ) : (
            <p>No related posts available here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
