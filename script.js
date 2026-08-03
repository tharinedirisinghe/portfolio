document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    const defaultLabel = copyBtn.textContent;
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = "Copied!";
      } catch {
        copyBtn.textContent = "Copy failed";
      }
      setTimeout(() => {
        copyBtn.textContent = defaultLabel;
      }, 2000);
    });
  }
});
