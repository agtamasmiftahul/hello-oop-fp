class Players {
  constructor(name,position,nationality,height,weight,club){
    this.name = name;
    this.position = position;
    this.nationality = nationality;
    this.height = height;
    this.weight = weight;
    this.club = club;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getNationality() {
    return this.name;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  getClub() {
    return this.club;
  }

  setName(name) {
    this.name = name;
  }

  setPosition(position) {
    this.position = position;
  }

  setNationality(nationality) {
    this.nationality = nationality;
  }

  setHeight(height) {
    this.height = height;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  setClub(club) {
    this.club = club;
  }
}

module.exports = Players;
