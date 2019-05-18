const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-jsx": hot(preferDefault(require("D:\\web\\gatsby\\dumna\\src\\templates\\post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\web\\gatsby\\dumna\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("D:\\web\\gatsby\\dumna\\src\\pages\\about.jsx"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("D:\\web\\gatsby\\dumna\\src\\pages\\contact.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("D:\\web\\gatsby\\dumna\\src\\pages\\index.jsx")))
}

