"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const head_1 = __importDefault(require("next/head"));
const link_1 = __importDefault(require("next/link"));
const dayjs_1 = __importDefault(require("dayjs"));
const Footer_1 = require("./Footer");
function Home(props) {
    var _a;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(head_1.default, { children: (0, jsx_runtime_1.jsx)("title", { children: props.themeConfig.title }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container mx-auto  sm:px-0 relative " }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-3xl px-4 font-bold mb-4 sticky top-0 py-3 flex items-center text-slate-900 dark:text-slate-200  backdrop-blur-sm " }, { children: props.themeConfig.title }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "mt-2 mb-8 max-w-2xl  px-4" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex gap-2 dark:text-gray-400" }, { children: (_a = props.themeConfig.links) === null || _a === void 0 ? void 0 : _a.map((link, index) => {
                                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ className: "underline ", target: "_blank", href: link.url }, { children: link.title }), link.url), index !== props.themeConfig.links.length - 1 && '•'] }, void 0));
                            }) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: " px-4" }, { children: props.posts.map(post => {
                            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "text-xl my-8" }, { children: [(0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: `/${post.attributes.path}` }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "hover:underline dark:text-gray-400" }, { children: post.title }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-sm dark:text-gray-500" }, { children: (0, dayjs_1.default)(post.createdAt).format('DD/MM/YYYY') }), void 0)] }), post.id));
                        }) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "my-12" }, { children: (0, jsx_runtime_1.jsx)(Footer_1.Footer, {}, void 0) }), void 0)] }), void 0)] }, void 0));
}
exports.default = Home;
