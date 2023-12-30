Pengajuan Sistem Voting Terdesentralisasi di Internet Computer

Deskripsi

Proyek ini mengimplementasikan sebuah sistem voting terdesentralisasi menggunakan Internet Computer (IC) Canister. Sistem ini memungkinkan pengguna untuk membuat polling, memberikan suara, dan melihat hasilnya secara aman dengan menggunakan konsep teknologi blockchain.

Fitur Utama:

Membuat Polling:
Pengguna dapat membuat polling baru dengan pertanyaan kustom dan opsi jawaban yang dapat ditentukan. Setiap polling memiliki ID unik dan mencatat informasi pembuat polling.

Memberikan Suara:
Pengguna dapat memberikan suara pada polling tertentu dengan memilih opsi jawaban yang disediakan. Suara disimpan dalam canister secara aman.

Melihat Hasil:
Sistem mendukung fungsionalitas untuk melihat hasil dari suara yang telah diberikan pada suatu polling. Hasil ditampilkan dalam bentuk jumlah suara untuk setiap opsi jawaban.

Cara Penggunaan:

Membuat Polling Baru:

Panggil fungsi createPoll dengan mengirimkan objek payload yang berisi pertanyaan dan opsi jawaban.
Contoh: createPoll({ "question": "Apakah Anda setuju dengan A?", "options": ["Ya", "Tidak"] })
Melihat Semua Polling:

Panggil fungsi getAllPolls untuk mendapatkan daftar semua polling yang telah dibuat.
Contoh: getAllPolls()
Memberikan Suara:

Panggil fungsi vote dengan menyertakan ID polling dan indeks opsi jawaban yang diinginkan.
Contoh: vote("poll_ID", 0)
Melihat Hasil Polling:

Panggil fungsi getPollResults dengan menyertakan ID polling untuk melihat hasil suara.
Contoh: getPollResults("poll_ID")
Penting:

Pastikan menjaga ID polling dengan baik karena dibutuhkan untuk melihat hasil dan memberikan suara.
Untuk membuat polling baru, pastikan pertanyaan dan opsi jawaban anda sudah terdefinisi dengan jelas.
Pengembangan proyek ini mematuhi praktik terbaik, struktur yang baik, dan dokumentasi yang lengkap. Semua konsep dan ide diimplementasikan secara orisinal untuk menciptakan pengalaman pengguna yang unik.

GitHub Repository:
https://github.com/fuadadhim24/unique-canister.git

Terima kasih atas perhatian dan kesempatan untuk berkontribusi pada ekosistem Internet Computer!

Salam,
[Fuad Adhim Al Hasan]