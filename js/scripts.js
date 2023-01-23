//business logic
//constructor
function Place(id, placeName, yearVisited, sideLocations, notes) {
  this.id = id;
  this.placeName = placeName;
  this.yearVisited = yearVisited;
  this.sideLocations = {};
  this.notes = notes;
}

//business logic for adding sideLocations -sL-)
Place.prototype.addSideLocations = function(sL1, sL2, sL3) {
  this.sideLocations[sL1] = sL1;
  this.sideLocations[sL2] = sL2;
  this.sideLocations[sL3] = sL3;
}

// entering places
let boston = new Place ("0","Boston", "2014", "The Bay", "It was more humid than I thought it would be.");
let longBeach = new Place ("1","Long Beach, CA","2015","The Pyramid","It was a nice trip");
longBeach.addSideLocations("Joes tent", "Joes sidewalk", "Joe's suitcase");

console.log(longBeach);






