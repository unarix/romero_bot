/* requires */
const Discord = require('discord.js');
const mtroll = require('./troll.js'); //troll module
const msing = require('./sing.js'); //sing module

/* configs */
const bot = new Discord.Client();
const http = require('http');
const port = process.env.PORT || 3000

/* Seteo el sever */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<center><br><h1>Romero is running!</h1> <p>Add me with the CLIENT ID: 741061506602369115<p></center>');
});

/* despierto a aws para obtener las variables de entorno */
const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.DISCO_KEY,
});

console.log("La key esta seteada a: " + s3.config.accessKeyId);

const token = s3.config.accessKeyId;

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

bot.once('ready', () => {
	console.log('El bot bardeador ya esta activo!');
});

/* Esta funcion pone a dormir el proceso actual por x milisegundos */
function sleep(ms) {
    console.log(ms);
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* cuando recibo un mensaje, me fijo que debo responder */ 
bot.on('message', async message => {
    // Si el mensaje proviene del bot, return.
    if (message.author.bot) return;

    try {
        const args = message.content;//.slice(prefix.length).trim().split(' ');
        const msg = args.toLowerCase();//.shift().toLowerCase();

        var cmd = msg.substring(0,5);

        switch (cmd) {
            case "!play":
                message.channel.send('This command will play your favourite song writing: !play the toppers walking on sunset');
                break;
            case "!meme":
                message.channel.send('This command will send memes realted to som topic (for instance: !meme your fucking mum)');
                break;
            case "!stop":
                // go to sleep
                message.channel.send('This command put to romero to sleep sweet dreams 10 seconds');
                sleep(10000);
                break;
            case "!sing": // to be refactored
                if (msg.includes('help'))
                    message.channel.send(msing.help());
                else {
                    // write song
                    var lyric = msing.sing(msg.substring(6, msg.length));
                    for (var i = 0; i < lyric.length; i++) {
                        await message.channel.send(lyric[i].phrase);
                        await sleep(parseInt(lyric[i].wait));
                    }
                }
                break;
            default:
                var msgtroll = mtroll.get(msg, message.author);
                if (msgtroll)
                    message.channel.send(msgtroll);
        }

    } catch (error) {
        console.error(error);
        message.reply(`Nooooo!! la concha de tu mama en tanga! mira lo que me hiciste hacer forro: ${error}`);
    }
});

bot.login(token);