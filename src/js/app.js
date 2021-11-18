import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  
  const hotPrices = document.querySelectorAll('.hot.price');
  
  for (const hotPrice of hotPrices) {
    hotPrice.innerText = hotPrice.innerText + "🔥";
  }
});
