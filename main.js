let cheese = 0
let clickUpgrades = {
  knife: {
    price: 30,
    quantity: 0,
    multiplier: 1
  },
  drill: {
    price: 250,
    quantity: 0,
    multiplier: 15
  }
};

let automaticUpgrades = {
  mousetronaut: {
    price: 400,
    quantity: 0,
    multiplier: 20
  },
  station: {
    price: 1500,
    quantity: 0,
    multiplier: 200
  }
};
function mine() {
  cheese++
  for (const key in clickUpgrades) {
    let upgrade = clickUpgrades[key]
    cheese += upgrade.quantity * upgrade.multiplier
  }
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
  document.getElementById("click-count").innerText = 1 + clickUpgrades.drill.quantity * clickUpgrades.drill.multiplier + clickUpgrades.knife.quantity * clickUpgrades.knife.multiplier
  document.getElementById("auto-count").innerText = 0 + automaticUpgrades.mousetronaut.quantity * automaticUpgrades.mousetronaut.multiplier + automaticUpgrades.station.quantity * automaticUpgrades.station.multiplier
  for (let key in clickUpgrades) {
    document.getElementById(key + "-quantity").innerText = clickUpgrades[key].quantity
    document.getElementById(key + "-quantity-count").innerText = clickUpgrades[key].quantity * clickUpgrades[key].multiplier
    document.getElementById(key).innerText = clickUpgrades[key].price
  }
  for (let key in automaticUpgrades) {
    document.getElementById(key + "-quantity").innerText = automaticUpgrades[key].quantity
    document.getElementById(key + "-quantity-count").innerText = automaticUpgrades[key].quantity * automaticUpgrades[key].multiplier
    document.getElementById(key).innerText = automaticUpgrades[key].price
  }

}
function upgradeClick(key) {
  let upgrade = clickUpgrades[key]
  cheese -= upgrade.price
  upgrade.quantity++
  upgrade.price += (Math.floor(upgrade.price - upgrade.price * .9))
  console.log("Upgraded " + key);
  draw()
}
function upgradeAuto(key) {
  let upgrade = automaticUpgrades[key]
  cheese -= upgrade.price
  upgrade.quantity++
  upgrade.price += (Math.floor(upgrade.price - upgrade.price * .7))
  console.log("Upgraded " + key);
  draw()
}

setInterval(runAutoUpgrade, 2000)
draw()