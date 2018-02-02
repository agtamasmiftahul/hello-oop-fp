const Players = require(`../main/Players`);

class FootballPlayers extends Players {
  constructor(name, category, position, nationality, height, weight, club, achievements) {
    super();
    this.achievements = achievements;
  }
  setAchievements(achievements) {
    this.achievements = achievements;
  }
  getAchievements() {
    return this.achievements;
  }
  listAchievements() {
    const achievements = this.achievements;
    let text = "Achievements : ";
    achievements.map((achievement) => {
      text += `${achievement}, `
    })
    return console.log(text);
  }
}

module.exports = FootballPlayers;