// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-jsx": () => import("D:\\web\\gatsby\\dumna\\src\\templates\\post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---cache-dev-404-page-js": () => import("D:\\web\\gatsby\\dumna\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-jsx": () => import("D:\\web\\gatsby\\dumna\\src\\pages\\about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-contact-jsx": () => import("D:\\web\\gatsby\\dumna\\src\\pages\\contact.jsx" /* webpackChunkName: "component---src-pages-contact-jsx" */),
  "component---src-pages-index-jsx": () => import("D:\\web\\gatsby\\dumna\\src\\pages\\index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "D:\\web\\gatsby\\dumna\\.cache\\data.json")

