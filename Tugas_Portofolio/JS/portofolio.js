const navbarleft = document.querySelector(".body-left-body");
const navid = ["#tentangSaya", "#minatBakat", "#unduhCV"];

const navNew = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbarleft.querySelectorAll("a").forEach(nav => {
                nav.style.color = "";
            });
            
            let targetId = entry.target.id;
            let index = ["tentang-saya", "minatbakat", "unduhCV"].indexOf(targetId);
            
            if (index !== -1) {
                const navbar = navbarleft.querySelector(navid[index]);
                
                if (navbar) {navbar.style.color = "white";}
            }
        }
    });
}, { threshold: 0.5 });

const observation = document.querySelectorAll("#home,#tentang-saya, #minatbakat, #unduhCV");
observation.forEach(section => {
    navNew.observe(section);
});

const navbarimg = document.querySelector("#navbarr"); 

const navimg = ["#kotak_1", "#kotak_2", "#kotak_3", "#kotak_4"];

const navnewimg = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            let targetId = entry.target.id;
            let index = ["home", "tentang-saya", "minatbakat", "unduhCV"].indexOf(targetId);

            if (index !== -1) {
                const imgElement = document.querySelector(navimg[index]);
                navbarimg.querySelectorAll("a img").forEach(img => {
                    img.src = img.getAttribute("data-original-src"); 
                });
                if (navimg[index] === "#kotak_1") {
                    imgElement.src = `Tugas_Portofolio/ASSET/home.png`; 
                }
                if (navimg[index] === "#kotak_2") {
                    imgElement.src = `Tugas_Portofolio/ASSET/person_1.png`; 
                };
           
                
                if  (navimg[index] === "#kotak_3") {
                    imgElement.src = `Tugas_Portofolio/ASSET/interesting_1.png`; 
                }
            }
        }
    });
}, { threshold: 0.5 });


const observati = document.querySelectorAll("#home, #tentang-saya, #minatbakat, #unduhCV");
observation.forEach(section => {
    navnewimg.observe(section);
});
