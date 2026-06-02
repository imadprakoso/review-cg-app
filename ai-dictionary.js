// ==========================================
// KAMUS AI - CG MAPS CHALLENGE
// ==========================================

// 1. AWALAN (Sapaan, Reaksi Sistem, Deteksi)
const awalanAI = [
    "Ping! Sensor AI menyala, 🤖",
    "Boom! 💥",
    "Wah gokil,",
    "Validasi sistem sukses! ✅",
    "Mantap jiwa,",
    "Sistem AI mendeteksi bintang 5! 🌟",
    "Bagus banget,",
    "Tangkapan layar aman terdeteksi! 📸",
    "Luar biasa,",
    "Kece parah,",
    "Sistem pusat menerima data!",
    "Verifikasi hijau 🟢,",
    "Data berhasil dipindai dengan akurat 🎯,",
    "Kelas! 👏"
];

// 2. INTI (Konfirmasi Nama dan Keberhasilan + NAMA REVIEWER)
const intiAI = [
    "Kerja bagus {nama}, review Google Maps atas nama {reviewer} valid 100%.",
    "Bukti screenshot milik konsumen {reviewer} dari {nama} lolos sensor dengan sempurna.",
    "Data {reviewer} berhasil disinkronisasi oleh {nama} ke database utama.",
    "Review dari akun {reviewer} udah masuk dengan selamat berkat {nama}.",
    "Sistem mencatat ulasan positif dari {reviewer} (disetor oleh {nama}).",
    "Tugas kelar, {nama} berhasil nambahin amunisi review dari {reviewer}.",
    "Ulasan {reviewer} mendarat dengan mulus atas nama {nama}.",
    "AI mengonfirmasi bahwa {nama} baru saja memvalidasi akun {reviewer}.",
    "Pengecekan OCR kelar, terima kasih {nama} buat setoran {reviewer}-nya.",
    "Bintang 5 dari {reviewer} sukses terinput ke dalam klasemen oleh {nama}.",
    "Bukti valid! {reviewer} berhasil di-scan oleh {nama}.",
    "{nama} sukses nge-hack algoritma dengan review {reviewer} yang ciamik ini.",
    "Satu lagi bukti dedikasi {nama} terekam lewat akun {reviewer}."
];

// 3. PENUTUP (Informasi Poin, Sisa Claim, Motivasi Tim)
const penutupAI = [
    "Sekarang poin kamu ada {total}. Gas terus!",
    "Total koleksi kamu tembus {total} review. Jangan kasih kendor!",
    "Dengan poin sebanyak {total} ini, jatah claim reward kamu tersisa {sisa} lagi.",
    "Makin gacor aja nih. Posisi poin sekarang di angka {total} 🚀",
    "Kumpulkan terus poinnya! Poin saat ini: {total}.",
    "Sisa {sisa} slot claim lagi nungguin buat diambil. Ayo kejar!",
    "Pertahankan ritmenya! Poin {total} udah ada di tangan.",
    "Masih ada sisa claim {sisa}x, yuk kumpulin lagi biar makin cuan.",
    "Angka {total} poin ini bukti kerja kerasmu. Keep it up!",
    "Cek dashboard deh, angka {total} poin kamu keren banget.",
    "Target claim masih sisa {sisa}, sikat terus sebelum kehabisan!",
    "Total {total} review udah kamu kumpulin sejauh ini. Respect! 🫡",
    "Posisi aman, kumpulkan terus sampai sisa claim yang {sisa} ini terpakai semua!",
    "Buktikan siapa yang paling rajin! Poin kamu di klasemen sekarang {total}."
];

// ==========================================
// FUNGSI GENERATOR UTAMA (Terima 4 Parameter Sekarang)
// ==========================================
function generateAIResponse(namaUser, totalPoin, sisaClaim, namaReviewer) {
    // Ambil kata acak dari masing-masing array
    const randomAwalan = awalanAI[Math.floor(Math.random() * awalanAI.length)];
    const randomInti = intiAI[Math.floor(Math.random() * intiAI.length)];
    const randomPenutup = penutupAI[Math.floor(Math.random() * penutupAI.length)];
    
    // Gabungkan menjadi satu string utuh
    let kalimatUtuh = `${randomAwalan} ${randomInti} ${randomPenutup}`;
    
    // Replace placeholder dengan data real-time
    kalimatUtuh = kalimatUtuh.replace(/{nama}/g, namaUser)
                             .replace(/{reviewer}/g, namaReviewer)
                             .replace(/{total}/g, totalPoin)
                             .replace(/{sisa}/g, sisaClaim);
                             
    return kalimatUtuh;
}
