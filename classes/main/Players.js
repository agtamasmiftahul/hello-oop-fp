class Players {
  constructor(name, category, position, nationality, height, weight, club) {
    this.name = name;
    this.category = category;
    this.position = position;
    this.nationality = nationality;
    this.height = height;
    this.weight = weight;
    this.club = club;
  }

  getName() {
    return this.name;
  }

  getCategory() {
    return this.category;
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

  setCategory(category) {
    this.category = category;
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

  show() {
    console.log(`${this.category} Details
      Name : ${this.name}
      Position : ${this.position}
      Nationality : ${this.nationality}
      Height : ${this.height}
      Weight : ${this.weight}
      Club : ${this.club}`);
  }
}

module.exports = Players;