export const headerTemplate = (isHome = true) => {
    let backArrow = backArrowTemplate;
    if (isHome !== true) backArrow = "";
    const template = `    
    <header class="header">
        <div class="logo">ohmyfood</div>
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
