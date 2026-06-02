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
    "Ulasan Google Maps dari {reviewer} (disetor oleh {nama}) tercatat aman di server pusat.",
    "Screenshot review milik konsumen {reviewer} (disetor oleh {nama}) lolos sensor verifikasi.",
    "Data review {reviewer} (disetor oleh {nama}) berhasil disinkronkan ke database Cipta Grafika.",
    "Pengecekan OCR kelar, terima kasih {nama}! Review dari {reviewer} masuk dengan selamat.",
    "Kerja bagus {nama}, review Google Maps atas nama {reviewer} valid 100%.",
    "Sistem mencatat setoran review {reviewer} yang dibawa oleh {nama} hari ini.",
    "Tugas kelar! {nama} sukses nambahin review valid dari {reviewer}.",
    "Ulasan dari konsumen {reviewer} mendarat mulus disetor oleh {nama}.",
    "AI mengonfirmasi review {reviewer} (oleh staf {nama}) sah terekam di sistem.",
    "Verifikasi nama reviewer Maps {reviewer} yang disetor oleh {nama} sukses.",
    "Lampu hijau! Review dari {reviewer} yang diinput {nama} beres tanpa hambatan.",
    "Proses OCR sukses membaca nama ulasan {reviewer}. Kerja mantap {nama}!",
    "OCR menyala sempurna! Terbaca nama reviewer: {reviewer} (staf: {nama}).",
    "Poin review {reviewer} resmi ditambahkan untuk {nama} di database.",
    "Sistem memverifikasi ulasan Maps dari {reviewer} yang disetor {nama} aman."
];

// 3. PENUTUP (Informasi Poin, Sisa Claim, Motivasi Tim)
const penutupAI = [
    "Sekarang total ulasan yang terkumpul atas namamu ada {total}. Gas terus!",
    "Koleksi poin kamu tembus {total} review. Jangan kasih kendor! 🔥",
    "Dengan poin sebanyak {total} ini, jatah claim reward kamu tersisa {sisa} lagi.",
    "Makin gacor aja nih. Posisi poin kamu sekarang di angka {total} 🚀",
    "Kumpulkan terus poinnya! Poin kamu saat ini: {total}.",
    "Semangat terus! Total review yang kamu kumpulkan sekarang ada {total}.",
    "Sisa {sisa} reward nungguin buat kamu klaim. Ayo kumpulin lagi!",
    "Total agregat pribadi kamu sekarang {total}. Bikin divisi lain ketar-ketir!",
    "Pertahankan ritmenya! Poin {total} udah aman di tangan.",
    "Masih ada sisa klaim kado {sisa}x, yuk kumpulin review lagi!",
    "Angka {total} poin ini bukti kerja kerasmu nyata. Keep it up!",
    "Satu ulasan berharga masuk. Saldo review kamu sekarang {total}.",
    "Cek dashboard deh, angka {total} poin kamu keren banget.",
    "Target kado masih sisa {sisa}, sikat terus sebelum kehabisan!",
    "Total {total} review udah kamu kumpulin sejauh ini. Respect! 🫡"
];

// FUNGSI GENERATOR UTAMA
function generateAIResponse(namaUser, totalPoin, sisaClaim, namaReviewer) {
    // Ambil kata acak dari masing-masing array
    const randomAwalan = awalanAI[Math.floor(Math.random() * awalanAI.length)];
    const randomInti = intiAI[Math.floor(Math.random() * intiAI.length)];
    const randomPenutup = penutupAI[Math.floor(Math.random() * penutupAI.length)];
    
    // Gabungkan menjadi satu string utuh
    let kalimatUtuh = `${randomAwalan} ${randomInti} ${randomPenutup}`;
    
    // Ganti placeholder dengan data real-time
    kalimatUtuh = kalimatUtuh.replace(/{nama}/g, namaUser)
                             .replace(/{reviewer}/g, `<strong>${namaReviewer}</strong>`)
                             .replace(/{total}/g, totalPoin)
                             .replace(/{sisa}/g, sisaClaim);
                             
    return kalimatUtuh;
}
