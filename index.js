const Players = require(`./classes/Players`);

const messi = new Players();
messi.setName(`Lionel Messi`);
messi.setCategory(`Football Player`);
messi.setPosition(`Forward`);
messi.setNationality(`Argentina`);
messi.setHeight(`169`);
messi.setWeight(`70`);
messi.setClub(`F.C. Barcelona`);

messi.show();