import { render } from "./scripts/qol.js";
import { generateRoot } from "./scripts/ext-qol.js";
import './styles/Root.css'
import { handleMessages } from "./scripts/messages.js";

let popup_pos = {x: 300, y: 500}

const root = generateRoot()
render(document.body, root)

handleMessages()

export {root, popup_pos}
