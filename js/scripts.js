//business logic for PlacesBook
function PlacesBook() {
  this.places = {};
}

PlacesBook.prototype.addPlace = function(place) {
  this.places[place] = place;
}

//business logic for places
function Place(city, state, yearVisited) {
  this.city = city;
  this.state = state;
  this.yearVisited = yearVisited;
}

Place.prototype.cityState = function() {
  return this.city + " " + this.state;
};

