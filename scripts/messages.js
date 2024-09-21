import Popup from "../components/Popup.jsx";
import { popup_pos, root } from "../main-ext";
import { injectReact, removeReact } from "./ext-qol";

let message_list = [{
    "message": "toggle_popup",
    "function": function(message){   
        if(message.popup_visible){
            injectReact(Popup, root,{startx:popup_pos.x,starty:popup_pos.y})
        }
        else{
            removeReact()
        }
    }
}]

function handleMessages(){
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        message_list.forEach(mess => {     
            if (message.message == mess["message"]){ //{message, popup_visible}
                mess["function"](message)
            }
        })
    });
  }


export {handleMessages, popup_pos}