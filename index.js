document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
  
    projects.forEach((project) => {
      project.addEventListener("mouseenter", () => {
        project.classList.add("hover-effect");
      });
  
      project.addEventListener("mouseleave", () => {
        project.classList.remove("hover-effect");
      });
    });
  });

  // animation.js
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.about-container img');
    // You can also dynamically add classes or styles if needed
});
