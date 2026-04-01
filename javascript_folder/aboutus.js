document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".about-tab");
    const panels = document.querySelectorAll(".about-panel");

    if (!tabs.length || !panels.length) {
        return;
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            const target = this.dataset.target;

            tabs.forEach((item) => item.classList.remove("active"));
            panels.forEach((panel) => panel.classList.remove("active"));

            this.classList.add("active");

            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});