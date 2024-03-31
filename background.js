chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({currentWindow: true}, function (tabs) {
        let fullContent = "";
        let count = 0;
        tabs.forEach((tab) => {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: tabContent,
            }, (results) => {
                count++;
                if (results[0]) {
                    const {title, url, content, timestamp} = results[0].result;
                    fullContent += `Title: ${title}\nTime: ${timestamp}\nURL: ${url}\n\n${content}\n\n---\n\n`;
                    console.log(fullContent)
                }
                if (count === tabs.length) {
                    chrome.tabs.update(tab.id, {active: true});
                    console.log(tab.id)
                    console.log(fullContent)

                    chrome.scripting.executeScript({
                        args: [fullContent],
                        target: {tabId: tab.id},
                        func: function (fullContent) {
                            // write your code here
                            console.log("This is " + fullContent);
                            console.log(' Start contents copied to clipboard!');

                            navigator.clipboard.writeText(fullContent).then(() => {
                                console.log('All tab contents copied to clipboard!');
                            }, (err) => {
                                console.error('Error copying tab contents: ', err);
                            });

                            window.focus(); // Attempt to focus the window
                            document.body.focus(); // Attempt to focus the document

                        },
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