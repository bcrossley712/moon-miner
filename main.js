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
function runAutoUpgrade() {
  for (let key in automaticUpgrades) {
    let upgrade = automaticUpgrades[key]
    cheese += (upgrade.quantity * upgrade.multiplier)
  }
  draw()
}
function draw() {
  document.getElementById("cheese-count").innerText = cheese
  for (let key in clickUpgrades) {
    // document.getElementById(key + "-count").innerHTML = automaticUpgrades[key].quantity
    document.getElementById(key).innerText = clickUpgrades[key].price
  }
}
function upgradeClick(key) {
  let upgrade = clickUpgrades[key]
  cheese -= upgrade.price
  upgrade.quantity++
  console.log("Upgraded " + key);
}

setInterval(runAutoUpgrade, 2000)
draw()