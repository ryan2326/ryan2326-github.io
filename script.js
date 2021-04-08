let navItem = Array.from(document.querySelectorAll(".navbar-nav .nav-item a"));

const handleClick = (e) => {
  if (window.innerWidth <= 992) document.querySelector(".navbar-toggler").click();
  navItem.forEach((node) => {
    node.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

navItem.forEach((node) => {
  node.addEventListener("click", handleClick);
});
