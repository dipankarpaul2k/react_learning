import { useState } from "react";
import blogsData from "./blogData.js";
import BlogList from "./BlogList.jsx";

const Home = () => {
  const [blogs, setBlogs] = useState(blogsData);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "User1")}
        title={"User1 Blogs"}
      />
    </div>
  );
};

export default Home;
