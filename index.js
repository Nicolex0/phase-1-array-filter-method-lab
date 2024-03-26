const drivers = [
    'Bobby',
    'Sammy',
    'Sally',
    'Annette',
    'Sarah',
    'bobby',
  ];

  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name === name);
  }