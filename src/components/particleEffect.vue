<template>
  <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script setup lang="ts">

// Canvas and context
const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;

// Particle class
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  life: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1; // Random size between 1 and 4
    this.speedX = Math.random() * 2 - 1; // Random horizontal speed
    this.speedY = Math.random() * 2 - 1; // Random vertical speed
    this.color = `rgba(255, 255, 255, ${Math.random()})`; // Random opacity
    this.life = 1; // Particle life (fades out over time)
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 0.2;

    // Apply easing to follow the cursor
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    this.x += dx * 0.05;
    this.y += dy * 0.05;
  }

  draw() {
    if (ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

// Particle array
let particles: Particle[] = [];

// Mouse position
const mouse = { x: 0, y: 0 };

// Create particles on mouse move
function createParticles(event: MouseEvent) {
  const xPos = event.clientX;
  const yPos = event.clientY;

  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(xPos, yPos));
  }
}

// Animate particles
function animateParticles() {
  if (canvas.value && ctx) {
    // Clear canvas with a semi-transparent background for a "trail" effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.0005)';
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      // Remove particles that have faded out
      if (particles[i].life <= 0) {
        particles.splice(i, 1);
        i--;
      }
    }

    // Loop animation
    requestAnimationFrame(animateParticles);
  }
}

// Initialize canvas and start animation
function initCanvas() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    ctx = canvas.value.getContext('2d');

    // Start animation
    animateParticles();
  }
}

// Event listeners
onMounted(() => {
  initCanvas();
  window.addEventListener('mousemove', createParticles);
  window.addEventListener('resize', () => {
    if (canvas.value) {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', createParticles);
  window.removeEventListener('resize', () => {});
});
</script>

<style scoped lang="scss">
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* Ensure the canvas doesn't block mouse events */
  z-index: 100000; /* Ensure the canvas is on top */
}
</style>