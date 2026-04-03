// Este es tu archivo peliculas.js
const baseDeDatos = [
    { 
        id: "NGOD-170", 
        titulo: "I Got Fingered By My Husband's Mean Boss...", 
        poster: "https://cdn001.imggle.net/webp/poster/20221202/1649409013.webp", 
        bg: "https://pics.dmm.co.jp/digital/video/ngod00170/ngod00170jp-13.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/NGOD-170.mp4", 
        estudio: "Jet Eizo",
        fecha: "Apr. 08, 2022", 
        actriz: "Nene Tanaka",
        tags: "Uncensored, Creampie" 
    },
    { 
        id: "IPIT-012", 
        titulo: "Business Trip Destination Room NTR Blond Female Employee Who Continued", 
        poster: "https://cdn001.imggle.net/webp/poster/20212709/1637387937.webp", 
        bg: "https://pics.dmm.co.jp/digital/video/ipit00012/ipit00012jp-10.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/IPIT-012.mp4", 
        estudio: "Idea Pocket",
        fecha: "2023-11-20",
        actriz: "Lily Hart",
        tags: "Older Sister"
    },
	    { 
        id: "URE-131", 
        titulo: "A Story About A Mother Who Gets Addicted To Sex With A Gangster", 
        poster: "https://cdn001.imggle.net/webp/poster/12082025/1767892920.webp", 
        bg: "https://pics.dmm.co.jp/digital/video/ure00131/ure00131jp-6.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/Ure-131.mp4.mp4", 
        estudio: "Madonna",
        fecha: "Jan. 13, 2026",
        actriz: "Reika Natsume",
        tags: "Reducing Mosaic"
    },
		{ 
        id: "STARS-160", 
        titulo: "Getting Their Fuck On In The Club", 
        poster: "https://cdn001.imggle.net/webp/poster/06032026/1775217128.webp", 
        bg: "https://pics.dmm.co.jp/digital/video/1stars160/1stars160jp-14.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/Stars-160.mp4.mp4", 
        estudio: "Sod Create",
        fecha: "Nov. 21, 2019",
        actriz: "Ichikawa Masami....",
        tags: "Slut, Hardcore"
    },
		{ 
        id: "AKB-023", 
        titulo: "Imamura Miho Cosplayer", 
        poster: "https://cdn001.imggle.net/webp/poster/20240410/1730688308.webp", 
        bg: "https://i.ibb.co/twnTm3K5/AKB-023.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/Akb-023.mp4.mp4", 
        estudio: "Tma ",
        fecha: "Feb. 25, 2011",
        actriz: "Miho Imamura",
        tags: "Cosplay"
    },
	{ 
        id: "EBWH-186", 
        titulo: "We Got Turned On By The Busty College Girl", 
        poster: "https://cdn001.imggle.net/webp/poster/20242012/1737085766.webp", 
        bg: "https://i.ibb.co/F432PgJC/EBWH-186.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/Ebwh-186.mp4.mp4", 
        estudio: "E-body",
        fecha: "Jan. 21, 2025",
        actriz: "Hibiki Amemiya",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "PPPE-300", 
        titulo: "Brainwashing Your Boobs With Your Eyes And Ears", 
        poster: "https://cdn001.imggle.net/webp/poster/20242012/1737083638.webp", 
        bg: "https://pics.dmm.co.jp/digital/video/pppe00300/pppe00300jp-8.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/Pppe-300.mp4.mp4", 
        estudio: "Oppai",
        fecha: "Jan. 21, 2025",
        actriz: "Noa Haruna",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "MOSJ-017", 
        titulo: "A Sadistic Older Sister's Educational Eroticism", 
        poster: "https://cdn001.imggle.net/webp/poster/01202026/1772038390.webp", 
        bg: "https://i.postimg.cc/qBZ9Znj4/MOSJ-017.png", 
        video: "https://appcine.b-cdn.net/Codegg/Mosj-017.mp4.mp4", 
        estudio: "Orustak Pictures",
        fecha: "Aug. 29, 2025",
        actriz: "Rena Sayama",
        tags: "Idol & Celebrity"
    },
	{ 
        id: "259LUXU-1875", 
        titulo: "I love licking your dick.", 
        poster: "https://cdn001.imggle.net/webp/poster/01202026/1772173522118.webp", 
        bg: "https://i.ibb.co/BK3QDYmP/259-LUXU-1875.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/259LUXU-1875.mp4.mp4", 
        estudio: "Luxury Tv",
        fecha: "Feb. 27, 2026",
        actriz: "Desconocida",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "259LUXU-1875", 
        titulo: "I love licking your dick.", 
        poster: "https://cdn001.imggle.net/webp/poster/01202026/1772173522118.webp", 
        bg: "https://i.ibb.co/BK3QDYmP/259-LUXU-1875.jpg", 
        video: "https://appcine.b-cdn.net/Codegg/259LUXU-1875.mp4.mp4", 
        estudio: "Luxury Tv",
        fecha: "Feb. 27, 2026",
        actriz: "Desconocida",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "SNOS-050", 
        titulo: "On A Hot Spring Trip With My Girlfriend And Her Sister", 
        poster: "https://cdn001.imggle.net/webp/poster/12082025/1767893299.webp", 
        bg: "https://i.postimg.cc/zvZRS3hN/SNOS-050.png", 
        video: "https://appcine.b-cdn.net/Codegg/Snos-050.mp4.mp4", 
        estudio: "S1 No.1 Style",
        fecha: "Jan. 13, 2026",
        actriz: "Niko Kawagoe",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "LULU-338", 
        titulo: "During Overtime, When We Were Alone In The Office", 
        poster: "https://cdn001.imggle.net/webp/poster/20242108/1727408240.webp", 
        bg: "https://i.postimg.cc/P5Vprp9Y/LULU-338.png", 
        video: "https://appcine.b-cdn.net/Codegg/LULU-338.mp4.mp4", 
        estudio: "Lunatics",
        fecha: "Oct. 01, 2024",
        actriz: "Waka Misono",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "MIDA-543", 
        titulo: "Covered In Yua Juice, Nonstop 320 Climaxes X Convulsions 2201", 
        poster: "https://cdn001.imggle.net/webp/poster/01202026/1772385327.webp", 
        bg: "https://i.postimg.cc/R0nvm29r/MIDA-543.png", 
        video: "https://appcine.b-cdn.net/Codegg/Mida-543.mp4.mp4", 
        estudio: "Moodyz",
        fecha: "Mar. 03, 2026",
        actriz: " Yua Fukuda",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "MIKR-076", 
        titulo: "A Mother Who Was Repeatedly Made To Cum By A Man With An", 
        poster: "https://cdn001.imggle.net/webp/poster/01202026/1772128191.webp", 
        bg: "https://i.postimg.cc/DZSt3XyD/MIKR-076.png", 
        video: "https://appcine.b-cdn.net/Codegg/MIKR-076.mp4.mp4", 
        estudio: "Moodyz",
        fecha: "Mar. 03, 2026",
        actriz: "Aki Sasaki",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "SNOS-063", 
        titulo: "Overflowing Breasts Will Make You Cum To Your Death", 
        poster: "https://cdn001.imggle.net/webp/poster/12082025/1767893239.webp", 
        bg: "https://i.postimg.cc/hPPZJT1j/SNOS-063.png", 
        video: "https://appcine.b-cdn.net/Codegg/Snos-063.mp4.mp4", 
        estudio: "S1 No.1 Style",
        fecha: "Jan. 13, 2026",
        actriz: "Miyuu Kiyohara",
        tags: "Reducing Mosaic"
    },
	
	
    // Sigue pegando aquí todos los bloques que tenías en Codes.html
];
