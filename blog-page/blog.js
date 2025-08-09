const blogPosts = [
  {
    title: "Exploring Tokyo's Hidden Cafes",
    description: "A cozy walk through Tokyo's quiet coffee nooks.",
    date: "2025-07-10",
    category: "Travel",
    image: "images/wp12742317.jpg",
  },
  {
    title: "JavaScript Tips for Beginners",
    description: "Clean code, useful tools, and fun debugging hacks.",
    date: "2025-07-14",
    category: "Tech",
    image: "images/maxresdefault.jpg",
  },
  {
    title: "The Best Mini Loaf Cakes Recipe Ever",
    description: "Chewy, chocolatey, and super easy to make.",
    date: "2025-07-15",
    category: "Food",
    image: "images/fdcc7c4bc56180c1d5b837f093424820.jpg",
  },
  {
    title: "Breakfasts from Around the World",
    description: "From shakshuka to pancakes — a global food tour.",
    date: "2025-07-17",
    category: "Food",
    image:
      "images/HF180717_Extrashoot_719_US_Breakfast_Around_The_World_All_01_low-e1533055378155.jpg",
  },
  {
    title: "Easy One-Pan Dinners",
    description: "Minimal cleanup, maximum flavor.",
    date: "2025-07-18",
    category: "Food",
    image: "images/OIP (7).webp",
  },
  {
    title: "Healthy Smoothie Bowl Recipes",
    description: "Colorful, tasty, and packed with nutrients.",
    date: "2025-07-19",
    category: "Food",
    image: "images/OIP (8).webp",
  },
  {
    title: "A Local’s Guide to Rome",
    description: "Hidden gems, authentic food, and no tourist traps.",
    date: "2025-07-17",
    category: "Travel",
    image: "images/R (1).jpg",
  },
  {
    title: "Backpacking Through South America",
    description: "Budget-friendly tips for unforgettable adventures.",
    date: "2025-07-18",
    category: "Travel",
    image: "images/What-to-Pack-for-South-America-1 (1).jpg",
  },
  {
    title: "Stunning Northern Lights in Iceland",
    description: "How to catch the aurora borealis this season.",
    date: "2025-07-19",
    category: "Travel",
    image: "images/iceland-northern-lights-myvatn.jpg",
  },
  {
    title: "React vs Vue in 2025",
    description: "A fresh comparison of two top JavaScript frameworks.",
    date: "2025-07-17",
    category: "Tech",
    image: "images/react-vs-vue.webp",
  },
  {
    title: "How to Use Git Like a Pro",
    description: "Branching, rebasing, and fixing common mistakes.",
    date: "2025-07-18",
    category: "Tech",
    image: "images/Git-Logo-1280x800.png",
  },
  {
    title: "AI Tools for Web Developers",
    description: "Best free AI tools to boost productivity.",
    date: "2025-07-19",
    category: "Tech",
    image: "images/maxresdefault (1).jpg",
  },

  {
    title: "Top 5 Web Design Trends in 2025",
    description: "Stay ahead with these modern and minimalist styles.",
    date: "2025-07-12",
    category: "Tech",
    image: "images/Free Vector _ Cyber security instagram posts (1).jpg",
  },
  // 🔽 Dummy filler posts for multiple pages
  {
    title: "Charming Streets of Lisbon",
    description: "Wander through colorful alleys and tiled houses.",
    date: "2025-07-11",
    category: "Travel",
    image: "images/caption.jpg",
  },
  {
    title: "Snack Hacks",
    description: "Quick bites that actually taste great.",
    date: "2025-07-09",
    category: "Food",
    image: "images/Healthy-Snacking.jpg",
  },
  {
    title: "Understanding Async/Await",
    description: "Simplify your async code in JavaScript.",
    date: "2025-07-13",
    category: "Tech",
    image: "images/1_fSe3vhLykkG4fWXi54sBBg.png",
  },
  {
    title: "Cozy Cabin Weekend in Sweden",
    description: "Nature, firewood, and lots of hot cocoa.",
    date: "2025-07-16",
    category: "Travel",
    image: "images/BYfcxRsL4WcUJk07agVFIiXcr8dE1cpIsHm2ACI6t_k.jpg",
  },
];

const postContainer = document.getElementById("posts");
const searchInput = document.getElementById("search");
const paginationContainer = document.createElement("div");
paginationContainer.className = "pagination";
document.querySelector(".footer").before(paginationContainer);
let filteredPosts = []; // Stores currently filtered posts

let currentPage = 1;
const postsPerPage = 4;
let currentCategory = "All";

function paginatePosts(posts) {
  const start = (currentPage - 1) * postsPerPage;
  return posts.slice(start, start + postsPerPage);
}

function renderPagination(totalPosts) {
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (totalPages <= 1) return;

  if (currentPage > 1) {
    const prev = document.createElement("button");
    prev.textContent = "Previous";
    prev.onclick = () => {
      currentPage--;
      renderPosts(filteredPosts);
    };
    paginationContainer.appendChild(prev);
  }

  if (currentPage < totalPages) {
    const next = document.createElement("button");
    next.textContent = "Next";
    next.onclick = () => {
      currentPage++;
      renderPosts(filteredPosts);
    };
    paginationContainer.appendChild(next);
  }
}

function renderPosts(posts) {
  postContainer.innerHTML = "";
  const paginated = paginatePosts(posts);
  paginated.forEach((post) => {
    postContainer.innerHTML += `
      <div class="card">
        <img src="${post.image}" alt="${post.title}">
        <h3>${post.title}</h3>
        <div class="meta">${post.date} • ${post.category}</div>
        <p>${post.description}</p>
      </div>
    `;
  });
  renderPagination(posts.length);
}

function filterPosts(category) {
  currentPage = 1;
  currentCategory = category;
  const searchText = searchInput.value.toLowerCase();

  filteredPosts = blogPosts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(searchText)
  );

  renderPosts(filteredPosts);
}

searchInput.addEventListener("input", () => {
  currentPage = 1;
  filterPosts(currentCategory);
});

window.onload = () => {
  filterPosts("All");
};
