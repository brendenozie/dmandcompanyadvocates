import React from "react";
import "./Blog.css";
import heroImage from "../../assets/banner.jpg"; // Replace with actual image path
import blogImage1 from "../../assets/banner.jpg"; // Replace with actual image path
import blogImage2 from "../../assets/banner.jpg"; // Replace with actual image path
import blogImage3 from "../../assets/banner.jpg"; // Replace with actual image path
import blogImage4 from "../../assets/banner.jpg"; // Replace with actual image path
import { Link } from "react-router-dom";

const Blog = () => {
  const blogList = [
    {
      title: "Department of Justice Launches Crackdown on Healthcare Fraud and Abuse",
      date: "08 December 2024",
      description:
        "Learn about the DOJ's latest initiatives targeting healthcare fraud and how they aim to protect patients and taxpayers.",
      image: blogImage1,
    },
    {
      title: "Supreme Court to Decide on the Fate of DACA",
      date: "09 December 2024",
      description:
        "Find out how the upcoming decision could affect millions of immigrants and the broader implications for immigration policy.",
      image: blogImage2,
    },
    {
      title: "New Voting Laws: What You Need to Know",
      date: "10 December 2024",
      description:
        "An overview of new voting laws being passed across the country and what they mean for future elections.",
      image: blogImage3,
    },
    {
      title: "Cybersecurity Trends for 2025",
      date: "11 December 2024",
      description:
        "Discover the key cybersecurity trends expected to shape the landscape in 2025 and how to prepare.",
      image: blogImage4,
    },
  ];

  return (
    <div className="blog-container">
      {/* Blog Section Header */}
      <div className="blog-header">
        <h1>Our Latest Blog Posts</h1>
        <p>
          Explore the latest insights, trends, and updates from various fields.
          Stay informed and engaged with our thoughtfully curated blog posts.
        </p>
      </div>

      {/* Blog List */}
      <div className="blog-list">
        {blogList.map((blog, index) => (
          <div key={index} className="blog-item">
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-description">{blog.description}</p>
              <Link to={"/contact"} >
                <button className="blog-read-more">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
