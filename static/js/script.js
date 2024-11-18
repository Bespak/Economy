document.addEventListener("DOMContentLoaded", function () {
    const btnSidebar = document.getElementById("toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    btnSidebar.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar-collapsed");
        mainContent.classList.toggle("sidebar-collapsed");
    });
});
