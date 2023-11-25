import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      {/* loading status */}
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {/* error message */}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {/* blogs */}
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <small>Written by {blog.author}</small>
          <p>{blog.content}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
