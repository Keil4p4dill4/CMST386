/**Language translations*/
const localizationData = {
    /**English*/
    en: {
        docTitleHome: "The Resource Hub",
        siteTitle: "The Resource Hub",
        navHome: "Home",
        navUx: "UX Design",
        navA11y: "Accessibility",
        navSecurity: "Security",
        navOpt: "Web Optimization",
        navResponsive: "Responsive Design",
        navResources: "Resources",
        searchLabel: "Search internal knowledge repository topics",
        searchPlaceholder: "What are you looking for?",
        searchBtn: "Search",
        mainGreeting: "Welcome to The Resource Hub!",
        mainSubtext: "Whether you are beginning your web design journey or looking for ways to strengthen your existing skills, this resource hub brings together practical concepts, research, techniques, and tools to help turn good websites into great experiences.",
        mainSubtext2: "The web is more than colors, images, buttons, and code. A successful website should understand its users, welcome people with different abilities and needs, protect information, load efficiently, and adapt to whatever device appears on the screen. In other words, a website should work for people instead of making people work for it.",
        mainSubtext3: "Explore the five topics below to discover the building blocks of thoughtful web development.",
        circleUxTitle: "UX Design",
        circleA11yTitle: "Accessibility & Inclusive Design",
        circleSecTitle: "Web Application Security",
        circleOptTitle: "Web Optimization",
        circleRespTitle: "Responsive Web Design",
        circleResTitle: "Resources",
        bottomContactBtn: "Contact Us",
        skipToContent: "Skip to main content",
        docTitleContact: "Contact Us | The Resource Hub",
        navContact: "Contact Us",
        contactTitle: "Contact The Resource Hub",
        contactIntro: "We would love to hear from you. Tell us about your interests in technology and share your thoughts about this website.",
        emailLabel: "Email Address",
        firstNameLabel: "First Name",
        lastNameLabel: "Last Name",
        techRoleLabel: "What role in Tech are you interested in?",
        techRoleDefault: "Select a role",
        roleUx: "UX Design",
        roleWebDevelopment: "Web Development",
        roleGraphicDesign: "Graphic Design",
        roleCybersecurity: "Cybersecurity",
        roleAccessibility: "Web Accessibility",
        roleOptimization: "Web Optimization",
        roleResponsive: "Responsive Web Design",
        roleOther: "Other",
        enjoyQuestion: "Did you enjoy this website?",
        yesOption: "Yes",
        noOption: "No",
        feedbackLabel: "Feedback",
        feedbackPlaceholder: "Tell us your thoughts...",
        submitBtn: "Submit",
    },
    /**Spanish*/
    es: {
        docTitleHome: "El Hub de Recursos",
        siteTitle: "El Hub de Recursos",
        navHome: "Hogar",
        navUx: "Diseño UX",
        navA11y: "Accesibilidad",
        navSecurity: "Seguridad",
        navOpt: "Optimización",
        navResponsivo: "Diseño Responsivo",
        navResources: "Recursos",
        searchLabel: "Buscar en el repositorio de conocimiento interno",
        searchPlaceholder: "Que Buscas?",
        searchBtn: "Buscar",
        mainGreeting: "¡Bienvenido a El Hub de Recursos!",
        mainSubtext: "Una plataforma educativa empresarial que evalúa interfaces accesibles, métricas de experiencia de usuario modernas, configuraciones de seguridad de datos y estándares de diseño móvil.",
        mainSubtext2: "El Hub de Recursos es un centro de conocimiento integral que ofrece información, herramientas y recursos para mejorar la experiencia del usuario, la accesibilidad, la seguridad web, la optimización y el diseño responsivo.",
        mainSubtext3: "Explore los cinco temas a continuación para descubrir los componentes fundamentales del desarrollo web reflexivo.",
        circleUxTitle: "Diseño UX",
        circleA11yTitle: "Accesibilidad",
        circleSecTitle: "Seguridad Web",
        circleOptTitle: "Optimización",
        circleRespTitle: "Diseño Responsivo",
        circleResTitle: "Sistema de Recursos",
        bottomContactBtn: "Contáctenos",
        skipToContent: "Saltar al contenido principal",
        docTitleContact: "Contáctenos | El Hub de Recursos",
        navContact: "Contáctenos",
        contactTitle: "Contáctese con El Hub de Recursos",
        contactIntro: "Nos encantaría saber de usted. Cuéntenos sobre sus intereses en tecnología y comparta sus opiniones sobre este sitio web.",
        emailLabel: "Correo electrónico",
        firstNameLabel: "Nombre",
        lastNameLabel: "Apellido",
        techRoleLabel: "¿Qué función en tecnología le interesa?",
        techRoleDefault: "Seleccione una función",
        roleUx: "Diseño UX",
        roleWebDevelopment: "Desarrollo Web",
        roleGraphicDesign: "Diseño Gráfico",
        roleCybersecurity: "Ciberseguridad",
        roleAccessibility: "Accesibilidad Web",
        roleOptimization: "Optimización Web",
        roleResponsive: "Diseño Web Responsivo",
        roleOther: "Otro",
        enjoyQuestion: "¿Disfrutó de este sitio web?",
        yesOption: "Sí",
        noOption: "No",
        feedbackLabel: "Comentarios",
        feedbackPlaceholder: "Comparta sus comentarios...",
        submitBtn: "Enviar",
    }
};
const pageContentRegistry = [
    { name: "ux design", route: "ux.html", tags: ["ux", "user experience", "principles", "heuristics", "design"] },
    { name: "accessibility & inclusive design", route: "accessibility.html", tags: ["accessibility", "inclusive", "a11y", "visual", "auditory", "motor", "cognitive", "impairments"] },
    { name: "web application security", route: "security.html", tags: ["security", "application security", "cia triad", "cybersecurity", "web security", "defense"] },
    { name: "website optimization", route: "optimization.html", tags: ["optimization", "performance", "speed", "metrics", "loading"] },
    { name: "responsive web design", route: "responsive.html", tags: ["responsive", "layouts", "flexbox", "css grid", "media queries", "mobile-first"] },
    { name: "resources", route: "resources.html", tags: ["resources", "testing", "lighthouse", "accessibility insights", "tools"] },
    { name: "contact us", route: "contact.html", tags: ["contact", "feedback", "form", "support"] }
];

document.addEventListener("DOMContentLoaded", () => {
    // Structural UI Interactive Reference Declarations
    const langSelectElement = document.getElementById("langSelect");
    const themeToggleBtnElement = document.getElementById("themeToggle");
    const siteSearchForm = document.getElementById("siteSearchForm");
    const siteSearchInput = document.getElementById("siteSearchInput");
    const searchAutocompleteOutput = document.getElementById("searchAutocompleteOutput");
    const activeThemeConfig = localStorage.getItem("user-selected-theme") || "light";
    document.documentElement.setAttribute("data-site-theme", activeThemeConfig); 
    themeToggleBtnElement.addEventListener("click", () => {
        const nextThemeState = document.documentElement.getAttribute("data-site-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-site-theme", nextThemeState);
        localStorage.setItem("user-selected-theme", nextThemeState);
    });

    function applyLocalizationStrings(selectedLangCode) {
        document.documentElement.setAttribute("lang", selectedLangCode);
        
        document.querySelectorAll("[data-i18n]").forEach(targetNode => {
            const translationKey = targetNode.getAttribute("data-i18n");
            if (localizationData[selectedLangCode]?.[translationKey]) {
                targetNode.textContent = localizationData[selectedLangCode][translationKey];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(targetNode => {
            const translationKey = targetNode.getAttribute("data-i18n-placeholder");
            if (localizationData[selectedLangCode]?.[translationKey]) {
                targetNode.setAttribute("placeholder", localizationData[selectedLangCode][translationKey]);
            }
        });
        
        localStorage.setItem("user-selected-language", selectedLangCode);
    }

    const cachedLanguagePreference = localStorage.getItem("user-selected-language") || "en";
    langSelectElement.value = cachedLanguagePreference;
    applyLocalizationStrings(cachedLanguagePreference);

    langSelectElement.addEventListener("change", (event) => {
        applyLocalizationStrings(event.target.value);
    });

    /** Search Bar Search Mechanics & Autocomplete Generation*/
    siteSearchInput.addEventListener("input", (event) => {
        const userQueryString = event.target.value.toLowerCase().trim();
        searchAutocompleteOutput.innerHTML = "";
        
        if (userQueryString.length === 0) {
            searchAutocompleteOutput.hidden = true;
            return;
        }

        const standardFilteredMatches = pageContentRegistry.filter(entry => 
            entry.name.includes(userQueryString) || 
            entry.tags.some(tag => tag.includes(userQueryString))
        );

        if (standardFilteredMatches.length > 0) {
            searchAutocompleteOutput.hidden = false;
            standardFilteredMatches.forEach(match => {
                const suggestionAnchor = document.createElement("a");
                suggestionAnchor.href = match.route;
                suggestionAnchor.className = "suggestion-item-link";
                suggestionAnchor.textContent = match.name.toUpperCase();
                suggestionAnchor.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.location.href = match.route;
                });

                searchAutocompleteOutput.appendChild(suggestionAnchor);
            });
        } else {
            searchAutocompleteOutput.hidden = true;
        }
    });

    siteSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const absoluteSearchValue = siteSearchInput.value.toLowerCase().trim();
        
        if (!absoluteSearchValue) return;

        const bestPageMatch = pageContentRegistry.find(entry => 
            entry.name.includes(absoluteSearchValue) || 
            entry.tags.some(tag => tag.includes(absoluteSearchValue))
        );

        if (bestPageMatch) {
            window.location.href = bestPageMatch.route;
        } else {
            alert(cachedLanguagePreference === "es" 
                ? "No se encontraron páginas que coincidan con su consulta." 
                : "No match found.");
        }
    });

    document.addEventListener("click", (event) => {
        if (!siteSearchForm.contains(event.target)) {
            searchAutocompleteOutput.hidden = true;
        }
    });
});