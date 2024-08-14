import { create, render, style, write } from "./scripts/qol.js";
import App from './components/App.jsx';
import { injectReact } from "./scripts/extension-qol.js";

const root = create("div")
write(root, "weiuhselkdls")
style(root, `
    font-size:200px;    
`)

render(document.body, root)
injectReact(App, root)

console.log("done")