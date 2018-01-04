// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(driver) {
  copy = [...drivers, driver]
  return copy
}

function prependDriver(driver) {
  copy = [driver, ...drivers]
  return copy
}

function removeLastDriver() {
  copy = drivers.slice(0, drivers.length - 1)
  return copy
}

function removeFirstDriver() {
  copy = drivers.slice(1, drivers.length)
  return copy
}
