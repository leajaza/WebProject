let searchName = document.getElementById("searchName");
let sessionFilter = document.getElementById("sessionFilter");
let therapistCards = document.querySelectorAll(".therapist-page-card");
let noResults = document.getElementById("noResults");


function filterTherapists() {
  let searchValue = searchName.value.toLowerCase().trim();
  let sessionValue = sessionFilter.value;
  let visibleCount = 0;
  therapistCards.forEach(card => {
    let name = card.dataset.name;
    let session = card.dataset.session;
    let matchesName = name.includes(searchValue);
    let matchesSession = sessionValue === "all" || session === sessionValue;

    if (matchesName && matchesSession) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });
  if (visibleCount === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}
searchName.addEventListener("input", filterTherapists);
sessionFilter.addEventListener("change", filterTherapists);
