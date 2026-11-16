# Selaras Teknik — Katalog Statis

Website katalog statis Selaras Teknik (ID/EN), hasil export dari WordPress + WooCommerce staging lokal.

- 265 produk dengan foto, harga, deskripsi ID/EN, kategori, dan merek.
- Pencarian produk berjalan di browser (`search/` + `search-index.json`).
- Keranjang dan checkout tidak aktif di versi statis. Tombol beli diarahkan ke WhatsApp.

## Publikasi di GitHub Pages
1. Upload seluruh isi folder ini ke root repository (termasuk `.nojekyll`).
2. Settings → Pages → Source: *Deploy from a branch* → branch `main`, folder `/ (root)`.
3. Website tersedia di `https://<username>.github.io/<repo>/`.

Semua link relatif. Halaman bisa dibuka langsung dari file, tapi fitur pencarian butuh web server (GitHub Pages, atau `python3 -m http.server` untuk tes lokal).
