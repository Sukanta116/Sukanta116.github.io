// Mobile menu + active nav link
const nav = document.querySelector("nav ul");
document
  .querySelector(".menu")
  ?.addEventListener("click", () => nav.classList.toggle("open"));

const links = [...document.querySelectorAll("nav ul a")];
const sections = document.querySelectorAll("main section[id]");
if (sections.length) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((l) =>
            l.classList.toggle(
              "active",
              l.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-40% 0px -55% 0px" },
  );
  sections.forEach((s) => io.observe(s));
}
links.forEach((l) =>
  l.addEventListener("click", () => nav.classList.remove("open")),
);
