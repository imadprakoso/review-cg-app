// KAMUS AI - CG MAPS CHALLENGE
// 1. AWALAN (Sapaan, Reaksi Sistem, Deteksi)
const awalanAI = [
    "Boom! 💥",
    "Wah gokil,",
    "Validasi sistem sukses! ✅",
    "Mantap jiwa,",
    "Sistem AI mendeteksi bintang 5! 🌟",
    "Bagus banget,",
    "Asik, nambah lagi nih!",
    "Tangkapan layar aman terdeteksi! 📸",
    "Ping! Sensor AI menyala, 🤖",
    "Luar biasa,",
    "Kece parah,",
    "Sistem pusat CG menerima data!",
    "Verifikasi hijau 🟢,",
    "Wih, dapet lagi aja nih.",
    "Data berhasil dipindai dengan akurat 🎯,",
    "Notifikasi: Setoran masuk!",
    "Kelas! 👏",
    "Radar AI menangkap ulasan positif,",
    "Keren,",
    "Tadaa! 🎉"
];

// 2. INTI (Konfirmasi Nama dan Keberhasilan)
const intiAI = [
    "Setoran review atas nama {nama} udah tercatat dengan aman di server.",
    "Bukti screenshot dari {nama} lolos sensor dengan sempurna.",
    "Data {nama} berhasil disinkronisasi ke database utama Cipta Grafika.",
    "Review dari {nama} udah masuk dengan selamat.",
    "Kerja bagus {nama}, ulasannya valid 100%.",
    "Sistem mencatat kontribusi positif dari {nama} hari ini.",
    "Tugas kelar, {nama} berhasil nambahin amunisi review buat kita.",
    "Ulasan mendarat dengan mulus atas nama {nama}.",
    "AI mengonfirmasi bahwa {nama} baru saja memberikan kontribusi luar biasa.",
    "Jejak digital {nama} di Google Maps sudah divalidasi.",
    "Sistem ngebaca setoran {nama} tanpa ada error sama sekali.",
    "Nama {nama} terpampang jelas di laporan sukses.",
    "Pengecekan OCR kelar, terima kasih {nama} buat setorannya.",
    "Bintang 5 dari {nama} sukses terinput ke dalam klasemen.",
    "Bukti valid! {nama} memang bisa diandalkan.",
    "{nama} berkontribusi lagi nih buat naikin rating toko.",
    "Setoran {nama} udah masuk radar top reviewer kita.",
    "Proses otomatis selesai, data {nama} beres diurus.",
    "Nggak kaleng-kaleng, {nama} sukses tervalidasi.",
    "Sistem memberikan lampu hijau untuk setoran {nama}.",
    "Satu lagi bukti dedikasi {nama} terekam oleh AI.",
    "Validasi silang selesai, nama {nama} sah terdaftar.",
    "Kontribusi dari {nama} ini berharga banget buat kemajuan tim.",
    "{nama} sukses nge-hack algoritma dengan review ciamik ini.",
    "Laporan diterima, {nama} officially nambahin rekam jejak positif."
];

// 3. PENUTUP (Informasi Poin, Sisa Claim, Motivasi Tim)
const penutupAI = [
    "Sekarang poin kamu ada {total}. Gas terus!",
    "Total koleksi kamu tembus {total} review. Jangan kasih kendor!",
    "Dengan poin {total} ini, sisa claim kamu tinggal {sisa} lagi lho.",
    "Makin gacor aja nih. Posisi poin sekarang di angka {total} 🚀",
    "Kumpulkan terus poinnya! Poin saat ini: {total}.",
    "Semangat Tim C! 🔥 Saldo review kamu sekarang ada {total}.",
    "Sisa {sisa} slot claim lagi nungguin buat diambil. Ayo kejar!",
    "Total agregat kamu sekarang {total}. Bikin kompetitor ketar-ketir!",
    "Pertahankan ritmenya! Poin {total} udah ada di tangan.",
    "Masih ada sisa claim {sisa}x, yuk kumpulin lagi biar makin cuan.",
    "Angka {total} poin ini bukti kerja kerasmu. Keep it up!",
    "Mesin produksi jalan, review juga jalan! Poin kamu: {total}.",
    "Cek dashboard deh, angka {total} poin kamu keren banget.",
    "Target claim masih sisa {sisa}, sikat terus sebelum kehabisan!",
    "Total {total} review udah kamu kumpulin sejauh ini. Respect! 🫡",
    "Posisi aman, kumpulkan terus sampai sisa claim yang {sisa} ini terpakai semua!",
    "Poin {total} tercapai. Mari kita gaspol ke target berikutnya.",
    "Tingkatkan terus performanya! Saldo saat ini: {total}.",
    "Gokil, dengan ini sisa claim kamu masih {sisa}. Fokus!",
    "Buktikan siapa yang paling rajin! Poin kamu di klasemen sekarang {total}."
];

// FUNGSI GENERATOR UTAMA
function generateAIResponse(namaUser, totalPoin, sisaClaim) {
    // Ambil kata acak dari masing-masing array
    const randomAwalan = awalanAI[Math.floor(Math.random() * awalanAI.length)];
    const randomInti = intiAI[Math.floor(Math.random() * intiAI.length)];
    const randomPenutup = penutupAI[Math.floor(Math.random() * penutupAI.length)];
    
    // Gabungkan menjadi satu string utuh
    let kalimatUtuh = `${randomAwalan} ${randomInti} ${randomPenutup}`;
    
    // Replace placeholder dengan data real-time
    kalimatUtuh = kalimatUtuh.replace(/{nama}/g, namaUser)
                             .replace(/{total}/g, totalPoin)
                             .replace(/{sisa}/g, sisaClaim);
                             
    return kalimatUtuh;
}
