const Discord = require('discord.js')
exports.errorResponse = (type, extraInfo) =>{
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    switch(type){
        case "noperms":
            errorEmbed.setTitle(`You don't have the permission "${extraInfo}".`);
            break;
        case "wrongargs":
            errorEmbed.setTitle(`Invalid Arguments! Valid Arguments: ${extraInfo}`);
            break;
        case "noattachement":
            errorEmbed.setTitle(`Your message has no attachements`);
            break;
        case "namenotfound":
            errorEmbed.setTitle(`The username "${extraInfo}" couldn't be found, try again.`);
            break;
        case "guildnotfound":
            errorEmbed.setTitle(`Couldn't find the guild "${extraInfo}".`);
            break;
        case "notaguildmember":
            errorEmbed.setTitle(`You are not a guild member.`);
            break;
        case "guildmembernotfound":
            errorEmbed.setTitle(`Couldn't find the guild member "${extraInfo}"`);
            break;
        case "wrongdate":
            errorEmbed.setTitle(`You can't set someone on Shore Leave from now to a point in the past.`);
            break;
    }
    return errorEmbed
}
exports.index = (a, arr) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == a) { return i; }
        }
    }
    return -1;
}
exports.setupTimeDiff = (diff) => {
	years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
	days = Math.floor((diff - years * (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
	hours = Math.floor((diff - years * (365 * 24 * 60 * 60 * 1000) - days * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	minutes = Math.floor((diff - years * (365 * 24 * 60 * 60 * 1000) - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000)) / (60 * 1000));
    output = `${years > 0 ? years + "y:" : ""}${days > 0 ? days + "d:" : ""}${hours > 0 ? hours + "h:" : ""}${minutes > 0 ? minutes + "min" : ""}`
    output = output[output.length - 1] == ":" ? output.slice(0, -1) : output;
    return output;
}
exports.splitString = (str) => {
let output = []
if (str.length > 1000){
  n = Math.floor(str.length/1000)
    for(i=0;i<=n;i++){
        a1 = str.substr(0, 1000)
        endingIndex = a1.lastIndexOf('\n')
        output.push(str.slice(0, endingIndex))
        str = str.replace(str.substr(0, endingIndex), "")      
  }
}else{
    output.push(str)
}
return output;
}