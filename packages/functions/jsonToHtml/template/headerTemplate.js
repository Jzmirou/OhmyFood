export const headerTemplate = (isHome = false) => {
    let backArrow = "";
    isHome ? (backArrow = "") : (backArrow = backArrowTemplate);
    const template = `    
    <header class="header">   
        <div class="logo">
            <img height="35" width="200" src="${
                !isHome ? "." : ""
            }./assets/img/logo/ohmyfood@2x.svg" alt="Logo" />
        </div>
        ${backArrow}
    </header>`;

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
