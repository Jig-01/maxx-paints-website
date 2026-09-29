/* =========================================================
   MAXX PAINTS — BLOG ARTICLE INTERACTIONS
   ---------------------------------------------------------
   Shared behaviour for blog article pages.
   No article content is stored here: SEO/content remains
   static in each HTML file.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const articlePage = document.querySelector(".blog-article-page");

  if (articlePage) {
    const copyButton = document.querySelector("[data-copy-url]");

    if (copyButton) {
      copyButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          const original = copyButton.textContent;
          copyButton.textContent = "Link copied";
          copyButton.classList.add("is-copied");

          window.setTimeout(() => {
            copyButton.textContent = original;
            copyButton.classList.remove("is-copied");
          }, 1800);
        } catch {
          copyButton.textContent = "Copy unavailable";
          window.setTimeout(() => {
            copyButton.textContent = "Copy link";
          }, 1800);
        }
      });
    }

    const sections = [...document.querySelectorAll(".article-section[id]")];
    const tocLinks = [...document.querySelectorAll(".article-sidebar-card a[href^='#']")];

    if ("IntersectionObserver" in window && sections.length && tocLinks.length) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              tocLinks.forEach(link => {
                link.classList.toggle(
                  "is-active",
                  link.getAttribute("href") === `#${entry.target.id}`
                );
              });
            }
          });
        },
        { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
      );

      sections.forEach(section => observer.observe(section));
    }

    const revealItems = document.querySelectorAll(
      ".article-section, .article-pro-tip, .article-takeaways, .article-related-card"
    );

    if ("IntersectionObserver" in window && revealItems.length) {
      const revealObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      revealItems.forEach(item => revealObserver.observe(item));
    }
  }
});
