export const menuPageTemplate = ({ img, title, menu }) => {
    return `
<main class="main">
    <div class="menu__banner">
        <img
            src=".${img}"
            alt=""
        />
    </div>
    <div class="container menu__command">
        <div class="menu__header">
            <h1>${title}</h1>
            <div class="like__button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        class="coeur"
                        d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                    />
                    <defs>
                        <linearGradient
                            id="my-cool-gradient"
                            x2="1"
                            y2="1"
                        >
                            <stop offset="0%" stop-color="#9356DC" />

                            <stop offset="100%" stop-color="#FF79DA" />
                        </linearGradient>
                    </defs>
                    <path
                        class="full-coeur"
                        fill="url(#my-cool-gradient)"
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    />
                </svg>
            </div>
        </div>
        <div class="menu__section--container">
            ${menuSectionTemplate(menu)}       
        </div>
        <div class="menu__button">
            <button class="button">Commander</button>
        </div>
    </div>
</main>
`;
};
const menuSectionTemplate = (menuPhases) => {
    const template = (phase) => `
    <div class="menu__section">
        <h2>${phase.name}</h2>
        <div class="menu__plats"> 
            ${menuPlatTemplate(phase.plats)}
        </div>
    </div>
`;
    let final = "";
    menuPhases.forEach((phase) => {
        final += template(phase);
    });
    return final;
};
const menuPlatTemplate = (plats) => {
    const template = (plat) => `
    <div class="menu__plat">
        <div class="plat__container">
            <div class="menu__text">
                <h3>${plat.name}</h3>
                <p>${plat.description}</p>
            </div>
            <div class="menu__price">${plat.price}€</div>
        </div>
        <div class="check__container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
        </div>
    </div>
    `;
    let final = "";
    plats.forEach((plat) => {
        final += template(plat);
    });
    return final;
};
