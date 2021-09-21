//imam ali - http://212.18.231.213:1935/1/1_360p/playlist.m3u8 / https://www.youtube.com/embed/live_stream?channel=UCi4CSgJk3i_slWnWG9Y14qA&rel=0&showinfo=0&autoplay=1

var channels = [{
  id: 1,
  name: "Imam Husain Shrine",
  url: "https://www.youtube.com/embed/sbu145Mdf0g",
  img: "img/channels/im-hussein-shrine.jpg",
  country: "iraq",
  language: "arabic",
  category: "ziyarat",
  description: "The Imam Husayn Shrine is the mosque and burial site of Husayn ibn Ali, the third Imam of Islam, in the city of Karbala, Iraq. It stands on the site of the Mausoleum of Husayn, who was a grandson of Muhammad, near the place where he was martyred during the Battle of Karbala in 680 CE",
  featured: true,
  popular: true,
  active: true,
}, {
  id: 125,
  name: "Imam Ali Shrine",
  url: "https://youtube.com/channel/UCi4CSgJk3i_slWnWG9Y14qA",
  img: "img/channels/im-ali-shrine.jpg",
  country: "iraq",
  language: "arabic",
  category: "ziyarat",
  description: "The Sanctuary of Imam 'Ali, is a mosque which many Muslims believe contains the tomb of Caliph and Imam 'Alī ibn Abī Tālib, it is holy to both Sunni and Shia Islam. He was a cousin of the Islamic prophet Muhammad and later became his son-in-law as well. The Shias consider Ali as their first Imam, and the Sunnis regard him as their fourth Sunni Rashidun Caliph.[1] Each year millions of pilgrims visit the Shrine and pay tribute to Caliph Ali ibn Abi Talib, and the Ottoman Sultan Abdülaziz also offered gifts to the sactuary of the fourth Caliph.",
  featured: false,
  popular: true,
  active: false,
}, {
  id: 126,
  name: "Shia Channel",
  url: "https://m.youtube.com/c/SHIACHANNEL110",
  img: "https://shiachannel.in/assets/images/icons/apple-icon.png",
  country: "india",
  language: "urdu",
  category: "general",
  description: "Shia Channel is a Dhia Islamic TV Channel on Youtube which Live Stream Majalis/Juloos and other Islamic events.",
  featured: false,
  popular: true,
  active: false,
},
  {
    id: 2,
    name: "Masjid Al Kufa",
    url: "http://212.18.231.218:1935/kufalive/kufalive/playlist.m3u8",
    img: "img/channels/kufa.jpg",
    country: "iraq",
    language: "arabic",
    category: "ziyarat",
    description: "The Great Mosque of Kufa is located in Kufa, Iraq and is one of the earliest and holiest surviving mosques in the world. The mosque, built in the 7th century, was home to Ali ibn Abi Talib, the 4th Rashidun caliph; and contains the remains of Maytham al-Tammar,Ali's companion; Muslim ibn Aqeel, first cousin of Husayn ibn Ali, his companion Hani ibn Urwa; and the revolutionary, Al-Mukhtar.",
    featured: false,
    popular: false,
    active: false,
  },
  {
    id: 3,
    name: "Hazrat Abbas Shrine",
    url: "https://stream.alkafeel.net/live/alkafeel/rAa5PGot1/manifest.m3u8",
    img: "img/channels/abbas.jpg",
    country: "iraq",
    language: "arabic",
    category: "ziyarat",
    description: "The Al-Abbas Shrine is the mausoleum of Abbas ibn Ali and a mosque, located near the Imam Husayn Mosque in Karbala, Iraq. Abbas was son of Ali ibn Abi Talib and the half-brother of Imam Hasan and Imam Husayn. He was Husayn's flag-bearer in the Battle of Karbala and chief of his caravans.",
    featured: true,
    popular: true,
    active: true,
  },
  {
    id: 4,
    name: "Imam Husain Shrine 1",
    url: "https://stream.alkafeel.net/live/alkafeel/rAa5PGot2/manifest.m3u8",
    img: "img/channels/im-hussein-shrine.jpg",
    country: "iraq",
    language: "arabic",
    category: "ziyarat",
    description: "The Imam Husayn Shrine is the mosque and burial site of Husayn ibn Ali, the third Imam of Islam, in the city of Karbala, Iraq. It stands on the site of the Mausoleum of Husayn, who was a grandson of Muhammad, near the place where he was martyred during the Battle of Karbala in 680 CE",
    featured: false,
    popular: false,
    active: true,
    home: true,
  },
  {
    id: 5,
    name: "Imam Husain Shrine 2",
    url: "https://stream.alkafeel.net/live/alkafeel/rAa5PGot4/manifest.m3u8",
    img: "img/channels/im-hussein-shrine.jpg",
    country: "iraq",
    language: "arabic",
    category: "ziyarat",
    description: "The Imam Husayn Shrine is the mosque and burial site of Husayn ibn Ali, the third Imam of Islam, in the city of Karbala, Iraq. It stands on the site of the Mausoleum of Husayn, who was a grandson of Muhammad, near the place where he was martyred during the Battle of Karbala in 680 CE",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 6,
    name: "Imam Husain Shrine 3",
    url: "https://stream.alkafeel.net/live/alkafeel/rAa5PGot1/manifest.m3u8",
    img: "img/channels/im-hussein-shrine.jpg",
    country: "iraq",
    language: "arabic",
    category: "ziyarat",
    description: "The Imam Husayn Shrine is the mosque and burial site of Husayn ibn Ali, the third Imam of Islam, in the city of Karbala, Iraq. It stands on the site of the Mausoleum of Husayn, who was a grandson of Muhammad, near the place where he was martyred during the Battle of Karbala in 680 CE",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 7,
    name: "Imam Husain Shrine 4",
    url: "https://stream.alkafeel.net/live/alkafeel/rAa5PGot1/manifest.m3u8",
    img: "img/channels/im-hussein-shrine.jpg",
    country: "iraq",
    language: "arabic",
    category: "ziyarat",
    description: "The Imam Husayn Shrine is the mosque and burial site of Husayn ibn Ali, the third Imam of Islam, in the city of Karbala, Iraq. It stands on the site of the Mausoleum of Husayn, who was a grandson of Muhammad, near the place where he was martyred during the Battle of Karbala in 680 CE",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 8,
    name: "Imam Reza Shrine 1",
    url: "https://tv.razavi.ir/hls/rozeh.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
    home: true,
  },
  {
    id: 9,
    name: "Imam Reza Shrine 2",
    url: "https://tv.razavi.ir/hls/enghelab.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 10,
    name: "Imam Reza Shrine 3",
    url: "https://tv.razavi.ir/hls/jomhori.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 11,
    name: "Imam Reza Shrine 4",
    url: "https://tv.razavi.ir/hls/azadi.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 12,
    name: "Imam Reza Shrine 5",
    url: "https://tv.razavi.ir/hls/goharshad.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 13,
    name: "Imam Reza Shrine 6",
    url: "https://tv.razavi.ir/hls/jame.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 14,
    name: "Imam Reza Shrine 7",
    url: "https://tv.razavi.ir/hls/gonbad.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 15,
    name: "Imam Reza Shrine 8",
    url: "https://tv.razavi.ir/hls/rozeh.m3u8",
    img: "img/channels/reza.jpg",
    country: "iran",
    language: "farsi",
    category: "ziyarat",
    description: "The Imam Reza Shrine Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,[1] a cemetery, the Razavi University of Islamic Sciences, a dining hall for pilgrims, vast prayer halls, and other buildings.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 16,
    name: "Zainabia Channel",
    url: "https://zainabia2.livebox.co.in/Zainabiachannel2hls/live.m3u8",
    img: "img/channels/zainabia.jpg",
    country: "india",
    language: "urdu",
    category: "general",
    description: "ZAINABIA CHANNEL is an Indian, Muslim Islamic and General, Social, Cultural and Educational Television Channel which is owned and Operated Wholly and only by ''ZAINABIA TRUST MUMBAI'' registered under Charitable Trust Mumbai no B-1374 is based in Mumbai, India. It is the endeavour of ''ZAINABIA CHANNEL'' to spread peaceful harmony amongst Indian in particular, and the mankind all over the world in general throughout the erudite teachings of our learned and holy personalities.",
    featured: true,
    popular: true,
    active: true,
    home: true,
  },
  {
    id: 17,
    name: "Ali TV",
    url: "https://alitv.livebox.co.in/alitvhls/live.m3u8",
    img: "img/channels/alitv.jpg",
    country: "india",
    language: "urdu",
    category: "general",
    description: "ALI TV is an Indian, Shia Religious and General, Social, Cultural, Educational Television Channel which is owned and Operated Wholly and only by ''MR. ALI HAIDER''. It is the endeavor of ''ALI TV'' to spread peaceful harmony among Indian, in particular, and the mankind all over the world, in general, through the erudite teachings of our learned and holy personalities.",
    featured: false,
    popular: true,
    active: true,
  },
  {
    id: 18,
    name: "Channel Win",
    url: "http://cdn.smartstream.video/smartstream-us/channelwinlive/channelwinlive/playlist.m3u8",
    img: "img/channels/win.png",
    country: "india",
    language: "urdu",
    category: "general",
    description: "World Islamic Network a registered Public Trust (under the Govt. of India) established in 1991 with the main objective of imparting true knowledge of Islam to people around the world. The greatest challenge as well as opportunity before the Shiite’s today, in this era of MEDIA, is to promote the teachings of Ahlul bayt (a.s).",
    featured: true,
    popular: true,
    active: true,
    home: true,
  },
  {
    id: 19,
    name: "Husaini Channel",
    url: "http://5k8q87xzdy4v-hls-live.wmncdn.net/hctv/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8",
    img: "img/channels/husaini.jpg",
    country: "india",
    language: "urdu",
    category: "general",
    description: "Husaini Channel TV is Lucknow's first free-to-air, exclusively Hindi/Urdu/English TV network dedicated to delivering the pristine message of the Holy Prophet Muhammad and His Holy Household",
    featured: false,
    popular: true,
    active: false,
  },
  {
    id: 20,
    name: "Imam Hussein TV 4",
    url: "https://ur.imamhusseintv.com/live/ih4.m3u8",
    img: "img/channels/hussein-tv4.png",
    country: "uk",
    language: "urdu",
    category: "general",
    description: "Imam Hussein Media Group is basically a virtual university which was founded by a circle of adherents and followers of Ayatullah Shirāzī on the third of Sha’abān, 2009. This Media Group launched its global operation – crossing over the geographical, political and cultural borders as one of the largest non-affiliate and people-funded Shia media – with the aim to revitalize the teachings of Ahlul-Bayt (blessings of Allah be upon Them) and to lead the public opinion towards the noble, righteous and truthful culture of the twelver Shia, which is solely fed by Qur’an and Ahlul-Bayt.",
    featured: true,
    popular: false,
    active: true,
  },
  {
    id: 21,
    name: "Hidayat TV",
    url: "https://5928f90056f31.streamlock.net/hidayat-live/hidayat/playlist.m3u8",
    img: "img/channels/hidayat.jpg",
    country: "pakistan",
    language: "urdu",
    category: "general",
    description: "Hidayat TV was established by Moulana Dr. G. H. Adeel. Soon after Major Javed Syed joined the team . Hidayat TV initially aired parts daily but became a full-time 24-hour running channel from 16 February 2009. Hidayat TV launched globally on 5 December 2009 reaching audiences in UK, Europe and parts of North Africa via Eutelsat 28A.",
    featured: true,
    popular: true,
  }, {
    id: 22,
    name: "Al Mahdi TV",
    url: "https://iptv.almahditv.com/almahdi/playlist.m3u8",
    img: "img/channels/al-mahdi.jpg",
    country: "pakistan",
    language: "urdu",
    category: "general",
    description: "Al-Mahdi Foundation, Inc is religious, non-political, non-profit, tax exempt 501(c)(3) corporation, serving New Jersey, New York and Pennsylvania. The foundation operates the Islamic Institute of Theology and Al-Qur’an Center in Pennsylvania, Al-Mahdi Brooklyn Center in New York and Al-Mahdi Seminary (Hawza Illmiyah studies), Al Qur’an Academy, Al-Mahdi TV and Al-Mahdi Hajj Group in New Jersey. The foundation has trustees and board of directors.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 23,
    name: "Qaim TV",
    url: "https://cdn.live247stream.com/qaim/tv/playlist.m3u8",
    img: "img/channels/qaimtv.jpg",
    country: "pakistan",
    language: "urdu",
    category: "general",
    description: "Qaim TV is torchbearer of Tolerance, enlightened Education and harmony, carrying the mission of Panjatan Pak. Our dream is creation of peaceful world.",
    featured: true,
    popular: false,
    active: true,
  }, {
    id: 24,
    name: "Hyder TV",
    url: "https://cdn.live247stream.com/hyder/tv/playlist.m3u8",
    img: "img/channels/hyder.jpg",
    country: "pakistan",
    language: "urdu",
    category: "general",
    description: "Hyder TV is an effort of followers of Prophet Muhammad (Peace Be Upon Him) to bring not only sects of Islam together but to create a platform where interfaith harmony and humanity can be propagated from.",
    featured: true,
    popular: false,
    active: true,
  }, {
    id: 25,
    name: "Ahlebait TV",
    url: "https://video.ibm.com/embed/23693473?autoplay=true",
    img: "img/channels/ahlebait.jpg",
    country: "pakistan",
    language: "urdu",
    category: "general",
    description: "Ahlebait TV Shia Islamic TV Channel is founded to provide a source of education to facilitate understanding between contemporary Islamic thought and the world by monitoring, producing, translating, studying, sharing, presenting, and preserving all relevant data regarding Quran, Islamic Movies / Islamic Films / Documentaries / Dramas, Leaders /Islamic Scholars, Alima, Zakira, Ulema.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 26,
    name: "Bethat TV",
    url: "rtsp://islamimarkaz.com:1935/live/bethattv_480hd/",
    img: "img/channels/bethat.jpg",
    country: "pakistan",
    language: "urdu",
    category: "general",
    description: "Bethat TV is an educational Channel , launched for: Propagating high standard education. Arranging Islamic and Academic sciences broadcast. Propagating Unity amongst Muslim. Enhancing public awareness against the social evils. Enlightening and raising the standard of public sense. Propagating the thoughts of Allama Iqbal in various categories of peopl3",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 27,
    name: "Sahar Urdu",
    url: "https://sepehr.irib.ir/frame/t/sahar2",
    img: "img/channels/sahar-ur.jpg",
    country: "pakistan",
    language: "urdu",
    category: "news",
    description: "Sahar Urdu TV broadcasts films, dramas, features and documentaries on religious, cultural, historical, social, political and tourism topics. While breaking news and current affairs programs from around the world are also presented. News and current affairs programs focus on the issues of the Islamic world, Iran and South Asia, and offer comments and analysis on them, taking into account the full impartiality and objective facts.",
    featured: false,
    popular: true,
    active: true,
  }, {
    id: 28,
    name: "Velayat TV USA",
    url: "https://59af8d8ed78d5.streamlock.net/live/myStream/playlist.m3u8",
    img: "img/channels/velayat-usa.jpg",
    country: "usa",
    language: "english",
    category: "general",
    description: "Velayat TV USA is a 24/7 TV Channel delivering the Message of Islam based on teachings of Prophet Muhammad (saw) and his Ahlul Bayt (a) throughout the World. Velayat TV USA brings the Masjid to your home. With a host of popular programs for the whole family including live call-in shows, lectures, talk shows, Quran recitation and duas (prayers).",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 29,
    name: "Imam Hussein TV 3",
    url: "https://en.imamhusseintv.com/live/ih3.m3u8",
    img: "img/channels/imam-hussein-tv-3.png",
    country: "uk",
    language: "english",
    category: "general",
    description: "Imam Hussein Media Group is basically a virtual university which was founded by a circle of adherents and followers of Ayatullah Shirāzī on the third of Sha’abān, 2009. This Media Group launched its global operation – crossing over the geographical, political and cultural borders as one of the largest non-affiliate and people-funded Shia media – with the aim to revitalize the teachings of Ahlul-Bayt (blessings of Allah be upon Them) and to lead the public opinion towards the noble, righteous and truthful culture of the twelver Shia, which is solely fed by Qur’an and Ahlul-Bayt.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 30,
    name: "Safeer TV",
    url: "https://cdn3.wowza.com/1/YStGZlJRdktzZkdK/VXROZWNW/hls/live/playlist.m3u8",
    img: "img/channels/safeer-tv.jpg",
    country: "uk",
    language: "english",
    category: "general",
    description: "Safeer means ambassador. They aim to serve the community through producing innovative and contemporary media that  sets to entertain, inform and educate all ages.  With the headquarters in the suburbs of London, UK, Safeer TV engages with the world-wide community to create content which is relevant and exciting to the British viewership. They are one of the fastest growing Muslim broadcasters with a nuanced and proven solution that can cater for our educational and social needs. They are a dynamic young team that craft content which is set to be a breath of fresh air through infotainment.",
    featured: true,
    popular: false,
    active: true,
  }, {
    id: 31,
    name: "Marjaeyat TV EN",
    url: "https://liveen.marjaeyattv.com/mtv_en/playlist.m3u8",
    img: "img/channels/marjaeyat-english.jpg",
    country: "iran",
    language: "english",
    category: "general",
    description: "Marjaeyat TV is the only official TV station of the Central Office of Grand Ayatollah Sayyid Sadiq Shirazi in holy Qom, Iran.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 32,
    name: "Ahlulbayt TV",
    url: "https://5f3e23ac71915.streamlock.net:4434/live/livestream1.sdp/playlist.m3u8",
    img: "img/channels/ahlulbayt.jpg",
    country: "uk",
    language: "english",
    category: "general",
    description: "Ahlulbayt TV is the world's first free-to-air, exclusively English TV network dedicated to delivering the pristine message of the Holy Prophet Muhammad and His Holy Household. Ahlulbayt TV transcends all divides, serving Muslims as well as non-Muslims, the religious and the non-practicing, submissive and inquisitive, young, old and everyone in between. Ahlulbayt TV is a resource for parents seeking help with their children's upbringing, and is where a 76 year-old grandpa can keep connected to the Household he loves and to find inspiration from supplications and recitations.",
    featured: true,
    popular: true,
    home: true,
    active: true,
  }, {
    id: 33,
    name: "iFilm English",
    url: "https://live1.presstv.ir/live/ifilmen.m3u8",
    img: "img/channels/ifilm-en.jpg",
    country: "iran",
    language: "english",
    category: "movies",
    description: "iFilm, also known as iFilm TV, is an Iranian entertainment network which consists of three channels in English, Arabic and Persian. The network was launched on September 9, 2010. The original purpose of the channel is to present Iranian films and series to the global audience.",
    featured: true,
    popular: false,
    active: false,
  }, {
    id: 34,
    name: "Karbala TV",
    url: "https://m.youtube.com/watch?v=xV88EEhkcww&feature=emb_title",
    img: "img/channels/karbala-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Karbala TV is the official television of the Imam Husayn Shrine in the city of Karbala, Iraq. With the great support of the Shia Endowment Bureau and continued guidance of the Supreme Religious Authority, headed by Ayatullah Sayyid Ali al-Sistani, the channel was founded in 2008 in the city of Karbala, Iraq.",
    featured: true,
    popular: true,
    active: true,
    home: true,
  }, {
    id: 35,
    name: "Quran TV",
    url: "https://m.youtube.com/watch?v=xV88EEhkcww&feature=emb_title",
    img: "img/channels/alquran.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Al Quran TV is the television of the Karbala TV Network in the city of Karbala, Iraq. With the great support of the Shia Endowment Bureau and continued guidance of the Supreme Religious Authority, headed by Ayatullah Sayyid Ali al-Sistani, the channel was founded in 2008 in the city of Karbala, Iraq.",
    featured: true,
    popular: false,
    active: false,
  }, {
    id: 36,
    name: "Fadak TV",
    url: "https://www.youtube.com/embed/yaoG5RvvM7I",
    img: "img/channels/fadak.jpg",
    country: "uk",
    language: "arabic",
    category: "general",
    description: "The launch of the Fadak channel is a revolutionary Shiite media step that comes in response to the public’s insistence on the need to establish a modern channel that addresses millions in an objective scientific language and with an authentic and bold ideological content that does not know courtesy at the expense of the truth. It was decided that the name of the channel should be (Fadak), which symbolizes the property that God Almighty has endowed. The Lady of the Women of the Worlds is Fatima al-Zahra (peace be upon her) in the Arabian Peninsula, which Abu Bakr bin Abi Quhafa confiscated after seizing power in the (Saqifa) coup that followed the martyrdom of the Greatest Messenger, may God’s prayers and peace be upon him and his family. The banner of the family of Muhammad, peace be upon them.",
    featured: true,
    popular: true,
    home: true,
    active: true,
  }, {
    id: 37,
    name: "Al Kawthar TV",
    url: "https://sepehr.irib.ir/frame/t/alkosar",
    img: "img/channels/al-kawthar.png",
    country: "iraq",
    language: "arabic",
    category: "news",
    description: "Al-Kawthar TV is a Tehran-based Arabic-language television channel. Launched in 2006 by Islamic Republic of Iran Broadcasting, it broadcasts religious and cultural programs about 20 hours a day mainly for Arab audience in the Middle East and North Africa.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 38,
    name: "Al Ahwaz TV",
    url: "http://51.210.227.131/hls/stream.m3u8",
    img: "img/channels/ahwaz.jpg",
    country: "iraq",
    language: "arabic",
    category: "news",
    description: "Al Ahwaz TV is an Iranian satellite network in Arabic language (Khuzestani Arabic), belonging to Islamic Republic of Iran, who has been founded/launched in the city of Ahwaz by Seyyed Mohammad Ali Mousavi Jazayeri, the representative of Guardianship of the Islamic Jurist in Khuzestan province on 5 August 2013.",
    featured: false,
    popular: false,
    active: true
  }, {
    id: 39,
    name: "Afaq TV",
    url: "https://",
    img: "img/channels/afaq.jpg",
    country: "iraq",
    language: "arabic",
    category: "news",
    description: "Afaq TV is an Iraqi satellite television channel based in Baghdad, Iraq. The channel was launched in 2006. The channel is owned by Nouri al-Maliki.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 40,
    name: "Al Anwar TV",
    url: "https://",
    img: "img/channels/anwar.jpg",
    country: "iraq",
    language: "arabic",
    category: "news",
    description: "Alanwar TV is an Iraqi satellite television channel based in London, England.The channel was launched in 2004.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 41,
    name: "Al Forat TV",
    url: "https://601246d26b133.streamlock.net//live/_definst_/11/playlist.m3u8",
    img: "img/channels/forat.jpg",
    country: "iraq",
    language: "arabic",
    category: "genral",
    description: "Al Forat Network is a satellite television network in Iraq. The Arabic language network is owned by Ammar al-Hakim, an Iraqi Shi'a cleric and politician. Al-Forat has 300 employees, with offices located in the city of Karrada in Baghdad.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 42,
    name: "Al Mustafa TV",
    url: "https://m.youtube.com/watch?v=r2gAdF_tWnU",
    img: "img/channels/mustafa-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "قناة المصطفى الفضائية http://www.almustafa.tv",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 43,
    name: "Imam Hussein TV 2",
    url: "https://mn-nl.mncdn.com/ihtv2/ihtv2_sd.smil/playlist.m3u8",
    img: "img/channels/hussein-tv2.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Imam Hussein Media Group is basically a virtual university which was founded by a circle of adherents and followers of Ayatullah Shirāzī on the third of Sha’abān, 2009. This Media Group launched its global operation – crossing over the geographical, political and cultural borders as one of the largest non-affiliate and people-funded Shia media – with the aim to revitalize the teachings of Ahlul-Bayt (blessings of Allah be upon Them) and to lead the public opinion towards the noble, righteous and truthful culture of the twelver Shia, which is solely fed by Qur’an and Ahlul-Bayt.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 44,
    name: "Dua Channel",
    url: "https://live.ishiacloud.com/haditv.co.uk/dua-channel.m3u8",
    img: "img/channels/dua-channel.jpg",
    country: "iraq",
    language: "arabic",
    category: "dua",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 45,
    name: "Al Thaqalayn TV",
    url: "https://live.thaqalayn.tv/hls/live.m3u8",
    img: "img/channels/thaqalayn-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "In the name of God the Merciful. In our contemporary world, especially the Islamic world, the visual media, such as television channels, have an important role and exceptional importance in enlightening and directing ideas. In this direction, the “Al Thaqalain” satellite channel was launched in the blessed month of Ramadan in the year 1430 AH (2008 AD), and it is a financially and administratively independent network, and it has no official relationship with any country and was registered in Europe.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 46,
    name: "Al Maaref TV",
    url: "https://5e74a9d684b2e.streamlock.net/liveTrans/ngrp:channel23_all/playlist.m3u8",
    img: "img/channels/maaref-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "قناة المعارف الفضائية هي قناة دينية إسلامية تأسست عام 1428 هـ الموافق 2007 م، بجهود مجموعة من المؤمنين المخلصين، وكان",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 47,
    name: "Al Manar TV",
    url: "https://stream.fastpublish.net/ALManarLive/index.m3u8",
    img: "img/channels/manar-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "news",
    description: "Al-Manar is a Lebanese satellite television station owned and operated by the political party Hezbollah,[1] broadcasting from Beirut, Lebanon.[2] The channel was launched on 4 June 1991 and it is a member of the Arab States Broadcasting Union.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 48,
    name: "Al Iman TV",
    url: "https://svs.itworkscdn.net/alimanlive/imantv.smil/playlist.m3u8",
    img: "img/channels/iman-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "قناة الإيمان قناة تلفزيونية أسرية ثقافية تسعى الى تقديم الإسلام المتنور الأصيل الذي أرساه الرسول (ص) وأهل بيته (ع) بصورة إعلامية حديثة وراقية تجمع بين الأصالة والمعاصرة والإنفتاح على كل قضايا المجتمع والإنسان والرقي الحضاري المرتكز الى قيم الحق والعدالة ونصرة المستضعفين ، ومنبر حواري جامع يسعى لخير الأمة ويحث على نبذ التعصب والتخلف ويدعو الى الوحدة والتكاتف والتضامن. وتشتمل القناة على برامج متنوعة في مضامينها الدينية والاجتماعية والثقافية والعلمية مع إيلاء اهتمام خاص للثقافة الاسلامية الجامعة والمعاصرة وقضايا الوحدة الاسلامية.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 49,
    name: "Al Mahdi TV",
    url: "http://173.212.226.44:8080/live.mp4",
    img: "img/channels/mahdi-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Mahdi TV Channel Arabic",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 50,
    name: "Al Wilayah TV",
    url: "https://livekadeh.com/official/alwilayah.tv",
    img: "img/channels/wilayah-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "هوية قناة الولاية الفضائية الاسم: الولاية لغة القناة: العربية الاشراف العام: سماحة آية الله العظمى الشيخ ناصر مكارم الشيرازي (دام ظله الوارف( المدير العام: آية الله الدكتور الشيخ عباس الرفعتي نطاق البث: الشرق الأوسط وشمال قارة إفريقيا التوقيت الرسمي: النجف الأشرف",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 51,
    name: "Ifilm AR",
    url: "https://live1.presstv.ir/live/ifilmar.m3u8",
    img: "img/channels/ifilm-ar.jpg",
    country: "iraq",
    language: "arabic",
    category: "movies",
    description: "IFilm Also Ifilm TV is an Iranian entertainment network which consists of three channels in English, Arabic and Persian. The network was launched on September 9, 2010",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 52,
    name: "Al Masirah TV",
    url: "https://svs.itworkscdn.net/almasiralive/almasira.smil/playlist.m3u8",
    img: "img/channels/masirah-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Al Masirah is a Yemeni TV channel which was founded and is owned by the Ansarullah movement. The TV channel is headquartered in Beirut, Lebanon.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 53,
    name: "Yemen TV",
    url: "https://player.twitch.tv/?channel=yemen1_tv&parent=yementv.tv",
    img: "img/channels/yemen-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Yemen TV is the flagship national television station in Yemen. Established in 1975, the channel was the first official channel to broadcast as local media in what was the Yemen Arab Republic also commonly known as North Yemen. The station is based in Sana'a and started broadcasting on 24 September 1975.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 54,
    name: "Diljah TV",
    url: "https://www.dailymotion.com/embed/video/x7x328h?autoplay=1",
    img: "img/channels/diljah-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Dijlah TV is an Iraqi satellite television channel based in Amman, Jordan. It is one of the most watched news channels in Iraq. It follows the Iraqi politician Mohamed Karbouli.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 55,
    name: "Al Iraqiyah News",
    url: "https://cdn.catiacast.video/abr/78054972db7708422595bc96c6e024ac/playlist.m3u8",
    img: "img/channels/iraqiyah-tv.jpg",
    country: "iraq",
    language: "arabic",
    category: "news",
    description: "Al Iraqiya is a satellite and terrestrial public broadcaster and television network in Iraq that was set up after the fall of Saddam Hussein. It is an Arabic language network that serves upwards of 85% of Iraq's population, and is viewed by a significant percentage (about 40%).",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 56,
    name: "Marjaeyat TV AR",
    url: "http://livefa.marjaeyattv.com/mtv_ar/playlist.m3u8",
    img: "img/channels/marjaeyat.jpg",
    country: "iran",
    language: "arabic",
    category: "general",
    description: "The only official TV station of the Central Office of Grand Ayatollah Sayyid Sadiq Shirazi",
    featured: true,
    popular: false,
    active: true,
  }, {
    id: 57,
    name: "Al Etejah TV",
    url: "https://streaming.aletejahtv.iq:1937/etejah-live/smil:etejah.smil/playlist.m3u8",
    img: "img/channels/etejah.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Aletejah TV (Arabic; قناة الاتجاه الفضائية) is an Iraqi television channel. The Arabic language network is owned by Kata'ib Hezbollah, an Iraqi militia designated a Foreign Terrorist Organization by the Obama Administration in 2009.[1] Aletejah TV has 500 employees, with offices located in the city of Karrada in Baghdad and Beirut in Lebanon.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 58,
    name: "Islamasil TV",
    url: "http://212.86.76.85/live/asil.m3u8",
    img: "img/channels/islamasil.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "مؤسسة ثقافية اعلامية تبليغية على ضوء الاسلام ومذهب أهل البيت (عليهم السلام).",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 59,
    name: "As Sirat TV",
    url: "https://m.youtube.com/c/QanatAssirat",
    img: "img/channels/assirat.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Assirat is a religious media channel that contributes to the propagation of genuine Mohammedan Islam, with a curriculum that fits with the human view and is based on sound Sunnahs, authentic religious values, and sound Islamic concepts. Assirat offers a variety of religious and social programs that target most age groups and pay special attention to the Holy Quran and disseminate its various sciences.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 60,
    name: "Al Aqila TV",
    url: "https://m.youtube.com/channel/UCin5m2zcyjogTCbvyetPP2Q",
    img: "img/channels/alaqila.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "قناة العقيلة الفضائية قناة أم البنين الفضائية قناتنا اسلامية .. سنتها محمدية .. ولايتها حيدرية .. أحزانها فاطمية .. مبادئها حسنية .. ثورتها حسينية .. نشأتها زينبية السلام على عقيلة الطالبيين الحساب الرسمي للمركز الأعلامي لقناتي العقيلة وام البنين عليهما السلام www.alaqila.tv info@alaqila.tv",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 61,
    name: "Al Ahad TV",
    url: "http://148.66.130.171:1935/Alahadlive/AlahadTV/playlist.m3u8",
    img: "img/channels/alahad.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Alahad TV is a satellite and terrestrial public broadcaster and television network in Iraq that was set up after 2009. It is an Arabic language network that serves upwards of 85% of Iraq's population. Al-Ahad TV is the television channel and media wing of Asa'ib Ahl al-Haq.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 62,
    name: "Al Masar AlOula TV",
    url: "https://m.youtube.com/channel/UCrByaD9DQcphW56SQjzKxZQ",
    img: "img/channels/masar.jpg",
    country: "iraq",
    language: "arabic",
    category: "general",
    description: "Al-Masar Al-Oula TV (Al Masar Al Oula Satellite Channel) — commercial satellite television channel in Arabic. In the grid of broadcasting news in the Middle East and the world, a variety of programs that include dialogues on Islamic themes and life, programs about health and fitness, entertainment, sports, programs on fashion, science and technology.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 63,
    name: "Hodhod AR TV",
    url: "https://m.youtube.com/channel/UCMmc1w1tl0khZPb7hxwaUcw",
    img: "img/channels/hodhod.jpg",
    country: "iraq",
    language: "arabic",
    category: "kids",
    description: "HodHod TV HODHOD TV is a kids channels with 3 languages (Arabic, English and Farsi) There are two versions of the channel - one launched in 2010 in Arabic/English and one launched in 2012 in Farsi.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 64,
    name: "Hodhod FA TV",
    url: "https://nl.livekadeh.com/hls2/hodhodfarsi.m3u8",
    img: "img/channels/hodhod.jpg",
    country: "iran",
    language: "farsi",
    category: "kids",
    description: "HodHod TV HODHOD TV is a kids channels with 3 languages (Arabic, English and Farsi) There are two versions of the channel - one launched in 2010 in Arabic/English and one launched in 2012 in Farsi.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 65,
    name: "Salaam TV",
    url: "https://iptv.salaamtv.org/salaam/playlist.m3u8",
    img: "img/channels/salaam.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "Salaam TV is an independent satellite television channel committed to providing Shia Islamic programming. Salaam TV was established in early 2005 by Hajj Sheikh Mohammad Hedayati. The channel's launch date intentionally coincided with the Eid of Ghadeer.",
    featured: true,
    popular: false,
    active: true,
    home: true,
  }, {
    id: 66,
    name: "Imam Hussein TV 1",
    url: "https://mn-nl.mncdn.com/ihtv1/ihtv1_sd.smil/playlist.m3u8",
    img: "img/channels/hussein-tv1.png",
    country: "iran",
    language: "farsi",
    category: "news",
    description: "Imam Hussein Media Group is basically a virtual university which was founded by a circle of adherents and followers of Ayatullah Shirāzī on the third of Sha’abān, 2009. This Media Group launched its global operation – crossing over the geographical, political and cultural borders as one of the largest non-affiliate and people-funded Shia media – with the aim to revitalize the teachings of Ahlul-Bayt (blessings of Allah be upon Them) and to lead the public opinion towards the noble, righteous and truthful culture of the twelver Shia, which is solely fed by Qur’an and Ahlul-Bayt.",
    featured: true,
    popular: true,
    active: true,
    home: true,
  }, {
    id: 67,
    name: "Marjaeyat TV FA",
    url: "http://livefa.marjaeyattv.com/mtv_fa/playlist.m3u8",
    img: "img/channels/marjaeyat.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The only official TV station of the Central Office of Grand Ayatollah Sayyid Sadiq Shirazi",
    featured: true,
    popular: false,
    active: true,
  }, {
    id: 68,
    name: "Labbayk TV",
    url: "https://s-cloud.irib.ir/live/labbayk/labbayk.m3u8",
    img: "img/channels/labbayk.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "حکایت جوان الکلی و بخشش امام حسین علیه اسلام حجت السلام سید حسین هاشم نژاد. دعاهای ماه مبارک رمضان.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 69,
    name: "Press TV",
    url: "https://live1.presstv.ir/live/presstv.m3u8",
    img: "img/channels/press-tv.jpg",
    country: "iran",
    language: "english",
    category: "news",
    description: "Press TV is Iran’s first 24/7 international television news network that broadcasts in English. It started broadcasting in earnest in June 2007. Press TV has strong workforce at its headquarters in Tehran, including journalists (comprising personnel at the Newsroom, Website, Tehran Bureau, Programs, and Documentary departments). Five bureaus in the world’s most important cities, namely London, Beirut, Kabul, Damascus and Baghdad, help Press TV to not just report international news faster but to report them more accurately.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 70,
    name: "Velayat TV",
    url: "https://nl.livekadeh.com/hls2/velayattv.m3u8",
    img: "img/channels/velayat.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "شبکه جهاني ولايت يک شبکه مستقل تلويزيوني غير دولتي - غير انتفاعي است كه جهت تثبيت و تحكيم بنيان هاي تئوريك و تقويت علمي مباني نظري و پاسخگويي به شبهات و سؤالات و دفاع از انديشه هاي متعالي اسلام ناب شيعي است ، اين شبكه تلاش مي نمايد با ايجاد وحدت و همدلي هر چه بيشتر بين مسلمانان با محوريت اهل بيت (عليهم السلام) به دور از هر گونه تفرقه و اهانت به باورها و اعتقادات ديگر فرق اسلامي و همچنين ديگر اديان الهي فعاليت هاي خود را انجام دهد شبکه جهاني ولايت تحت اشراف فقيه فرزانه حضرت آيت الله العظمي مكارم شيرازي (مد ظله العالي ) تأسيس و اداره مي شود.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 71,
    name: "IRIB Khabar",
    url: "https://bozz.bebinhd.com/live/khabar-hd/chunks.m3u8",
    url2: "https://bozz.bebinhd.com/live/khabar-hd/chunks.m3u8",
    img: "img/channels/khabar.jpg",
    country: "iran",
    language: "farsi",
    category: "news",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 72,
    name: "Al Alam News",
    url: "https://live2.alalam.ir/alalam.m3u8",
    img: "img/channels/alalam.jpg",
    country: "iran",
    language: "farsi",
    category: "news",
    description: "Al-Alam is an Arabic news channel broadcasting from Iran and owned by the state-owned media corporation Islamic Republic of Iran Broadcasting. The network's political coverage tends to be the most popular; however, other subjects, such as commentaries, analysis, business and sports also get a share of the audience.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 73,
    name: "IRIB Shoma",
    url: "https://s-cloud.irib.ir/live/shoma/shoma.m3u8",
    img: "img/channels/shoma.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 74,
    name: "Ifilm Persian",
    url: "https://live.presstv.ir/ifilmlive/smil:ifilmtv.smil/playlist.m3u8",
    img: "img/channels/ifilm-farsi.jpg",
    country: "iran",
    language: "farsi",
    category: "movies",
    description: "IFilm Also Ifilm TV is an Iranian entertainment network which consists of three channels in English, Arabic and Persian. The network was launched on September 9, 2010",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 75,
    name: "Ifilm 2",
    url: "https://live1.presstv.ir/live/ifilm2.m3u8",
    img: "img/channels/ifilm2.jpg",
    country: "iran",
    language: "farsi",
    category: "movies",
    description: "IFilm Also Ifilm TV is an Iranian entertainment network which consists of three channels in English, Arabic and Persian. The network was launched on September 9, 2010",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 76,
    name: "IRIB 1",
    url: "https://bozz.bebinhd.com/live/tv1/chunks.m3u8",
    img: "img/channels/irib1.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 77,
    name: "IRIB 2",
    url: "https://bozz.bebinhd.com/live/tv02/chunks.m3u8",
    img: "img/channels/irib2.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 78,
    name: "IRIB 3",
    url: "https://sdm.telewebion.com/live/tv3/tv3_dvr-480p/index.m3u8",
    img: "img/channels/irib3.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 79,
    name: "IRIB 4",
    url: "https://s-cloud.irib.ir/live/tv4/tv4.m3u8",
    img: "img/channels/irib4.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 80,
    name: "IRIB 5",
    url: "https://s-cloud.irib.ir/live/tv5/tv5.m3u8",
    img: "img/channels/irib5.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 81,
    name: "IRIB Varzesh",
    url: "https://ss.90minlive.online/live/varzesh-irib3343/chunks.m3u8",
    img: "img/channels/varzesh.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 82,
    name: "IRIB Omid",
    url: "https://s-cloud.irib.ir/live/omid/omid.m3u8",
    img: "img/channels/omid.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 83,
    name: "IRIB Nasim",
    url: "https://s-cloud.irib.ir/live/nasim/nasim.m3u8",
    img: "img/channels/nasim.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 84,
    name: "Iran International",
    url: "https://live.playstop.me/1816184091/index.m3u8",
    img: "img/channels/ir-international.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "Iran International launched in May 2017. Its mix of rolling news, current affairs and documentaries, sport, lifestyle, health and technology, programmed to attract a wide audience, especially younger people. Iran International is a privately-owned UK entity: the first of a family of channels aiming eventually to target other communities and other languages.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 111,
    name: "Press TV French",
    url: "https://live1.presstv.ir/live/presstvfr/index.m3u8",
    img: "img/channels/press-tv.jpg",
    country: "iran",
    language: "french",
    category: "general",
    description: "Press TV is Iran’s first 24/7 international television news network that broadcasts in English. It started broadcasting in earnest in June 2007. Press TV has strong workforce at its headquarters in Tehran, including journalists (comprising personnel at the Newsroom, Website, Tehran Bureau, Programs, and Documentary departments). Five bureaus in the world’s most important cities, namely London, Beirut, Kabul, Damascus and Baghdad, help Press TV to not just report international news faster but to report them more accurately.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 85,
    name: "Mostanad TV",
    url: "https://s-cloud.irib.ir/live/mostanad/mostanad.m3u8",
    img: "img/channels/mostanad.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "IRIB Mostanad is a national documentary TV channel in Iran. It was launched on October 6, 2009 and is the first Iranian digital channel. This channel can be received both using set-top boxes and satellites.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 112,
    name: "Hausa TV",
    url: "https://live1.presstv.ir/live/hausatvha/index.m3u8",
    img: "img/channels/hausa.jpg",
    country: "africa",
    language: "hausa",
    category: "general",
    description: "Hausa TV is the first Iranian media outlet that focuses on the African continent, which was officially launched in April 2019. Its website is published in two languages: Hausa and English. The network also operates on several social media platforms and offers video and radio programs in Hausa and English, which are replayed throughout the day. The main goal of Hausa TV is to provide lifestyle lessons to African viewers, as well as to counter Iranophobia on the continent, and develop stronger relations between Iran and Africa.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 86,
    name: "Ofogh TV",
    url: "https://s-cloud.irib.ir/live/ofogh/ofogh.m3u8",
    img: "img/channels/ofogh.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "IRIB Ofogh, is an Islamic Republic of Iran Broadcasting television channel, is broadcast Worldwide.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 87,
    name: "Hispan TV",
    url: "https://live.presstv.ir/live/smil:live.smil/playlist.m3u8",
    img: "img/channels/hispan.jpg",
    country: "iran",
    language: "spanish",
    category: "general",
    description: "HispanTV is an Iranian Spanish language news channel operated by IRIB, Iran's state-controlled broadcaster. It began broadcasting in December 2011.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 88,
    name: "Fars TV",
    url: "https://s-cloud.irib.ir/live/fars/fars.m3u8",
    img: "img/channels/fars.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "Fars is a province in southwest Iran known for its rich Persian culture and history. Vestiges of the powerful Achaemenid Empire include the terraced 518 B.C. palace complex in Persepolis, and the Pasargadae archaeological site with its Tomb of Cyrus.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 89,
    name: "Tamadon TV",
    url: "https://tamadon.af/",
    img: "img/channels/tamadon.jpg",
    country: "afghanistan",
    language: "farsi",
    category: "general",
    description: "Tamadon TV Network was established by Ayatollah Mohammad Asef Mohseni’s endeavors in Kabul in 1386. They are experimentally broadcasting programs via ABS satellite over Asia and Europe at the moment. The Network is accessible through a land transmitter on the UHF band and channel 36 in Kabul.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 113,
    name: "Salamat TV",
    url: "https://s-cloud.irib.ir/live/salamat/salamat.m3u8",
    img: "img/channels/salamat.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "IRIB Salamat, is an Islamic Republic of Iran Broadcasting television channel, broadcast in Worldwide. The channel is one of the newer television channels in Iran and was established on September 26, 2012.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 114,
    name: "Sepehr TV",
    url: "https://s-cloud.irib.ir/live/sepehr/sepehr.m3u8",
    img: "img/channels/sepehr.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 115,
    name: "Nama TV",
    url: "https://s-cloud.irib.ir/live/nama/nama.m3u8",
    img: "img/channels/nama.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 116,
    name: "Javaneh TV",
    url: "https://s-cloud.irib.ir/live/javaneh/javaneh.m3u8",
    img: "img/channels/javaneh.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 117,
    name: "Nava TV",
    url: "https://s-cloud.irib.ir/live/nava/nava.m3u8",
    img: "img/channels/nava.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 118,
    name: "IRIB Quran",
    url: "https://s-cloud.irib.ir/live/quran/quran.m3u8",
    img: "img/channels/quran-irib.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "The Islamic Republic of Iran Broadcasting is an Iranian state-controlled media corporation which holds a monopoly of domestic radio and television services in Iran, and is also among the largest media organizations in the Asian and Pacific regions, and a regular member of Asia-Pacific Broadcasting Union. ",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 119,
    name: "Al Zahra Iran",
    url: "https://live.cdn.asset.aparat.com/821106df6530f9d94e7c15d661468963/livehls/allzahragrup_jkrXh.m3u8?s=Hp-ZSx8AplOxOBjDyRSnzQ&e=1631969045&ip=103.106.138.196",
    img: "img/channels/allzahra.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "Protecting the beliefs of millions of Shiite youth around the world Conceptual interpretation of the absolute guardianship of the jurist Assisting Muslim parents in appropriate education for Shi’a children and adolescents Protect the public minds of Shiite youth from the waves of vulgar and morally destructive satellite media Delivering the message of Islam to billions of non-Muslims who have not yet had access to the riches of the Qur’an and the Turat. Defending the Shiite community and media support for persecuted Shiites around the world Introducing and consolidating general knowledge and belief in the Word of God Almighty, the Prophet’s biography and the Muhammadan family, with a focus on the oppression of the People of the House (peace be upon them) and awaiting the coming of Hazrat Mahdi (PBUH).",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 90,
    name: "On4 TV",
    url: "http://yayin.netradyom.com:1935/live/on4/playist.m3u8",
    img: "img/channels/on4.jpg",
    country: "turkey",
    language: "turkish",
    category: "general",
    description: "Yayınlarımızı 42 Derece Doğu, Türksat 4A uydusu üzerinden izleyebilirsiniz. Türksat 4A uydusu 14 Şubat 2014 tarihinde Kazakistan’daki Baykonur Uzay Üssü’nden Proton roketiyle uzaya gönderilmiştir. Türksat 4A, BSS frekans bandında Türkiye, Kuzey Afrika, Avrupa, Ortadoğu ve Asya’yı, FSS frekans bandında ise Sahra Altı Afrika bölgelerini kapsamaktadır. Bu uydu üzerinden, aşağıda yazılı frekans bilgilerini uydu alıcınıza tanıtarak bizi izleyebilirisiniz.",
    featured: true,
    popular: true,
    active: true,
  }, {
    id: 91,
    name: "Kudus TV",
    url: "https://m.youtube.com/c/Kud%C3%BCsTVResmi/videos",
    img: "img/channels/kudus.jpg",
    country: "turkey",
    language: "turkish",
    category: "general",
    description: "Kudüs Tv, 2008 yılında İkbal Köseoğlu ve Nurettin Şirin ortaklığı ile hayata geçirilmiş bir internet televizyonudur. İslami değerleri ön planda tutan ve dürüst yayın ilkesini yıllardır büyük bir titizlikle devam ettiren kanalın yayın akışındaki programların büyük çoğunluğu dini programlardan oluşmaktadır. Kudüs TV, 28 Ekim 2016 tarihinde 668 sayılı OHAL kapsamında alınması gereken tedbirler ile bazı kurum ve kuruluşlara dair düzenleme yapılması hakkında Kanun Hükmünde Kararname’nin 2’inci maddesi 4’üncü",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 119,
    name: "IBN TV",
    url: "http://138.68.138.119:8080/low/5a8993709ea19/index.m3u8",
    img: "img/channels/ibntv.jpg",
    country: "africa",
    language: "gujrati",
    category: "general",
    description: "IBNTV DAR ES SALAAM - is the first among 2 TV channels established under the management and board of Alitrah Foundation. Ibntv Dar es salaam is one of the private media started after the liberalization of the media industry in Tanzania. IBN TV Dar es salaam is the first Muslim channel providing viewers diverse religious , economical, cultural and entertaining programs. IBNTV Dar es salaam airs it's content across all major cable operators in Dar es salaam in three languages namely English, Urdu and Gujrati.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 120,
    name: "IBN TV Africa",
    url: "https://159.65.95.207/hls/stream.m3u8",
    img: "img/channels/ibntv.jpg",
    country: "africa",
    language: "swahili",
    category: "general",
    description: "IBNTV DAR ES SALAAM - is the first among 2 TV channels established under the management and board of Alitrah Foundation. Ibntv Dar es salaam is one of the private media started after the liberalization of the media industry in Tanzania. IBN TV Dar es salaam is the first Muslim channel providing viewers diverse religious , economical, cultural and entertaining programs. IBNTV Dar es salaam airs it's content across all major cable operators in Dar es salaam in three languages namely English, Urdu and Gujrati.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 121,
    name: "Radio Maarifa",
    url: "http://tunein.com/embed/player/s188090/",
    img: "img/channels/radio-maarifa.jpg",
    country: "africa",
    language: "swahili",
    category: "general",
    description: "IBNTV DAR ES SALAAM - is the first among 2 TV channels established under the management and board of Alitrah Foundation. Ibntv Dar es salaam is one of the private media started after the liberalization of the media industry in Tanzania. IBN TV Dar es salaam is the first Muslim channel providing viewers diverse religious , economical, cultural and entertaining programs. IBNTV Dar es salaam airs it's content across all major cable operators in Dar es salaam in three languages namely English, Urdu and Gujrati.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 92,
    name: "Hadi TV Turkish",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv7.m3u8",
    img: "img/channels/haditv.jpg",
    country: "turkey",
    language: "turkish",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 93,
    name: "Hadi TV Azeri",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv3.m3u8",
    img: "img/channels/haditv.jpg",
    country: "azerbaijan",
    language: "azeri",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 94,
    name: "Hadi TV Farsi",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv4.m3u8",
    img: "img/channels/haditv.jpg",
    country: "iran",
    language: "farsi",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  },
  {
    id: 95,
    name: "Hadi TV English",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv1.m3u8",
    img: "img/channels/haditv.jpg",
    country: "pakistan",
    language: "english",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 96,
    name: "Hadi TV Urdu",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv1.m3u8",
    img: "img/channels/haditv.jpg",
    country: "pakistan",
    language: "urdu",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 97,
    name: "Hadi TV Swahili",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv5.m3u8",
    img: "img/channels/haditv.jpg",
    country: "africa",
    language: "swahili",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 98,
    name: "Hadi TV Bahasa",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv2.m3u8",
    img: "img/channels/haditv.jpg",
    country: "indonesia",
    language: "bahasa",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 99,
    name: "Hadi TV Pashto",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv6.m3u8",
    img: "img/channels/haditv.jpg",
    country: "afghanistan",
    language: "pashto",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 100,
    name: "Hadi TV French",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv8.m3u8",
    img: "img/channels/haditv.jpg",
    country: "france",
    language: "french",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 101,
    name: "Hadi TV Thai",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv2.m3u8",
    img: "img/channels/haditv.jpg",
    country: "thailand",
    language: "thai",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 102,
    name: "Hadi TV Hausa",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv5.m3u8",
    img: "img/channels/haditv.jpg",
    country: "africa",
    language: "hausa",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 103,
    name: "Hadi TV Dari",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv4.m3u8",
    img: "img/channels/haditv.jpg",
    country: "afghanistan",
    language: "dari",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 104,
    name: "Hadi TV Kurdi",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv4.m3u8",
    img: "img/channels/haditv.jpg",
    country: "kurdistan",
    language: "kurdi",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 105,
    name: "Hadi TV Russia",
    url: "https://live.ishiacloud.com/haditv.co.uk/haditv3.m3u8",
    img: "img/channels/haditv.jpg",
    country: "azerbaijan",
    language: "russian",
    category: "general",
    description: "Founded in 2004, HadiTV network of channels is a common platform for Muslims around the globe. We aim to distribute the priceless treasures of knowledge brought to mankind by the Holy Prophet Muhammad (pbuh) and his pure and immaculate progeny (pbut). The Channel began only with transmissions in English and Urdu. Before long, it had found a large audience and now telecasts six channels on various satellite frequencies hosting 14 languages. HadiTV is dedicated to delivering a 24/7 transmission to serve its noble cause.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 106,
    name: "Sahar TV Kurdish",
    url: "https://sepehr.irib.ir/frame/t/sahar3",
    img: "img/channels/sahar.jpg",
    country: "kurdistan",
    language: "kurdi",
    category: "general",
    description: "Sahar TV, is the name of an Iranian TV channels that is part of Sahar Universal Network which is the branch of Islamic Republic of Iran Broadcasting responsible for broadcasting programs internationally via its Azeri, Balkan, Kurdish and Urdu language television channels.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 107,
    name: "Sahar TV Azeri",
    url: "https://sepehr.irib.ir/frame/t/sahar1",
    img: "img/channels/sahar.jpg",
    country: "azerbaijan",
    language: "azeri",
    category: "general",
    description: "Sahar TV, is the name of an Iranian TV channels that is part of Sahar Universal Network which is the branch of Islamic Republic of Iran Broadcasting responsible for broadcasting programs internationally via its Azeri, Balkan, Kurdish and Urdu language television channels.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 108,
    name: "Sahar TV Balkan",
    url: "https://sepehr.irib.ir/frame/t/sahar4",
    img: "img/channels/sahar.jpg",
    country: "iran",
    language: "balkan",
    category: "general",
    description: "Sahar TV, is the name of an Iranian TV channels that is part of Sahar Universal Network which is the branch of Islamic Republic of Iran Broadcasting responsible for broadcasting programs internationally via its Azeri, Balkan, Kurdish and Urdu language television channels.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 109,
    name: "Sahar TV Kurmanci",
    url: "https://sepehr.irib.ir/frame/t/sahar3",
    img: "img/channels/sahar.jpg",
    country: "iran",
    language: "kurmanci",
    category: "general",
    description: "Sahar TV, is the name of an Iranian TV channels that is part of Sahar Universal Network which is the branch of Islamic Republic of Iran Broadcasting responsible for broadcasting programs internationally via its Azeri, Balkan, Kurdish and Urdu language television channels.",
    featured: false,
    popular: false,
    active: false,
  }, {
    id: 110,
    name: "Al Zahra TV",
    url: "https://live.al-zahratv.com/live/playlist.m3u8",
    img: "img/channels/alzahra.jpg",
    country: "iran",
    language: "turkish",
    category: "general",
    description: "Imam Hussein Media Group is basically a virtual university which was founded by a circle of adherents and followers of Ayatullah Shirāzī on the third of Sha’abān, 2009. This Media Group launched its global operation – crossing over the geographical, political and cultural borders as one of the largest non-affiliate and people-funded Shia media – with the aim to revitalize the teachings of Ahlul-Bayt (blessings of Allah be upon Them) and to lead the public opinion towards the noble, righteous and truthful culture of the twelver Shia, which is solely fed by Qur’an and Ahlul-Bayt.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 110,
    name: "Al Zahra TV",
    url: "https://live.al-zahratv.com/live/playlist.m3u8",
    img: "img/channels/alzahra.jpg",
    country: "iran",
    language: "turkish",
    category: "general",
    description: "Imam Hussein Media Group is basically a virtual university which was founded by a circle of adherents and followers of Ayatullah Shirāzī on the third of Sha’abān, 2009. This Media Group launched its global operation – crossing over the geographical, political and cultural borders as one of the largest non-affiliate and people-funded Shia media – with the aim to revitalize the teachings of Ahlul-Bayt (blessings of Allah be upon Them) and to lead the public opinion towards the noble, righteous and truthful culture of the twelver Shia, which is solely fed by Qur’an and Ahlul-Bayt.",
    featured: false,
    popular: false,
    active: true,
  }, {
    id: 122,
    name: "Khoja TV",
    url: "https://livecdn.live247stream.com/khoja/tv/playlist.m3u8",
    img: "img/channels/khojatv.jpg",
    country: "france",
    language: "french",
    category: "general",
    description: "Khojatv Khojaradio, un média culturel à l'intention de la diaspora KHOJA francophone et anglophone de par le monde",
    featured: true,
    popular: false,
    active: true,
  },
  {
    id: 123,
    name: "Hussaini Channel Bhavnagar",
    url: "https://m.youtube.com/channel/UCPjdjZmKi3am7nm0leFayuQ",
    img: "img/channels/hussaini-channel.jpg",
    country: "india",
    language: "gujrati",
    category: "general",
    description: "Hussaini Channel Bhavnagar, Gujarat, India",
    featured: false,
    popular: false,
    active: false,
  },
]


// ---------- Functions -------------


// ---------- Categories -------------


// Get Categories
const getCategories = () => {
  let category = new Array();
  for (let obj of channels) {
    category.push(obj.category)
  }
  //console.log([...new Set(category)]);
}

getCategories();


// ---------- Languages -------------


//Render Languages
const renderLanguages = (arr) => {
  $('#language').html(`								<option value="all">All Languages</option>`);
  for (let a in arr) {
    let html = `
    <option value="${arr[a]}">${arr[a].toUpperCase()}</option>`
    $('#language').append(html);
    //console.log(arr[a]);
  }
}

// Get Languages
const getLanguages = () => {
  let languages = new Array();
  for (let obj of channels) {
    languages.push(obj.language)
  }
  renderLanguages([...new Set(languages)]);
}

getLanguages();


// ---------- Countries -------------


//Render Countries
const renderCountries = (arr) => {
  $('#country').html(`								<option value="all">All Countries</option>`);
  for (let a in arr) {
    let html = `
    <option value="${arr[a]}">${arr[a].toUpperCase()}</option>`
    $('#country').append(html);
    //console.log(arr[a]);
  }
}

// Get Country
const getCountries = () => {
  let countries = new Array();
  for (let obj of channels) {
    countries.push(obj.country)
  }
  renderCountries([...new Set(countries)]);
}

getCountries();


// ---------- Home -------------


//Render Home Banner
const renderHome = (arr) => {
  $('#flixtv-hero').html("");
  for (let obj of arr) {
    let html = `
    <div class="home__card">
    <a href="details.html?id=${obj.id}">
    <img width="414" height="330" src="${obj.img}" alt="${obj.name}">
    <span class="live__status">live</span>
    </a>
    <div>
    <h2>${obj.name}</h2>
    <ul>
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    <button class="home__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="home__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    </div>`
    $('#flixtv-hero').append(html);
    //console.log(arr[a]);
  }
}

// Get Home Banner
const getHome = () => {
  let home = new Array();
  for (let obj of channels) {
    if (obj.home) {
      home.push(obj)
    }
  }
  renderHome(home);
}

getHome();

// ---------- Home Sort -------------

// Render Featured
const renderFeatured = (arr) => {
  $('#homeData').html("");
  for (let obj of arr) {
    let html = `
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active? '<span class="live__status">live</span>': ''}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${obj.name}</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>
    `
    $('#homeData').append(html);
    //console.log(arr[a]);
  }
}

// Get Featured
const getFeatured = () => {
  let featured = new Array();
  for (let obj of channels) {
    if (obj.featured) {
      featured.push(obj)
    }
  }
  //renderFeatured(home);
  renderFeatured(featured);
}

getFeatured();

// Render Featured Bottom
const renderFeaturedBottom = (arr) => {
  $('#newest').html("");
  for (let obj of arr) {
    let html = `
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="270" src="${obj.img}" alt="${obj.name}">
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1615 8.05308C13.1615 9.79908 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79908 6.8385 8.05308C6.8385 6.30608 8.2535 4.89108 9.9995 4.89108C11.7455 4.89108 13.1615 6.30608 13.1615 8.05308Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05289C17.289 3.48888 13.806 0.750885 9.998 0.750885H10.002C6.194 0.750885 2.711 3.48888 0.75 8.05289C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <h3 class="card__title card__title--subs"><a href="details.html?id=${obj.id}">${obj.name}</a></h3>
    <ul class="card__list card__list--subs">
    <li>${obj.category.toUpperCase()}, ${obj.country.toUpperCase()}, ${obj.language.toUpperCase()}</li>
    </ul>
    </div>
    `
    $('#newest').append(html);
    //console.log(arr[a]);
  }
}

// Get Featured Bottom
const getFeaturedBottom = () => {
  let featured = new Array();
  for (let obj of channels) {
    if (obj.featured) {
      featured.push(obj)
    }
  }
  //renderFeatured(home);
  renderFeaturedBottom(featured);
}

getFeaturedBottom();

// Render Popular
const renderPopular = (arr) => {
  $('#homeData').html("");
  for (let obj of arr) {
    let html = `
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active? '<span class="live__status">live</span>': ''}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${obj.name}</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>
    `
    $('#homeData').append(html);
    //console.log(arr[a]);
  }
}

// Render Popular Bottom
const renderPopularBottom = (arr) => {
  $('#subscriptions').html("");
  for (let obj of arr) {
    let html = `
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="270" src="${obj.img}" alt="${obj.name}">
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1615 8.05308C13.1615 9.79908 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79908 6.8385 8.05308C6.8385 6.30608 8.2535 4.89108 9.9995 4.89108C11.7455 4.89108 13.1615 6.30608 13.1615 8.05308Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05289C17.289 3.48888 13.806 0.750885 9.998 0.750885H10.002C6.194 0.750885 2.711 3.48888 0.75 8.05289C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <h3 class="card__title card__title--subs"><a href="details.html?id=${obj.id}">${obj.name}</a></h3>
    <ul class="card__list card__list--subs">
    <li>${obj.category.toUpperCase()}, ${obj.country.toUpperCase()}, ${obj.language.toUpperCase()}</li>
    </ul>
    </div>
    `
    $('#subscriptions').append(html);
    //console.log(arr[a]);
  }
}

// Get Popular
const getPopular = () => {
  let popular = new Array();
  for (let obj of channels) {
    if (obj.popular) {
      popular.push(obj)
    }
  }
  renderPopular(popular);
}

// Get Popular Bottom
const getPopularBottom = () => {
  let popular = new Array();
  for (let obj of channels) {
    if (obj.popular) {
      popular.push(obj)
    }
  }
  renderPopularBottom(popular);
}

getPopularBottom();

// Render Popular
const renderZiyarat = (arr) => {
  $('#ziyaratData').html("");
  for (let obj of arr) {
    let html = `
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active? '<span class="live__status">live</span>': ''}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${obj.name}</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>
    `
    $('#ziyaratData').append(html);
    //console.log(arr[a]);
  }
}

// Get Ziyarat
const getZiyarat = () => {
  let ziyarat = new Array();
  for (let obj of channels) {
    if (obj.category == "ziyarat") {
      ziyarat.push(obj)
    }
  }
  renderZiyarat(ziyarat);
}

getZiyarat()

// Render All
const renderAll = (arr) => {
  $('#homeData').html("");
  for (let obj of arr) {
    let html = `						<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active? '<span class="live__status">live</span>': ''}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${obj.name}</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>`
    $('#homeData').append(html);
    //console.log(arr[a]);
  }
}

// Get All
const getAll = () => {
  let all = new Array();
  for (let obj of channels) {
    all.push(obj)
  }
  renderAll(all);
  //console.log(all);
}

//getAll();

//Sort Options
$('.slider-radio').on('click', () => {
  var all = $('#all').is(":checked")
  var featured = $('#featured').is(":checked")
  var popular = $('#popular').is(":checked")
  if (all) {
    //console.log("All");
    getAll();
  } else if (featured) {
    //console.log("Featured");
    getFeatured();
  } else if (popular) {
    //console.log("Popular");
    getPopular();
  }
});


// Render Selected
const renderSelected = (arr) => {
  $('#homeData').html("");
  for (let obj of arr) {
    let html = `						<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active? '<span class="live__status">live</span>': ''}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${obj.name}</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>`
    $('#homeData').append(html);
    //console.log(arr[a]);
  }
}


// Calculate Selected
const calcSelected = (selected, id) => {
  let select = new Array();
  if (selected == "all") {
    select = channels;
  } else {
    for (let obj of channels) {
      if (obj[id] == selected) {
        select.push(obj);
      }
    }
  }
  renderSelected(select);
}

// Get Selected
const getSelected = (selected, id) => {
  if (id == "language") {
    calcSelected(selected, id);
  } else if (id == "country") {
    calcSelected(selected, id);
  }
}

//Youtube Slider
/*const renderYoutube = (obj) => {
$('#flixtv').append("");
  var html = `
  <div class="interview">
  <a href="https://youtube.com/watch?v=${obj.id.videoId}" class="interview__cover">
  <img src="${obj.snippet.thumbnails.high.url}" alt="${obj.snippet.title}">
  <span>
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg> 5:33
  </span>
  </a>
  <h3 class="interview__title"><a href="https://youtube.com/watch?v=${obj.id.videoId}">${obj.snippet.title}</a></h3>
  </div>
  `

  $('#flixtv').append(html);
}

fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC3wVhwr_r5xAFA5Fw1IxYtmKs9C19SYiE&channelId=UCb-4Mr8FtL34-v4mM3E8hiA&part=snippet,id&order=date&maxResults=10')
.then(response => response.json())
.then(data => {
  $.each(data.items, function(idx, obj) {
    renderYoutube(obj);
    //console.log(obj)
  });
})
.catch(err => console.log(err)); */


// Render Suggestions
const renderSuggestions = (arr) => {
  $('#series').html("");
  for (let obj of arr) {
    console.log(obj);
    let html = `
    <div class="series">
    <a href="details.html?id=${obj.id}" class="series__cover">
    <img width='280' height='140' src="${obj.img}" alt="">
    <span>
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg> ${obj.active ? 'Live': ''}
    </span>
    </a>
    <h3 class="series__title"><a href="details.html.html?id=${obj.id}">${obj.name}</a></h3>
    </div>
    `
    $('#series').append(html);
  }
}

// Get Suggestions
const getSuggestions = (prevObj) => {
  let suggestions = [];
  for (let obj of channels) {
    if (obj.language == prevObj.language) {
      if (obj.id != prevObj.id) {
        suggestions.push(obj)
      }
    }
  }
  renderSuggestions(suggestions);
  console.log(suggestions);
}


// Render Details
const renderDetails = (id) => {
  for (obj of channels) {
    if (obj.id == id) {
      $('#detailImgTop').data('bg', obj.img);
      $('#detailTitle').text(obj.name);
      $('#detailCategory').text(obj.category);
      $('#detailLanguage').text(obj.language);
      $('#detailCountry').text(obj.country);
      $('#detailLive').text(obj.active ? 'Live': '');
      $('#detailDescription').text(obj.description);
      if (obj.url.includes('.m3u8')) {
        $('#player').attr('poster', obj.img);
        $('#detailVideo-576').attr('src', obj.url);
        $('#detailVideo-720').attr('src', obj.url);
        $('#detailVideo-1080').attr('src', obj.url);
      } else {
        let html = `<a href="${obj.url}" target="_blank"><video id="player" poster="${obj.img}" /></a>`
        $('#switchPlayer').html(html);
      }
      $('#tags').html(`
        <h3 class="categories__title">Tags</h3>
        <a href="category.html" class="categories__item">${obj.category}</a>
        <a href="category.html" class="categories__item">${obj.language}</a>
        <a href="category.html" class="categories__item">${obj.country}</a>
        `);
      getSuggestions(obj)
    }
  }
}

//get Id
let searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('id')) {
  let id = searchParams.get('id')
  renderDetails(id);
  //console.log(id);
}

let autoCompleteData = [];
channels.map(a => {
  let obj = Object.assign({}, {
    label: a.name, value: a.id
  });
  autoCompleteData = [...autoCompleteData, obj]
});

$(function() {
  $("#search-channel").autocomplete({
    source: autoCompleteData,
    //appendTo: $("#channelSuggestions").next(),
    select: function(event, ui) {
      window.open(`https://shiachannel.in/livetv/details.html?id=${ui.item.value}`, '_blank')
    }
  });
});