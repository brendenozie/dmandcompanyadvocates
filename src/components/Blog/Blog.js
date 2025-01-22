import React from "react";
import "./Blog.css";
import heroImage from "../../assets/banner.jpg"; // Replace with actual image path
import blogImage1 from "../../assets/banner.jpg"; // Replace with actual image path
import blogImage2 from "../../assets/banner.jpg"; // Replace with actual image path

const Blog = () => {
  const blogList = [
    {
      title: "Department of Justice Launches Crackdown on Healthcare Fraud and Abuse",
      date: "08 December 2024",
      readTime: "9 min",
      description:
        "Learn about the DOJ's latest initiatives targeting healthcare fraud and how they aim to protect patients and taxpayers.",
      image: blogImage1,
    },
    {
      title: "Supreme Court to Decide on the Fate of DACA",
      date: "09 December 2024",
      readTime: "7 min",
      description:
        "Find out how the upcoming decision could affect millions of immigrants and the broader implications for immigration policy.",
      image: blogImage2,
    },
  ];

  return (
    <div className="blog-section">
      {/* Blog Header */}
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>
          Stay updated with key legal trends and expert insights from our
          attorneys. Explore articles on criminal defense, civil litigation,
          and more. Check back often for fresh updates.
        </p>
      </div>

      {/* Hero Blog Section */}
      <div className="hero-blog">
        <div className="hero-image">
          <img src={heroImage} alt="Supreme Court Case" />
        </div>
        <div className="hero-content">
          <span>02 December 2024 • Read Time: 5 min</span>
          <h2>Supreme Court to Hear Voter ID Law Case</h2>
          <p>
            Discover the implications of the upcoming Supreme Court review and
            its potential impact on voting rights.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>

      {/* Blog List */}
      <div className="blog-list">
        {blogList.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-card-content">
              <span>{blog.date} • Read Time: {blog.readTime}</span>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button className="read-more-small">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
