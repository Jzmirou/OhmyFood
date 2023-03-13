export const removeSpace = (str) => {
    let final = str.replace(/ /g, "");
    return final;
};
export const normalize = (str) => {
    let final = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return final;
};
export const lowerCase = (str) => {
    return str.toLowerCase();
};
