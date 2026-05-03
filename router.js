const routes = {

  home: `
    <div class="card">
      <h2>Welcome 🚀</h2>
      <button onclick="showNotification()">Popup</button>
      <button onclick="launchConfetti()">Confetti 🎉</button>
    </div>
  `,

  dashboard: `
    <div class="card">
      <h2>Dashboard</h2>
      <button onclick="safeCall('loadCredits')">Load Credits</button>
    </div>
  `,

  analytics: `
    <div class="card">
      <h2>Analytics</h2>
      <button onclick="safeCall('loadAnalytics')">View Stats</button>
    </div>
  `,

  leaderboard: `
    <div class="card">
      <h2>Leaderboard 🏆</h2>
      <button onclick="safeCall('loadLeaderboard')">Load Board</button>
    </div>
  `,

  shop: `
    <div class="card">
      <h2>Shop 🛒</h2>
      <button onclick="safeCall('loadShop')">Open Shop</button>
    </div>
  `,

  profile: `
    <div class="card">
      <h2>Profile 👤</h2>
      <button onclick="safeCall('loadProfile')">Load Profile</button>
    </div>
  `
};

// ✅ SAFE FUNCTION CALL (IMPORTANT)
function safeCall(fnName) {
  if (typeof window[fnName] === "function") {
    window[fnName]();
  } else {
    alert(fnName + " function not found!");
    console.warn("Missing function:", fnName);
  }
}

// ✅ ROUTER
function loadPage() {
  const hash = window.location.hash.replace("#", "") || "home";
  document.getElementById("app").innerHTML =
    routes[hash] || "<h2>404 Page Not Found</h2>";
}

window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);