// for testing purposes
function confirmClickedElement() {
  console.log("It's working 😉");
}

//toggle between hiding and showing summary's elements
function showSummaryEstimate() {
  const summaryTop = document.querySelector(".summary-top");
  summaryTop.classList.toggle("summary-top-expanded");

  const summaryTopImg1 = document.querySelector(".expand-estimate-img");
  const summaryTopImg2 = document.querySelector(".shrink-estimate-img");
  summaryTopImg1.classList.toggle("expand-estimate-img_hide");
  summaryTopImg2.classList.toggle("shrink-estimate-img_show");

  const estimate = document.querySelector(".summary-estimate");
  estimate.classList.toggle("summary-estimate_show");

  const footer = document.querySelector("footer");
  footer.classList.toggle("footer-slider");
}

//deleting list item from shopping cart's list
const ul = document.querySelector(".main-ul");

ul.addEventListener("click", function (e) {
  if (e.target.className === "cancel") {
    e.target.closest("LI").remove();
  }
});
