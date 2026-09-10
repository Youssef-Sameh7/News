const news = [

  {
    category: "Politics",
    title: "Global Leaders Discuss Major International Challenges",
    description:
      "World leaders meet to discuss important political developments and international cooperation.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "Economy",
    title: "Global Markets Show Positive Movement Today",
    description:
      "Financial markets experience new movements as investors continue to follow the latest economic developments.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "Sports",
    title: "Exciting Match Brings Fans Together",
    description:
      "Football fans are preparing for an exciting match as two strong teams meet in a highly anticipated game.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "Movies",
    title: "New Movie Becomes One of the Most Watched Films",
    description:
      "The latest movie continues to attract audiences and receive positive reactions from viewers.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "Technology",
    title: "New AI Technology Could Change the Digital World",
    description:
      "Technology companies continue to develop new artificial intelligence tools and innovative digital solutions.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "World",
    title: "Top International Stories You Need to Know Today",
    description:
      "Here are some of the most important international stories making headlines around the world.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "Health",
    title: "Experts Share Tips for a Healthier Lifestyle",
    description:
      "Health experts share simple recommendations that can help people build healthier daily habits.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "Entertainment",
    title: "The Biggest Entertainment Stories of the Day",
    description:
      "Discover the latest stories from the entertainment industry and the world of celebrities.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80"
  },

  {
    category: "Politics",
    title: "New Political Decisions Attract Global Attention",
    description:
      "New political decisions are attracting attention as governments continue discussions on major issues.",
    date: "September 10, 2026",
    image:
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=900&q=80"
  }

];


const newsGrid = document.getElementById("newsGrid");

const sectionTitle = document.getElementById("sectionTitle");

const newsCount = document.getElementById("newsCount");


function displayNews(newsList) {

  newsGrid.innerHTML = "";


  if (newsList.length === 0) {

    newsGrid.innerHTML = `
      <div style="
        grid-column: 1 / -1;
        text-align: center;
        padding: 70px;
        background: white;
        border-radius: 20px;
        color: #7c8984;
      ">
        <h2>No News Found</h2>
        <p>There are no articles in this category.</p>
      </div>
    `;

    newsCount.textContent = "0 Articles";

    return;
  }


  newsList.forEach((item) => {

    const card = document.createElement("article");

    card.className = "news-card";


    card.innerHTML = `

      <div class="news-image">

        <img
          src="${item.image}"
          alt="${item.title}"
        >

        <span class="category">
          ${item.category}
        </span>

      </div>


      <div class="news-content">

        <div class="news-meta">
          ${item.date}
        </div>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

        <button class="news-read">
          Read More →
        </button>

      </div>

    `;


    newsGrid.appendChild(card);

  });


  newsCount.textContent =
    `${newsList.length} Articles`;
}


function filterNews(category) {

  const buttons =
    document.querySelectorAll(".nav-btn");


  buttons.forEach((button) => {

    button.classList.remove("active");

    if (button.textContent.trim() === category) {
      button.classList.add("active");
    }

  });


  if (category === "All") {

    displayNews(news);

    sectionTitle.textContent =
      "Latest News";

    return;
  }


  const filtered =
    news.filter(
      (item) => item.category === category
    );


  displayNews(filtered);

  sectionTitle.textContent =
    `${category} News`;
}


displayNews(news);