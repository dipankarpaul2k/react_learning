import BlogList from "../components/BlogList.jsx";
import useFetch from "../hooks/useFetch.js";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // Use this to fetch data 👇
  // npx json-server --watch data/db.json --port 8000

  return (
    <div className="home">
      {/* loading status */}
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {/* blogs */}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}

      {/* error message */}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
