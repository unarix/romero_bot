var songs = [
    {
        name: 'Colocao',
        artist: 'Niki Nicole',
        year: '2020',
        musicsrc: 'https://www.youtube.com/watch?v=kh1sF-sbkbw',
        videosrc: 'https://www.youtube.com/watch?v=kh1sF-sbkbw',
        lyric: [
            { phrase: 'Colocao',                                                        wait: 1000,     chorus: 1 },
            { phrase: 'como Drake',                                                     wait: 1000,     chorus: 1 },
            { phrase: 'Fumo solo para',                                                 wait: 500,      chorus: 1 },
            { phrase: 'quita el estré',                                                 wait: 1300,     chorus: 1 },
            { phrase: 'A ese bby ya le',                                                wait: 300,      chorus: 1 },
            { phrase: 'hice tres',                                                      wait: 300,      chorus: 1 },
            { phrase: 'strike',                                                         wait: 800,      chorus: 1 },
            { phrase: 'Todos quieren montarse en la de Naik',                           wait: 2100,     chorus: 1 },
            { phrase: 'Mambo counter-strike,',                                          wait: 500,      chorus: 2 },
            { phrase: 'a la cuenta de five',                                            wait: 1000,     chorus: 2 },
            { phrase: 'Le apagamo lo foco, like business life',                         wait: 2000,     chorus: 2 },
            { phrase: 'Vivimo holiday, nada que lamentar',                              wait: 2300,     chorus: 2 },
            { phrase: 'Te miro colocá, a mi vida restart',                              wait: 2200,     chorus: 2 },
            { phrase: 'Todos quieren estar (uy)',                                       wait: 2000,     chorus: 3 },
            { phrase: 'Los miro mientra juego',                                         wait: 200,      chorus: 3 },
            { phrase: 'Helix Jump, ja',                                                 wait: 2200,     chorus: 3 },
            { phrase: 'Me da hambre y yo como, ñam-ñam',                                wait: 2500,     chorus: 3 },
            { phrase: 'Ante no teníamo pa cenar',                                       wait: 2500,     chorus: 3 },
            { phrase: 'Ahora estoy arriba de donde está',                               wait: 2000,     chorus: 3 },
            { phrase: 'Pantallas LED, mi name por todas parte',                         wait: 1000,     chorus: 3 },
            { phrase: 'Ninguno va a caer en la peli que te inventaste',                 wait: 2700,     chorus: 3 },
            { phrase: 'Back in the day',                                                wait: 1000,     chorus: 3 },
            { phrase: 'intenté avivarte',                                               wait: 2000,     chorus: 3 },
            { phrase: 'Una pena que te vendas si se trata de pegarse',                  wait: 1500,     chorus: 3 },
            { phrase: 'Es que estoy colocao, en una esquina virao',                     wait: 5000,     chorus: 4 },
            { phrase: 'Tamo ya agonizao, con el time atrasao',                          wait: 3000,     chorus: 4 },
            { phrase: 'Los bueno de mi lao, eso feka he olvidao',                       wait: 3000,     chorus: 4 },
            { phrase: 'Les cerramo to el telón, pero ellos siguen con el show (uy)',    wait: 6500,     chorus: 4 },
            { phrase: 'Con la mente anestesiáaaaa',                                     wait: 3600,     chorus: 5 },
            { phrase: 'Aunque me mate buscando, no voy a encontraaaaaaaar',             wait: 4600,     chorus: 5 },
            { phrase: 'Saben, no e casualidad hacer luz de la fuckin oscuridad',        wait: 3000,     chorus: 5 },
            { phrase: 'Poder salirse un rato e la realidad',                            wait: 2400,     chorus: 5 },
            { phrase: 'Que los malos tiempos duren una eternidad',                      wait: 3000,     chorus: 5 },
            { phrase: 'Sa-sa-sa-sa-sabe, no es casualidad',                             wait: 3400,     chorus: 5 },
            { phrase: 'Yo te juro que en el party no elegí sonar',                      wait: 3400,     chorus: 5 },
            { phrase: 'Yo te juro que a tu boy no le quise gustar',                     wait: 2400,     chorus: 5 },
            { phrase: 'Yo te juro que la music me trajo hasta acá',                     wait: 800,      chorus: 5 }
        ],
        steps: [1,2,3,4,1,1,4,5,1,1]
    }
];

module.exports = {
    help: function () { // show all songs available
        try {
            var collection = '';
            for (var i = 0; i < songs.length; i++) {
                var song = songs[i];
                collection += `Name: ${song.name} (Released in ${song.year})\nArtist: ${song.artist}\nSong: ${song.musicsrc}\nVideo: ${song.videosrc}`;
            }
            return collection;
        } catch (e) { throw e; }
    },
    sing: function (name) {
        try {
            var lyric = [];
            var song = songs.find(x => x.name == name);
            // creating song
            for (var i = 0; i < song.steps.length; i++) {
                var chorus = song.lyric.filter(x => x.chorus == song.steps[i]);
                for (var x = 0; x < chorus.length; x++) {
                    lyric.push(chorus[x]);
                }
            }
            return lyric;

            //// write song
            //for (var i = 0; i < lyric.length; i++) {
            //    await msgobj.channel.send(lyric[i].phrase);
            //    await sleep(lyric[i].wait);
            //    console.log('.');
            //}
            //await sleep(2000);
        } catch (e) { throw e; }
    }
};