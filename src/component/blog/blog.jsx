import React from "react";
import "./blog.css";

export default function Blog() {
  return (
    <>
      <div className="com-blog">
        <div className="miss">
          <div className="dont-mis">DON'T MISS THE LATEST NEWS</div>
          <div className="ourblog">Our Blog</div>
        </div>
        <div className="blogcar-layout">
          <BlogCard
            bImg="asset/d40.jfif"
            btitle="Real Estate market in 2022: global trends and predictions"
            btype="Investment"
          />
          <BlogCard
            bImg="asset/d50.jpg"
            btitle="Leasehold vs Freehold and Share of Freehold"
            btype="Real Estate"
          />
          <BlogCard
            bImg="asset/d15.jfif"
            btitle="Investments in financial future ten steps for independence"
            btype="News"
          />
        </div>
      </div>
    </>
  );
}

export function BlogCard({ bImg, btype, btitle }) {
  return (
    <>
      <div className="com-blog-cards">
        <div className="blog-img">
          <img src={bImg} alt="" />
        </div>
        <div className="blog-date-category">
          <div className="b-date">October 23, 2024</div>
          <div className="b-categ">{btype}</div>
        </div>
        <div className="blog-title">{btitle}</div>
      </div>
    </>
  );
}
