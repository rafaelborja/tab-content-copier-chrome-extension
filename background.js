
chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        let fullContent = "";
        let count = 0;

        tabs.forEach((tab) => {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: tabContent,
            }, (results) => {
                count++;
                if(results[0]) {
                    const {title, url, content, timestamp} = results[0].result;
                    fullContent += `Title: ${title}\nTime: ${timestamp}\nURL: ${url}\n\n${content}\n\n---\n\n`;
                }
                if(count === tabs.length) {
                    navigator.clipboard.writeText(fullContent).then(() => {
                        console.log('All tab contents copied to clipboard!');
                    }, (err) => {
                        console.error('Error copying tab contents: ', err);
                    });
                }
            });
        });
    });
});

function tabContent() {
    const content = document.body.innerText;
    const title = document.title;
    const url = window.location.href;
    const timestamp = new Date().toLocaleString();
    return {title, url, content, timestamp};
}
