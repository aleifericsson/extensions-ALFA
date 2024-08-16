import { create, render, style, write } from "./scripts/qol.js";
import App from './components/App.jsx';
import { injectReact } from "./scripts/ext-qol.js";

const root = create("div")
render(document.body, root)
injectReact(App, root)

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message)
    if (message.message == "change_color"){ //{message, color}
        document.body.style.backgroundColor = message.color
    }
  });