import { createHtml } from "./createHtml.js";
import { menuHomeTemplate } from "./template/menuHomeTemplate.js";
import { headerTemplate } from "./template/headerTemplate.js";
import { footerTemplate } from "./template/footerTemplate.js";
import { loaderTemplate } from "./template/loaderTemplate.js";
import fs from "fs";

import restaurants from "../../../data/restaurants.json" assert { type: "json" };

export const createHomePage = () => {
    let data = {
        title: `Ohmyfood - Restaurant gastronomique en livraison`,
        css: "./css/style.css",
        header: headerTemplate({ isHome: true }),
        loader: loaderTemplate,
        body: menuHomeTemplate({
            restaurants: restaurants,
        }),
        footer: footerTemplate({ isHome: true }),
    };
    const html = createHtml(data);

    fs.writeFile("./docs/index.html", html, (error) => {
        if (error) throw error;

        console.log("Html créer");
    });
};
