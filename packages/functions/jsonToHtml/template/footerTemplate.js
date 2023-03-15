export const footerTemplate = (isHome = false) => {
    let homeImgUrl = "./assets/img";
    let pageImgUrl = "../assets/img";
    let finalUrl = isHome ? homeImgUrl : pageImgUrl;
    const template = `    
<footer class="footer">
    <div class="container">
        <img
        class="logo"
        src="${isHome ? homeImgUrl : pageImgUrl}/logo/ohmyfood@2x-white.svg"
        alt=""/>
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
