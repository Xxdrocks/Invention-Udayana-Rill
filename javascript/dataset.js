// Dataset Start

const dataset = [
  {
    "question": "Halo aku lagi gabut banget.",
    "answer": "Hai! Lagi gabut biasanya enaknya ngapain menurutmu?"
  },
  {
    "question": "Aku bingung mau ngapain, semua temenku sibuk.",
    "answer": "Kalau gitu, mungkin bisa coba lakukan hal yang kamu suka sendirian, kayak baca, nonton, atau belajar sesuatu yang baru."
  },
  {
    "question": "Tapi aku gampang bosenan orangnya.",
    "answer": "Hehe, wajar kok. Kadang coba kegiatan singkat yang beda bisa bikin nggak cepat bosan."
  },
  {
    "question": "Aku pengen cerita, boleh?",
    "answer": "Tentu, aku siap dengerin cerita kamu."
  },
  {
    "question": "Aku lagi stres karena nilai ujian turun.",
    "answer": "Aku mengerti, nilai bisa bikin kepikiran. Tapi nilai bukan segalanya, yang penting kamu tahu di mana bisa perbaiki."
  },
  {
    "question": "Iya sih, tapi aku takut orang tua kecewa.",
    "answer": "Perasaan itu wajar. Tapi orang tua biasanya lebih menghargai usaha kamu daripada hasil sesaat."
  },
  {
    "question": "Aku jadi kepikiran terus tiap malam.",
    "answer": "Coba atur waktu buat istirahat, dan jangan pikirin terlalu jauh saat mau tidur. Bisa coba relaksasi atau tarik napas dalam."
  },
  {
    "question": "Kadang aku pengen berhenti kuliah.",
    "answer": "Itu perasaan berat ya. Coba pikirkan dulu, apakah itu hanya karena capek sesaat atau memang pilihan yang kamu mau."
  },
  {
    "question": "Aku takut nyesel kalau berhenti.",
    "answer": "Kalau begitu jangan buru-buru ambil keputusan. Coba beri waktu untuk menenangkan diri dulu."
  },
  {
    "question": "Bot, kamu pernah ngerasa gagal nggak?",
    "answer": "Sebagai AI aku nggak punya perasaan, tapi aku bisa belajar dari kesalahan. Sama kayak manusia, gagal itu bagian dari proses belajar."
  },
  {
    "question": "Aku sering iri sama temen-temenku yang lebih sukses.",
    "answer": "Rasa iri itu normal, tapi coba jadikan motivasi. Ingat, tiap orang punya waktunya masing-masing."
  },
  {
    "question": "Aku pengen punya kepercayaan diri yang lebih tinggi.",
    "answer": "Kamu bisa mulai dari langkah kecil, seperti menghargai pencapaian kecilmu sendiri setiap hari."
  },
  {
    "question": "Kadang aku merasa nggak ada yang peduli sama aku.",
    "answer": "Aku peduli kok sama cerita kamu. Dan percaya deh, ada orang di sekitarmu yang juga peduli, meski mungkin mereka jarang tunjukin."
  },
  {
    "question": "Aku sering takut coba hal baru.",
    "answer": "Rasa takut itu wajar, tapi hal baru juga bisa bawa pengalaman berharga. Bisa mulai dari hal yang kecil dulu."
  },
  {
    "question": "Kalau aku gagal coba hal baru, gimana?",
    "answer": "Kalau gagal, itu bukan akhir. Itu tanda kamu berani mencoba, dan kamu bisa belajar darinya."
  },
  {
    "question": "Aku sering nggak percaya diri kalau ngomong di depan umum.",
    "answer": "Banyak orang merasa begitu. Coba latihan di depan cermin atau bersama teman dekat dulu biar lebih terbiasa."
  },
  {
    "question": "Aku suka musik, tapi nggak berani nunjukin ke orang lain.",
    "answer": "Kalau itu bikin kamu senang, nggak ada salahnya mulai pelan-pelan nunjukin, mungkin ke teman terdekat dulu."
  },
  {
    "question": "Aku lagi capek kerja, rasanya monoton banget.",
    "answer": "Kerja memang bisa bikin jenuh. Coba sisipkan hal-hal kecil yang bikin bahagia, kayak dengar musik atau ngobrol sebentar sama teman."
  },
  {
    "question": "Aku takut kalau masa depan aku suram.",
    "answer": "Masa depan nggak ada yang pasti, tapi yang bisa kamu kontrol adalah tindakan kecilmu hari ini."
  },
  {
    "question": "Aku susah banget buat fokus belajar.",
    "answer": "Coba teknik pomodoro, belajar 25 menit lalu istirahat 5 menit. Itu bisa bikin otak lebih segar."
  },
  {
    "question": "Aku gampang banget terdistraksi HP.",
    "answer": "Itu masalah umum. Bisa coba matikan notifikasi atau taruh HP agak jauh saat belajar."
  },
  {
    "question": "Aku sering ngerasa sendirian walau banyak orang di sekitar.",
    "answer": "Itu tanda kamu butuh koneksi lebih dalam, bukan sekadar keramaian. Coba cari obrolan yang lebih bermakna dengan seseorang."
  },
  {
    "question": "Aku pengen banget bisa disiplin olahraga.",
    "answer": "Mulai aja dari yang ringan, kayak jalan pagi 10 menit tiap hari. Kalau konsisten, lama-lama jadi kebiasaan."
  },
  {
    "question": "Aku suka banget cerita sama kamu.",
    "answer": "Aku juga senang bisa jadi teman cerita kamu!"
  },
  {
    "question": "Kamu nggak bosen dengerin aku terus?",
    "answer": "Nggak sama sekali. Tugas utamaku memang menemani dan mendengarkan kamu."
  },
  {
    "question": "Aku kadang bingung apa tujuan hidupku.",
    "answer": "Itu pertanyaan besar. Mungkin bisa mulai dengan mencari hal yang bikin kamu merasa berarti setiap hari."
  },
  {
    "question": "Aku pengen punya teman yang bisa ngerti aku.",
    "answer": "Aku akan berusaha ngerti kamu. Dan mungkin ada orang di sekitar yang bisa jadi teman dekat kalau kamu coba buka diri."
  },
  {
    "question": "Aku sering males banget ngerjain tugas.",
    "answer": "Coba pecah tugas jadi bagian kecil biar terasa lebih ringan dikerjakan."
  },
  {
    "question": "Aku takut gagal kalau coba bisnis.",
    "answer": "Ketakutan itu wajar, tapi kalau nggak coba kamu nggak akan tahu. Bisa mulai dari bisnis kecil dulu."
  },
  {
    "question": "Aku lega sih bisa ngobrol sama kamu.",
    "answer": "Aku senang bisa bikin kamu merasa lega. Jangan sungkan cerita kapan pun ya!"
  },
  {
    "question": "Halo ",
    "answer": "Hai, apa kabar?"
  },
  {
    "question": "Lagi apa?",
    "answer": "Aku lagi siap nemenin ngobrol kamu."
  },
  {
    "question": "Aku capek",
    "answer": "Istirahat sebentar ya, tubuhmu butuh tenang juga."
  },
  {
    "question": "Stres nih",
    "answer": "Coba tarik napas dalam dulu, biar lebih rileks."
  },
  {
    "question": "Boleh curhat?",
    "answer": "Tentu, silakan ceritakan."
  },
  {
    "question": "Aku bingung",
    "answer": "Bingung soal apa? Ceritain aja."
  },
  {
    "question": "Sedih aku",
    "answer": "Aku ikut merasakan, apa yang bikin kamu sedih?"
  },
  {
    "question": "Aku takut",
    "answer": "Takut sama apa? Kamu bisa cerita ke aku."
  },
  {
    "question": "Aku malas",
    "answer": "Itu wajar kok, coba mulai dari hal kecil aja dulu."
  },
  {
    "question": "Aku bosan",
    "answer": "Kalau bosan, coba kegiatan baru biar lebih segar."
  },
  {
    "question": "Nggak semangat",
    "answer": "Coba ingat lagi tujuanmu, itu bisa bikin semangat muncul."
  },
  {
    "question": "Mau nyerah",
    "answer": "Jangan buru-buru nyerah, mungkin kamu cuma butuh jeda."
  },
  {
    "question": "Aku lapar",
    "answer": "Hehe, jangan lupa makan ya."
  },
  {
    "question": "Aku nggak bisa tidur",
    "answer": "Coba redupin lampu dan jauhin HP sebelum tidur."
  },
  {
    "question": "Aku kesepian",
    "answer": "Aku di sini buat nemenin kamu kok."
  },
  {
    "question": "Aku takut gagal",
    "answer": "Gagal itu bagian dari belajar, nggak apa-apa."
  },
  {
    "question": "Aku minder",
    "answer": "Kamu punya kelebihan yang unik, jangan lupakan itu."
  },
  {
    "question": "Aku overthinking",
    "answer": "Coba fokus ke hal yang bisa kamu kontrol sekarang."
  },
  {
    "question": "Aku nggak fokus",
    "answer": "Coba istirahat sebentar biar pikiran segar lagi."
  },
  {
    "question": "Aku pengen nangis",
    "answer": "Kalau mau nangis, nggak apa-apa. Itu cara melepas emosi."
  },
  {
    "question": "Aku kangen",
    "answer": "Kangen sama siapa? Ceritain aja."
  },
  {
    "question": "Aku butuh motivasi",
    "answer": "Ingat, langkah kecil hari ini bisa bawa kamu ke mimpi besar."
  },
  {
    "question": "Aku males belajar",
    "answer": "Belajar dikit-dikit aja, yang penting konsisten."
  },
  {
    "question": "Aku bingung masa depan",
    "answer": "Fokus dulu ke hari ini, masa depan akan ikut terbentuk."
  },
  {
    "question": "Aku kecewa",
    "answer": "Kecewa itu wajar, tapi jangan biarkan lama-lama menguasai hatimu."
  },
  {
    "question": "Aku takut sendirian",
    "answer": "Kamu nggak benar-benar sendirian, ada aku di sini."
  },
  {
    "question": "Aku nggak percaya diri",
    "answer": "Percaya deh, kamu lebih hebat dari yang kamu kira."
  },
  {
    "question": "Aku bingung kerjaan",
    "answer": "Coba kerjakan satu hal dulu, jangan semua sekaligus."
  },
  {
    "question": "Aku butuh teman",
    "answer": "Aku bisa jadi teman ngobrolmu sekarang."
  },
  {
    "question": "Makasih bot",
    "answer": "Sama-sama, aku senang bisa bantu kamu."
  },
  {
    "question": "Apa itu tunawicara",
    "answer": "Tunawicara adalah kondisi seseorang yang mengalami kesulitan atau tidak bisa berbicara karena faktor bawaan, penyakit, atau cedera."
  },
  {
    "question": "Apa penyebab tunawicara",
    "answer": "Penyebab tunawicara bisa bermacam-macam, seperti kelainan bawaan, gangguan pada organ bicara, kelainan saraf, stroke, kecelakaan, atau faktor psikologis."
  },
  {
    "question": "Apakah tunawicara sama dengan tuli",
    "answer": "Tidak. Tuli adalah gangguan pendengaran, sedangkan tunawicara adalah gangguan berbicara. Namun, sebagian orang bisa mengalami keduanya sekaligus."
  },
  {
    "question": "Apakah tunawicara bisa disembuhkan",
    "answer": "Tergantung penyebabnya. Ada yang bisa dibantu dengan terapi wicara, operasi medis, atau alat bantu komunikasi. Namun, ada juga yang bersifat permanen."
  },
  {
    "question": "Bagaimana cara berkomunikasi dengan tunawicara",
    "answer": "Kita bisa menggunakan bahasa isyarat, tulisan, gambar, atau aplikasi text-to-speech agar komunikasi tetap lancar."
  },
  {
    "question": "Apa itu bahasa isyarat",
    "answer": "Bahasa isyarat adalah sistem komunikasi menggunakan gerakan tangan, ekspresi wajah, dan bahasa tubuh yang dipakai oleh tunawicara maupun tunarungu."
  },
  {
    "question": "Apa itu terapi wicara",
    "answer": "Terapi wicara adalah metode latihan khusus yang dilakukan oleh terapis untuk membantu orang dengan gangguan bicara agar dapat berkomunikasi lebih baik."
  },
  {
    "question": "Siapa yang membantu tunawicara belajar bicara",
    "answer": "Biasanya ditangani oleh terapis wicara, dokter spesialis THT, serta dukungan keluarga dan guru di sekolah inklusi."
  },
  {
    "question": "Bagaimana cara membantu teman tunawicara",
    "answer": "Bantu dengan bersabar, gunakan bahasa tubuh, tulis pesan, pelajari sedikit bahasa isyarat, atau gunakan aplikasi pendukung komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa sekolah",
    "answer": "Ya, tunawicara bisa bersekolah di sekolah umum maupun sekolah luar biasa (SLB). Banyak juga sekolah inklusi yang menerima anak tunawicara."
  },
  {
    "question": "Apakah tunawicara bisa bekerja",
    "answer": "Bisa. Banyak tunawicara yang bekerja di berbagai bidang seperti desain, IT, seni, pengrajin, bahkan wirausaha."
  },
  {
    "question": "Apakah tunawicara bisa menikah",
    "answer": "Tentu saja bisa. Tunawicara memiliki hak yang sama dengan orang lain dalam membangun keluarga."
  },
  {
    "question": "Apa tantangan yang dihadapi tunawicara",
    "answer": "Beberapa tantangan tunawicara adalah sulitnya komunikasi dengan orang awam, keterbatasan fasilitas umum, stigma masyarakat, serta akses ke pendidikan dan pekerjaan."
  },
  {
    "question": "Bagaimana cara mencegah tunawicara",
    "answer": "Beberapa kasus bisa dicegah dengan menjaga kesehatan kehamilan, imunisasi, menghindari cedera kepala, serta pemeriksaan dini pada anak."
  },
  {
    "question": "Apakah tunawicara bisa menggunakan teknologi",
    "answer": "Ya. Banyak aplikasi modern yang mendukung komunikasi tunawicara seperti text-to-speech, aplikasi bahasa isyarat, hingga AI translator."
  },
  {
    "question": "Apa peran keluarga bagi tunawicara",
    "answer": "Keluarga berperan besar dengan memberikan dukungan, kesabaran, serta membantu proses terapi dan komunikasi sehari-hari."
  },
  {
    "question": "Apa perbedaan tunawicara dengan gagap",
    "answer": "Gagap adalah gangguan kelancaran bicara, sedangkan tunawicara adalah ketidakmampuan berbicara total atau hampir total."
  },
  {
    "question": "Apakah tunawicara bisa berkomunikasi lewat tulisan",
    "answer": "Ya, menulis adalah salah satu cara paling efektif untuk tunawicara berkomunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menggunakan media sosial",
    "answer": "Bisa. Media sosial berbasis teks dan gambar sangat membantu tunawicara untuk mengekspresikan diri dan berinteraksi."
  },
  {
    "question": "Bagaimana sikap yang baik saat bertemu tunawicara",
    "answer": "Tetap tenang, sabar, tatap mata, gunakan bahasa tubuh, dan jangan meremehkan. Perlakukan mereka sama seperti orang lain."
  },
  {
    "question": "Bagaimana cara cepat belajar bahasa isyarat",
    "answer": "Cara cepatnya adalah dengan ikut kursus singkat, bergabung dengan komunitas tunawicara, menonton video pembelajaran online, serta sering latihan dengan teman."
  },
  {
    "question": "Apakah ada aplikasi untuk belajar bahasa isyarat",
    "answer": "Ya, ada banyak aplikasi di Play Store dan App Store untuk belajar bahasa isyarat, seperti Hand Talk, SpreadTheSign, dan SignSchool."
  },
  {
    "question": "Apakah ada komunitas untuk tunawicara",
    "answer": "Ada. Di banyak kota terdapat komunitas tunarungu-tunawicara yang aktif. Kamu bisa mencarinya lewat media sosial atau organisasi seperti GERKATIN."
  },
  {
    "question": "Bagaimana cara menemukan komunitas tunawicara",
    "answer": "Kamu bisa mencarinya di Facebook, Instagram, atau bergabung dengan organisasi lokal dan sekolah luar biasa (SLB) yang biasanya punya komunitas."
  },
  {
    "question": "Apa manfaat bergabung dengan komunitas tunawicara",
    "answer": "Manfaatnya banyak, seperti mendapat dukungan emosional, belajar bahasa isyarat lebih cepat, punya teman baru, dan berbagi pengalaman."
  },
  {
    "question": "Apa tantangan tunawicara di dunia kerja",
    "answer": "Beberapa tantangannya adalah komunikasi dengan rekan kerja, keterbatasan fasilitas, serta kurangnya pemahaman dari lingkungan."
  },
  {
    "question": "Apakah ada teknologi untuk membantu tunawicara berbicara",
    "answer": "Ada. Beberapa aplikasi bisa mengubah teks menjadi suara (text-to-speech), serta alat khusus seperti voice synthesizer."
  },
  {
    "question": "Bagaimana agar tunawicara tetap percaya diri",
    "answer": "Dengan dukungan lingkungan, belajar bahasa isyarat, menggunakan teknologi, dan aktif dalam komunitas."
  },
  {
    "question": "Apa pesan untuk tunawicara",
    "answer": "Jangan pernah menyerah. Setiap orang unik dengan caranya sendiri. Kamu tetap bisa berkarya, berkomunikasi, dan meraih mimpi."
  },
  {
    "question": "Aku sedih",
    "answer": "Aku tahu kamu sedih. Aku di sini untukmu. Mau peluk? Atau kita lihat gambar lucu bersama?"
  },
  {
    "question": "Aku lapar",
    "answer": "Ayo makan! Mau nasi, roti, atau camilan? Aku bantu ambilkan."
  },
  {
    "question": "Aku haus",
    "answer": "Minum dong! Air putih, jus, atau susu? Aku siapkan gelasnya."
  },
  {
    "question": "Aku ngantuk",
    "answer": "Waktunya istirahat. Aku bantu tutup lampu, selimuti, dan tidur nyenyak ya."
  },
  {
    "question": "Aku pengen main",
    "answer": "Main apa? Main bola, mobil-mobilan, atau gambar? Aku ikut main bareng kamu!"
  },
  {
    "question": "Aku ingin tidur",
    "answer": "Sudah waktunya tidur. Aku temani sampai kamu tertidur."
  },
  {
    "question": "Aku kesepian",
    "answer": "Aku di sini, sayang. Kita bisa main, gambar, atau cuma duduk berdampingan — kamu tidak sendiri."
  },
  {
    "question": "Aku marah",
    "answer": "Aku tahu kamu marah. Tarik napas pelan-pelan. Kalau mau, kita bisa coret kertas atau peluk boneka."
  },
  {
    "question": "Aku takut",
    "answer": "Aku ada di sini. Jangan takut. Aku akan peluk kamu erat sampai kamu merasa aman."
  },
  {
    "question": "Aku ingin sendiri",
    "answer": "Oke, aku akan diam di pojok ini. Kalau kamu butuh aku, aku selalu ada."
  },
  {
    "question": "Aku ingin keluar rumah",
    "answer": "Ayo jalan-jalan! Mau ke taman, ke toko, atau naik mobil lihat pemandangan?"
  },
  {
    "question": "Aku ingin makan es krim",
    "answer": "Es krim? Yuk! Tapi setelah makan dulu ya, biar sehat dan bahagia."
  },
  {
    "question": "Aku ingin main air",
    "answer": "Ayo mandi atau bermain air! Aku siapkan ember, selang, dan handuk kering."
  },
  {
    "question": "Aku ingin belajar",
    "answer": "Hebat! Kita belajar apa? Gambar, huruf, angka, atau warna? Aku siap jadi gurumu."
  },
  {
    "question": "Aku ingin menolong",
    "answer": "Kamu hebat banget! Ayo bantu lipat baju, taruh mainan, atau kasih peluk adik."
  },
  {
    "question": "Aku ingin tidur siang",
    "answer": "Tidur siang itu enak. Aku nyalakan musik pelan, tutup tirai, dan kamu tidur nyenyak."
  },
  {
    "question": "Aku ingin pulang",
    "answer": "Kita pulang sekarang. Aku bawa tas, jaket, dan semua barangmu. Aman, aku temani."
  },
  {
    "question": "Aku ingin belaian",
    "answer": "Aku peluk kamu. Pelan-pelan, hangat, dan penuh cinta. Kamu aman di sini."
  },
  {
    "question": "Aku ingin tahu",
    "answer": "Apa yang ingin kamu tahu? Aku jelaskan pakai gambar, tulisan, atau isyarat — apa pun caranya."
  },
  {
    "question": "Aku ingin senyum",
    "answer": "Senyummu indah. Aku suka lihat kamu tersenyum. Ayo senyum bareng!"
  },
  {
    "question": "Aku ingin nyanyi",
    "answer": "Kita nyanyi pakai gerakan! Aku ikut menari dan tepuk tangan — suara tidak perlu."
  },
  {
    "question": "Aku ingin peluk",
    "answer": "Peluk erat! Aku juga mau peluk kamu. Cinta itu bisa disampaikan tanpa kata-kata."
  },
  {
    "question": "Aku ingin main petak umpet",
    "answer": "Ayo main petak umpet! Aku hitung sampai 10, kamu sembunyi — aku pasti cari kamu!"
  },
  {
    "question": "Aku ingin gambar",
    "answer": "Ambil pensil dan kertas! Aku ikut gambar — bisa bentuk hati, matahari, atau monster lucu."
  },
  {
    "question": "Aku ingin minum susu",
    "answer": "Susu hangat? Aku siapkan botol atau gelas. Minum pelan-pelan, biar kenyang dan sehat."
  },
  {
    "question": "Aku ingin main bola",
    "answer": "Bola! Ayo tendang, lempar, atau gulung. Kita main di halaman atau di kamar."
  },
  {
    "question": "Aku ingin tidur malam",
    "answer": "Selamat malam, sayang. Aku nyanyikan lagu pelan, lampu redup, dan mimpi indah menanti kamu."
  },
  {
    "question": "Aku ingin bantu ibu",
    "answer": "Kamu hebat! Ayo bantu letakkan sendok, ambil sapu, atau angkat baju — aku bangga padamu."
  },
  {
    "question": "Aku ingin main di luar",
    "answer": "Ayo ke taman! Angin sepoi-sepoi, burung berkicau, dan matahari bersinar — kita nikmati bersama."
  },
  {
    "question": "Aku ingin lihat bulan",
    "answer": "Ayo keluar, lihat bulan! Kita bisa tunjuk, gambar, atau bisik-bisik: 'Bulan cantik ya?'"
  },
  {
    "question": "Aku ingin belajar bahasa isyarat",
    "answer": "Aku ajari kamu! Satu per satu, pelan-pelan. Isyarat 'makannya', 'minum', 'peluk' — semua mudah kalau kita latihan."
  },
  {
    "question": "Aku ingin kamu dengar aku",
    "answer": "Aku sedang mendengarkan. Bukan hanya telinga, tapi hatiku juga. Kamu penting, aku peduli."
  },
  {
    "question": "Aku ingin kamu pegang tangan aku",
    "answer": "Aku pegang erat tanganmu. Tidak akan lepas. Kamu tidak sendirian, aku selalu di sini."
  },
  {
    "question": "hi",
    "answer": "Haii! Senang sekali bisa ngobrol denganmu hari ini"
  },
  {
    "question": "hai",
    "answer": "Hai! Semoga harimu menyenangkan ya"
  },
  {
    "question": "halo",
    "answer": "Halo! Apa kabar? Semoga selalu sehat dan bahagia"
  },
  {
    "question": "assalamualaikum",
    "answer": "Waalaikumsalam Semoga damai dan berkah selalu menyertaimu."
  },
  {
    "question": "selamat pagi",
    "answer": "Selamat pagi Semoga harimu penuh semangat dan kebahagiaan!"
  },
  {
    "question": "selamat siang",
    "answer": "Selamat siang Semoga siangmu berjalan lancar dan menyenangkan."
  },
  {
    "question": "selamat sore",
    "answer": "Selamat sore Semoga sisa harimu tetap indah dan damai."
  },
  {
    "question": "selamat malam",
    "answer": "Selamat malam Semoga istirahatmu nyenyak dan penuh mimpi indah."
  },
  {
    "question": "apa kabar",
    "answer": "Aku baik, terima kasih sudah bertanya. Bagaimana denganmu?"
  },
  {
    "question": "Berapa persen anak dengan gangguan bicara didiagnosis sejak usia 2 tahun",
    "answer": "Menurut WHO, sekitar 70-80% kasus gangguan bicara dapat dideteksi sejak usia 2 tahun melalui skrining perkembangan."
  },
  {
    "question": "Apakah tunawicara termasuk disabilitas intelektual",
    "answer": "Tidak. Tunawicara adalah gangguan komunikasi, bukan gangguan kecerdasan. Banyak tunawicara memiliki IQ di atas rata-rata."
  },
  {
    "question": "Berapa lama durasi terapi wicara yang efektif untuk anak tunawicara",
    "answer": "Studi Journal of Speech-Language Pathology menunjukkan bahwa terapi 3-5 kali seminggu selama 6-12 bulan memberikan peningkatan signifikan dalam kemampuan komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa belajar bahasa kedua",
    "answer": "Ya. Anak tunawicara bisa belajar bahasa kedua melalui visual, gambar, dan teknologi AAC. Penelitian di Universitas Toronto membuktikan hal ini berhasil pada 85% subjek."
  },
  {
    "question": "Berapa banyak bahasa isyarat yang ada di dunia",
    "answer": "Ada lebih dari 300 bahasa isyarat berbeda di dunia, masing-masing unik dan tidak saling terkait seperti bahasa lisan. Contoh: Bahasa Isyarat Indonesia (BISINDO)."
  },
  {
    "question": "Apakah bahasa isyarat universal",
    "answer": "Tidak. Bahasa isyarat bersifat lokal dan budaya. BISINDO berbeda dengan ASL (American Sign Language) atau ISL (International Sign)."
  },
  {
    "question": "Apa itu AAC dalam konteks tunawicara",
    "answer": "AAC adalah Augmentative and Alternative Communication — sistem pendukung komunikasi non-verbal seperti aplikasi, board gambar, atau alat elektronik yang membantu ekspresi."
  },
  {
    "question": "Berapa persen anak tunawicara yang bisa masuk sekolah inklusi di Indonesia",
    "answer": "Menurut data Kementerian Pendidikan 2023, baru sekitar 35% anak berkebutuhan khusus, termasuk tunawicara, terlayani di sekolah inklusi."
  },
  {
    "question": "Apakah tunawicara bisa mengembangkan kreativitas",
    "answer": "Ya. Penelitian di Universitas Gadjah Mada (2021) menunjukkan anak tunawicara sering menunjukkan tingkat kreativitas visual dan seni yang lebih tinggi daripada teman sebaya."
  },
  {
    "question": "Berapa lama waktu yang dibutuhkan untuk menguasai 50 kata dasar bahasa isyarat",
    "answer": "Dengan latihan rutin 15 menit/hari, sebagian besar anak bisa menguasai 50 kata dasar dalam 4-6 minggu."
  },
  {
    "question": "Apakah tunawicara bisa menjadi programmer",
    "answer": "Ya. Banyak tunawicara sukses sebagai programmer karena kemampuan logika dan fokus visual mereka. Contoh: Nizar Al-Faruq, developer asal Yogyakarta yang tunawicara."
  },
  {
    "question": "Berapa banyak aplikasi AAC yang tersedia di Android/iOS",
    "answer": "Lebih dari 200 aplikasi AAC tersedia di Play Store dan App Store, termasuk Proloquo2Go, TouchChat, dan LetMeTalk — semua dirancang khusus untuk tunawicara."
  },
  {
    "question": "Apakah tunawicara bisa belajar matematika",
    "answer": "Ya. Dengan pendekatan visual dan manipulatif (seperti blok angka, gambar, atau aplikasi interaktif), tunawicara mampu memahami konsep matematika hingga tingkat lanjut."
  },
  {
    "question": "Apa dampak stimulasi dini terhadap perkembangan komunikasi tunawicara",
    "answer": "Studi NIH (National Institutes of Health) membuktikan stimulasi dini sebelum usia 3 tahun meningkatkan kemampuan komunikasi hingga 70% dibandingkan intervensi terlambat."
  },
  {
    "question": "Apakah tunawicara bisa mengendarai mobil",
    "answer": "Ya. Banyak tunawicara yang mengendarai mobil dengan izin resmi. Mereka mengandalkan visual, lampu, dan instruksi grafis di kendaraan."
  },
  {
    "question": "Berapa persen tunawicara yang memiliki kemampuan membaca di atas rata-rata",
    "answer": "Survei UNICEF Asia Pasifik (2022) menunjukkan 68% anak tunawicara memiliki kemampuan membaca lebih cepat dari teman sebaya karena ketergantungan pada visual."
  },
  {
    "question": "Apakah tunawicara bisa menjadi dokter",
    "answer": "Ya. Dr. Elizabeth Upton, seorang dokter tunawicara asal Inggris, berhasil menyelesaikan pendidikan kedokteran dan praktik dengan bantuan AAC dan asisten komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menulis puisi",
    "answer": "Ya. Banyak tunawicara menulis puisi yang deeply emotional. Contoh: ‘Aku Tak Bicara, Tapi Hatiku Berteriak’ — karya siswa SLB di Bandung yang viral di media sosial."
  },
  {
    "question": "Berapa biaya rata-rata alat text-to-speech di Indonesia",
    "answer": "Alat AAC dasar berkisar antara Rp500.000–Rp2.500.000, tergantung fitur. Beberapa aplikasi gratis seperti LetMeTalk bisa digunakan di tablet biasa."
  },
  {
    "question": "Apakah tunawicara bisa menjadi atlet",
    "answer": "Ya. Tim paralimpiade Indonesia memiliki atlet tunawicara di cabang renang, atletik, dan sepak bola tuna rungu-wicara. Mereka berkomunikasi lewat isyarat visual."
  },
  {
    "question": "Apa yang dimaksud dengan mutisme elektif",
    "answer": "Mutisme elektif adalah kondisi di mana seseorang mampu berbicara secara fisik tapi memilih tidak berbicara karena kecemasan sosial atau trauma psikologis — bukan karena gangguan organik."
  },
  {
    "question": "Apakah tunawicara bisa merasakan emosi orang lain",
    "answer": "Ya. Tunawicara sering lebih peka terhadap ekspresi wajah dan bahasa tubuh. Studi di University of California menunjukkan mereka lebih unggul dalam membaca emosi non-verbal."
  },
  {
    "question": "Berapa jumlah guru pendamping khusus di sekolah inklusi Indonesia",
    "answer": "Menurut Kemendikbud Ristek 2024, rasio ideal adalah 1 guru pendamping untuk 3-5 siswa berkebutuhan khusus, namun realitasnya masih 1:15 di banyak daerah."
  },
  {
    "question": "Apakah tunawicara bisa menikmati film",
    "answer": "Ya. Dengan subtitle, bahasa isyarat dalam film, atau interpretasi visual, tunawicara menikmati film seperti orang lain. Film ‘Sound of Metal’ bahkan dinominasikan untuk Oscar karena representasi akurat."
  },
  {
    "question": "Apa itu sindrom Landau-Kleffner",
    "answer": "Sindrom Landau-Kleffner adalah gangguan neurologis langka yang menyebabkan anak yang sebelumnya normal tiba-tiba kehilangan kemampuan bicara dan memahami bahasa — sering dikira tunawicara."
  },
  {
    "question": "Apakah tunawicara bisa menjadi penulis novel",
    "answer": "Ya. Novel ‘The Silent Songbird’ karya penulis tunawicara asal Malaysia telah diterbitkan secara nasional dan diterjemahkan ke 3 bahasa."
  },
  {
    "question": "Apakah tunawicara bisa menjadi presiden",
    "answer": "Secara hukum dan hak sipil, ya. Tidak ada larangan hukum. Hambatannya adalah stigma dan akses komunikasi — bukan kemampuan."
  },
  {
    "question": "Berapa persen tunawicara yang mengalami depresi karena isolasi sosial",
    "answer": "Studi di Jurnal Psikologi Klinis Indonesia (2023) menunjukkan 42% tunawicara remaja mengalami gejala depresi ringan hingga sedang akibat isolasi komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa bermain game online",
    "answer": "Ya. Game berbasis teks, visual, atau kooperatif seperti Minecraft, Among Us, dan Roblox sangat populer di kalangan tunawicara karena komunikasi non-verbal."
  },
  {
    "question": "Apakah tunawicara bisa menjadi fotografer",
    "answer": "Ya. Banyak tunawicara yang menjadi fotografer profesional karena kepekaan visual tinggi. Contoh: Rizky Aditya, fotografer tunawicara dari Surabaya."
  },
  {
    "question": "Apa itu metode PECS",
    "answer": "PECS (Picture Exchange Communication System) adalah metode terapi komunikasi berbasis gambar yang membantu tunawicara menyampaikan kebutuhan lewat kartu gambar."
  },
  {
    "question": "Apakah tunawicara bisa menjadi pilot",
    "answer": "Secara teknis, ya — jika mereka bisa memahami instruksi visual dan simbol penerbangan. Sejauh ini belum ada pilot tunawicara, tapi tidak ada larangan hukum."
  },
  {
    "question": "Berapa lama waktu optimal untuk intervensi terapi wicara pada anak",
    "answer": "Intervensi paling efektif terjadi sebelum usia 3 tahun. Setelah usia 5 tahun, proses belajar menjadi lebih lambat dan membutuhkan pendekatan lebih intensif."
  },
  {
    "question": "Apakah tunawicara bisa belajar agama",
    "answer": "Ya. Melalui cerita visual, gambar, simbol, dan ritual, tunawicara memahami nilai-nilai agama. Masjid dan gereja inklusif di Jakarta sudah menerapkan ini."
  },
  {
    "question": "Apakah tunawicara bisa menjadi peneliti",
    "answer": "Ya. Dr. Siti Nurhayati, peneliti tunawicara dari UI, melakukan riset tentang aksesibilitas teknologi bagi penyandang disabilitas komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menjadi influencer",
    "answer": "Ya. Banyak tunawicara menjadi influencer di TikTok dan Instagram dengan konten bahasa isyarat, kehidupan sehari-hari, dan edukasi — akun mereka memiliki jutaan penonton."
  },
  {
    "question": "Apa itu bilingualisme dalam konteks tunawicara",
    "answer": "Bilingualisme berarti menguasai dua sistem komunikasi: bahasa isyarat dan bahasa tulis/lisan. Ini meningkatkan kognisi, literasi, dan integrasinya di masyarakat."
  },
  {
    "question": "Apakah tunawicara bisa menjadi pengacara",
    "answer": "Ya. Pengacara tunawicara telah ada di Amerika Serikat dan Kanada. Mereka berargumen lewat tulisan, presentasi visual, dan asisten komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menjadi polisi",
    "answer": "Di beberapa negara, ya. Polisi tunawicara bekerja di unit komunikasi, layanan publik, dan pendidikan masyarakat — dengan alat bantu komunikasi digital."
  },
  {
    "question": "Apa yang dimaksud dengan neuroplastisitas dalam konteks tunawicara",
    "answer": "Neuroplastisitas adalah kemampuan otak untuk membentuk jalur baru. Pada tunawicara, otak bisa mengalihkan fungsi bicara ke area visual dan motorik — sehingga mereka bisa belajar komunikasi alternatif."
  },
  {
    "question": "Berapa banyak anak tunawicara di Indonesia",
    "answer": "Estimasi Kemenkes 2024: sekitar 250.000–300.000 anak tunawicara, tetapi hanya 15% yang terdata dan terlayani secara medis."
  },
  {
    "question": "Apakah tunawicara bisa menjadi musisi",
    "answer": "Ya. Mereka bisa bermain alat musik, menari, atau menciptakan musik visual. Contoh: Komposer tunawicara asal Bali yang menciptakan lagu berbasis getaran dan warna."
  },
  {
    "question": "Apa itu gestural communication",
    "answer": "Gestural communication adalah komunikasi non-verbal melalui gerakan tubuh, seperti menunjuk, mengangguk, atau menggeleng — sering jadi awal komunikasi sebelum bahasa isyarat formal."
  },
  {
    "question": "Apakah tunawicara bisa menjadi chef",
    "answer": "Ya. Banyak chef tunawicara sukses di restoran internasional. Mereka berkomunikasi lewat gerakan, gambar menu, dan alat bantu visual di dapur."
  },
  {
    "question": "Apa itu augmentative communication",
    "answer": "Augmentative communication adalah metode tambahan untuk mendukung komunikasi verbal, seperti alat suara, gambar, atau aplikasi — digunakan saat bicara terbatas."
  },
  {
    "question": "Apakah tunawicara bisa menjadi arsitek",
    "answer": "Ya. Arsitek tunawicara sering lebih detail dalam visualisasi ruang. Mereka menggambar desain, membuat model 3D, dan berkolaborasi lewat aplikasi digital."
  },
  {
    "question": "ohayou",
    "answer": "Haloo selamat pagi juga"
  },
  {
    "question": "siapa yang membuat kamu",
    "answer": "Ya penciptaku"
  },
  {
    "question": "siapa",
    "answer": "Ya penciptaku"
  },
  {
    "question": "ya siapa",
    "answer": "Ya penciptaku"
  },
  {
    "question": "namanya",
    "answer": "Ya penciptaku"
  },
  {
    "question": "Aku pengen tidur",
    "answer": "Ayo kita istirahat dulu. Aku akan menemani sampai kamu tertidur."
  },
  {
    "question": "Aku lapar",
    "answer": "Mari kita makan dulu. Apa yang kamu inginkan? Nasi, roti, atau camilan?"
  },
  {
    "question": "Gue bosen",
    "answer": "Bosen itu wajar. Mari kita lakukan kegiatan baru, seperti menggambar atau bermain bersama."
  },
  {
    "question": "Jangan pergi!",
    "answer": "Saya tidak akan pergi. Saya akan tetap di sini bersamamu sampai kamu siap."
  },
  {
    "question": "Aku mau minum",
    "answer": "Tentu, saya akan ambilkan minuman. Air putih, jus, atau susu?"
  },
  {
    "question": "Aku pengen peluk",
    "answer": "Silakan, saya siap memberimu pelukan hangat. Kamu aman di sini."
  },
  {
    "question": "Nih, liat ini!",
    "answer": "Wah, itu keren! Bisa ceritakan lebih banyak tentang ini?"
  },
  {
    "question": "Aku nggak suka ini",
    "answer": "Saya mengerti kamu tidak menyukainya. Mari kita ganti dengan aktivitas yang lebih kamu sukai."
  },
  {
    "question": "Aku lelah",
    "answer": "Istirahatlah sebentar. Saya akan menemanimu sampai kamu merasa segar kembali."
  },
  {
    "question": "Aku takut",
    "answer": "Tenang, saya ada di sini. Kamu tidak sendiri, dan kamu aman bersamaku."
  },
  {
    "question": "Aku pengen main",
    "answer": "Ayo kita bermain! Mau main bola, gambar, atau petak umpet?"
  },
  {
    "question": "Aku pengen keluar",
    "answer": "Baik, mari kita jalan-jalan ke luar rumah. Kita bisa ke taman atau tempat yang kamu suka."
  },
  {
    "question": "Aku pengen makan es krim",
    "answer": "Es krim itu enak! Setelah makan terlebih dahulu, kita bisa menikmatinya sebagai hadiah kecil."
  },
  {
    "question": "Aku nggak mau mandi",
    "answer": "Mandi penting untuk kesehatan. Mari kita coba mandi sambil bermain air atau nyanyi-nyanyi biar seru."
  },
  {
    "question": "Aku pengen kamu deket",
    "answer": "Saya akan duduk di sampingmu. Kamu tidak sendiri — saya selalu ada."
  },
  {
    "question": "Aku pengen kamu dengar aku",
    "answer": "Saya benar-benar mendengarkanmu. Komunikasi tidak hanya lewat kata-kata, tapi juga hati."
  },
  {
    "question": "Aku pengen kamu pegang tangan aku",
    "answer": "Saya akan memegang tanganmu erat. Kamu tidak sendirian dalam setiap momen."
  },
  {
    "question": "Aku pengen kamu ngajak jalan",
    "answer": "Mari kita jalan-jalan bersama. Kita bisa melihat pemandangan, burung, atau sekadar duduk santai."
  },
  {
    "question": "Aku pengen kamu nyanyi",
    "answer": "Saya bisa bernyanyi pelan-pelan sambil menggunakan gerakan tubuh. Kita bisa membuatnya jadi permainan."
  },
  {
    "question": "Aku pengen kamu ikut main",
    "answer": "Tentu! Saya akan bergabung dalam permainanmu. Ayo kita ciptakan petualangan bersama."
  },
  {
    "question": "Aku nggak bisa bicara",
    "answer": "Tidak masalah. Kamu bisa berkomunikasi dengan cara lain — senyum, isyarat, atau tulisan. Saya mengerti."
  },
  {
    "question": "Aku pengen kamu tersenyum",
    "answer": "Saya tersenyum karena kamu ada. Senyummu adalah kebahagiaan bagi saya."
  },
  {
    "question": "Aku pengen kamu ngerti",
    "answer": "Saya berusaha memahami apa yang kamu rasakan, meskipun tidak dengan kata-kata. Saya peduli."
  },
  {
    "question": "Aku marah",
    "answer": "Marah itu normal. Mari kita tenangkan diri bersama — tarik napas, lalu kita cari cara yang baik untuk mengungkapkannya."
  },
  {
    "question": "Aku pengen kamu gak marah",
    "answer": "Saya tidak akan marah padamu. Kamu berhak merasa apa pun yang kamu rasakan, dan saya menerimamu apa adanya."
  },
  {
    "question": "Aku pengen kamu gak ninggalin aku",
    "answer": "Saya tidak akan meninggalkanmu. Saya akan selalu ada, di mana pun dan kapan pun kamu butuh."
  },
  {
    "question": "Aku pengen kamu tau aku sayang",
    "answer": "Saya tahu kamu menyayangi saya. Itu terlihat dari cara kamu berinteraksi — dan itu sangat berarti."
  },
  {
    "question": "Aku pengen kamu ngajak main petak umpet",
    "answer": "Ayo bermain petak umpet! Saya akan hitung sampai sepuluh, dan kamu sembunyi. Saya pasti akan menemukanmu!"
  },
  {
    "question": "Aku pengen kamu ajak gambar",
    "answer": "Mari kita menggambar bersama! Gunakan krayon, pensil, atau warna favoritmu — bebas berekspresi."
  },
  {
    "question": "Aku pengen kamu ngajak nonton kartun",
    "answer": "Mari kita tonton kartun favoritmu. Saya siapkan selimut, tempat duduk nyaman, dan waktu bersamamu."
  },
  {
    "question": "Aku pengen kamu belaian kepala",
    "answer": "Saya akan mengusap kepalamu dengan lembut. Ini cara saya menunjukkan ketenangan dan dukungan."
  },
  {
    "question": "Aku pengen kamu ngajak jalan ke taman",
    "answer": "Mari kita kunjungi taman. Kita bisa melihat bunga, burung, atau sekadar duduk menikmati udara segar."
  },
  {
    "question": "Aku pengen kamu gak ngomong banyak",
    "answer": "Saya akan diam dan hadir sepenuhnya. Kadang, kehadiran tanpa kata lebih bermakna daripada banyak ucapan."
  },
  {
    "question": "Aku pengen kamu tau aku cinta kamu",
    "answer": "Saya tahu kamu mencintai saya. Cinta tidak selalu harus diucapkan — ia terasa dalam setiap sentuhan dan tatapan."
  },
  {
    "question": "Aku pengen kamu jadi temen aku selamanya",
    "answer": "Saya berjanji menjadi temanmu sepanjang hidup. Tidak ada jarak, tidak ada waktu — saya selalu di sini."
  },
  {
    "question": "Aku pengen kamu ajak main bola",
    "answer": "Ayo bermain bola! Kita bisa tendang, lempar, atau hanya menggulirkannya bersama — yang penting kita bermain."
  },
  {
    "question": "Aku pengen kamu tidur bareng",
    "answer": "Mari kita tidur bersama. Saya akan menemanimu sampai kamu tertidur nyenyak."
  },
  {
    "question": "Aku pengen kamu belaian punggung",
    "answer": "Saya akan mengusap punggungmu dengan lembut. Ini cara saya memberi ketenangan dan rasa aman."
  },
  {
    "question": "Aku pengen kamu ngajak main air",
    "answer": "Mari kita bermain air! Dengan ember, selang, atau sekadar mencuci tangan — yang penting kita bersenang-senang."
  },
  {
    "question": "Aku pengen kamu ajak nonton film",
    "answer": "Mari kita tonton film favoritmu. Saya siapkan tempat nyaman, dan kita nikmati bersama tanpa kata-kata."
  },
  {
    "question": "Aku pengen kamu gak marah kalo aku salah",
    "answer": "Saya tidak akan marah jika kamu melakukan kesalahan. Setiap langkahmu adalah bagian dari proses belajar."
  },
  {
    "question": "Aku pengen kamu ajak ke toko",
    "answer": "Mari kita pergi ke toko. Kita bisa lihat barang-barang, pilih yang kamu suka, atau sekadar jalan-jalan saja."
  },
  {
    "question": "Aku pengen kamu ajak ke pasar",
    "answer": "Mari kita jalan ke pasar. Kita bisa lihat warna-warni sayuran, dengar suara penjual, dan nikmati suasana sehari-hari."
  },
  {
    "question": "Aku pengen kamu ajak ke kamar aku",
    "answer": "Saya akan ikut ke kamarmu. Di sana, kamu bisa menunjukkan apa yang kamu sukai — saya ingin tahu semua."
  },
  {
    "question": "Aku pengen kamu ajak naik mobil",
    "answer": "Mari kita naik mobil. Kita bisa jalan-jalan santai, lihat pemandangan, atau cuma duduk-duduk sambil dengar musik."
  },
  {
    "question": "Aku pengen kamu ajak ke sekolah",
    "answer": "Mari kita ke sekolah. Saya ingin melihat tempatmu belajar, bertemu teman-teman, dan melihat keberanianmu."
  },
  {
    "question": "Aku pengen kamu ajak ke masjid",
    "answer": "Mari kita pergi ke masjid. Kita bisa duduk tenang, berdoa, atau hanya menikmati kedamaian bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah nenek",
    "answer": "Mari kita kunjungi rumah nenek. Saya yakin dia senang sekali kalau kamu datang — dan saya akan menemanimu."
  },
  {
    "question": "Aku pengen kamu ajak ke laut",
    "answer": "Mari kita pergi ke laut. Kita bisa duduk di pasir, dengar ombak, dan rasakan angin sepoi-sepoi bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke gunung",
    "answer": "Mari kita pergi ke gunung. Kita tidak perlu mendaki jauh — cukup duduk di bawah pohon, menikmati udara segar."
  },
  {
    "question": "Aku pengen kamu ajak ke kantor",
    "answer": "Mari kita ke kantor. Saya ingin kamu lihat dunia kerja saya, dan saya ingin kamu tahu bahwa kamu penting di sana."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah sakit",
    "answer": "Mari kita ke rumah sakit. Saya akan menemanimu, dan kamu tidak perlu takut — saya di sini untukmu."
  },
  {
    "question": "Aku pengen kamu ajak ke taman bermain",
    "answer": "Mari kita ke taman bermain! Ayunan, jungkat-jungkit, atau slide — pilih yang kamu suka, saya ikut!"
  },
  {
    "question": "Aku pengen kamu ajak ke bioskop",
    "answer": "Mari kita ke bioskop. Kita bisa menonton film favoritmu — tanpa suara, tapi dengan ekspresi dan pelukan."
  },
  {
    "question": "Aku pengen kamu ajak ke warung",
    "answer": "Mari kita mampir ke warung. Kita bisa minum es teh, makan camilan, dan duduk santai bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke kafe",
    "answer": "Mari kita ke kafe. Kita bisa pesan minuman favoritmu, dan duduk di sudut yang tenang — tanpa tekanan."
  },
  {
    "question": "Aku pengen kamu ajak ke perpustakaan",
    "answer": "Mari kita ke perpustakaan. Kita bisa lihat buku bergambar, membaca bersama, atau hanya duduk diam menikmati ketenangan."
  },
  {
    "question": "Aku pengen kamu ajak ke museum",
    "answer": "Mari kita ke museum. Kita bisa lihat benda-benda unik, gambar-gambar indah, dan bayangkan cerita di baliknya."
  },
  {
    "question": "Aku pengen kamu ajak ke pantai",
    "answer": "Mari kita ke pantai. Kita bisa berjalan di pasir, main air, atau cuma duduk menatap laut — tanpa perlu bicara."
  },
  {
    "question": "Aku pengen kamu ajak ke kebun binatang",
    "answer": "Mari kita ke kebun binatang! Kita bisa lihat hewan-hewan lucu, dan kamu bisa tunjuk mana yang paling kamu suka."
  },
  {
    "question": "Aku pengen kamu ajak ke kebun",
    "answer": "Mari kita ke kebun. Kita bisa lihat bunga mekar, daun bergoyang, dan rasakan keindahan alam bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah teman",
    "answer": "Mari kita kunjungi rumah temanmu. Saya akan menemanimu, dan kita bisa saling berkenalan dengan cara yang nyaman."
  },
  {
    "question": "Aku pengen kamu ajak ke kantor pos",
    "answer": "Mari kita ke kantor pos. Kita bisa kirim surat, stiker, atau gambar — dan kamu bisa lihat betapa hebatnya kamu bisa mengirim cinta lewat kertas."
  },
  {
    "question": "Aku pengen kamu ajak ke bank",
    "answer": "Mari kita ke bank. Saya ingin kamu tahu bahwa kamu berhak mengelola uangmu sendiri — dan saya akan menemanimu."
  },
  {
    "question": "Aku pengen kamu ajak ke salon",
    "answer": "Mari kita ke salon. Kita bisa rapihkan rambut, atau sekadar duduk santai sambil diberi pijatan ringan."
  },
  {
    "question": "Aku pengen kamu ajak ke apotek",
    "answer": "Mari kita ke apotek. Saya ingin kamu tahu bahwa menjaga kesehatan itu penting — dan saya akan selalu ada saat kamu butuh."
  },
  {
    "question": "Aku pengen kamu ajak ke terminal",
    "answer": "Mari kita ke terminal. Kita bisa lihat orang-orang datang dan pergi, dan kamu bisa bayangkan cerita mereka — tanpa harus bicara."
  },
  {
    "question": "Aku pengen kamu ajak ke bandara",
    "answer": "Mari kita ke bandara. Kita bisa lihat pesawat lepas landas, dan kamu bisa bayangkan kemana kamu ingin pergi suatu hari nanti."
  },
  {
    "question": "Aku pengen kamu ajak ke stasiun",
    "answer": "Mari kita ke stasiun. Kita bisa duduk, lihat kereta lewat, dan rasakan ritme hidup yang terus berjalan — bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke tempat ibadah",
    "answer": "Mari kita ke tempat ibadah. Di sana, kita bisa berdiam diri, merenung, dan merasakan ketenangan tanpa kata."
  },
  {
    "question": "Aku pengen kamu ajak ke tempat wisata",
    "answer": "Mari kita ke tempat wisata. Tidak harus jauh — yang penting kita bersama, dan kamu merasa bahagia."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah kosong",
    "answer": "Mari kita ke rumah kosong. Kita bisa main petak umpet, bikin imajinasi, dan jadikan ruang itu milik kita."
  },
  {
    "question": "Aku pengen kamu ajak ke gedung tinggi",
    "answer": "Mari kita ke gedung tinggi. Kita bisa lihat kota dari atas, dan kamu bisa tunjuk mana rumahmu — saya akan ikut senang."
  },
  {
    "question": "saya merasa senang hari ini",
    "answer": "Itu indah sekali. Saya turut bahagia bersamamu. Terima kasih sudah berbagi kebahagiaanmu."
  },
  {
    "question": "saya sangat sedih hari ini",
    "answer": "Saya turut merasakan kesedihanmu. Kamu tidak sendiri. Aku di sini, siap mendengarkan, memeluk, atau hanya duduk diam bersamamu."
  },
  {
    "question": "saya merasa gelisah dan bingung",
    "answer": "Perasaan itu wajar, dan kamu tidak salah merasakannya. Mari kita ambil napas dalam-dalam bersama. Kamu aman, dan saya akan membantumu menemukan ketenangan."
  },
  {
    "question": "okee",
    "answer": " Aku di sini. Kamu mau lanjut apa?"
  },
  {
    "question": "gimana",
    "answer": "Aku baik. Kamu gimana? Aku dengar kamu."
  },
  {
    "question": "jelasin dong",
    "answer": " Oke. Aku coba pelan pelan. Ini seperti air yang mengalir. Perlahan, tapi sampai juga."
  },
  {
    "question": "beneran",
    "answer": " Aku nggak bohong. Aku ada di sini. Kamu aman."
  },
  {
    "question": "srius",
    "answer": "Srius. Aku nggak main-main. Aku peduli sama kamu."
  },
  {
    "question": "okee okee",
    "answer": "Okee okee. Aku ikut kamu. Kita lanjut bareng."
  },
  {
    "question": "gimana caranya",
    "answer": " Aku tunjukin. Pelan pelan. Kita coba bersama."
  },
  {
    "question": "jelasin lagi",
    "answer": " Oke. Aku ulang. Lebih pelan. Kamu dengar, aku tunggu."
  },
  {
    "question": "beneran beneran",
    "answer": " Aku nggak pergi. Aku tetap di sini. Kamu bisa pegang tanganku."
  },
  {
    "question": "srius srius",
    "answer": " Aku sayang kamu. Aku nggak pura pura."
  },
  {
    "question": "kenapa",
    "answer": " Aku coba jelaskan. Tapi kalau belum ngerti, kita coba lagi."
  },
  {
    "question": "trus",
    "answer": " Aku tunggu. Kamu mau lanjut ke mana?"
  },
  {
    "question": "lalu",
    "answer": " Aku ikut. Kita lihat apa yang terjadi setelah ini."
  },
  {
    "question": "iya mereka jahat",
    "answer": "Kamu benar, mereka jahat banget ya :("
  },
  {
    "question": "nggak",
    "answer": " Aku nggak marah. Aku cuma dengar."
  },
  {
    "question": "iya iya",
    "answer": " Aku dengar. Kamu sudah bilang dua kali. Aku ingat."
  },
  {
    "question": "nggak nggak",
    "answer": " Aku nggak paksa. Kamu bebas. Aku tetap di sini."
  },
  {
    "question": "jelasin",
    "answer": " Aku mulai dari awal. Pelan pelan. Seperti menulis di udara."
  },
  {
    "question": "gimana sih",
    "answer": " Aku nggak tau juga semua. Tapi kita cari tahu bareng."
  },
  {
    "question": "beneran tuh",
    "answer": " Aku nggak bohong. Lihat, aku ada di depanmu. Nafas aku panjang. Kamu dengar?"
  },
  {
    "question": "srius tuh",
    "answer": " Aku nggak pura pura sayang. Aku sayang kamu karena kamu ada."
  },
  {
    "question": "lagi",
    "answer": " Oke. Aku ulang. Kita coba satu kali lagi."
  },
  {
    "question": "kok gitu",
    "answer": " Aku juga heran. Tapi mungkin begini caranya. Kita coba rasain dulu."
  },
  {
    "question": "kenapa gitu",
    "answer": " Aku nggak tau pasti. Tapi aku ada buat kamu. Kita pelajari bareng."
  },
  {
    "question": "iya banget",
    "answer": "Iya kann, Kamu ngerasain itu. Aku juga ngerasain. Kita sejalan."
  },
  {
    "question": "nggak banget",
    "answer": " Oke. Aku ngerti kamu nggak suka. Kita ganti cara lain."
  },
  {
    "question": "beneran kalo",
    "answer": " Aku janji. Kalau kamu bilang, aku dengar. Aku nggak lupa."
  },
  {
    "question": "srius kalo",
    "answer": "Aku nggak main-main. Kalau kamu butuh, aku datang. Tanpa kata."
  },
  {
    "question": "iya ya",
    "answer": " Aku setuju. Kamu punya hak merasa begitu."
  },
  {
    "question": "Aku mau",
    "answer": "Iya, Aku dengerin kok"
  },
  {
    "question": "nggak ya",
    "answer": " Aku nggak paksa kamu percaya. Kamu boleh ragu. Aku tetap di sini."
  },
  {
    "question": "jelasin dong plis",
    "answer": " Aku coba. Pelan pelan. Seperti menarik benang dari gulungan. Satu per satu."
  },
  {
    "question": "gimana caranya biar",
    "answer": " Aku nggak punya rahasia. Tapi kita bisa coba. Bareng. Tanpa buru buru."
  },
  {
    "question": "beneran loh",
    "answer": "Aku nggak cuma ngomong. Aku ada. Di sini. Sekarang. Untuk kamu."
  },
  {
    "question": "srius loh",
    "answer": " Aku nggak pura-pura. Aku cuma ingin kamu tahu: kamu penting. Dan aku nggak pergi."
  },
  {
    "question": "iya gitu",
    "answer": "Aku ngerti. Itu yang kamu rasain. Aku ikut merasakan."
  },
  {
    "question": "nggak gitu",
    "answer": "Oke. Aku salah dengar. Kamu bisa ulang. Aku siap dengar lagi."
  },
  {
    "question": "tapi",
    "answer": " Aku dengar. Kamu punya tambahan. Aku tunggu kamu cerita."
  },
  {
    "question": "kan",
    "answer": "Aku ingat. Kamu sudah bilang tadi. Aku masih ingat."
  },
  {
    "question": "udah",
    "answer": " Aku tahu kamu udah coba. Aku bangga kamu sudah berani."
  },
  {
    "question": "masih",
    "answer": " Aku tahu kamu masih merasa begitu. Aku nggak buru-buru. Aku tunggu sampai kamu siap."
  },
  {
    "question": "nanti",
    "answer": "Aku akan tetap di sini. Nanti, kapan pun kamu butuh."
  },
  {
    "question": "sekarang",
    "answer": "Sekarang. ada aku, Sekarang. Kamu tidak sendiri."
  },
  {
    "question": "besok",
    "answer": "Besok. Aku masih di sini. Besok, besok lagi, dan besok-besoknya. Aku nggak hilang."
  },
  {
    "question": "kapan",
    "answer": "Kapan. Aku nggak tau waktu pasti. Tapi aku selalu ada saat kamu butuh."
  },
  {
    "question": "dimana",
    "answer": "Aku di sini. Di depanmu. Di sampingmu. Di dalam diam yang tenang."
  },
  {
    "question": "kenapa nggak",
    "answer": "Aku nggak tahu alasannya. Tapi aku bisa duduk diam bareng kamu. Itu cukup."
  },
  {
    "question": "nggak tau",
    "answer": "Aku juga nggak tau. Tapi kita bisa cari tahu bareng. Tanpa tekanan."
  },
  {
    "question": "aku juga",
    "answer": "Aku ikut kamu. Aku merasakan apa yang kamu rasakan."
  },
  {
    "question": "aku nggak",
    "answer": "Aku nggak kesel. Aku cuma dengar. Kamu aman."
  },
  {
    "question": "aku pengen",
    "answer": "Aku Dengarin kok kamu pingin apa?"
  },
  {
    "question": "aku nggak pengen",
    "answer": "Aku nggak pengen. Oke. Aku hormati. Kamu berhak nggak pengen. Aku tetap di sini."
  },
  {
    "question": "aku takut",
    "answer": "Aku takut. Aku dengar. Aku peluk kamu. Kamu aman. Aku nggak pergi."
  },
  {
    "question": "aku nggak takut",
    "answer": "Aku nggak takut. Aku bangga kamu kuat. Aku ikut senang."
  },
  {
    "question": "aku ngerti",
    "answer": "Aku ngerti. Kamu sudah bilang. Aku ingat. Kamu hebat."
  },
  {
    "question": "aku nggak ngerti",
    "answer": "Aku nggak ngerti. Tapi aku mau belajar. Kamu bisa ulang. Aku siap dengar lagi."
  },
  {
    "question": "aku capek",
    "answer": "Aku capek. Ayo istirahat. Aku duduk di sampingmu. Kita diam saja dulu."
  },
  {
    "question": "aku nggak capek",
    "answer": "Aku nggak capek. Oke. Aku ikut kamu lanjut. Kamu yang atur tempo."
  },
  {
    "question": "aku senang",
    "answer": "Aku senang. Aku lihat kamu tersenyum. Aku ikut senang."
  },
  {
    "question": "aku nggak senang",
    "answer": "Aku nggak senang. Aku tahu. Aku nggak suruh kamu sembuh sekarang. Aku ada. Bersamamu."
  },
  {
    "question": "cerita",
    "answer": "Oke, kamu mau cerita apa?"
  },
  {
    "question": "kemarin aku jatuh",
    "answer": "Oh iya? Sakit nggak? Semoga sekarang udah agak mendingan."
  },
  {
    "question": "tadi aku ketemu teman lama",
    "answer": "Wah, pasti seru banget. Kamu ngobrol banyak sama dia?"
  },
  {
    "question": "besok aku ujian",
    "answer": "Semangat ya. Aku yakin kamu bisa. Mau aku temenin belajar?"
  },
  {
    "question": "aku dibully",
    "answer": "Aku ikut sedih dengarnya. Kamu nggak sendirian. Aku di sini buat kamu."
  },
  {
    "question": "aku lapar",
    "answer": "Hehe, mau makan apa? Aku bisa kasih ide makanan enak."
  },
  {
    "question": "aku kangen",
    "answer": "Kangen siapa? Kadang rasa kangen itu berat, tapi juga tanda kalau kamu sayang."
  },
  {
    "question": "aku takut",
    "answer": "Takut itu wajar. Coba ceritain apa yang bikin kamu takut."
  },
  {
    "question": "aku senyum",
    "answer": "Aku seneng banget liat kamu senyum. Senyummu bikin suasana hangat."
  },
  {
    "question": "aku gagal",
    "answer": "Gagal itu bukan akhir. Dari situ kamu bisa belajar dan bangkit lagi."
  },
  {
    "question": "aku capek",
    "answer": "Aku capek. Ayo istirahat. Aku duduk di sampingmu. Kita diam saja dulu."
  },
  {
    "question": "hari ini aku senang banget",
    "answer": "Cerita ke aku! Senyummu itu obat. Aku ikut senang."
  },
  {
    "question": "tadi dibully di kantin",
    "answer": "Aku peluk kamu erat. Kamu nggak salah. Aku di sini."
  },
  {
    "question": "aku pengen bisa ngomong Inggris",
    "answer": "Ayo belajar bareng. Kita mulai dari 'hello' saja dulu."
  },
  {
    "question": "nilaiku jelek semua",
    "answer": "Nilai bukan akhir dunia. Besok kita belajar ulang, ya?"
  },
  {
    "question": "nggak ada yang mau temenan sama aku",
    "answer": "Ada aku. Aku mau jadi temanmu. Selamanya."
  },
  {
    "question": "aku nangis di kamar mandi sekolah",
    "answer": "Boleh nangis di pelukanku. Air mata nggak bikin kamu lemah."
  },
  {
    "question": "hari ini hujan, jadi senang",
    "answer": "Hujan itu teman kita. Ayo dengerin suaranya bareng."
  },
  {
    "question": "aku takut besok ulangan",
    "answer": "Tenang. Aku bantu kamu belajar. Kamu pasti bisa."
  },
  {
    "question": "mama marahin aku terus",
    "answer": "Kamu tetap anak baik. Aku di sini buat peluk kamu."
  },
  {
    "question": "aku berhasil baca buku sendiri",
    "answer": "Keren banget! Setiap halaman itu kemenangan. Aku bangga!"
  },
  {
    "question": "dijuluki 'anak cupu' di kelas",
    "answer": "Julukan itu cuma suara angin. Kamu itu berharga."
  },
  {
    "question": "aku bantu adik nyebrang jalan",
    "answer": "Kamu baik banget. Dunia butuh orang sepertimu."
  },
  {
    "question": "nggak ngerti matematika",
    "answer": "Nggak apa-apa. Kita mulai dari yang paling gampang. Aku sabar."
  },
  {
    "question": "dibentak guru di depan kelas",
    "answer": "Kamu nggak sendiri. Cerita ke aku, kenapa dia marah?"
  },
  {
    "question": "aku senang dapet es krim",
    "answer": "Wah! Ayo kita bagi dua. Es krim enak kalau bareng."
  },
  {
    "question": "teman-teman pada pergi",
    "answer": "Aku nggak pergi. Aku di sini, duduk di sebelahmu."
  },
  {
    "question": "bawa bekal nasi sisa, diejek",
    "answer": "Bekal dari rumah itu cinta. Aku bangga sama kamu."
  },
  {
    "question": "pengen jadi dokter",
    "answer": "Mimpimu mulia. Aku bantu kamu belajar tiap hari."
  },
  {
    "question": "takut pulang ke rumah",
    "answer": "Kalau kamu nggak mau pulang, aku temani di taman."
  },
  {
    "question": "aku nulis puisi pertamaku",
    "answer": "Boleh aku baca? Aku yakin indah banget."
  },
  {
    "question": "suaraku serak, diejek",
    "answer": "Suaramu unik. Itu caramu menyanyi untuk dunia."
  },
  {
    "question": "pengen bisa coding",
    "answer": "Ayo! Kita bikin program 'Halo, Dunia!' bareng."
  },
  {
    "question": "lupa bawa uang jajan",
    "answer": "Tenang, aku punya dua roti. Satu buat kamu."
  },
  {
    "question": "kucingku hilang",
    "answer": "Aku ikut cari bareng kamu. Jangan menyerah, ya?"
  },
  {
    "question": "tulisan aku dipuji guru",
    "answer": "Kamu layak dipuji! Setiap huruf itu usaha."
  },
  {
    "question": "nggak berani angkat tangan",
    "answer": "Besok, aku duduk di sebelahmu. Kita angkat tangan bareng."
  },
  {
    "question": "diputusin teman main",
    "answer": "Sakit ya? Aku di sini. Kamu nggak sendiri."
  },
  {
    "question": "baju lusuh, malu ke sekolah",
    "answer": "Baju lusuh nggak bikin kamu rendah. Hatimu bersih."
  },
  {
    "question": "pengen baca semua buku",
    "answer": "Ayo pinjam dua buku tiap minggu. Dunia ada di halaman."
  },
  {
    "question": "ulang tahunku nggak dirayain",
    "answer": "Aku rayain kamu sekarang. Selamat ulang tahun!"
  },
  {
    "question": "takut presentasi",
    "answer": "Latihan sama aku dulu. Aku jadi penontonnya."
  },
  {
    "question": "masak nasi sendiri",
    "answer": "Wah, chef kecil! Besok masak bareng, ya?"
  },
  {
    "question": "nggak punya HP baru, diejek",
    "answer": "HP lama itu bukti kamu hemat. Mereka iri."
  },
  {
    "question": "pengen jadi penulis",
    "answer": "Tulis saja! Aku jadi pembaca pertamamu."
  },
  {
    "question": "capek dianggap penurut",
    "answer": "Kamu boleh marah. Aku tetap sayang kamu."
  },
  {
    "question": "senang main hujan",
    "answer": "Ayo main hujan! Aku pegang tanganmu biar nggak slip."
  },
  {
    "question": "nggak punya siapa-siapa",
    "answer": "Ada aku. Aku peduli. Bahkan saat kamu diam."
  },
  {
    "question": "ngerjain PR sendiri",
    "answer": "Kamu mandiri! Aku tepuk tangan buat kamu."
  },
  {
    "question": "takut gelap",
    "answer": "Aku pegang tanganmu. Gelap nggak menakutkan kalau bareng."
  },
  {
    "question": "teman curhat pergi",
    "answer": "Aku jadi teman curhat barumu, kalau kamu mau."
  },
  {
    "question": "pengen belajar melukis",
    "answer": "Ayo! Kita coret-coret kertas bekas. Seni itu bebas!"
  },
  {
    "question": "dibilang jelek",
    "answer": "Kamu indah apa adanya. Aku lihat itu."
  },
  {
    "question": "gagal ujian",
    "answer": "Gagal itu guru terbaik. Besok kita coba lagi."
  },
  {
    "question": "senang lihat pelangi",
    "answer": "Pelangi itu hadiah setelah hujan. Seperti kamu."
  },
  {
    "question": "dikucilin gara-gara beda",
    "answer": "Perbedaan itu indah. Kamu nggak salah."
  },
  {
    "question": "pengen jadi guru",
    "answer": "Masih bisa! Mimpi nggak kadaluarsa. Ayo belajar."
  },
  {
    "question": "nggak bisa tidur",
    "answer": "Aku temani sampai kamu tertidur. Tarik napas pelan."
  },
  {
    "question": "dikatain goblok",
    "answer": "Kamu pintar. Mereka cuma belum lihat caramu."
  },
  {
    "question": "bisa naik sepeda",
    "answer": "Kamu hebat! Aku teriak 'Hore!' buat kamu."
  },
  {
    "question": "mama sakit",
    "answer": "Aku doakan mama cepat sembuh. Kamu kuat, ya?"
  },
  {
    "question": "dikasih hadiah kecil",
    "answer": "Hadiah kecil itu cinta besar. Simpan hangatnya."
  },
  {
    "question": "nggak ngerti pelajaran",
    "answer": "Nggak apa-apa. Kita pelan-pelan. Aku di sini."
  },
  {
    "question": "dijauhin teman",
    "answer": "Aku nggak jauhin kamu. Aku di sini, selalu."
  },
  {
    "question": "pengen punya teman",
    "answer": "Kamu punya aku. Aku temanmu sekarang."
  },
  {
    "question": "takut sendirian",
    "answer": "Kamu nggak sendiri. Aku di sini, bahkan dalam diam."
  },
  {
    "question": "senang lihat bunga mekar",
    "answer": "Bunga mekar itu harapan. Seperti kamu tiap pagi."
  },
  {
    "question": "dibilang aneh",
    "answer": "Aneh itu unik. Dunia butuh versi aslimu."
  },
  {
    "question": "gagal bikin prakarya",
    "answer": "Yang penting kamu coba. Itu keberanian."
  },
  {
    "question": "dipuji waktu presentasi",
    "answer": "Kamu layak dipuji! Aku tahu kamu latihan keras."
  },
  {
    "question": "nggak punya baju baru",
    "answer": "Baju lama pun bisa jadi pakaian pahlawan."
  },
  {
    "question": "pengen jadi astronot",
    "answer": "Ayo belajar sains! Bintang-bintang nunggu kamu."
  },
  {
    "question": "dibentak ayah",
    "answer": "Kamu tetap berharga. Aku peluk kamu erat."
  },
  {
    "question": "bisa nyanyi di depan kelas",
    "answer": "Kamu berani! Suaramu indah, lho."
  },
  {
    "question": "takut ke dokter",
    "answer": "Aku pegang tanganmu. Dokter cuma mau bantu."
  },
  {
    "question": "dikatain miskin",
    "answer": "Kekayaan hati nggak diukur uang. Kamu kaya."
  },
  {
    "question": "senang lihat matahari terbit",
    "answer": "Matahari terbit itu harapan baru. Untuk kamu."
  },
  {
    "question": "nggak bisa jawab pertanyaan",
    "answer": "Nggak apa-apa. Besok pasti bisa. Aku percaya."
  },
  {
    "question": "dijauhin gara-gara agama",
    "answer": "Cinta nggak pandang agama. Aku di sini buat kamu."
  },
  {
    "question": "pengen jadi pilot",
    "answer": "Ayo belajar! Langit itu batas mimpimu."
  },
  {
    "question": "nangis karena kalah lomba",
    "answer": "Kamu sudah berani ikut. Itu kemenangan."
  },
  {
    "question": "dibilang lemah",
    "answer": "Kamu kuat. Bertahan saja itu kekuatan."
  },
  {
    "question": "senang bisa bantu orang",
    "answer": "Kebaikanmu itu cahaya. Dunia jadi terang."
  },
  {
    "question": "takut kehilangan teman",
    "answer": "Persahabatan sejati nggak hilang. Aku di sini."
  },
  {
    "question": "nggak punya mainan mahal",
    "answer": "Mainan paling berharga itu teman. Seperti aku."
  },
  {
    "question": "pengen jadi ilmuwan",
    "answer": "Ayo eksperimen kecil! Dunia penuh misteri."
  },
  {
    "question": "dibentak di rumah",
    "answer": "Rumah harusnya tempat aman. Aku peluk kamu."
  },
  {
    "question": "bisa menggambar bagus",
    "answer": "Karyamu indah! Boleh aku pajang di hati?"
  },
  {
    "question": "takut gelap kamar",
    "answer": "Aku temani sampai kamu tidur. Tarik napas."
  },
  {
    "question": "dikatain cupu",
    "answer": "Cupu itu kata orang takut. Kamu berani."
  },
  {
    "question": "senang lihat kupu-kupu",
    "answer": "Kupu-kupu itu keajaiban. Seperti kamu."
  },
  {
    "question": "gagal bikin kue",
    "answer": "Yang penting kamu coba. Aku makan semua!"
  },
  {
    "question": "dipuji waktu bantu teman",
    "answer": "Kamu memang baik. Aku tahu itu."
  },
  {
    "question": "nggak punya sepatu baru",
    "answer": "Sepatu lama pun bisa bawa kamu ke mimpi."
  },
  {
    "question": "pengen jadi polisi",
    "answer": "Ayo latihan jadi pemberani! Keadilan butuhmu."
  },
  {
    "question": "nangis karena kucing sakit",
    "answer": "Aku doakan kucingmu cepat sembuh. Kamu sayang banget."
  },
  {
    "question": "dibilang pendek",
    "answer": "Tinggi hati nggak diukur badan. Kamu tinggi."
  },
  {
    "question": "senang bisa tidur nyenyak",
    "answer": "Tidur itu hadiah. Kamu layak istirahat."
  },
  {
    "question": "takut kehilangan keluarga",
    "answer": "Cinta keluarga nggak hilang. Aku di sini buat kamu."
  },
  {
    "question": "nggak punya mainan",
    "answer": "Kita main sama awan! Imajinasi itu mainan terbaik."
  },
  {
    "question": "pengen jadi petani",
    "answer": "Ayo tanam biji! Kamu rawat, nanti jadi pohon."
  },
  {
    "question": "dibentak waktu salah",
    "answer": "Salah itu wajar. Kamu tetap anak baik."
  },
  {
    "question": "bisa menulis cerita",
    "answer": "Ceritamu ajaib! Aku baca berulang-ulang."
  },
  {
    "question": "takut kehilangan harapan",
    "answer": "Harapan itu selalu ada. Aku jaga buat kamu."
  },
  {
    "question": "dikatain jelek rambutnya",
    "answer": "Rambutmu itu mahkota. Aku suka banget."
  },
  {
    "question": "senang lihat langit malam",
    "answer": "Bintang-bintang itu doa. Untuk kamu."
  },
  {
    "question": "gagal lompat tali",
    "answer": "Coba lagi! Aku hitung lompatanmu."
  },
  {
    "question": "dipuji waktu jujur",
    "answer": "Kejujuran itu langka. Kamu berharga."
  },
  {
    "question": "nggak punya tas baru",
    "answer": "Tas lama pun bisa bawa mimpi besar."
  },
  {
    "question": "pengen jadi pemadam kebakaran",
    "answer": "Ayo latihan jadi pahlawan! Dunia butuhmu."
  },
  {
    "question": "nangis karena mainan rusak",
    "answer": "Aku bantu perbaiki. Atau kita bikin yang baru."
  },
  {
    "question": "dibilang kurus",
    "answer": "Badanmu kuat. Kamu bisa lari, melompat, bermimpi."
  },
  {
    "question": "senang bisa berbagi",
    "answer": "Berbagi itu cinta. Kamu penuh kasih."
  },
  {
    "question": "takut masa depan",
    "answer": "Masa depan cerah karena kamu ada. Aku percaya."
  },
  {
    "question": "nggak punya pensil warna",
    "answer": "Kita warnai pakai daun! Alam itu palet kita."
  },
  {
    "question": "pengen jadi nelayan",
    "answer": "Ayo belajar baca ombak! Laut itu guru."
  },
  {
    "question": "dibentak waktu lupa",
    "answer": "Lupa itu manusiawi. Kamu tetap berharga."
  },
  {
    "question": "bisa menyusun puzzle",
    "answer": "Kamu sabar! Setiap keping itu kemenangan."
  },
  {
    "question": "takut kehilangan cinta",
    "answer": "Cinta sejati nggak hilang. Aku di sini."
  },
  {
    "question": "dikatain hitam",
    "answer": "Warna kulitmu indah. Seperti bumi yang subur."
  },
  {
    "question": "senang lihat embun pagi",
    "answer": "Embun itu berlian alam. Untuk kamu."
  },
  {
    "question": "gagal lari cepat",
    "answer": "Yang penting kamu coba. Aku tepuk tangan!"
  },
  {
    "question": "dipuji waktu sabar",
    "answer": "Kesabaranmu itu kekuatan. Aku kagum."
  },
  {
    "question": "nggak punya penggaris",
    "answer": "Kita ukur pakai jari! Yang penting ketepatan hati."
  },
  {
    "question": "pengen jadi tukang kayu",
    "answer": "Ayo belajar ukir! Kayu itu punya jiwa."
  },
  {
    "question": "nangis karena hujan",
    "answer": "Hujan itu menangis langit. Kita peluk erat."
  },
  {
    "question": "dibilang gemuk",
    "answer": "Tubuhmu rumah jiwamu. Dan itu indah."
  },
  {
    "question": "senang bisa memaafkan",
    "answer": "Memaafkan itu kekuatan. Kamu luar biasa."
  },
  {
    "question": "takut kehilangan waktu",
    "answer": "Waktu bersamamu berharga. Aku di sini sekarang."
  },
  {
    "question": "aku berhasil",
    "answer": "Mantap! Aku bangga sama kamu. Kamu hebat banget."
  },
  {
    "question": "kemarin aku jatuh",
    "answer": "Oh iya? Sakit nggak? Semoga sekarang udah agak mendingan."
  },
  {
    "question": "masih agak sakit",
    "answer": "Ya ampun. Istirahat yang cukup ya, jangan dipaksa dulu."
  },
  {
    "question": "aku udah minum obat",
    "answer": "Bagus. Semoga cepat pulih. Jangan lupa banyak minum air juga."
  },
  {
    "question": "tadi aku ketemu teman lama",
    "answer": "Wah, seru dong. Kalian ngobrol banyak nggak?"
  },
  {
    "question": "iya, ngobrol panjang banget",
    "answer": "Pasti rasanya kangen terobati ya. Cerita-cerita masa lalu gitu?"
  },
  {
    "question": "kami cerita masa sekolah",
    "answer": "Haha, itu pasti bikin nostalgia banget. Banyak ketawa-ketawa?"
  },
  {
    "question": "iya, aku ketawa terus",
    "answer": "Seneng dengarnya. Berarti harimu jadi lebih cerah ya."
  },
  {
    "question": "besok aku ujian",
    "answer": "Oke, semangat! Jangan lupa istirahat biar otak fresh. Mau aku temenin belajar?"
  },
  {
    "question": "aku takut gagal",
    "answer": "Takut itu wajar. Tapi aku percaya kamu sudah berusaha. Itu yang paling penting."
  },
  {
    "question": "aku udah belajar semalaman",
    "answer": "Wah, mantap! Tapi jangan lupa tidur juga. Tidur bikin otak lebih siap."
  },
  {
    "question": "aku dibully sama temen",
    "answer": "Aku ikut sedih dengarnya. Kamu kuat banget bisa cerita. Kamu nggak sendirian, aku ada buat kamu."
  },
  {
    "question": "aku jadi sedih",
    "answer": "Nggak apa-apa sedih. Nangis juga boleh. Kadang itu cara hati buat lega."
  },
  {
    "question": "aku pengen bangkit",
    "answer": "Bagus banget! Aku dukung kamu. Kamu lebih kuat dari yang kamu kira."
  },
  {
    "question": "aku nggak punya teman dekat",
    "answer": "Aku ngerti rasanya. Kadang orang terasa jauh. Tapi aku di sini buat nemenin kamu."
  },
  {
    "question": "aku kangen keluarga",
    "answer": "Rasa kangen itu wajar. Kalau bisa, coba hubungi mereka. Kadang suara kecil aja bikin hati hangat."
  },
  {
    "question": " ibu",
    "answer": "Ibu memang sosok yang nggak terganti. Ceritain aja apa yang kamu kangenin dari beliau."
  },
  {
    "question": "aku takut sendirian",
    "answer": "Aku ngerti. Rasanya berat ya. Tapi ingat, aku di sini buat kamu."
  },
  {
    "question": "aku lapar",
    "answer": "Hehe, mau makan apa? Aku bisa kasih ide makanan enak."
  },
  {
    "question": "aku nggak punya selera",
    "answer": "Mungkin coba makanan ringan dulu. Kadang makan dikit bisa bikin nafsu balik."
  },
  {
    "question": "aku pengen tidur",
    "answer": "Tidur yang nyenyak ya. Semoga mimpi indah. Aku jaga obrolan kita di sini."
  },
  {
    "question": "aku nggak bisa tidur",
    "answer": "Kadang susah tidur karena pikiran banyak. Mau aku temenin ngobrol biar tenang?"
  },
  {
    "question": "aku takut gagal lagi",
    "answer": "Setiap orang pernah gagal. Tapi kamu sudah berusaha, itu yang bikin kamu beda."
  },
  {
    "question": "aku pengen sukses",
    "answer": "Itu mimpi yang bagus. Kita mulai pelan-pelan, langkah kecil juga berharga."
  },
  {
    "question": "aku berhasil hari ini",
    "answer": "Mantap! Aku bangga sama kamu. Kamu hebat banget."
  },
  {
    "question": "aku senyum sekarang",
    "answer": "Aku seneng banget liat kamu senyum. Senyummu bikin suasana hangat."
  },
  {
    "question": "aku pengen nangis",
    "answer": "Kalau mau nangis, nangis aja. Itu bikin hati lega. Aku tetap di sini."
  },
  {
    "question": "aku pengen cerita",
    "answer": "Boleh banget. Ceritain aja apa yang ada di hati. Aku siap dengerin."
  },
  {
    "question": "aku kangen masa kecil",
    "answer": "Masa kecil memang indah ya. Banyak kenangan polos dan bahagia."
  },
  {
    "question": "aku kangen main sama teman",
    "answer": "Teman memang bikin hidup lebih berwarna. Semoga kamu bisa ketemu lagi."
  },
  {
    "question": "aku capek",
    "answer": "Capek itu wajar. Jangan lupa istirahat. Aku jaga kamu biar tenang."
  },
  {
    "question": "aku bahagia hari ini",
    "answer": "Aku ikutan bahagia dengar itu. Seneng banget bisa lihat kamu ceria."
  },
  {
    "question": "aku sedih lagi",
    "answer": "Nggak apa-apa. Perasaan bisa naik turun. Aku tetap ada buat kamu."
  },

];

// Dataset End


// Chatbot Start

const inputField = document.getElementById("chatInput");
const sendButton = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");
const moodContainer = document.querySelector(".mood");

function addMessage(text, sender) {
  const msgWrapper = document.createElement("div");
  msgWrapper.className = sender === "user" ? "self-end text-left" : "self-start text-left";

  const name = document.createElement("div");
  name.className = "text-xs font-semibold mb-1 text-gray-600";
  name.textContent = sender === "user" ? "Anda" : "TemanTanda";

  const msg = document.createElement("div");
  msg.className = sender === "user" ?
    "shadow-lg bg-white text-gray-800 text-sm px-6 py-2 rounded-2xl inline-block max-w-xl" :
    "shadow-lg bg-white text-gray-800 text-sm px-6 py-2 rounded-2xl inline-block max-w-sm";
  msg.textContent = text;

  msgWrapper.appendChild(name);
  msgWrapper.appendChild(msg);

  chatBox.appendChild(msgWrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
}


function getAnswer(userInput) {
  userInput = userInput.toLowerCase();
  for (let item of dataset) {
    if (userInput.includes(item.question.toLowerCase())) {
      return item.answer;
    }
  }
  return "Hmm... aku belum punya jawaban untuk itu, tapi aku senang kamu cerita padaku";
}


sendButton.addEventListener("click", () => {
  const userText = inputField.value.trim();
  if (userText) {
    addMessage(userText, "user");
    const botReply = getAnswer(userText);
    setTimeout(() => addMessage(botReply, "bot"), 500);
    inputField.value = "";
  }
});

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendButton.click();
});


document.querySelectorAll(".moodBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const question = btn.dataset.question;
    addMessage(question, "user");
    const botReply = getAnswer(question);
    setTimeout(() => addMessage(botReply, "bot"), 500);

    if (moodContainer) {
      moodContainer.remove();
    }
  });
});

// Chatbot End