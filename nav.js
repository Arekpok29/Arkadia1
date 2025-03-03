// const primaryNav = document.querySelector('.nav-list');
// const navToggle = document.querySelector('.mobile-nav-toggle');
// const icon = navToggle.querySelector('i');

// navToggle.addEventListener('click', () => {
//     const visibility = primaryNav.getAttribute('data-visible');
//     console.log(visibility);
//     if (visibility === "false") {
//         primaryNav.setAttribute('data-visible', true);
//         navToggle.setAttribute('aria-expanded', true);

//         icon.classList.remove('fa-bars');
//         icon.classList.add('fa-times')
//     } else if (visibility === "true"){
//         primaryNav.setAttribute('data-visible', false);
//         navToggle.setAttribute('aria-expanded', false);

//         icon.classList.remove('fa-times');
//         icon.classList.add('fa-bars');
//     }

   
// });

// document.addEventListener("DOMContentLoaded", function () {
//     function loadComponent(elementId, filePath) {
//         fetch(filePath)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Błąd wczytywania ${filePath}: ${response.statusText}`);
//                 }
//                 return response.text();
//             })
//             .then(html => {
//                 document.getElementById(elementId).innerHTML = html;
//             })
//             .catch(error => console.error(error));
//     }

//     // Wstawianie nawigacji
//     if (document.getElementById("nav-placeholder")) {
//         loadComponent("nav-placeholder", "nav.html");
//     }

//     // Wstawianie stopki
//     if (document.getElementById("footer-placeholder")) {
//         loadComponent("footer-placeholder", "footer.html");
//     }

//     // Dodawanie arkusza stylów
//     let link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "nav-footer.css";
//     document.head.appendChild(link);
// });





document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in-right, .fade-in-left");

    // Tworzymy observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Zatrzymujemy obserwację po pojawieniu się elementu
            }
        });
    }, { threshold: 0.2 }); // Uruchamia animację, gdy 20% elementu jest widoczne

    // Obserwujemy każdy element
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});










document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(elementId, filePath, callback) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Błąd wczytywania ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
                if (callback) callback(); // Wywołanie funkcji po wstawieniu HTML
            })
            .catch(error => console.error(error));
    }

    // Wstawianie nawigacji i dodanie eventów dopiero po jej wczytaniu
    if (document.getElementById("nav-placeholder")) {
        loadComponent("nav-placeholder", "nav.html", initializeNavToggle);
    }

    // Wstawianie stopki
    if (document.getElementById("footer-placeholder")) {
        loadComponent("footer-placeholder", "footer.html");
    }

    // Dodawanie arkusza stylów
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "nav-footer.css";
    document.head.appendChild(link);
});

// Funkcja inicjalizująca obsługę menu mobilnego
function initializeNavToggle() {
    const primaryNav = document.querySelector('.nav-list');
    const navToggle = document.querySelector('.mobile-nav-toggle');

    if (!primaryNav || !navToggle) {
        console.error("Elementy nawigacji nie zostały znalezione.");
        return;
    }

    const icon = navToggle.querySelector('i');

    navToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');
        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', "true");
            navToggle.setAttribute('aria-expanded', "true");

            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            primaryNav.setAttribute('data-visible', "false");
            navToggle.setAttribute('aria-expanded', "false");

            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".page-title").classList.add("fade-in-visible");
});

