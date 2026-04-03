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
	{ 
        id: "FPRE-112", 
        titulo: "A Voluptuous Slut Who Plays With Her Cock Pet", 
        poster: "https://cdn001.imggle.net/webp/poster/20240410/1730429980.webp", 
        bg: "https://i.postimg.cc/X7P3HMb6/FPRE-112.png", 
        video: "https://appcine.b-cdn.net/Codegg/FPRE-112.mp4", 
        estudio: "Fitch",
        fecha: "Nov. 05, 2024",
        actriz: "Ran Kikuno",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "JUR-209", 
        titulo: "Who Used To Like Me, Has Transformed Into A Sexy", 
        poster: "https://cdn001.imggle.net/webp/poster/20242012/1737686201.webp", 
        bg: "https://i.postimg.cc/52k5fMhx/JUR-209.png", 
        video: "https://appcine.b-cdn.net/Codegg/Jur-209.mp4", 
        estudio: "Madonna",
        fecha: " Jan. 28, 2025",
        actriz: "Noa Haruna",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "VAGU-158", 
        titulo: "Making Daughter-in-law Of Nozomi And My Love", 
        poster: "https://cdn001.imggle.net/webp/poster/20242012/1735698775.webp", 
        bg: "https://i.postimg.cc/NG1QfJD5/VAGU-158.png", 
        video: "https://appcine.b-cdn.net/Codegg/Jur-209.mp4", 
        estudio: "Venus",
        fecha: "Jul. 13, 2016",
        actriz: "Nozomi Tanihara",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "MIAB-433", 
        titulo: "Breast Crushing, Infinite Piston, Sperm Reflux", 
        poster: "https://cdn001.imggle.net/webp/poster/20250903/1744304112.webp", 
        bg: "https://i.postimg.cc/pLfm9VXn/MIAB-433.png", 
        video: "https://appcine.b-cdn.net/Codegg/MIAB-433.mp4", 
        estudio: "Moodyz",
        fecha: "Apr. 15, 2025",
        actriz: "Noa Haruna",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "NUKA-081", 
        titulo: "Six Creampies Without Pulling Out", 
        poster: "https://cdn001.imggle.net/webp/poster/06032026/1773367130.webp", 
        bg: "https://i.postimg.cc/43FLv0Dk/NUKA-081.png", 
        video: "https://appcine.b-cdn.net/Codegg/Nuka-081.mp4", 
        estudio: "Center Village",
        fecha: "Mar. 05, 2026",
        actriz: "Fumika Nagasawa",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "MSQD-005", 
        titulo: "Oral sex class Haruno Ando", 
        poster: "https://cdn001.imggle.net/webp/poster/06032026/1773532012826.webp", 
        bg: "https://i.postimg.cc/9QKfdJFD/MSQD-005.png", 
        video: "https://appcine.b-cdn.net/Codegg/MSQD-005.mp4", 
        estudio: "Masquerade",
        fecha: "Feb. 21, 2026",
        actriz: "Haruno Ando",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "AMBI-108", 
        titulo: "Devil Father's Sex Toy Conceived And Torn", 
        poster: "https://cdn001.imggle.net/webp/poster/06032026/1773453514.webp", 
        bg: "https://i.postimg.cc/9Mr9b0ZY/AMBI-108.png", 
        video: "https://appcine.b-cdn.net/Codegg/AMBI-108.mp4", 
        estudio: "Planet Plus",
        fecha: "Feb. 01, 2020",
        actriz: "Planet Plus",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "DLDSS-483", 
        titulo: "Turn My Winning Mother Into A Female", 
        poster: "https://cdn001.imggle.net/webp/poster/06032026/1772842892505.webp", 
        bg: "https://i.postimg.cc/85WmbBLy/DLDSS-483.png", 
        video: "https://appcine.b-cdn.net/Codegg/Dldss-483.mp4", 
        estudio: "Dahlia",
        fecha: "Apr. 09, 2026",
        actriz: "Suzume Mino",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "FNS-165", 
        titulo: "Who Was Unable To Return Home Due To A Typhoon", 
        poster: "https://cdn001.imggle.net/webp/poster/06032026/1773901863398.webp", 
        bg: "https://i.postimg.cc/m25N4d36/FNS-165.png", 
        video: "https://appcine.b-cdn.net/Codegg/Dldss-483.mp4", 
        estudio: "Faleno",
        fecha: "Apr. 09, 2026",
        actriz: "Nene Yoshitaka",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "099NTK-892", 
        titulo: "A slutty body with maximum huggability and raw sex 2", 
        poster: "https://cdn001.imggle.net/webp/poster/20241115/1733784913.webp", 
        bg: "https://i.postimg.cc/LsLY2Qxs/099NTK-892-(2).png", 
        video: "https://appcine.b-cdn.net/Codegg/099Ntk-892.mp4", 
        estudio: "Magic",
        fecha: "Dec. 09, 2024",
        actriz: "Desconocida",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "FPRE-222", 
        titulo: "Clothed Fuck With A Tall, Busty Model-type Slut", 
        poster: "https://cdn001.imggle.net/webp/poster/01202026/1770919055.webp", 
        bg: "https://i.postimg.cc/3R72gXdC/FPRE-222.png", 
        video: "https://appcine.b-cdn.net/Codegg/Fpre-222.mp4", 
        estudio: "Fitch",
        fecha: "Feb. 17, 2026",
        actriz: "Ran Kikuno ",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "IPIT-004", 
        titulo: "Emma Lawrence Oral SEX Queen Advent", 
        poster: "https://cdn001.imggle.net/webp/poster/20252204/1746500965.webp", 
        bg: "https://i.postimg.cc/SxS5GvvT/IPIT-004.png", 
        video: "https://appcine.b-cdn.net/Codegg/Ipit-004.mp4", 
        estudio: "Idea Pocket ",
        fecha: "Sep. 13, 2020",
        actriz: "Lily Hart ",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "JUL-703", 
        titulo: "Married Secretary, President's Office Creampie Sexual Intercourse", 
        poster: "https://cdn001.imggle.net/webp/poster/20230206/1687829315.webp", 
        bg: "https://i.postimg.cc/kXbZmMwD/JUL-703.png", 
        video: "https://appcine.b-cdn.net/Codegg/JUL-703.mp4", 
        estudio: "Madonna",
        fecha: "Sep. 14, 2021",
        actriz: "Lily Hart ",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "JUL-843", 
        titulo: "On The 7th Day, I Lost My Reason", 
        poster: "https://cdn001.imggle.net/webp/poster/20230207/1688264926.webp", 
        bg: "https://i.postimg.cc/MpTfM7mX/JUL-843.png", 
        video: "https://appcine.b-cdn.net/Codegg/JUL-843.mp4", 
        estudio: "Madonna",
        fecha: "Jan. 25, 2022",
        actriz: "Lily Hart ",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "JUR-669", 
        titulo: "My Stepson Broke His Arms And Legs", 
        poster: "https://cdn001.imggle.net/webp/poster/06032026/1773948927.webp", 
        bg: "https://i.postimg.cc/3NkTsN3n/JUR-669.png", 
        video: "https://appcine.b-cdn.net/Codegg/Jur-669.mp4", 
        estudio: "Madonna",
        fecha: "Mar. 24, 2026",
        actriz: "Miyuu Imai",
        tags: "Reducing Mosaic"
    },
	{ 
        id: "IPIT-006", 
        titulo: "SEX CLIMAX Pleasure Climax 3 Production Special", 
        poster: "https://cdn001.imggle.net/webp/poster/20252204/1746587696.webp", 
        bg: "https://i.postimg.cc/7LDMdwvR/IPIT-006.png", 
        video: "https://appcine.b-cdn.net/Codegg/Ipit-006.mp4", 
        estudio: "Idea Pocket",
        fecha: "Oct. 13, 2020",
        actriz: "Lily Hart",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "JUL-535", 
        titulo: "A Beautiful Married Woman Drowing In Pleasure At", 
        poster: "https://cdn002.imggle.net/webp/poster/jul-535.webp", 
        bg: "https://i.ibb.co/cXvRfq9M/vlcsnap-2026-03-25-17h19m16s857.png", 
        video: "https://appcine.b-cdn.net/Codegg/Ipit-006.mp4", 
        estudio: "Madonna",
        fecha: "Apr. 07, 2021",
        actriz: "Lily Hart",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "JUL-908", 
        titulo: "Continued To Be Squid In Uncontrollable Unequaled", 
        poster: "https://cdn001.imggle.net/webp/poster/20221202/1647624162.webp", 
        bg: "https://i.ibb.co/4wwcN6Mz/JUL-908.png", 
        video: "https://appcine.b-cdn.net/Codegg/Jul-908.mp4", 
        estudio: "Madonna",
        fecha: "Mar. 22, 2022",
        actriz: "Lily Hart",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "JIPX-958", 
        titulo: "Wild Iku Muscle Slender Beauty's Acme Super", 
        poster: "https://cdn001.imggle.net/webp/poster/20222410/1668821998.webp", 
        bg: "https://i.ibb.co/R4hNj8zP/IPX-958.png", 
        video: "https://appcine.b-cdn.net/Codegg/Ipx-958.mp4", 
        estudio: "Idea Pocket",
        fecha: "Mar. 22, 2022",
        actriz: "Ruisa Totsuki",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "JUL-941", 
        titulo: "A Foreign Wife Who Is Not Familiar With The Housing", 
        poster: "https://cdn001.imggle.net/webp/poster/20221904/1650607404.webp", 
        bg: "https://i.ibb.co/XfYhCfrZ/JUL-941.png", 
        video: "https://appcine.b-cdn.net/Codegg/JUL-941.mp4", 
        estudio: "Madonna",
        fecha: "Apr. 26, 2022",
        actriz: "Lily Hart ",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "MEYD-671", 
        titulo: "The Company That Applied For The Part Recruitment Called", 
        poster: "https://cdn002.imggle.net/webp/poster/meyd-671.webp", 
        bg: "https://i.ibb.co/fsrG0HQ/MEYD-671.png", 
        video: "https://appcine.b-cdn.net/Codegg/Meyd-671.mp4", 
        estudio: "Tameike Goro",
        fecha: "Apr. 13, 2021",
        actriz: "Lily Hart ",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "MIAA-685", 
        titulo: "Foreign Bride Who Does Not Know Foreplay Was Trained", 
        poster: "https://cdn001.imggle.net/webp/poster/20221108/1660627911.webp", 
        bg: "https://i.ibb.co/1tyfK72M/MIAA-685.png", 
        video: "https://appcine.b-cdn.net/Codegg/MIAA-685.mp4", 
        estudio: "Moodyz",
        fecha: "Aug. 02, 2022",
        actriz: "Lily Hart ",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "RKI-614", 
        titulo: "Ultra-Sexy Dirty Talk Master Lily Heart's", 
        poster: "https://cdn002.imggle.net/webp/poster/rki-614.webp", 
        bg: "https://i.ibb.co/M51v2Swp/RKI-614.png", 
        video: "https://appcine.b-cdn.net/Codegg/RKI-614.mp4", 
        estudio: "Moodyz",
        fecha: "Jul. 14, 2021",
        actriz: "Lily Hart ",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "SONE-574", 
        titulo: "When your partner is in front of you, you", 
        poster: "https://cdn001.imggle.net/webp/poster/20253001/1738866422.webp", 
        bg: "https://i.ibb.co/LhxSkPcg/SONE-574.png", 
        video: "https://appcine.b-cdn.net/Codegg/Sone-574.mp4", 
        estudio: "S1 No.1 Style",
        fecha: "Feb. 07, 2025",
        actriz: "Aka Asuka",
        tags: "Reducing Mosaic"
    }
	{ 
        id: "GVH-255", 
        titulo: "A Lascivious Wife Who Provokes With No Bra", 
        poster: "https://cdn002.imggle.net/webp/poster/gvh-255.webp", 
        bg: "https://i.ibb.co/35NDYkJk/GVH-255.png", 
        video: "https://appcine.b-cdn.net/Codegg/Gvh-255.mp4", 
        estudio: "Jul. 01, 2021",
        fecha: "Feb. 07, 2025",
        actriz: "Lily Hart",
        tags: "Reducing Mosaic"
    }
	
	
    // Sigue pegando aquí todos los bloques que tenías en Codes.html
];
