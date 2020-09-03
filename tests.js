// test library
var mtroll = require("./troll.js");

// troll simple tests
console.log(mtroll.get("jaa", "test"));
console.log(mtroll.get("chiste", "test"));
console.log(mtroll.get("che romero", "test"));
console.log(mtroll.get("romero", "test"));
console.log(mtroll.get("viernes", "test"));
console.log(mtroll.get("abrazo", "test"));
console.log(mtroll.get("jaa", "test"));

/* sing simple tests */
var msing = require("./sing.js");
// show help
console.log(msing.help());

// write song async
const wait = ms => new Promise((r, j) => setTimeout(r, ms)) // promise
const write = async (phrase, time) => { // set async mode
    await wait(time);
    return phrase;
}
const writeSong = async (lyric) => {
    try {
        for (var i = 0; i < lyric.length; i++)
            console.log(await write(lyric[i].phrase, lyric[i].wait));
    } catch (e) { throw e; }
}
var msg = "!sing Colocao";
writeSong(msing.sing(msg.substring(6, msg.length)));


/* wait input to exit */
console.log('Press any key to exit');
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));