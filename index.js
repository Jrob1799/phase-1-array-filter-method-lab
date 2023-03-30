// Code your solution here
// findMatching function
function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// fuzzyMatch function
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.startsWith(query));
}

// matchName function
function matchName(drivers, query) {
  return drivers.filter(driver => driver.name === query);
}