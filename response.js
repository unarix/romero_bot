var incomingMsg = {
    msg: [
        {
            words: ["hola", "buenas", "buenas noches", "holis"],
            response: [
                "que saludas la concha de tu madre?",
                ""
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
                "que queres salame? No molestes",
                "otra vez vos gil? Que parte de no molestar no entendes?",
                "que pasó? Me estaba garchando a tu vieja y me cortaste el polvaso",
                "que? Como? Me estaba re chacoteando ameo",
                "uhhh dejá de molestar denso",
                "banca que termino de cascotear a la fede y ya te atiendo",
                "me estan llamando para ir a plaza de mayo?",
                "me nombras una vez mas y te rompo todo el rancho"
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
            words: ["cucarcha"],
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
                "qué hacen dos epilépticos en una cabina de fotos? La fiesta de la espuma eeeeaaaahhhhh!",
                "que hace un africano en una montaña nevada? Un punto negro",
                "el veneno de la araña mata a la lagartija, que veneno tendra tu concha que me acalambra la pija",
                "usted sabe porque a los negros les hacen agujeros en el ataud? Para que los gusanos salgan a vomitar",
                "a que se parece un negro con granos? A un Ferrero Rocher",
                "sabe que tiene una rubia contra los forros? Los labios",
                "una rubia acompaña a su hija al ginecólogo y este le dice, mire señora el clitoris de su hija está como la tapa de una birome, y la madre le contesta, tan grande? No! Todo mordido",
                "hasta que numero pueden contar las mujeres? Hasta el 68, porque con el 69 tienen la boca llena",
                "que hace un judio cuando tiene frio? Se para al lado de la estufa y si tiene mucho mucho frio, la enciende"
            ]
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
            words: ["jaja"],
            response: ["de que te reís bobo?"]
        },
        {
            words: ["hablar"],
            response: ["habla con tu novia y preguntale cuanto me mide"]
        },
        {
            words: ["juega"],
            response: ["hmmm alguien tiene ganas de jugar con algo..."]
        },
    ]
};

module.exports = {
    troll: function(msg, author)
    {
        try {
            var obj = null;

            // find coincidences
            for (var i = 0; i < this.incomingMsg.msg.length; i++)
                if (this.incomingMsg.msg[i].words.includes(msg))
                    obj = this.incomingMsg.msg[i];

            // get random response
            return `${author}, ${obj.response[Math.floor(Math.random() * obj.response.length)]}`;
        } catch (e) { throw e; }
    }
};