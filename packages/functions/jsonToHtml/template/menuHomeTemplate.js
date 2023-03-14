import { normalize, lowerCase, removeSpace } from "../../string.js";

export const menuHomeTemplate = ({ restaurants }) => {
    return `
    <main class="main">
        <div class="localisation">
            <div class="icon">
                <img
                    height="24"
                    width="24"
                    src="./assets/img/icon/location-dot-solid.svg"
                    alt=""
                />
            </div>
            <p>Paris, Belleville</p>
        </div>
        <section class="banner">
            <div class="container">
                <h1>Réservez le menu qui vous convient</h1>
                <sub
                    >Découvrez des restaurants d’exception, sélectionnés par
                    nos soins</sub
                >
                <a href="#restaurants" class="button">
                    Explorer nos restaurants
                </a>
            </div>
        </section>
        <section class="fonctionnement">
            <div class="container">
                <h2>Fonctionnement</h2>
                <div class="fonctions">
                    <div class="fonction">
                        <div class="bubble">1</div>
                        <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M0 64C0 28.7 28.7 0 64 0H288c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM208 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM288 64H64V384H288V64z"
                            />
                        </svg>
                        <p>Choisissez un restaurant</p>
                    </div>
                    <div class="fonction">
                        <div class="bubble">2</div>
                        <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                            />
                        </svg>
                        <p>Choisissez un restaurant</p>
                    </div>
                    <div class="fonction active">
                        <div class="bubble">3</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                            viewBox="0 0 616 512"
                        >
                            <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                            <path
                                d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"
                            />
                        </svg>
                        <p>Choisissez un restaurant</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="restaurants" class="restaurants">
            <div class="container">
                <h2>Restaurants</h2>
                <div class="cards">
                    ${homeCardsTemplate(restaurants)}          
                </div>
            </div>
        </section>
    </main>
`;
};
const homeCardsTemplate = (restaurants) => {
    let final = "";

    restaurants.forEach((restaurant, index) => {
        final += homeCardTemplate(
            restaurant.name,
            restaurant.ville,
            restaurant.image[480],
            index
        );
    });

    return final;
};

const homeCardTemplate = (nameRestaurant, ville, img, index) => {
    let nameFile = normalize(removeSpace(lowerCase(nameRestaurant)));
    return `
                <div class="card">
                    <a href="./pages/${nameFile}.html"
                        aria-label="lien vers le menu d'un restaurant"
                    >
                    </a>
                    <div class="card__badge">Nouveau</div>
                    <div class="card__img">
                        <img
                            src="${img}"
                            alt="restaurant ${nameRestaurant} en activité"
                        />
                    </div>
                    <div class="card__banner">
                        <div class="card__text">
                            <h3>${nameRestaurant}</h3>
                            <p class="ville">${ville}</p>
                        </div>
                        <button
                            class="card__like like__button"
                            aria-label="Bouton j'aime"
                        >
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
                                    <linearGradient id='linear-gradient${index}' x2="1" y2="1">
                                        <stop
                                            offset="0%"
                                            stop-color="#9356DC"
                                        />

                                        <stop
                                            offset="100%"
                                            stop-color="#FF79DA"
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    class="full-coeur"
                                    fill='url(#linear-gradient${index})'
                                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
   `;
};
