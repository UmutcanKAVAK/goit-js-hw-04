// ⚔️ MADE BY TH0RF1NN — CODE LIKE A WARRIOR ⚔️
const profile = {
    username: "Jacob",
    playTime: 300,
    changeUserName(newName) {
        console.log("old user name is ", this.username);
        this.username = newName;
        console.log(this.username);

    },
    updatePlayTime(saatler) {
        this.playTime = saatler;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    }
};

//before updates jacob has 300 active hours.
console.log(profile.getInfo());
//
// now change username and playtime
profile.changeUserName("Thorfin");
profile.updatePlayTime(1200);
console.log(profile.getInfo());
//so ez