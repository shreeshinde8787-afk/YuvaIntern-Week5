"use strict";

/* ==========================================
   TRAVELVISTA – SINGLE PAGE APPLICATION
========================================== */


/* ==========================================
   APPLICATION STATE
========================================== */

const app = document.getElementById("app");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");

let currentRoute = window.location.pathname;


/* ==========================================
   DESTINATION DATA
========================================== */

const destinations = [
    {
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=70",
        description:
            "Paris is famous for the Eiffel Tower, art, museums, cafes and beautiful architecture."
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=70",
        description:
            "Bali offers beautiful beaches, temples, rice fields and relaxing natural scenery."
    },
    {
        name: "Dubai",
        country: "United Arab Emirates",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=70",
        description:
            "Dubai is known for modern architecture, luxury shopping, desert adventures and exciting attractions."
    }
];


/* ==========================================
   FAVORITES STATE
========================================== */

let favorites = JSON.parse(
    localStorage.getItem("travelVistaFavorites") || "[]"
);


/* ==========================================
   PAGE CONTENT
========================================== */

function homePage() {
    return `
        <div class="page">

            <section class="hero">
                <div class="container hero-content">

                    <p class="small-title">DISCOVER • EXPLORE • TRAVEL</p>

                    <h1>
                        Explore The World,
                        One Journey At A Time
                    </h1>

                    <p>
                        Discover beautiful destinations and create
                        unforgettable travel experiences with TravelVista.
                    </p>

                    <a href="/destinations"
                       class="btn"
                       data-route="destinations">
                        Explore Destinations
                    </a>

                </div>
            </section>


            <section class="section">
                <div class="container">

                    <div class="section-title">
                        <p class="label">WHY TRAVELVISTA</p>

                        <h2>
                            Travel Made Simple
                        </h2>

                        <p>
                            Everything you need to discover your next
                            memorable journey.
                        </p>
                    </div>


                    <div class="feature-grid">

                        <article class="feature-card">
                            <div class="feature-icon" aria-hidden="true">
                                🌍
                            </div>

                            <h3>Beautiful Destinations</h3>

                            <p>
                                Explore exciting destinations around
                                the world.
                            </p>
                        </article>


                        <article class="feature-card">
                            <div class="feature-icon" aria-hidden="true">
                                ✈️
                            </div>

                            <h3>Easy Planning</h3>

                            <p>
                                Plan your journey easily with our
                                simple travel experience.
                            </p>
                        </article>


                        <article class="feature-card">
                            <div class="feature-icon" aria-hidden="true">
                                ❤️
                            </div>

                            <h3>Memorable Experiences</h3>

                            <p>
                                Create memories that stay with you
                                for a lifetime.
                            </p>
                        </article>

                    </div>

                </div>
            </section>

        </div>
    `;
}


function destinationsPage() {
    return `
        <div class="page">

            <section class="section">

                <div class="container">

                    <div class="section-title">

                        <p class="label">EXPLORE THE WORLD</p>

                        <h1>Popular Destinations</h1>

                        <p>
                            Discover some of the world's most
                            beautiful travel destinations.
                        </p>

                    </div>


                    <div class="destination-grid">

                        ${destinations.map(function (destination) {

                            const isFavorite =
                                favorites.includes(destination.name);

                            return `
                                <article class="destination-card">

                                    <div class="destination-image">

                                        <img
                                            src="${destination.image}"
                                            alt="${destination.name} travel destination"
                                            width="700"
                                            height="467"
                                            loading="lazy"
                                            decoding="async"
                                        >

                                    </div>


                                    <div class="card-content">

                                        <h3>
                                            ${destination.name}
                                        </h3>

                                        <p>
                                            ${destination.country}
                                        </p>

                                        <p>
                                            ${destination.description}
                                        </p>


                                        <div class="card-actions">

                                            <button
                                                type="button"
                                                class="btn favorite-btn"
                                                data-favorite="${destination.name}"
                                                aria-pressed="${isFavorite}"
                                                aria-label="${
                                                    isFavorite
                                                    ? "Remove " + destination.name + " from favorites"
                                                    : "Add " + destination.name + " to favorites"
                                                }"
                                            >
                                                ${
                                                    isFavorite
                                                    ? "♥ Favorite"
                                                    : "♡ Favorite"
                                                }
                                            </button>

                                        </div>

                                    </div>

                                </article>
                            `;

                        }).join("")}

                    </div>

                </div>

            </section>

        </div>
    `;
}


function aboutPage() {
    return `
        <div class="page">

            <section class="section">

                <div class="container">

                    <div class="section-title">

                        <p class="label">ABOUT US</p>

                        <h1>About TravelVista</h1>

                        <p>
                            Making travel discovery simple and enjoyable.
                        </p>

                    </div>


                    <div class="about-box">

                        <h2>Our Mission</h2>

                        <p>
                            TravelVista is a frontend Single Page
                            Application simulation created to provide
                            a smooth and simple travel browsing experience.
                        </p>

                        <p>
                            Our goal is to help users discover beautiful
                            destinations through a clean, responsive and
                            interactive interface.
                        </p>

                        <p>
                            This project demonstrates client-side routing,
                            dynamic DOM content, browser history management,
                            responsive design and state management using
                            HTML, CSS and JavaScript.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    `;
}


function contactPage() {
    return `
        <div class="page">

            <section class="section">

                <div class="container">

                    <div class="section-title">

                        <p class="label">GET IN TOUCH</p>

                        <h1>Contact TravelVista</h1>

                        <p>
                            Have a travel question? Send us a message.
                        </p>

                    </div>


                    <div class="contact-layout">

                        <div class="contact-info">

                            <h2>Let's Plan Your Journey</h2>

                            <p>
                                Tell us about your travel plans and
                                we will be happy to hear from you.
                            </p>

                            <p>
                                📍 Pune, Maharashtra
                            </p>

                            <p>
                                ✉ travelvista@example.com
                            </p>

                        </div>


                        <form
                            class="contact-form"
                            id="contactForm"
                            novalidate
                        >

                            <div class="form-field">

                                <label for="contactName">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="contactName"
                                    name="name"
                                    autocomplete="name"
                                    required
                                >

                            </div>


                            <div class="form-field">

                                <label for="contactEmail">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="contactEmail"
                                    name="email"
                                    autocomplete="email"
                                    required
                                >

                            </div>


                            <div class="form-field">

                                <label for="contactMessage">
                                    Message
                                </label>

                                <textarea
                                    id="contactMessage"
                                    name="message"
                                    rows="5"
                                    required
                                ></textarea>

                            </div>


                            <button
                                type="submit"
                                class="btn"
                            >
                                Send Message
                            </button>


                            <p
                                id="formMessage"
                                class="form-message"
                                role="status"
                                aria-live="polite"
                            ></p>

                        </form>

                    </div>

                </div>

            </section>

        </div>
    `;
}


/* ==========================================
   404 PAGE
========================================== */

function notFoundPage() {
    return `
        <div class="page">

            <section class="error-page">

                <div class="container error-content">

                    <p class="error-number">404</p>

                    <h1>Page Not Found</h1>

                    <p>
                        Sorry, the page you are looking for
                        does not exist.
                    </p>

                    <a
                        href="/"
                        class="btn"
                        data-route="home"
                    >
                        Go to Home
                    </a>

                </div>

            </section>

        </div>
    `;
}


/* ==========================================
   ROUTE NORMALIZATION
========================================== */

function getRoute() {

    const path = window.location.pathname
        .replace(/\/+$/, "");

    if (path === "" || path === "/") {
        return "home";
    }

    if (path === "/destinations") {
        return "destinations";
    }

    if (path === "/about") {
        return "about";
    }

    if (path === "/contact") {
        return "contact";
    }

    return "404";
}


/* ==========================================
   SPA ROUTER
========================================== */

function renderPage(route) {

    app.innerHTML = `
        <div class="loading">
            Loading...
        </div>
    `;

    setTimeout(function () {

        if (route === "home") {
            app.innerHTML = homePage();
        }

        else if (route === "destinations") {
            app.innerHTML = destinationsPage();
        }

        else if (route === "about") {
            app.innerHTML = aboutPage();
        }

        else if (route === "contact") {
            app.innerHTML = contactPage();
        }

        else {
            app.innerHTML = notFoundPage();
        }

        updateActiveNavigation(route);

        app.focus();

        initializePageFeatures();

    }, 100);
}


/* ==========================================
   NAVIGATION
========================================== */

function navigateTo(route, addHistory = true) {

    let path = "/";

    if (route === "destinations") {
        path = "/destinations";
    }

    else if (route === "about") {
        path = "/about";
    }

    else if (route === "contact") {
        path = "/contact";
    }

    if (addHistory) {
        history.pushState(
            { route: route },
            "",
            path
        );
    }

    currentRoute = route;

    renderPage(route);

    closeMobileMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   HANDLE INTERNAL LINKS
========================================== */

document.addEventListener("click", function (event) {

    const link = event.target.closest("[data-route]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const route = link.dataset.route;

    navigateTo(route);
});


/* ==========================================
   BROWSER BACK / FORWARD
========================================== */

window.addEventListener("popstate", function () {

    const route = getRoute();

    currentRoute = route;

    renderPage(route);

    closeMobileMenu();

});


/* ==========================================
   UPDATE ACTIVE NAVIGATION
========================================== */

function updateActiveNavigation(route) {

    const links = document.querySelectorAll(
        ".nav-links a[data-route]"
    );

    links.forEach(function (link) {

        link.classList.toggle(
            "active",
            link.dataset.route === route
        );

    });
}


/* ==========================================
   MOBILE MENU
========================================== */

function closeMobileMenu() {

    navLinks.classList.remove("active");

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );

    menuBtn.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuBtn.querySelector("span").textContent = "☰";
}


menuBtn.addEventListener("click", function () {

    const isOpen =
        navLinks.classList.toggle("active");

    menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuBtn.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    menuBtn.querySelector("span").textContent =
        isOpen ? "✕" : "☰";

});


/* ==========================================
   PAGE-SPECIFIC FEATURES
========================================== */

function initializePageFeatures() {

    initializeFavorites();

    initializeContactForm();

}


/* ==========================================
   FAVORITE DESTINATIONS
========================================== */

function initializeFavorites() {

    const buttons = document.querySelectorAll(
        "[data-favorite]"
    );

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const destination =
                    button.dataset.favorite;

                if (favorites.includes(destination)) {

                    favorites = favorites.filter(
                        function (item) {
                            return item !== destination;
                        }
                    );

                }

                else {

                    favorites.push(destination);

                }


                localStorage.setItem(
                    "travelVistaFavorites",
                    JSON.stringify(favorites)
                );


                const isFavorite =
                    favorites.includes(destination);


                button.setAttribute(
                    "aria-pressed",
                    String(isFavorite)
                );


                button.setAttribute(
                    "aria-label",
                    isFavorite
                        ? `Remove ${destination} from favorites`
                        : `Add ${destination} to favorites`
                );


                button.textContent =
                    isFavorite
                        ? "♥ Favorite"
                        : "♡ Favorite";

            }
        );

    });

}


/* ==========================================
   CONTACT FORM
========================================== */

function initializeContactForm() {

    const form =
        document.getElementById("contactForm");

    if (!form) {
        return;
    }


    const nameInput =
        document.getElementById("contactName");

    const emailInput =
        document.getElementById("contactEmail");

    const messageInput =
        document.getElementById("contactMessage");

    const formMessage =
        document.getElementById("formMessage");


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (name.length < 2) {

                formMessage.textContent =
                    "Please enter a valid name.";

                formMessage.className =
                    "form-message error-message";

                nameInput.focus();

                return;
            }


            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.className =
                    "form-message error-message";

                emailInput.focus();

                return;
            }


            if (message.length < 10) {

                formMessage.textContent =
                    "Message must contain at least 10 characters.";

                formMessage.className =
                    "form-message error-message";

                messageInput.focus();

                return;
            }


            formMessage.textContent =
                "Thank you! Your message has been submitted successfully.";

            formMessage.className =
                "form-message success-message";


            form.reset();

        }
    );

}


/* ==========================================
   INITIAL PAGE LOAD
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const route = getRoute();

        currentRoute = route;

        history.replaceState(
            { route: route },
            "",
            window.location.pathname
        );

        renderPage(route);

    }
);