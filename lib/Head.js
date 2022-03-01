"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Head(props) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0), (0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: '' }, void 0), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap", rel: "stylesheet" }, void 0), props.sairinConfig.themeConfig.umami && (0, jsx_runtime_1.jsx)("script", { async: true, defer: true, "data-website-id": props.sairinConfig.themeConfig.umami.id, src: props.sairinConfig.themeConfig.umami.src }, void 0)] }, void 0));
}
exports.default = Head;
