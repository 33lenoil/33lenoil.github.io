import React, { useState } from 'react';
import BlogPost from './BlogPost';
import './Portfolio.css';

const projectsData = [
  {
    title: "DocSearch",
    category: "Data Engineering",
    date: "2023-12",
    image: "images/projects/docsearch.jpg",
    description: "End-to-end web search engine with crawler, indexing, TF-IDF + PageRank algorithms, and ranking UI.",
    link: "https://github.com/33lenoil/DocSearch"
  },
  {
    title: "Google Suite Copy",
    category: "Web Applications",
    date: "2024-05",
    image: "images/projects/googlesuite.jpg",
    description: "Gmail-style webmail + Drive-style cloud storage application (not affiliated with Google).",
    link: "https://github.com/33lenoil/gmail-google-cloud-clone"
  },
  {
    title: "yelpscout",
    category: "Data Engineering",
    date: "2024-05",
    image: "images/projects/yelpscout.jpg",
    description: "Yelp-dataset local business search & insights with Top-100 ranking, weekday popularity, and recommendations.",
    link: "https://github.com/33lenoil/YelpScouts"
  },
  {
    title: "UFOgram",
    category: "Web Applications",
    date: "2023-12",
    image: "images/projects/ufogram.jpg",
    description: "Social app MVP with real-time feed, profiles, and infinite scroll functionality.",
    link: "https://ufogram-frontend.fly.dev"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {/* Filter buttons */}
      <div className="filter-buttons">
        {['All', 'Data Engineering', 'Web Applications'].map(category => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio items */}
      <div className="projects-display">
        <ul className="projects-list">
          {filteredProjects.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              category={post.category}
              date={post.date}
              image={post.image}
              description={post.description}
              link={post.link}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
