// ==========================================
// KAMUS AI - MULTI REVIEW & PARTIAL VALIDATION
// ==========================================

function generateAIResponse(namaUser, totalPoin, validNames, duplicateNames) {
    // Membentuk format string nama dengan cetak tebal
    let validStr = validNames.map(n => `<strong>${n}</strong>`).join(", ");
    let duplicateStr = duplicateNames.map(d => `<strong>${d.name}</strong> (oleh ${d.by})`).join(", ");

    let kalimatUtuh = "";

    // KONDISI 1: LOLOS SEMUA
    if (validNames.length > 0 && duplicateNames.length === 0) {
        const awalan = [
            "Boom! 💥", "Wah gokil,", "Validasi sukses! ✅", "Mantap jiwa,", "Kece parah,"
        ];
        const inti = [
            `Kerja bagus ${namaUser}, review dari ${validStr} lolos sensor dengan sempurna.`,
            `Bukti ulasan milik konsumen ${validStr} udah berhasil disinkronisasi ke server.`,
            `AI mengonfirmasi bahwa ${namaUser} baru saja memvalidasi akun ${validStr}.`,
            `Pengecekan kelar! Setoran atas nama ${validStr} sukses terinput ke klasemen.`
        ];
        const penutup = [
            `Sekarang total poin kamu naik jadi ${totalPoin}. Gas terus!`,
            `Makin gacor aja nih. Posisi poin kamu melesat ke angka ${totalPoin} 🚀`,
            `Total koleksi kamu tembus ${totalPoin} poin. Jangan kasih kendor!`,
            `Angka ${totalPoin} poin ini bukti kerja kerasmu. Keep it up!`
        ];
        
        kalimatUtuh = `${awalan[Math.floor(Math.random() * awalan.length)]} ${inti[Math.floor(Math.random() * inti.length)]} ${penutup[Math.floor(Math.random() * penutup.length)]}`;
    } 
    
    // KONDISI 2: LOLOS SEBAGIAN (PARTIAL)
    else if (validNames.length > 0 && duplicateNames.length > 0) {
        const awalan = [
            "Wah, ada yang lolos ada yang nyangkut nih 😅,", 
            "Kerja bagus, tapi cek dulu nih! 🕵️‍♂️,", 
            "Sistem deteksi anomali! 🚨,", 
            "Hampir aja sempurna! ✨,"
        ];
        const inti = [
            `Review dari ${validStr} berhasil masuk nambah poin! 🚀 Tapi sayang, ulasan dari ${duplicateStr} ditolak karena udah keduluan diklaim.`,
            `Sistem menerima ulasan ${validStr}. Namun, ulasan ${duplicateStr} terdeteksi udah ada di database kita.`,
            `${validStr} berhasil divalidasi ✅. Sayangnya untuk ${duplicateStr} terpaksa diblokir AI karena duplikat ❌.`,
            `Satu masuk, satu nyangkut! ${validStr} lolos sensor, tapi ${duplicateStr} udah pernah diinput sebelumnya.`
        ];
        const penutup = [
            `Nggak apa-apa ${namaUser}, total poin kamu tetep naik jadi ${totalPoin} ya! Semangat!`,
            `Total poin kamu sekarang ter-update ke angka ${totalPoin}. Yuk cari review yang fresh lagi!`,
            `Lumayan lah ya, poin kamu bertambah jadi ${totalPoin}. Gas cari lagi!`,
            `Tetep untung! Saldo poin kamu di klasemen sekarang ${totalPoin}.`
        ];

        kalimatUtuh = `${awalan[Math.floor(Math.random() * awalan.length)]} ${inti[Math.floor(Math.random() * inti.length)]} ${penutup[Math.floor(Math.random() * penutup.length)]}`;
    } 
    
    // KONDISI 3: GAGAL SEMUA (ALL DUPLICATE)
    else if (validNames.length === 0 && duplicateNames.length > 0) {
        const awalan = [
            "Waduh! 🚨", "Sayang sekali 🥲,", "Ups, keduluan! 🏃‍♂️💨", "Sensor merah menyala! ❌"
        ];
        const inti = [
            `Semua ulasan yang kamu setor (${duplicateStr}) ternyata udah diklaim sama tim lain.`,
            `AI mendeteksi kalau ulasan ${duplicateStr} udah tercatat di sistem kita.`,
            `Gagal input nih ${namaUser}. Review dari ${duplicateStr} udah basi karena keduluan diklaim.`,
            `Ternyata ulasan ${duplicateStr} udah nangkring di database.`
        ];
        const penutup = [
            `Poin kamu tertahan di angka ${totalPoin}. Yuk cari review yang bener-bener baru!`,
            `Jangan patah semangat, poin kamu masih aman di ${totalPoin}. Cari yang lain yuk!`,
            `Kalah cepet nih! Total poin kamu masih ${totalPoin}. Ayo kejar lagi!`,
            `Coba setor screenshot yang lain ya. Poin sementara: ${totalPoin}.`
        ];

        kalimatUtuh = `${awalan[Math.floor(Math.random() * awalan.length)]} ${inti[Math.floor(Math.random() * inti.length)]} ${penutup[Math.floor(Math.random() * penutup.length)]}`;
    }

    return kalimatUtuh;
}
