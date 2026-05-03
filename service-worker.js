// =============================
// ⚙️ SERVICE WORKER (PWA)
// =============================

const CACHE_NAME = "alim-office-v1";

// Files to cache
const urlsToCache = [
  "/",
  "index.html",
  "CSS/style.css",

  // Core JS
  "js/config.js",
  "js/firebase.js",
  "js/auth.js",
  "js/storage.js",
  "js/router.js",

  // UI
  "js/ui.js",
  "js/theme.js",
  "js/notifications.js",
  "js/confetti.js",
  "js/animation.js",

  // Features
  "js/analytics.js",
  "js/billing.js",
  "js/stripe.js",
  "js/credits.js",
  "js/rewards.js",
  "js/badges.js",
  "js/leaderboard.js",
  "js/leaderboard-ui.js",
  "js/referral.js",
  "js/share.js",
  "js/shop.js",
  "js/auction.js",

  // Assets
  "manifest.json",
  "logo.png"
];

// =============================
// 📦 INSTALL
// =============================
self.addEventListener("install", (event) => {
  console.log("✅ Service Worker Installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// =============================
// 🔄 ACTIVATE
// =============================
self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker Activated");

  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// =============================
// 🌐 FETCH (CACHE FIRST)
// =============================
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});