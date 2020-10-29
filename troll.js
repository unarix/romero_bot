const { MessageEmbed } = require('discord.js');
const romeroimg = 'https://media.ambito.com/adjuntos/239/imagenes/037/162/0037162660.jpg';
const gatoverdaguerimg = 'https://www.dogalize.com/wp-content/uploads/2017/09/El-gato-de-Verdaguer.jpg';

var incomingMsg = {
    msg: [
        {
            words: ["hola", "buenas", "buenas noches", "holis"],
            response: [
                "que saludas la concha de tu madre?",
                new MessageEmbed().setTitle('Buenas buenas...').setColor('#0099ff').setImage('https://i.imgur.com/vLKXLpJ.jpeg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Buenas buenas...').setColor('#0099ff').setImage('https://i.imgur.com/aErKaMr.png').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Buenas buenas...').setColor('#0099ff').setImage('https://i.imgur.com/JdIQLq1.png').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Buenas buenas...').setColor('#0099ff').setImage('https://i.imgur.com/tUifYhP.jpeg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Buenas buenas...').setColor('#0099ff').setImage('https://i.imgur.com/VXZnPd9.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Buenas buenas...').setColor('#0099ff').setImage('https://i.imgur.com/dtlcVN0.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Buenas buenas...').setColor('#0099ff').setImage('https://i.imgur.com/M5MT5qy.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Hoy se pone fuerte el CS?').setColor('#0099ff').setImage('https://media1.tenor.com/images/eb896f707cb15eaec61d462f91776a15/tenor.gif?itemid=15925559').setThumbnail(romeroimg),
            ]
        },
        {
            words: ["counter", "se juega", "juega", "sale", "cs"],
            response: [
                new MessageEmbed().setTitle('Hoy se pone fuerte el CS?').setColor('#0099ff').setImage('https://i.imgur.com/JczmSbE.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Olvidate, hoy se come jugando').setColor('#0099ff').setImage('https://i.imgur.com/IzvtTN5.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Paren de campear...').setColor('#0099ff').setImage('https://i.imgur.com/rHhIWXe.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('No se olviden de poner la bombucha giles').setColor('#0099ff').setImage('https://i.imgur.com/lmooQXf.png').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Decile que juegue tu rrope, vos sos un asco').setColor('#0099ff').setImage('https://i.imgur.com/mKdXQc7.jpeg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('OK, cover me').setColor('#0099ff').setImage('https://i.imgur.com/JtmB5As.jpeg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Y recuerden esto, es mucho muy importante').setColor('#0099ff').setImage('https://i.imgur.com/2FMlVFe.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Hoy sale un...').setColor('#0099ff').setImage('https://i.imgur.com/RXJR2pS.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Hoy estoy manijaaa').setColor('#0099ff').setImage('https://i.imgur.com/B0YGuM2.gif').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('El nuevo teclado de quien ya sabemos...').setColor('#0099ff').setImage('https://i.imgur.com/WuFTbKs.jpg').setThumbnail(romeroimg)
            ]
        },
        {
            words: ["como va", "como andan", "como andas", "como estan", "que cuentan"],
            response: ["que te importa gorreado del orto!"]
        },
        {
            words: ["que onda"],
            response: ["que onda con que? bobo..."]
        },
        {
            words: ["viernes"],
            response: ["el viernes es de counter... y tu vieja es de culo abierto!"]
        },
        {
            words: ["abrazo"],
            response: ["abrazate a esta pija, gorreado"]
        },
        {
            words: ["romero", "romerito", "romerin", "rome"],
            response: [
                "toca de aca, con giles no hablo",
                "que me nombas salame? gorreado puto.",
                "otra vez gil? No me nombres mas forro",
                "que paso? Me estaba garchando a tu vieja y me cortaste el polvaso",
                "que? Como? Me estaba chaqueta ameo",
                "uhhh deja de molestar denso",
                "banca que termino de cascotear a la fede y ya te atiendo",
                "que hace? cuando vamos a plaza de mayo",
                "me nombras una vez mas y te abro el orto a chotasos",
                new MessageEmbed().setTitle('Parace que se fue...').setColor('#0099ff').setImage('https://fotos.perfil.com/2019/07/30/mortero-recompensa-07302019-760128.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Que pasa papu? Estoy laburando').setColor('#0099ff').setImage('https://fmvillaallende.com.ar/12-2017/resize_1513681641.jpg').setThumbnail(romeroimg)
            ]
        },
        {
            words: ["agresivo","agresiva","malo"],
            response: ["tu vieja es agresiva con mi chota puto"]
        },
        {
            words: ["amiguito"],
            response: ["tu viejo es amigo de esta verga, gil"]
        },
        {
            words: ["gente"],
            response: ["tu abuela me chupaba la pija mientras tu abuelo miraba... alto chaqueta tu abuelo"]
        },
        {
            words: ["orto"],
            response: ["por el orto es como le gusta a tu vieja... puto"]
        },
        {
            words: ["cucaracha"],
            response: ["la cucaracha la cucaracha...ya no puede caminar, porque no tiene, porque le falta, la pata que tenes metida en el orto gil"]
        },
        {
            words: ["mama", "mamasita", "vieja"],
            response: ["tu vieja me encanta..."]
        },
        {
            words: ["hdp","puto","gil","salame","tarado","imbecil", ],
            response: [
                "anda bajando un cambio... o te voy a tener que llenar la cara de puntasos",
                "ehh que zarpadito que estas ehh",
                "uhhh ta re loco este chabon",
                "aguantaaaaa",
                "uuuhh man alta llanta alta llanta",
                "ke loko eke kabon kakakaka"
            ]
        },
        {
            words: ["chiste"],
            response: [
                "que hacen dos epilepticos en una cabina de fotos? La fiesta de la espuma eeeeaaaahhhhh!",
                "el veneno de la ara�a mata a la lagartija, que veneno tendra tu concha que me acalambra la pija",
                "sabes que tiene una rubia contra los forros? Los labios",
                "una rubia acompa�a a su hija al ginecologo y este le dice, mire se�ora el clitoris de su hija esta como la tapa de una birome, y la madre le contesta, tan grande? No! Todo mordido",
                "hasta que numero pueden contar las mujeres? Hasta el 68, porque con el 69 tienen la boca llena",
                "que hace un judio cuando tiene frio? Se para al lado de la estufa y si tiene mucho mucho frio, la enciende",
                "un ni�o pregunton...agarra a su madre desprevenida y le pregunta. Mama mama como se hacen los ni�os? La madre sin saber que decir, finalmente le contesta, mira...papa pone una semillata en mama y la empuja con la punta de la poronga...",
                "cual es la pelicula preferida de Michael Jackson? Querida me cogi a los ni�os",
                "se abre el telon y aparece pradon metiendose una palangana en la cajeta, como se llama la obra? El DIU de la bestia",
                "que numero de calzado utiliza un paralitico? Rodado 27!",
                "sabes porue lo ni�os pobres tienen la nariz como los chanchos? De tanto mirar juguetes en las vidrieras!",
                "como saben los ciegos que despues de cagar tienen el culo limpio? Porque los perros guias dejan de lamer...",
                "sabes porque a Scioli lo auspicia ALBA? Porque con una sola mano alcanza...",
                "sabes porque las mujeres tienen 4 labios? Dos para decir boludeces y otros dos para pedir perdon...",
                "cual es el alimento mas nutritivo para la mujer? El pene! Porque tiene huevos, tiene carne, saca leche y huele a pescado...",
                "mama porque vos sos blanca, papa negro y yo amarilla? Ay hijita, si supieras la fiesta que hubo ese dia deberias alegrarte de no ladrar!",
                "en que se parece una mujer a una bolsa de harina? En que cuanto mas se sacude, mas polvos hecha...",
                "en una fiesta de despedida de soltero un tipo se emborracha y tiene un accidente en su miembro con una puerta. Se lo llevan de emergencia a un hospital y un medico decide entablillarlo. Al dia siguiente, en la noche de bodas, la mujer le dice mi amor mi amor, me conserve virgen para ti, entonces el marido se destapa y le dice mira, esta sin desembalar, esta sin desembalar...",
                "sabes porque monica lewinsky era cachetuda? Porque estaba guardando evidencias...",
                "sabes que es peor que te violen 10 piratas? Que el capitan Garfield te meta un dedo en el orto...",
                "sabes que hace una modelo despues de tener sexo? Se presenta...",
                "sabes como hay que hacer para callar una modelo? Preguntarle en que esta pensando...",
                "sabes porque se desmalla una modelo? Porque se olvido de respirar...",
                "sabes porque usan las modelos bombachas? Para abrigarse los tobillos...",
                "sabes que ves cuando ves una modelo a los ojos? La nuca del lado de adentro...",
                "el marido le dice a la mujer...hacemos un 68? Y la mujer le contesta y eso que es? El marido responde, vos me la chupas y yo te debo una...",
                "sabes que diferencia hay entre una gelatina y una frigida? En que la gelatina se mueve cuando te la comes",
                "sabes porque las modelos tienen la cara llena de agujeritos? De comer con el tenedor",
                "sabes cual es el refresco favorito de Monica Lewinsky? Semen-Up",
                "un espermatozoide le dice a otro...falta mucho para llegar al ovulo? Y el otro le contesta...mira mira, recien vamos por la garganta...",
                "sabes porque la chochina de la mujer nunca pasa de moda? Porque tiene un corte clasico...",
                "sabes en que se parece la mafia a un 69? En que si no tenes cuidado con la lengua vas a tragar mierda...te lo aseguro",
                "cual es la primer botella que destapa una mujer luego de las fiestas de fin de a�o? La botella de detergente...",
                "que le dice caperusita roja a pinocho cuando estan haciendo un 69? Mentime pinocho menitimeaarrhghgghdncksdndjsn"
            ],
            type: "MessageEmbed",
            title: "Ahi te va uno",
            img: '',
            thumbnail: gatoverdaguerimg,
            color: '#FF0000'
        },
        {
            words: ["piola"],
            response: ["Veni y tira de esta piola, gil!"]
        },
        {
            words: ["insoportable"],
            response: ["tu vieja me ama!"]
        },
        {
            words: ["mapa"],
            response: ["aca tengo un mapa que te lleva directo a mi chota!"]
        },
        {
            words: ['jaja', 'jaa'],
            response: [
                "de que te reis bobo?",
                "si si mejor reite jilguero",
                "ufff y este salame de que se rie?",
                "eso te parecio gracioso goma?",
                "jaja si si muy bueno...ufff que tarado",
                "si asi de facil tenes la risa no me quiero imaginar la cola",
                "deja de reirte que largas un olor a nepeeee terrible",
                "deja de sonreir salame, no ves que se ven todos los pendejos atrapados en los dientes?",
                "me encanta cuando reis, porque tenes la misma sonrisa de tu vieja cuando vio mi chota",
                "si si reite bien fuerte, como tu jermu cuando se la enterre",
                new MessageEmbed().setTitle('Si sos asi bobo').setColor('#0099ff').setImage('https://i.imgur.com/jZRbgYp.jpeg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Ehh? No lo entendi...').setColor('#0099ff').setImage('https://i.imgur.com/NVgKVZG.jpg').setThumbnail(romeroimg),
                new MessageEmbed().setTitle('Que gracioso').setColor('#0099ff').setImage('https://i.imgur.com/0WZuegt.gif').setThumbnail(romeroimg)
            ]
        },
        {
            words: ["hablar"],
            response: ["habla con tu novia y preguntale cuanto me mide"]
        },
        {
            words: ["necro"],
            response: [
                "A ese le gusta la pija!",
                "siiii beeeebeeeeee",
                "el nivel de necro, cada dia es mas bajo"
            ]
        },
        {
            words: ["orion"],
            response: [
                "alto puto es orion",
                "que orion me compre una ram que estoy tironeando pa... ",
                "no se puede ser mas lentooo!"
            ]
        },
        {
            words: ["panchito"],
            response: [
                "panchito no juega a nada... ",
                "ese panchito tendra mucha latencia o es malo asi de por si?",
                "panchito anda bien con los bot al 30%"
            ]
        },
        {
            words: ["eter"],
            response: [
                "Hay que reconocer que eter juega mejor cuando esta borracho ",
                "es mas fácil pegarle a eter que a los tachos",
                "eter, comprate una ram"
            ]
        },
        {
            words: ["json"],
            response: [
                "json sos malisimo",
                "json sos el peor, sos muy malo",
                "json andate, deja de jugar, sos malisimo",
                "json muerto, sos malisimo json, malisimo"
            ]
        },
        {
            words: ["alfred"],
            response: [
                "de alfred solo podemos decir que es un buen tipo",
                "alfred es un buen tipo",
                "sos un buen tipo alfred"
            ]
        },
        {
            words: ["juega"],
            response: ["hmmm alguien tiene ganas de jugar con algo..."]
        },
        {
            words: ["complicado"],
            response: ["complicada esta tu cola ..."]
        },
        {
            words: ["rato"],
            response: ["ese rato terminan siendo 5 horas"]
        }


    ]
};

module.exports = {
    get: function (msg, author) {
        try {
            var obj = null;

            // find coincidences
            exit_loops:
            for (var i = 0; i < incomingMsg.msg.length; i++)
                for (var x = 0; x < incomingMsg.msg[i].words.length; x++)
                    if (msg.includes(incomingMsg.msg[i].words[x])) {
                        obj = incomingMsg.msg[i];
                        break exit_loops;
                    }

            // exit if there is no coincidence
            if (obj == null) return;

            // Create object from type
            switch (obj.type) {
                case "MessageEmbed":
                    // getting random response
                    var text = obj.response[Math.floor(Math.random() * obj.response.length)];
                    obj = new MessageEmbed().setTitle(obj.title).setColor(obj.color).setDescription(text).setImage(obj.img).setThumbnail(obj.thumbnail);
                    break;
                default:
                    obj = obj.response[Math.floor(Math.random() * obj.response.length)];
                    break;
            }

            // if obj is a embed message
            if (obj.image != null)
                return obj;

            // if the obj is a simple string
            return `${author}, ${obj}`;
        } catch (e) { throw e; }
    }
};