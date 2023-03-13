import { template as headTemplate, faviconUrl } from "./template/head.js";
import { headerTemplate } from "./template/headerTemplate.js";

const buildstylesheets = (sheets) => {
    let output = "";
    if (!sheets) return output;

    if (typeof sheets === "string") {
        sheets = [sheets];
    }
    sheets.forEach((sheet) => {
        output += `<link rel="stylesheet" href=${sheet}>\n`;
    });
    return output;
};
const buildScripts = (scripts, async) => {
    let output = "";
    if (!scripts) return output;

    if (typeof scripts === "string") {
        scripts = [scripts];
    }
    scripts.forEach((script) => {
        output += !async
            ? `<script src="${script}" async></script>\n`
            : `<script src="${script}" async></script>\n`;
    });
    return output;
};

export const createHtml = (data) => {
    let title = data.title ? `<title>${data.title}</title>` : "";
    let favicon = `<link rel='icon' href='${faviconUrl}' >`;
    let css = data.css ? buildstylesheets(data.css) : "";
    let header = data.header ? data.header : "";
    let footer = data.footer ? data.footer : "";
    let loader = data.loader || "";
    let lang = data.lang || "fr";
    let head = headTemplate;
    let body = data.body || "";
    return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="utf-8">
    ${favicon}
    ${title}
    ${head}           
    ${css}
    </head>
    <body>
        ${header}
        ${body}
        ${footer}
        ${loader}
    </body>
    </html>
`;
};
