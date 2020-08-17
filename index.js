const Discord = require('discord.js');
const response = require('response.js');
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
                message.channel.send('This command put to romero to sleep sweet dreams');
                break;
            case "cantar": // to be refactored
                await message.channel.send('Colocao');
                await sleep(1000); console.log('.');
                await message.channel.send('como Drake');
                await sleep(1000); console.log('.');
                await message.channel.send('Fumo solo para');
                await sleep(500); console.log('.');
                await message.channel.send('quita el estré');
                await sleep(1300); console.log('.');
                await message.channel.send('A ese bby ya le');
                await sleep(300); console.log('.');
                await message.channel.send('hice tres');
                await sleep(300); console.log('.');
                await message.channel.send('strike');
                await sleep(800); console.log('.');
                await message.channel.send('Todos quieren montarse en la de Naik');
                await sleep(2100); console.log('.');

                await message.channel.send('Colocao');
                await sleep(1000); console.log('.');
                await message.channel.send('como Drake');
                await sleep(1000); console.log('.');
                await message.channel.send('Fumo solo para');
                await sleep(500); console.log('.');
                await message.channel.send('quita el estré');
                await sleep(1300); console.log('.');
                await message.channel.send('A ese bby ya le');
                await sleep(300); console.log('.');
                await message.channel.send('hice tres');
                await sleep(300); console.log('.');
                await message.channel.send('strike');
                await sleep(800); console.log('.');
                await message.channel.send('Todos quieren montarse en la de Naik');
                await sleep(2100); console.log('.');

                await message.channel.send('Mambo counter-strike,');
                await sleep(500); console.log('.');
                await message.channel.send('a la cuenta de five');
                await sleep(1000); console.log('.');
                await message.channel.send('Le apagamo lo foco, like business life');
                await sleep(2000); console.log('.');
                await message.channel.send('Vivimo holiday, nada que lamentar');
                await sleep(2300); console.log('.');
                await message.channel.send('Te miro colocá, a mi vida restart');
                await sleep(2200); console.log('.');

                await message.channel.send('Todos quieren estar (uy)');
                await sleep(2000); console.log('.');
                await message.channel.send('Los miro mientra juego');
                await sleep(200); console.log('.');
                await message.channel.send('Helix Jump, ja');
                await sleep(1500); console.log('.');
                await message.channel.send('Me da hambre y yo como, ñam-ñam');
                await sleep(2500); console.log('.');
                await message.channel.send('Ante no teníamo pa cenar');
                await sleep(2500); console.log('.');
                await message.channel.send('Ahora estoy arriba de donde está');
                await sleep(2000); console.log('.');
                await message.channel.send('Pantallas LED, mi name por todas parte');
                await sleep(1000); console.log('.');
                await message.channel.send('Ninguno va a caer en la peli que te inventaste');
                await sleep(2700); console.log('.');
                await message.channel.send('Back in the day');
                await sleep(1000); console.log('.');
                await message.channel.send('intenté avivarte');
                await sleep(2000); console.log('.');
                await message.channel.send('Una pena que te vendas si se trata de pegarse');
                await sleep(1500); console.log('.');

                await message.channel.send('Es que estoy colocao, en una esquina virao');
                await sleep(5000); console.log('.');
                await message.channel.send('Tamo ya agonizao, con el time atrasao');
                await sleep(3000); console.log('.');
                await message.channel.send('Los bueno de mi lao, eso feka he olvidao');
                await sleep(3000); console.log('.');
                await message.channel.send('Les cerramo to el telón, pero ellos siguen con el show (uy)');
                await sleep(6500); console.log('.');

                await message.channel.send('Colocao');
                await sleep(1000); console.log('.');
                await message.channel.send('como Drake');
                await sleep(1000); console.log('.');
                await message.channel.send('Fumo solo para');
                await sleep(500); console.log('.');
                await message.channel.send('quita el estré');
                await sleep(1300); console.log('.');
                await message.channel.send('A ese bby ya le');
                await sleep(300); console.log('.');
                await message.channel.send('hice tres');
                await sleep(300); console.log('.');
                await message.channel.send('strike');
                await sleep(1000); console.log('.');
                await message.channel.send('Todos quieren montarse en la de Naik');
                await sleep(2400); console.log('.');

                await message.channel.send('Colocao');
                await sleep(1000); console.log('.');
                await message.channel.send('como Drake');
                await sleep(1000); console.log('.');
                await message.channel.send('Fumo solo para');
                await sleep(500); console.log('.');
                await message.channel.send('quita el estré');
                await sleep(1300); console.log('.');
                await message.channel.send('A ese bby ya le');
                await sleep(300); console.log('.');
                await message.channel.send('hice tres');
                await sleep(300); console.log('.');
                await message.channel.send('strike');
                await sleep(1000); console.log('.');
                await message.channel.send('Todos quieren montarse en la de Naik');
                await sleep(2400); console.log('.');

                await message.channel.send('Con la mente anestesiáaaaa');
                await sleep(3600); console.log('.');
                await message.channel.send('Aunque me mate buscando, no voy a encontraaaaaaaar');
                await sleep(4600); console.log('.');

                await message.channel.send('Saben, no e casualidad hacer luz de la fuckin oscuridad');
                await sleep(3000); console.log('.');
                await message.channel.send('Poder salirse un rato e la realidad');
                await sleep(2400); console.log('.');
                await message.channel.send('Que los malos tiempos duren una eternidad');
                await sleep(3000); console.log('.');

                await message.channel.send('Sa-sa-sa-sa-sabe, no es casualidad');
                await sleep(3400); console.log('.');
                await message.channel.send('Yo te juro que en el party no elegí sonar');
                await sleep(3400); console.log('.');
                await message.channel.send('Yo te juro que a tu boy no le quise gustar');
                await sleep(2400); console.log('.');
                await message.channel.send('Yo te juro que la music me trajo hasta acá');
                await sleep(800); console.log('.');


                await message.channel.send('Es que estoy colocao, en una esquina virao');
                await sleep(5200); console.log('.');
                await message.channel.send('Tamo ya agonizao, con el time atrasao');
                await sleep(3000); console.log('.');
                await message.channel.send('Los bueno de mi lao, eso feka he olvidao');
                await sleep(3000); console.log('.');
                await message.channel.send('Les cerramo to el telón, pero ellos siguen con el show (uy)');
                await sleep(6500); console.log('.');

                await message.channel.send('Colocao');
                await sleep(1000); console.log('.');
                await message.channel.send('como Drake');
                await sleep(1000); console.log('.');
                await message.channel.send('Fumo solo para');
                await sleep(500); console.log('.');
                await message.channel.send('quita el estré');
                await sleep(1300); console.log('.');
                await message.channel.send('A ese bby ya le');
                await sleep(300); console.log('.');
                await message.channel.send('hice tres');
                await sleep(100); console.log('.');
                await message.channel.send('strike');
                await sleep(1000); console.log('.');
                await message.channel.send('Todos quieren montarse en la de Naik');
                await sleep(2400); console.log('.');

                await message.channel.send('Es que estoy colocao,');
                await sleep(1000); console.log('.');
                await message.channel.send('como Drake');
                await sleep(1000); console.log('.');
                await message.channel.send('Fumo solo para');
                await sleep(500); console.log('.');
                await message.channel.send('quita el estré');
                await sleep(1300); console.log('.');
                await message.channel.send('A ese bby ya le');
                await sleep(300); console.log('.');
                await message.channel.send('hice tres');
                await sleep(100); console.log('.');
                await message.channel.send('strike');
                await sleep(1000); console.log('.');
                await message.channel.send('Todos quieren montarse en la de Naik');
                await sleep(2400); console.log('.');
                await sleep(2000);

                break;
            default:
                message.channel.send(troll(msg, message.author));
        }

    } catch (error) {
        console.error(error);
        message.reply(`Nooooo!! la concha de tu mama en tanga! mira lo que me hiciste hacer forro: ${error}`);
    }
});

bot.login(token);