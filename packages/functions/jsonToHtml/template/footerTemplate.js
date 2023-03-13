export const footerTemplate = (isHome = true) => {
    let homeImgUrl = "./assets/img";
    let pageImgUrl = "..assets/img";
    let finalUrl = isHome ? homeImgUrl : pageImgUrl;
    const template = `    
    <footer class="footer">
    <div class="container">
        <h4>ohmyfood</h4>
        <div class="footer__services">
            <a href="#" class="service">
                <img
                    height="24"
                    width="24"
                    src="${finalUrl}/icon/utensils-solid.svg "
                    alt=""
                />
                <p>Proposer un restaurant</p>
            </a>
            <a href="#" class="service">
                <img
                    height="24"
                    width="24"
                    src="${finalUrl}/icon/handshake-angle-solid.svg"
                    alt=""
                />
                <p>Devenir partenaire</p>
            </a>
            <a href="#" class="service">
                <p>Mentions légales</p>
            </a>
            <a href="#" class="service">
                <p>Contact</p>
            </a>
        </div>
    </div>
</footer>`;

    return template;
};
const backArrowTemplate = `
<a
    href="../index.html"
    aria-label="retournez à la page précédente"
    class="back"
>
    <img
        height="24"
        width="24"
        src="../assets/img/icon/arrow-left-solid.svg"
        alt=""
    />
</a>`;
