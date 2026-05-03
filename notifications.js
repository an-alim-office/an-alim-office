// =============================
// 🔔 NOTIFICATION SYSTEM (TOAST)
// =============================

// Create container once
function getToastContainer() {
  let container = document.getElementById("toast-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.position = "fixed";
    container.style.top = "20px";
    container.style.right = "20px";
    container.style.zIndex = "9999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "10px";

    document.body.appendChild(container);
  }

  return container;
}

// Show notification
function showNotification(message = "Hello!", type = "success") {
  const container = getToastContainer();

  const toast = document.createElement("div");

  // Style
  toast.style.padding = "12px 16px";
  toast.style.borderRadius = "8px";
  toast.style.color = "#fff";
  toast.style.fontSize = "14px";
  toast.style.minWidth = "200px";
  toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  toast.style.opacity = "0";
  toast.style.transform = "translateX(50px)";
  toast.style.transition = "all 0.3s ease";

  // Type colors
  if (type === "success") toast.style.background = "#4CAF50";
  if (type === "error") toast.style.background = "#f44336";
  if (type === "info") toast.style.background = "#2196F3";
  if (type === "warning") toast.style.background = "#ff9800";

  toast.innerText = message;

  container.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(0)";
  }, 50);

  // Auto remove
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}