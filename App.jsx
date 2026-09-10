import React from "react";

const news = [
  {
    category: "Politics",
    title: "Global Leaders Discuss Major International Challenges",
    text: "World leaders meet to discuss important political developments and international cooperation.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Economy",
    title: "Global Markets Show Positive Movement Today",
    text: "Financial markets experience new movements as investors follow the latest economic developments.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Sports",
    title: "Exciting Match Brings Fans Together",
    text: "Football fans are preparing for an exciting match between two strong teams.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
  }
];


export default function App() {

  return (

    <div className="react-news">

      <h1>Daily News</h1>

      <p className="react-subtitle">
        Latest stories powered by React
      </p>


      <div className="react-grid">

        {news.map((item, index) => (

          <article
            className="react-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="react-card-content">

              <span>
                {item.category}
              </span>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.text}
              </p>

              <button>
                Read More →
              </button>

            </div>

          </article>

        ))}

      </div>

    </div>

  );
}