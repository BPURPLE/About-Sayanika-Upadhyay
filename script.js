// ===== 1. GREETING BASED ON LOCAL TIME =====

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  }

  if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  }

  if (hour >= 17 && hour < 21) {
    return "Good evening";
  }

  return "Welcome";
}

const greeting = document.getElementById("greeting");

if (greeting) {
  greeting.textContent = getGreeting() + ", fellow traveller.";
}


// ===== 2. CURRENTLY PLAYING POPUP =====

const playerBar = document.getElementById("player-bar");
const playerPanel = document.getElementById("player-panel");
const closeButton = document.getElementById("panel-close");

if (playerBar && playerPanel && closeButton) {
  function openPanel() {
    playerPanel.hidden = false;
    playerBar.setAttribute("aria-expanded", "true");
    closeButton.focus();
  }

  function closePanel() {
    playerPanel.hidden = true;
    playerBar.setAttribute("aria-expanded", "false");
    playerBar.focus();
  }

  playerBar.addEventListener("click", function () {
    if (playerPanel.hidden) {
      openPanel();
    } else {
      closePanel();
    }
  });

  closeButton.addEventListener("click", closePanel);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !playerPanel.hidden) {
      closePanel();
    }
  });

  // Close the popup if the user clicks one of its navigation links.
  playerPanel.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", closePanel);
  });
}


// ===== 3. HANDLE IMAGES THAT HAVE NOT BEEN ADDED YET =====

document.addEventListener("error", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.classList.add("is-missing");
  }
}, true);