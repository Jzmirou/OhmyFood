import { createHtml } from "./createHtml.js";
import { menuPageTemplate } from "./template/menuPageTemplate.js";
import { headerTemplate } from "./template/headerTemplate.js";
import { footerTemplate } from "./template/footerTemplate.js";
import { lowerCase, normalize, removeSpace } from "../string.js";
import fs from "fs";

import restaurants from "../../../data/restaurants.json" assert { type: "json" };

export const createMenuPage = () => {
    restaurants.forEach((restaurant) => {
        let data = {
            title: `Ohmyfood - ${restaurant.name} - Menu`,
            css: "../css/menuPage.css",
            header: headerTemplate(),
            body: menuPageTemplate({
                img: restaurant.image[1024],
                title: restaurant.name,
                menu: restaurant.menu,
            }),
            footer: footerTemplate(),
        };
        const html = createHtml(data);
        let nameFile = normalize(removeSpace(lowerCase(restaurant.name)));

        fs.writeFile(`./docs/pages/${nameFile}.html`, html, (error) => {
            if (error) {
                throw error;
            }
            console.log("Html créer");
        });
    });
};
