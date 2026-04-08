document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll(".about-tab");
    let panels = document.querySelectorAll(".about-panel");

    if (!tabs.length || !panels.length) {
        return;
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            let target = this.dataset.target;

            tabs.forEach((item) => item.classList.remove("active"));
            panels.forEach((panel) => panel.classList.remove("active"));

            this.classList.add("active");

            let targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});