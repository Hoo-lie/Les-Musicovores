// les données des musiques 
var dataMusic = ["Simple and Clean", "Vector to the heavens", "Endwalker - Footfalls", "To the edge", "Don't"]
// les doonnées des descriptions des musiques
var descriptionMusiques = [" <i>Simple and Clean</i> est une chanson écrite et interprétée par Utada Hikaru. Elle sert de musique de crédit pour le jeu-vidéo <strong>Kingdom Hearts 1</strong>, développé par Square Enix et Sortie en 2002. Il s'agit de ma musique préférée. J'y suis très attachée car je suis très attachée au jeu dans lequel elle apparaît ainsi que la scène associée : Les mondes sont sauvés mais Sora décide de ne pas rejoindre Kairi car il veut partir à la recherche de leur meilleur ami Riku, coincé derrière la porte du Royaume des ténèbres. Alors que les mondes retournent à leur état initial, Sora dit un dernier au revoir à Kairi et reprend ses paroles avant qu'il ne se prépare pour la bataille finale. Les deux s'attrapent la main avant que la distance entre les deux plateformes finissent par être telle qu'ils furent forcés de se lâcher. Je ne suis pas trop du type romantique mais j'aime le message de la chanson. Elle présente un couple qui désire prendre leur temps dans leur relation et de profiter du moment présent. Tout cela couplée avec une instru calme et reposante et la voix sensationnelle de Utada Hikaru.",
"Il s'agit du remix pour Kingdom Hearts 3 de la musique du véritable boss finale de <strong>Kingdom Hearts 358/2 Days</strong>. Elle reprend le leit motif du thème du personnage de Xion appelé <i>'Musique pour la tristesse de Xion'</i>. La version originale de cette musique capture la tension et la tragédie de la situation : Xion est contrainte de tuer son meilleur ami Roxas afin de rendre le réveil de Sora (le protagoniste de la franchise) possible. Nous prenons commande de Roxas lors d'une lutte déchirante entre 2 meilleurs amis. La version de Kingdom Hearts 3 de cette musique est plus intense. Contrairement à la mélodie plus calme de la version originale, celle-ci transmet la rage de vaincre de Xion ainsi que l'aggressivité de ses coups. J'aime énormément cette musique car je la trouve motivante. Lorsque je n'ai pas très envie de faire quelque chose, cette musique me donne la motivation de la faire.",
" <i>Endwalker - footfalls</i> est la musique de trailer pour l'extension <strong>Endwalker</strong> de Final Fantasy 14 Online. J'aime énormément cette musique car elle est à la fois énergique et sombre. Elle combine aussi touts les thèmes principaux des extensions précédentes. Elle se joue aussi lors du boss final, lorsque notre personnage affronte son plus grand rival : Zenos ",
"<i>To the Edge</i> est une musique de boss dans le MMORPG <strong>Final Fantasy 14 Online</strong>. Cette musique a un fort poid émotionnelle pour moi. Son compositeur, Masayoshi Soken, a composé cette musique lorsque ce dernier luttait contre un cancer. Il n'a prévenu personne mis à part le directeur de Square Enix et le producteur Yoshi-p. Alors que son heure était possiblement en train de venir, ce dernier a tout de même insister pour la composer. C'est peut-être pour ça que l'on entend des bruits d'horloges en arrière-plan. Par son histoire, je trouve cette musique inspirante. Elle nous montre qu'il ne faut jamais s'arrêter de vivre, peu importe les circonstances ",
"<i>Don't</i> est le thème de combat de <strong>Persona 3 Reload</strong>. Je trouve cette musique intéressante dans son approche. Elle reflète l'état d'esprit de la protagoniste du dlc : Aigis. Elle est un robot qui a fini par développer des émotions humaines au fur et à mesure de la première aventure. Cependant, cette dernière perd la personne qui lui est le plus cher au monde (le protagoniste) à la fin du jeu principale. Une nouvelle menace surgit et celle-ci hérite des pouvoirs du protagoniste. Mais sa raison de vivre est morte avec le protagoniste. Cette musique reflète la réticence de se battre d'Aigis. Nous le voyons dans les paroles. Selon moi, la phrase la plus marquante parmi les parole est : ' Je n'avais qu'un seul souhait et maintenant il ne se réalisera jamais'. Ayant moi-même eu un décès dans ma famille en début d'année scolaire, cette musique m'a beaucoup acccompagné dans ces temps difficiles. "];

// Les identifiant d'ancrage pour les boutons du sommaire
var identif = ["<div id='simple'></div>",
"<div id='vector'></div>",
"<div id='end'></div>", 
"<div id='edge'></div>", 
"<div id='dont'></div>"]


// les audios
var audioMusiques = ['<audio src="audio/simple_and_clean.mp3" controls>' + '</audio>',
'<audio src="audio/vector_to_the_heavens.mp3" controls>' +'</audio>', 
'<audio src="audio/endwalker.mp3" controls>' + '</audio>',
'<audio src="audio/to_the_edge.mp3" controls>' + '</audio>', 
'<audio src="audio/Dont.mp3" controls>' + '</audio>']



// les liens des musiques vers Youtube 
var LienMusiques = ['<a href="https://youtu.be/B1nDzB1P8GM" alt="Simple and Clean"><div class="youtube"> &#9655;</div></a>',
'<a href="https://youtu.be/xJMWAM--ePM" alt="vector to the heavens - Xion"><div class="youtube"> &#9655;</div> </a>',
'<a href="https://youtu.be/-vJn7MXRBX4" alt=" Endwalker - Footfalls"><div class="youtube"> &#9655;</div></a>',
'<a href="https://youtu.be/oI671BAORUM" alt=" To the Edge - Forge Ahead"><div class="youtube"> &#9655;</div></a>',
'<a href="https://youtu.be/dT5Ck6bXBu8" alt="Dont"><div class="youtube"> &#9655;</div></a>']


// les liens des images associés aux sections
var ImageMusiques = ["<img src='img/img_sections/Sora_KHIII.webp' alt='Sora' class='kh'></a>", 
"<img src='img/img_sections/xion.webp' alt='Xion' class='xion'></a>", 
"<img src='img/img_sections/warrior_of_light.png' alt='Guerrier de la lumière' class='ff14'></a>", 
"<img src='img/img_sections/elidibus.webp' alt=' Elidibus' class='misterfantasy'></a>",
"<img src='img/img_sections/aigis.png' alt='Aigis' class='toaster'></a>"]



