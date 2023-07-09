CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
    path VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL, 
    likes INTEGER DEFAULT 0
);

INSERT INTO gallery (path, description)
VALUES ('images/proposal.JPEG',  'The day at Niagara falls where my partner Samantha proposed to me.'),
('images/meeting.jpg',  'The first time I had met my partner Samantha after driving across the country.'),
('images/coolaubrey.jpg',  'Photo of me when I was 7 years old and had the coolest glasses and slicked back hair which told you I was gonna be force to be reckoned with.'),
('images/gundam.jpg',  'The last time I went to Japan I traveled to Odaiba to see a life-sized Gundam statue.'),
('images/spiderman.jpg',  'Photo of my brother dressed as Spider-man and me as the Scarlet Spider for Halloween when we lived in Iowa.'),
('images/home.jpg',  'My first time buying my home, where I currently live.'),
('images/grandparents.jpg',  'The home where my grandparents used to live in Parkersburg, WV. I would spend hours on the porch drawing, listening to music, and hearing my grandpa talk about his life.'),
('images/trail.jpg',  'A forest trail in Superior National Forest where I hiked alone for hours. It was a very important and meaningful trip alone where I found out who I was.'),
('images/seattle.jpg',  'First time I went to the West coast and visited Seattle.'),
('images/penguin.jpg',  'My sweet boy Penguin the weekend I got him. He was found on the street and rescued by a friend who eventually let me take him home.'),
('images/Onomichi.jpg',  'On the bike trail through Onomichi, a southern city on Honshu. This was halfway through aM bike ride through mountains and islands.'),
('images/VR.jpg',  'Photo of the first time I had ever stepped into VR as a child.'),
('images/bush.jpg',  'A mysterious plant which I found during the Lilac Festival in Rochester, NY'),
('images/pookie.jpeg',  'My sweet girl Pookie the night we brought her home. She belonged to my father-in-law who had passed away, and Pookie is a reminder of his life and a childhood pet of Samantha.'),
('images/wolf.jpeg',  'The wolf conservatory in Ely, MN where we toured and spent a long weekend enjoying the towns little gift shops and nearby trails.'),
('images/LA.jpg',  'Photo taken from atop the Griffith Park observatory looking down at the city of Los Angeles.'),
('images/bradbury.jpg',  'Toured the Bradbury building in Los Angeles, famous for its ornate architecture and featured in movies such as Blade Runner.'),
('images/sakura.jpg',  'Sakura festival in Osaka Castle park I attended with friends and many SEGA employees.'),
('images/rizzler.jpg',  'While visiting Chicago when I was I insisted on wearing my drippiest outfit yet out.'),
('images/flower.jpg',  'At the end of aM bike trail through Shimanami Kaido I stopped to find this gorgeous flower which punctuated an amazing experience.'),
('images/aubrey.jpeg',  'Myself as of last summer, enjoying time at Minnehaha Falls.');