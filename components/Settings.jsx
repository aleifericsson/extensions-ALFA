export default function Settings(){
    const changeBackground = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: "change_color", color: "#BADA55" });
        });
    }

    return(
        <>
            <button onClick={changeBackground}>Hey</ button>
        </>
    )
}