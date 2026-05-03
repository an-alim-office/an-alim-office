// =============================
// ✅ PWA INSTALL SYSTEM
// =============================

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  console.log("✅ Install Ready");

  window.installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
      });
    } else {
      alert("Install not available");
    }
  };
});

// =============================
// ✅ LOGOUT SYSTEM
// =============================

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    alert("Logged out!");
    location.hash = "#home";
  }
}

// =============================
// ✅ LOADING UI
// =============================

function showLoading() {
  document.getElementById("app").innerHTML =
    "<div class='card'><h3>Loading...</h3></div>";
}

// =============================
// ✅ SUCCESS MESSAGE
// =============================

function showSuccess(msg = "Success!") {
  alert("✅ " + msg);
}

// =============================
// ✅ ERROR MESSAGE
// =============================

function showError(msg = "Something went wrong!") {
  alert("❌ " + msg);
}

// =============================
// ✅ MODAL SYSTEM (BASIC)
// =============================

function showModal(content) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.6)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  modal.innerHTML = `
    <div class="card">
      ${content}
      <br><br>
      <button onclick="closeModal()">Close</button>
    </div>
  `;

  modal.id = "modal";
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.remove();
}