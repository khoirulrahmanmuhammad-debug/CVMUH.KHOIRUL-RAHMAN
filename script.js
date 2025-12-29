// JavaScript akan kita isi nanti
function ubahPesan() {
    document.getElementById("pesan").innerHTML =
    "Terima kasih sudah mengunjungi website saya 😊";
}
function sapa() {
    let nama = document.getElementById("nama").value;

    if (nama === "") {
        alert("Nama tidak boleh kosong!");
    } else {
        document.getElementById("hasilSapa").innerHTML =
        "Halo " + nama + ", senang bertemu denganmu 🌟";
    }
}
function setMood(emoji) {
    document.getElementById("mood").innerHTML = emoji;
}
function tambahMinat() {
    let minatBaru = prompt("Masukkan minat baru:");

    if (minatBaru) {
        let li = document.createElement("li");
        li.innerHTML = minatBaru;
        document.getElementById("minat").appendChild(li);
    }
}
function isiBiodata() {
    let nama = document.getElementById("namaBio").value;
    let ttl = document.getElementById("ttlBio").value;
    let alamat = document.getElementById("alamatBio").value;
    let pendidikan = document.getElementById("pendidikanBio").value;

    document.getElementById("hasilBio").innerHTML =
        "Nama: " + nama + "<br>" +
        "TTL: " + ttl + "<br>" +
        "Alamat: " + alamat + "<br>" +
        "Pendidikan: " + pendidikan;
}
fetch("updatepengalaman.csv")
    .then(response => response.text())
    .then(data => tampilkanCSV(data));

function tampilkanCSV(data) {
    const baris = data.split("\n");

    for (let i = 1; i < baris.length; i++) {
        const kolom = baris[i].split(",");

        if (kolom.length >= 4) {
            buatPengalaman(
                kolom[0],
                kolom[1],
                kolom[2],
                kolom[3]
            );
        }
    }
}

function buatPengalaman(judul, deskripsi, penyelenggara, tahun) {
    const div = document.createElement("div");
    div.className = "pengalaman";

    div.innerHTML = `
        <h3>${judul}</h3>
        <p>${deskripsi}</p>
        <p class="penyelenggara">
            <strong>Penyelenggara:</strong> ${penyelenggara}
        </p>
        <span class="tahun">${tahun}</span>
    `;

    document.getElementById("listPengalaman").appendChild(div);

    // delay animasi satu-satu
    setTimeout(() => {
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
    }, 200);
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".pengalaman").forEach(el => {
    observer.observe(el);
});
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    document.body.style.backgroundPositionY = scrollY * 0.3 + "px";
});

