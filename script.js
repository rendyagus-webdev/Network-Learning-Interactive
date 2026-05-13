const lessons = [
  {
    id: "lan",
    title: "LAN",
    icon: "fa-solid fa-house-laptop",
    color: "#246bfe",
    summary: "LAN adalah singkatan dari Local Area Network, yaitu jaringan yang menghubungkan beberapa perangkat komputer dalam area terbatas seperti rumah, sekolah, atau kantor agar dapat saling berbagi data dan berkomunikasi.",
    tags: ["Local", "Cepat", "Ethernet"],
    points: [
      "LAN menghubungkan perangkat dalam area terbatas, seperti rumah,gedung, kampus, atau kantor.",
      "LAN memungkinkan komputer-komputer dalam jaringan untuk saling berkomunikasi dan berbagi sumber daya secara efisien.",
      "Ada beberapa jenis LAN, seperti Token Ring, Ethernet, FDDI, dan ARCNET. Namun, yang paling umum dan sering digunakan adalah jaringan Ethernet. Jaringan ini menggunakan kabel UTP (Unshielded Twisted Pair) atau kabel fiber optic sebagai media transmisi data antar komputer. Selain itu, LAN juga dapat menggunakan teknologi nirkabel seperti Wi-Fi untuk menghubungkan perangkat tanpa kabel.",
      " Memiliki kecepatan transfer data yang tinggi (antara 10 Mbps hingga lebih dari 1 Gbps) dan keamanan yang cenderung lebih mudah dikontrol dibandingkan jaringan lainnya.",
      "Komponen dasarnya meliputi komputer (client & server), kartu jaringan (NIC), switch atau hub, router, dan media transmisi (kabel atau sinyal radio)",
      "Perangkat yang berada di LAN yang sama dapat saling terhubung meskipun tanpa internet."
    ]
  },
  {
    id: "wan",
    title: "WAN",
    icon: "fa-solid fa-earth-asia",
    color: "#ff3b54",
    summary: "WAN adalah singkatan dari Wide Area Network, yaitu jaringan komputer berskala sangat luas yang dirancang untuk menghubungkan berbagai perangkat, jaringan LAN, dan jaringan MAN lintas geografis, batas negara, hingga benua.",
    tags: ["Wide", "ISP", "Internet"],
    points: [
      "WAN dapat menghubungkan banyak LAN naupun MAN dari lokasi berbeda.",
      "Internet adalah contoh WAN terbesar.",
      " WAN teknologi yang canggih, seperti kabel bawah laut, satelit, atau serat optik.",
      "Jaringan WAN memungkinkan komunikasi dan pertukaran data secara global.",
      "Memudahkan komunikasi dan pertukaran informasi antar lokasi dalam skala global, seperti email, media sosial, dan layanan cloud.",
      "Digunakan oleh perusahaan multinasional atau organisasi internasional untuk mengelola operasi mereka.",
      "Dikelola oleh penyedia layanan internet (ISP) atau organisasi besar yang memiliki infrastruktur jaringan global.",
    ]
  },
  {
    id: "man",
    title: "MAN",
    icon: "fa-solid fa-city",
    color: "#18b368",
    summary: "MAN adalah singkatan dari Metropolitan Area Network, yaitu jaringan komputer yang menghubungkan berbagai perangkat atau beberapa jaringan LAN dalam cakupan area geografis satu kota atau wilayah metropolitan.",
    tags: ["Metro", "Kampus", "Kota"],
    points: [
      "MAN lebih luas dari LAN, tetapi lebih kecil dari WAN.",
      "Biasanya dipakai oleh kampus, pemerintah kota, atau perusahaan dengan beberapa gedung.",
      "Dengan menggunakan jaringan MAN, suatu instansi dapat berbagi resource, seperti server, printer, maupun koneksi internet sehingga dapat meningkatkan efisiensi dari komunikasi data yang dilakukan.",
      "MAN dapat menghubungkan kantor cabang dalam wilayah perkotaan.",
      "Fungsi jaringann MAN adalah untuk menghubungkan lokasi-lokasi yang secara geografis terpisah dan tersebar, namun masih berada dalam satu kota yang sama.",
      "MAN umumnya menggunakan teknologi yang berkecepatan tinggi, seperti kabel fiber optic atau koneksi nirkabel (wireless) agar bisa mentransmisi data dengan cepat.",
      "Pengelolaan infrastruktur Metropolitan Area Network (MAN) sangat kompleks karena melibatkan wilayah publik (jalan raya, tiang listrik, bawah tanah) dan lintas instansi.",
      "Infrastruktur MAN umumnya dikelola melalui salah satu dari tiga model kepemilikan utama: pemerintah kota, Konsorsium Swasta(Gabungan beberapa perusahaan besar), atau Penyedia Layanan Telekomunikasi (Telco/ISP)."
    ]
  },
  {
    id: "topologi",
    title: "Topologi",
    icon: "fa-solid fa-diagram-project",
    color: "#7257ff",
    summary: "Topologi jaringan adalah tata letak atau struktur hubungan antarperangkat dalam sebuah jaringan komputer. Topologi menentukan bagaimana perangkat saling terhubung dan bagaimana data dikirim serta diterima antarperangkat dalam jaringan tersebut. Dengan adanya topologi, komunikasi data dalam jaringan dapat berjalan lebih teratur, efisien, dan mudah dikelola. Ada beberapa jenis topologi yang biasa digunakan. Baca dibawah ini",
    tags: ["Star", "Mesh", "Ring"],
    points: [
      "Topologi star, setiap komputer terhubung langsung ke satu perangkat pusat seperti Hub atau Switch, Ini adalah topologi yang paling banyak digunakan saat ini.",
      "Topologi bus, menghubungkan semua perangkat menggunakan satu kabel pusat utama (disebut backbone). Kedua ujung kabel pusat ini harus ditutup dengan alat bernama terminator.",
      "Topologi mesh, setiap komputer terhubung langsung ke setiap komputer lainnya tanpa perantara, topologi ini sangat tahan terhadap kegagalan karena memiliki banyak jalur alternatif.",
      "Topologi ring, setiap perangkat terhubung ke dua perangkat lain di kanan dan kirinya, membentuk lingkaran tertutup seperti cincin. Data mengalir satu arah secara bergiliran menggunakan sistem Token.",
      "Topologi tree adalah gabungan topologi star dan bus, dengan struktur bertingkat seperti pohon.",
      "Pemilihan topologi dipengaruhi oleh biaya, kebutuhan komunikasi, dan kemudahan perawatan jaringan."
    ]
  },
  {
    id: "perangkat",
    title: "Perangkat Jaringan",
    icon: "fa-solid fa-server",
    color: "#ff8b2c",
    summary: "Perangkat jaringan adalah komponen perangkat keras (hardware) fisik yang digunakan untuk menghubungkan komputer, ponsel pintar, dan perangkat elektronik lainnya ke dalam suatu jaringan. Fungsi utamanya adalah untuk mengelola, mengarahkan, dan mengamankan lalu lintas data sehingga setiap perangkat dapat saling berkomunikasi, bertukar file, hingga mengakses internet",
    tags: ["Router", "Switch", "AP"],
    points: [
      "Router, menghubungkan jaringan berbeda dan mencari rute terbaik untuk mengirimkan paket data.",
      "Switch menghubungkan banyak perangkat dalam satu jaringan lokal (LAN) dan mengirimkan data secara cerdas hanya ke perangkat tujuan berdasarkan MAC Address",
      "Hub, seperti switch tetapi mengirimkan data ke semua perangkat tanpa memeriksa tujuan, sehingga kurang efisien dibanding switch.",
      "Access point, memancarkan sinyal nirkabel (Wi-Fi) agar perangkat seperti ponsel dan laptop dapat terhubung ke jaringan tanpa menggunakan kabel",
      "Kabel UTP (Unshielded Twisted Pair), adalah jenis kabel yang paling umum digunakan untuk jaringan Ethernet dalam LAN.",
      "Modem (Modulator Demodulator), mengubah sinyal analog dari penyedia layanan internet (ISP) menjadi sinyal digital yang dipahami komputer, dan sebaliknya. Modem biasanya digunakan untuk koneksi internet melalui kabel, DSL, atau satelit.",
      "Kartu jaringan (Network Interface Card/NIC), adalah perangkat keras yang dipasang di dalam komputer untuk memungkinkan koneksi ke jaringan. NIC dapat mendukung koneksi kabel (Ethernet) atau nirkabel (Wi-Fi).",
      "Repeater, digunakan untuk memperkuat sinyal jaringan yang melemah seiring jarak, sehingga memungkinkan koneksi yang lebih stabil dalam area yang luas.",
      "Firewall: Perangkat keamanan yang memantau dan menyaring lalu lintas jaringan yang masuk dan keluar untuk mencegah akses tidak sah atau ancaman siber.",
      "Perangkat jaringan perlu dikonfigurasi dengan benar untuk memastikan koneksi yang aman dan sesuai kebutuhan pengguna, seperti pengaturan IP address, firewall, dan protokol keamanan."
    ]
  }
];

const quizBank = {
  lan: [
    ["Apa kepanjangan dari LAN?", ["Local Area Network", "Large Access Node", "Long Area Number", "Linked Admin Network"], 0],
    ["LAN paling sering digunakan pada area seperti...", ["Rumah atau sekolah", "Antar benua", "Orbit satelit", "Samudra"], 0],
    ["Perangkat yang umum menjadi pusat koneksi LAN kabel adalah...", ["Switch", "Modem satelit", "Repeater radio kota", "GPS"], 0],
    ["Karakteristik umum LAN adalah...", ["Jangkauan kecil dan cepat", "Cakupannya luas", "Wajib memakai satelit", "Tidak butuh perangkat jaringan"], 0],
    ["Contoh penggunaan LAN adalah...", ["Komputer lab saling berbagi printer", "Koneksi antar negara", "Navigasi kapal laut", "Siaran TV nasional"], 0],
    ["Media kabel yang sering dipakai pada LAN adalah...", ["UTP", "HDMI", "RCA", "VGA"], 0],
    ["LAN nirkabel biasanya menggunakan teknologi...", ["Wi-Fi", "NFC jarak kota", "AM radio", "Bluetooth antar pulau"], 0],
    ["Jenis LAN yang paling umum digunakan adalah...", ["Ethernet", "Token Ring", "FDDI", "ARCNET"], 0],
    ["Keuntungan LAN di kantor adalah...", ["Berbagi file dan perangkat lebih mudah", "Menghapus kebutuhan listrik", "Menambah jarak satelit", "Mengganti semua aplikasi"], 0],
    ["LAN biasanya dikelola oleh...", ["Pemilik rumah, sekolah, atau organisasi setempat", "Operator bandara saja", "Astronom", "Stasiun TV saja"], 0]
  ],
  wan: [
    ["Apa kepanjangan dari WAN?", ["Wide Area Network", "Wireless Audio Node", "Wide Access Name", "Web Area Number"], 0],
    ["Contoh WAN terbesar adalah...", ["Internet", "Keyboard", "Printer USB", "Mouse"], 0],
    ["WAN menghubungkan jaringan pada area...", ["Sangat luas", "Satu meja saja", "Satu casing PC", "Satu ruangan tanpa kabel"], 0],
    ["Pihak yang sering menyediakan koneksi WAN adalah...", ["ISP", "Toko alat tulis", "Editor video", "Sensor suhu"], 0],
    ["Teknologi yang dapat dipakai untuk WAN adalah...", ["Fiber optic", "Kabel charger saja", "Kipas prosesor", "Speaker pasif"], 0],
    ["Tujuan utama WAN adalah...", ["Menghubungkan lokasi berjauhan", "Mengatur brightness monitor", "Mendinginkan router", "Menyimpan mouse"], 0],
    ["Kantor pusat dan cabang di kota berbeda dapat terhubung dengan...", ["WAN", "Satu kabel HDMI pendek", "Flashdisk", "Joystick"], 0],
    ["Dibanding LAN, WAN biasanya memiliki...", ["Jangkauan lebih luas", "Jangkauan selalu lebih kecil", "Tanpa perangkat routing", "Tidak memakai protokol"], 0],
    ["Manakah teknologi yang bukan digunakan untuk koneksi WAN...", ["BIOS", "Kabel bawah laut", "Satelit", "Fiber optic"], 0],
    ["WAN penting untuk layanan cloud karena...", ["Pengguna bisa mengakses server jarak jauh", "Server harus berada di satu meja", "Cloud hanya berjalan offline", "Tidak membutuhkan internet"], 0]
  ],
  man: [
    ["Apa kepanjangan dari MAN?", ["Metropolitan Area Network", "Micro Access Node", "Main Analog Network", "Mobile Admin Name"], 0],
    ["MAN biasanya mencakup area...", ["Satu kota atau kawasan metropolitan", "Satu keyboard", "Satu meja", "Seluruh planet tanpa ISP"], 0],
    ["Contoh pengguna MAN adalah...", ["Jaringan antar gedung kampus", "Kabel dalam casing PC", "Remote TV", "Headset kabel"], 0],
    ["Dengan menggunakan MAN suatu instansi dapat...", ["Berbagi resource secara efisien", "Terhubung ke satelit", "Terhubung ke jaringan global", "Terhubung secara peer to peer"], 0],
    ["MAN dapat membantu pemerintah kota untuk...", ["Menghubungkan kantor layanan publik", "Mengisi baterai laptop", "Mengatur wallpaper", "Memperbaiki keyboard"], 0],
    ["Teknologi MAN sering memakai...", ["Fiber optic metropolitan", "Kabel audio 3.5 mm", "Kabel power internal", "USB mouse"], 0],
    ["Jika beberapa kantor dalam satu kota saling terhubung, jaringan itu bisa disebut...", ["MAN", "PAN pribadi", "BIOS", "Cache"], 0],
    ["MAN lebih luas daripada...", ["LAN", "WAN global", "Internet", "Satelit antar benua"], 0],
    ["MAN umumnya dirancang untuk...", ["Konektivitas cepat dalam wilayah kota", "Mengubah file menjadi gambar", "Menghapus protokol", "Mengganti sistem operasi"], 0],
    ["Salah satu tantangan MAN adalah...", ["Pengelolaan infrastruktur antar lokasi", "Tidak membutuhkan kabel sama sekali", "Tidak bisa memakai IP", "Hanya bisa untuk satu komputer"], 0]
  ],
  topologi: [
    ["Topologi yang memakai perangkat pusat disebut...", ["Star", "Bus", "Ring", "Tree"], 0],
    ["Pada topologi bus, perangkat terhubung ke...", ["Satu kabel pusat", "Setiap perangkat secara penuh", "Satelit", "Layar monitor"], 0],
    ["Topologi ring membentuk pola...", ["Lingkaran/cincin", "Bintang", "Pohon", "Acak tanpa jalur"], 0],
    ["Topologi mesh dikenal memiliki...", ["Banyak jalur antar perangkat", "Satu kabel utama saja", "Tanpa koneksi cadangan", "Tidak ada perangkat"], 0],
    ["Topologi tree merupakan gabungan topologi...", ["Topologi Star dan Bus", "Alpha dan Beta", "Hybrid dan tree", "Ring dan Mesh"], 0],
    ["Kelebihan topologi star adalah...", ["Mudah dikelola lewat perangkat pusat", "Jika satu kabel utama putus semua mati", "Tidak butuh switch", "Tidak bisa diperluas"], 0],
    ["Kelemahan topologi star adalah...", ["Bergantung pada perangkat pusat", "Tidak bisa memakai kabel", "Harus antar negara", "Tidak bisa dipakai LAN"], 0],
    ["Topologi yang paling tahan gangguan jalur adalah...", ["Mesh", "Bus", "Ring tunggal", "Linear"], 0],
    ["Topologi dipakai untuk menjelaskan...", ["Susunan koneksi jaringan", "Jenis font halaman", "Kecepatan kipas", "Ukuran monitor"], 0],
    ["Pemilihan topologi dipengaruhi oleh...", ["Biaya, kebutuhan, dan kemudahan perawatan", "Warna casing saja", "Ukuran ikon", "Nama pengguna"], 0]
  ],
  perangkat: [
    ["Router berfungsi untuk...", ["Menghubungkan jaringan berbeda", "Menampilkan gambar", "Mencetak dokumen", "Mengubah suara"], 0],
    ["Switch bekerja efektif pada...", ["LAN", "Keyboard", "Monitor", "Speaker"], 0],
    ["Hub berbeda dari switch karena hub...", ["Mengirim data ke semua port", "Selalu lebih pintar dari router", "Mengatur IP publik", "Menghapus frame"], 0],
    ["Access point menyediakan...", ["Akses Wi-Fi", "Daya listrik CPU", "Layar tambahan", "Penyimpanan cloud"], 0],
    ["Kabel UTP biasanya digunakan untuk...", ["Ethernet", "Audio analog saja", "Kabel layar", "Kabel printer jadul saja"], 0],
    ["Perangkat yang mengubah sinyal analog dari penyedia layanan internet (ISP) menjadi sinyal digital adalah...", ["Modem", "Hub pasif", "Keyboard", "Monitor"], 0],
    ["Switch menggunakan informasi utama berupa...", ["MAC address", "Ukuran layar", "Nama file", "Volume speaker"], 0],
    ["Perangkat untuk memperluas Wi-Fi di ruangan adalah...", ["Repeater", "Scanner", "UPS", "Mouse"], 0],
    ["Perangkat keamanan jaringan adalah...", ["Firewall", "HDMI", "USB-C saja", "RCA"], 0],
    ["Perangkat jaringan perlu dikonfigurasi agar...", ["Koneksi aman dan sesuai kebutuhan", "Warna casing berubah", "Monitor lebih cerah", "Keyboard lebih ringan"], 0]
  ]
};

const answerStyles = ["answer-red", "answer-blue", "answer-yellow", "answer-green"];

const state = {
  nickname: "",
  currentCategory: "lan",
  questionIndex: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  selected: false,
  timeLeft: 20,
  timerId: null,
  amazingShownAt: 0
};

const screens = {
  onboarding: document.getElementById("onboardingScreen"),
  dashboard: document.getElementById("dashboardScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const elements = {
  nicknameForm: document.getElementById("nicknameForm"),
  nicknameInput: document.getElementById("nicknameInput"),
  greetingText: document.getElementById("greetingText"),
  lessonGrid: document.getElementById("lessonGrid"),
  quizCategoryList: document.getElementById("quizCategoryList"),
  quickQuizBtn: document.getElementById("quickQuizBtn"),
  resetNameBtn: document.getElementById("resetNameBtn"),
  audioToggleBtn: document.getElementById("audioToggleBtn"),
  quizAudioToggleBtn: document.getElementById("quizAudioToggleBtn"),
  streakPill: document.getElementById("streakPill"),
  exitQuizBtn: document.getElementById("exitQuizBtn"),
  quizCategoryLabel: document.getElementById("quizCategoryLabel"),
  quizTitle: document.getElementById("quizTitle"),
  timerText: document.getElementById("timerText"),
  quizProgressBar: document.getElementById("quizProgressBar"),
  questionCounter: document.getElementById("questionCounter"),
  questionText: document.getElementById("questionText"),
  feedbackText: document.getElementById("feedbackText"),
  answerGrid: document.getElementById("answerGrid"),
  scoreText: document.getElementById("scoreText"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  resultTitle: document.getElementById("resultTitle"),
  resultSubtitle: document.getElementById("resultSubtitle"),
  finalScore: document.getElementById("finalScore"),
  correctCount: document.getElementById("correctCount"),
  wrongCount: document.getElementById("wrongCount"),
  badgeIcon: document.getElementById("badgeIcon"),
  retryQuizBtn: document.getElementById("retryQuizBtn"),
  backDashboardBtn: document.getElementById("backDashboardBtn"),
  toastHost: document.getElementById("toastHost"),
  lessonModalTitle: document.getElementById("lessonModalTitle"),
  lessonModalText: document.getElementById("lessonModalText"),
  lessonModalPoints: document.getElementById("lessonModalPoints"),
  lessonModalEyebrow: document.getElementById("lessonModalEyebrow"),
  modalStartQuizBtn: document.getElementById("modalStartQuizBtn"),
  continueAmazingBtn: document.getElementById("continueAmazingBtn")
};

const lessonModal = new bootstrap.Modal(document.getElementById("lessonModal"));
const amazingModal = new bootstrap.Modal(document.getElementById("amazingModal"));

const audio = {
  context: null,
  enabled: true,
  started: false,
  masterGain: null,
  musicGain: null,
  sfxGain: null,
  backgroundNodes: [],
  backgroundTracks: {},
  activeBackgroundType: null,
  fileFallbackUsed: false,
  backgroundFiles: {
    home: "assets/audio/background2.mp3",
    quiz: "assets/audio/background.mp3"
  },
  sfxFiles: {
    amazing: "assets/audio/amazing.mp3",
    yay: "assets/audio/yay.mp3"
  }
};

function initAudio() {
  initBackgroundTracks();
  if (audio.context) {
    if (audio.context.state === "suspended") audio.context.resume();
    playActiveBackground();
    return;
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    playActiveBackground();
    return;
  }

  audio.context = new AudioContext();
  audio.masterGain = audio.context.createGain();
  audio.musicGain = audio.context.createGain();
  audio.sfxGain = audio.context.createGain();

  audio.masterGain.gain.value = audio.enabled ? 0.9 : 0;
  audio.musicGain.gain.value = 0.045;
  audio.sfxGain.gain.value = 0.38;

  audio.musicGain.connect(audio.masterGain);
  audio.sfxGain.connect(audio.masterGain);
  audio.masterGain.connect(audio.context.destination);
  playActiveBackground();
}

function initBackgroundTracks() {
  Object.entries(audio.backgroundFiles).forEach(([type, path]) => {
    if (audio.backgroundTracks[type]) return;

    const track = new Audio(path);
    track.loop = true;
    track.preload = "auto";
    track.volume = audio.enabled ? 0.35 : 0;
    track.addEventListener("error", () => {
      if (audio.activeBackgroundType === type && !audio.fileFallbackUsed) {
        audio.fileFallbackUsed = true;
        startBackgroundAudio();
      }
    });
    audio.backgroundTracks[type] = track;
  });
}

function getBackgroundTypeForScreen(name) {
  if (name === "dashboard") return "home";
  if (name === "quiz" || name === "result") return "quiz";
  return null;
}

function getCurrentScreenName() {
  return Object.entries(screens).find(([, screen]) => screen.classList.contains("active-screen"))?.[0] || "onboarding";
}

function pauseBackgroundTracks() {
  Object.values(audio.backgroundTracks).forEach((track) => {
    track.pause();
  });
}

function playActiveBackground() {
  playBackgroundFor(getBackgroundTypeForScreen(getCurrentScreenName()));
}

function playBackgroundFor(type) {
  initBackgroundTracks();
  pauseBackgroundTracks();
  audio.activeBackgroundType = type;

  if (!type || !audio.enabled) return;

  const track = audio.backgroundTracks[type];
  if (!track) return;

  track.volume = 0.35;
  track.play().then(() => {
    if (audio.musicGain) audio.musicGain.gain.setTargetAtTime(0, audio.context.currentTime, 0.04);
  }).catch(() => {
    startBackgroundAudio();
  });
}

function startBackgroundAudio() {
  if (!audio.context || audio.started) return;
  audio.musicGain.gain.setTargetAtTime(0.045, audio.context.currentTime, 0.04);

  const filter = audio.context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 900;

  const padGain = audio.context.createGain();
  padGain.gain.value = 0.42;
  filter.connect(padGain);
  padGain.connect(audio.musicGain);

  [196, 246.94, 329.63].forEach((frequency, index) => {
    const oscillator = audio.context.createOscillator();
    const gain = audio.context.createGain();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 2 ? 0.18 : 0.24;
    oscillator.connect(gain);
    gain.connect(filter);
    oscillator.start();
    audio.backgroundNodes.push(oscillator, gain);
  });

  const lfo = audio.context.createOscillator();
  const lfoGain = audio.context.createGain();
  lfo.type = "sine";
  lfo.frequency.value = 0.18;
  lfoGain.gain.value = 0.12;
  lfo.connect(lfoGain);
  lfoGain.connect(padGain.gain);
  lfo.start();
  audio.backgroundNodes.push(lfo, lfoGain, filter, padGain);
  audio.started = true;
}

function playTone({ frequencies, duration = 0.16, type = "sine", volume = 0.95 }) {
  initAudio();
  if (!audio.context || !audio.enabled) return;

  const now = audio.context.currentTime;
  frequencies.forEach((frequency, index) => {
    const oscillator = audio.context.createOscillator();
    const gain = audio.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now + index * duration * 0.55);
    gain.gain.setValueAtTime(0, now + index * duration * 0.55);
    gain.gain.linearRampToValueAtTime(volume, now + index * duration * 0.55 + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, now + index * duration * 0.55 + duration);
    oscillator.connect(gain);
    gain.connect(audio.sfxGain);
    oscillator.start(now + index * duration * 0.55);
    oscillator.stop(now + index * duration * 0.55 + duration + 0.02);
  });
}

function playClickSound() {
  playTone({ frequencies: [520], duration: 0.07, type: "triangle", volume: 0.95 });
}

function playCorrectSound() {
  playTone({ frequencies: [523.25, 783.99], duration: 0.13, type: "sine", volume: 0.95 });
}

function playWrongSound() {
  playTone({ frequencies: [220, 146.83], duration: 0.18, type: "sawtooth", volume: 0.95 });
}

function playFileSound(path, fallback) {
  initAudio();
  if (!audio.enabled) return;

  const effect = new Audio(path);
  effect.volume = 0.72;
  effect.play().catch(() => {
    if (typeof fallback === "function") fallback();
  });
}

function playAmazingSound() {
  playFileSound(audio.sfxFiles.amazing, () => {
    playTone({ frequencies: [392, 523.25, 659.25, 783.99], duration: 0.11, type: "triangle", volume: 0.95 });
  });
}

function playYaySound() {
  playFileSound(audio.sfxFiles.yay, () => {
    playTone({ frequencies: [523.25, 659.25, 783.99, 1046.5], duration: 0.12, type: "sine", volume: 0.95 });
  });
}

function setAudioEnabled(enabled) {
  audio.enabled = enabled;
  initAudio();
  Object.values(audio.backgroundTracks).forEach((track) => {
    track.volume = enabled ? 0.35 : 0;
  });
  if (enabled) {
    playActiveBackground();
  } else {
    pauseBackgroundTracks();
  }
  if (audio.masterGain) {
    audio.masterGain.gain.setTargetAtTime(enabled ? 0.9 : 0, audio.context.currentTime, 0.03);
  }
  updateAudioButtons();
}

function updateAudioButtons() {
  [elements.audioToggleBtn, elements.quizAudioToggleBtn].forEach((button) => {
    const icon = button.querySelector("i");
    icon.className = audio.enabled ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    button.title = audio.enabled ? "Matikan audio" : "Nyalakan audio";
    button.setAttribute("aria-label", button.title);
  });
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active-screen"));
  screens[name].classList.add("active-screen");
  if (audio.context || audio.backgroundTracks.home || audio.backgroundTracks.quiz) {
    playBackgroundFor(getBackgroundTypeForScreen(name));
  }
}

function getLesson(id) {
  return lessons.find((lesson) => lesson.id === id);
}

function renderDashboard() {
  elements.greetingText.textContent = `Halo, ${state.nickname}!`;
  elements.lessonGrid.innerHTML = lessons.map((lesson) => `
    <div class="col-12 col-md-6 col-xl-4">
      <article class="lesson-card">
        <div class="lesson-icon" style="background:${lesson.color}">
          <i class="${lesson.icon}"></i>
        </div>
        <h4>${lesson.title}</h4>
        <p>${lesson.summary}</p>
        <div class="lesson-meta">
          ${lesson.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="d-flex gap-2 flex-wrap">
          <button class="btn btn-outline-dark" type="button" data-lesson="${lesson.id}">
            <i class="fa-solid fa-book-open"></i>
            Baca
          </button>
          <button class="btn btn-primary" type="button" data-quiz="${lesson.id}">
            <i class="fa-solid fa-circle-question"></i>
            Kuis
          </button>
        </div>
      </article>
    </div>
  `).join("");

  elements.quizCategoryList.innerHTML = lessons.map((lesson) => `
    <button class="category-btn" type="button" data-quiz="${lesson.id}">
      <span><i class="${lesson.icon}" style="color:${lesson.color}"></i> ${lesson.title}</span>
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  `).join("");
}

function openLesson(id) {
  const lesson = getLesson(id);
  elements.lessonModalEyebrow.textContent = "Materi Belajar";
  elements.lessonModalTitle.textContent = lesson.title;
  elements.lessonModalText.textContent = lesson.summary;
  elements.lessonModalPoints.innerHTML = lesson.points.map((point) => `<li>${point}</li>`).join("");
  elements.modalStartQuizBtn.dataset.quiz = lesson.id;
  lessonModal.show();
}

function startQuiz(categoryId) {
  const lesson = getLesson(categoryId);
  state.currentCategory = categoryId;
  state.questionIndex = 0;
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  state.selected = false;
  state.amazingShownAt = 0;
  updateStreakPill();
  elements.quizCategoryLabel.textContent = lesson.title;
  elements.quizTitle.textContent = "Arena Kuis";
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  clearInterval(state.timerId);
  const questions = quizBank[state.currentCategory];
  const current = questions[state.questionIndex];
  const progress = (state.questionIndex / questions.length) * 100;

  state.selected = false;
  state.timeLeft = 20;
  elements.timerText.textContent = state.timeLeft;
  elements.timerText.parentElement.classList.remove("warning");
  elements.nextQuestionBtn.disabled = true;
  elements.feedbackText.textContent = "";
  elements.feedbackText.classList.remove("show");
  elements.quizProgressBar.style.width = `${progress}%`;
  elements.questionCounter.textContent = `Soal ${state.questionIndex + 1}/${questions.length}`;
  elements.questionText.textContent = current[0];
  elements.scoreText.textContent = `Skor: ${state.score}`;

  elements.answerGrid.innerHTML = current[1].map((answer, index) => `
    <button class="answer-btn ${answerStyles[index]}" type="button" data-answer="${index}">
      <span>${String.fromCharCode(65 + index)}</span>
      ${answer}
    </button>
  `).join("");

  startTimer();
}

function startTimer() {
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    elements.timerText.textContent = state.timeLeft;

    if (state.timeLeft <= 6) {
      elements.timerText.parentElement.classList.add("warning");
    }

    if (state.timeLeft <= 0) {
      handleAnswer(-1);
    }
  }, 1000);
}

function handleAnswer(selectedIndex) {
  if (state.selected) return;

  state.selected = true;
  clearInterval(state.timerId);
  const current = quizBank[state.currentCategory][state.questionIndex];
  const correctIndex = current[2];
  const isCorrect = selectedIndex === correctIndex;
  const buttons = [...elements.answerGrid.querySelectorAll(".answer-btn")];

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    playCorrectSound();
    state.correct += 1;
    state.score += 10;
    state.streak += 1;
    elements.feedbackText.textContent = "Benar! +10 poin";

    if (state.streak === 3) {
      showToast("3x Streak! On Fire!");
    }

    if (state.streak > 0 && state.streak % 5 === 0 && state.streak !== state.amazingShownAt) {
      state.amazingShownAt = state.streak;
      window.setTimeout(() => {
        playAmazingSound();
        amazingModal.show();
      }, 350);
    }
  } else {
    playWrongSound();
    state.wrong += 1;
    state.streak = 0;
    elements.feedbackText.textContent = selectedIndex === -1 ? "Waktu habis!" : "Belum tepat. Lihat jawaban yang benar.";
  }

  elements.feedbackText.classList.add("show");
  elements.scoreText.textContent = `Skor: ${state.score}`;
  updateStreakPill();
  elements.nextQuestionBtn.disabled = false;
}

function goToNextQuestion() {
  const questions = quizBank[state.currentCategory];
  if (state.questionIndex < questions.length - 1) {
    state.questionIndex += 1;
    renderQuestion();
    return;
  }

  finishQuiz();
}

function finishQuiz() {
  clearInterval(state.timerId);
  elements.quizProgressBar.style.width = "100%";

  const total = quizBank[state.currentCategory].length;
  const percentage = Math.round((state.correct / total) * 100);
  const badge = getBadge(percentage);

  elements.badgeIcon.style.background = badge.color;
  elements.resultTitle.textContent = badge.title;
  elements.resultSubtitle.textContent = `${state.nickname}, kamu menyelesaikan kuis ${getLesson(state.currentCategory).title} dengan akurasi ${percentage}%.`;
  elements.finalScore.textContent = state.score;
  elements.correctCount.textContent = state.correct;
  elements.wrongCount.textContent = state.wrong;
  playYaySound();
  showScreen("result");
}

function getBadge(percentage) {
  if (percentage > 80) {
    return { title: "Golden Router", color: "#ffb000" };
  }

  if (percentage >= 50) {
    return { title: "Silver Switch", color: "#9ba7b7" };
  }

  return { title: "Bronze Node", color: "#b87333" };
}

function updateStreakPill() {
  elements.streakPill.innerHTML = `<i class="fa-solid fa-bolt"></i> ${state.streak} Streak`;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "app-toast";
  toast.textContent = message;
  elements.toastHost.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2400);
}

function saveNickname(name) {
  state.nickname = name;
  localStorage.setItem("networkLearningNickname", name);
  renderDashboard();
  showScreen("dashboard");
}

function bootstrapApp() {
  audio.enabled = localStorage.getItem("networkLearningAudio") !== "off";
  updateAudioButtons();
  const storedName = localStorage.getItem("networkLearningNickname");
  if (storedName) {
    state.nickname = storedName;
    renderDashboard();
    showScreen("dashboard");
  }
}

elements.nicknameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  initAudio();
  const nickname = elements.nicknameInput.value.trim();
  if (nickname.length < 2) {
    showToast("Nickname minimal 2 karakter.");
    return;
  }

  saveNickname(nickname);
});

elements.lessonGrid.addEventListener("click", (event) => {
  const lessonButton = event.target.closest("[data-lesson]");
  const quizButton = event.target.closest("[data-quiz]");

  if (lessonButton) {
    openLesson(lessonButton.dataset.lesson);
  }

  if (quizButton) {
    startQuiz(quizButton.dataset.quiz);
  }
});

elements.quizCategoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quiz]");
  if (button) startQuiz(button.dataset.quiz);
});

elements.modalStartQuizBtn.addEventListener("click", () => {
  lessonModal.hide();
  startQuiz(elements.modalStartQuizBtn.dataset.quiz);
});

elements.answerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (button) handleAnswer(Number(button.dataset.answer));
});

elements.nextQuestionBtn.addEventListener("click", goToNextQuestion);

elements.quickQuizBtn.addEventListener("click", () => startQuiz("lan"));

elements.retryQuizBtn.addEventListener("click", () => startQuiz(state.currentCategory));

elements.backDashboardBtn.addEventListener("click", () => {
  clearInterval(state.timerId);
  renderDashboard();
  showScreen("dashboard");
});

elements.exitQuizBtn.addEventListener("click", () => {
  clearInterval(state.timerId);
  showScreen("dashboard");
});

elements.resetNameBtn.addEventListener("click", () => {
  clearInterval(state.timerId);
  localStorage.removeItem("networkLearningNickname");
  state.nickname = "";
  elements.nicknameInput.value = "";
  showScreen("onboarding");
});

function toggleAudio() {
  setAudioEnabled(!audio.enabled);
  localStorage.setItem("networkLearningAudio", audio.enabled ? "on" : "off");
}

elements.audioToggleBtn.addEventListener("click", toggleAudio);
elements.quizAudioToggleBtn.addEventListener("click", toggleAudio);

document.addEventListener("click", (event) => {
  const clickable = event.target.closest("button, a, input");
  if (!clickable || clickable.matches("[data-answer]")) return;
  playClickSound();
});

document.addEventListener("keydown", (event) => {
  if (!screens.quiz.classList.contains("active-screen")) return;
  const numericKey = Number(event.key);
  if (numericKey >= 1 && numericKey <= 4) {
    handleAnswer(numericKey - 1);
  }
});

bootstrapApp();
