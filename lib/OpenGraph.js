"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenGraph = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function OpenGraph(props) {
    if (!props.post) {
        return null;
    }
    const ogImage = `
        https://og-image.vercel.app/${props.post.title}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg
      `;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("meta", { property: "og:type", content: "artical" }, void 0), (0, jsx_runtime_1.jsx)("meta", { property: "og:description", content: props.post.body.substring(0, 140) }, void 0), (0, jsx_runtime_1.jsx)("meta", { property: "og:title", content: props.post.title }, void 0), (0, jsx_runtime_1.jsx)("meta", { property: "og:image", content: ogImage }, void 0), (0, jsx_runtime_1.jsx)("meta", { property: "og:url", content: props.post.url }, void 0), (0, jsx_runtime_1.jsx)("meta", { property: "og:site_name", content: "poem.services" }, void 0), (0, jsx_runtime_1.jsx)("meta", { property: "article:published_time", content: props.post.createdAt }, void 0), (0, jsx_runtime_1.jsx)("meta", { property: "article:author", content: props.post.author.login }, void 0), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:card", content: props.post.title }, void 0), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:title", content: props.post.title }, void 0), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:image", content: ogImage }, void 0)] }, void 0));
}
exports.OpenGraph = OpenGraph;
