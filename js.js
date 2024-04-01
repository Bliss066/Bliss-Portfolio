document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("main-header");
    const headerHeight = header.clientHeight;
  
    function toggleHeaderBackground() {
        if (window.scrollY > headerHeight) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    }
  
    // Initial call to set the header background based on initial scroll position
    toggleHeaderBackground();
  
    // Add the event listener to toggle the header background when scrolling
    window.addEventListener("scroll", toggleHeaderBackground);
});