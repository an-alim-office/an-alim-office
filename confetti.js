// =============================
// 🎉 CONFETTI SYSTEM
// =============================

function launchConfetti() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";

  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  const colors = ["#f44336", "#4CAF50", "#2196F3", "#ffeb3b", "#ff9800"];

  // Create particles
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 3 + 2,
      speedX: Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;

      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(update);
  }

  update();

  // Stop after 3 seconds
  setTimeout(() => {
    canvas.remove();
  }, 3000);
}