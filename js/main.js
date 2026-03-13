// CubbyLearn Website JS
// Keep this file small and simple

document.addEventListener("DOMContentLoaded", () => {

  console.log("CubbyLearn site loaded");

  // Play button placeholder behavior
  const playButton = document.querySelector(".play-button");

  if (playButton) {
    playButton.addEventListener("click", () => {
      alert("Gameplay preview video coming soon!");
    });
  }

});
