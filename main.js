let cheese = 0
let clickUpgrades = {
  knife: {
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  drill: {
    price: 250,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  mousetronaut: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  station: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};
function mine() {
  cheese++
  console.log(cheese);
  document.getElementById("cheese-count").innerText = cheese
}
