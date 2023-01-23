//business logic
//constructor
function Place(id, placeName, yearVisited, sideLocations, notes) {
  this.id = id;
  this.placeName = placeName;
  this.yearVisited = yearVisited;
  this.sideLocations = [];
  this.notes = notes;
}

// entering places
let boston = new Place ("0","Boston", "2014", "The Bay", "It was more humid than I thought it would be.");
let longBeach = new Place ("1","Long Beach, CA","2015","The Pyramid","It was a nice trip");

//adding  method
Place.prototype.addSideLocation = function(sideLocation) {
  this.sideLocations.push(sideLocation);
}
boston.addSideLocation("Your mom's house");
boston.addSideLocation("Grandmas Condo");
console.log(boston);


//adding  a method
Place.prototype.nameNotes = function() {
  return this.placeName + " " + this.notes;
};




