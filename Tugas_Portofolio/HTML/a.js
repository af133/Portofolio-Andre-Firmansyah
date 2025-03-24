const header = document.querySelector(".ujiCoba"); // Perbaikan selector

const observation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === "apem") {
                header.textContent = "Apem"
                header.style.color = "blue";
            } else if (entry.target.id === "ujian") {
                header.style.color = "red";
                header.textContent = "Ujian Guys!";
            }
        }
    });
}, { threshold: 0.5 }); // Elemen harus terlihat 50% untuk memicu perubahan

// Ambil elemen yang akan diobservasi
const apem = document.getElementById("apem");
const ujian = document.getElementById("ujian");

// Pastikan elemen ada sebelum diobservasi
if (apem) observation.observe(apem);
if (ujian) observation.observe(ujian);
