// ⚔️ MADE BY TH0RF1NN — CODE LIKE A WARRIOR ⚔️
const profile = {
    username: "Jacob",
    playTime: 300,
    changeUserName(newName) {
        console.log("old user name is ", this.username);
        this.username = newName;
    },
    updatePlayTime(saatler) {
        this.playTime += saatler;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUserName("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
