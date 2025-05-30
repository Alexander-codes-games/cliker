let count = parseInt(localStorage.getItem("clicks")) || 0;
let clickPower = parseInt(localStorage.getItem("clickPower")) || 1;
let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 10;

const clickCountDisplay = document.getElementById("click-count");
const clickBtn = document.getElementById("click-btn");
const upgradeBtn = document.getElementById("upgrade-btn");
const upgradeCostDisplay = document.getElementById("upgrade-cost");

function updateDisplay() {
  clickCountDisplay.textContent = count;
  upgradeCostDisplay.textContent = upgradeCost;
}

clickBtn.addEventListener("click", () => {
  count += clickPower;
  saveGame();
  updateDisplay();
});

upgradeBtn.addEventListener("click", () => {
  if (count >= upgradeCost) {
    count -= upgradeCost;
    clickPower++;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    saveGame();
    updateDisplay();
  }
});

function saveGame() {
  localStorage.setItem("clicks", count);
  localStorage.setItem("clickPower", clickPower);
  localStorage.setItem("upgradeCost", upgradeCost);
}

// Init on page load
updateDisplay();
