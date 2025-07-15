const apiKey = "9d9ba9f973ca482c8bbc2fba8030584b"; // Replace with your NewsAPI key
const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 2;

function fetchNews() {
  const query = searchInput.value;
  const category = categoryFilter.value;

  let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=${currentPage}&apiKey=${apiKey}`;

  if (query) {
    url = `https://newsapi.org/v2/everything?q=${query}&pageSize=6&page=${currentPage}&apiKey=${apiKey}`;
  }

  if (category && !query) {
    url += `&category=${category}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newsContainer.innerHTML = "";
      if (data.articles.length === 0) {
        newsContainer.innerHTML = "<p>No news found.</p>";
        return;
      }
      data.articles.forEach((article) => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
          <img src="${article.urlToImage || "https://via.placeholder.com/300x160"}" alt="News">
          <h2>${article.title}</h2>
          <p>${article.description || "No description available."}</p>
          <a href="${article.url}" target="_blank">Read more →</a>
        `;
        newsContainer.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error fetching news:", err);
      newsContainer.innerHTML = "<p>Error loading news.</p>";
    });
}

// Event Listeners
searchInput.addEventListener("input", () => {
  currentPage = 1;
  fetchNews();
});

categoryFilter.addEventListener("change", () => {
  currentPage = 1;
  fetchNews();
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  pageNumber.textContent = currentPage;
  fetchNews();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    pageNumber.textContent = currentPage;
    fetchNews();
  }
});

// Initial Load
fetchNews();
