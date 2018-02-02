const FootballPlayers = require(`./classes/inherit/footballPlayers`);
const EsportsPlayers = require(`./classes/inherit/esportsPlayers`);

const messi = new FootballPlayers();
messi.setName(`Lionel Messi`);
messi.setCategory(`Football Player`);
messi.setPosition(`Forward`);
messi.setNationality(`Argentina`);
messi.setHeight(`169`);
messi.setWeight(`70`);
messi.setClub(`F.C. Barcelona`);
messi.show();

const dendi = new EsportsPlayers();
dendi.setName(`Danil Ishutin`);
dendi.setCategory(`DOTA 2 Player`);
dendi.setPosition(`Mid Lanner`);
dendi.setNationality(`Ukraine`);
dendi.setHeight(`172`);
dendi.setWeight(`73`);
dendi.setClub(`Natus Vincere`);
dendi.show();