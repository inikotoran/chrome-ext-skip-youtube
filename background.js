function reddenPage() {
  document.getElementsByClassName("ytp-ad-button ytp-ad-button-link ytp-ad-clickable")[0].click();
  document.getElementsByClassName("ytp-ad-button ytp-ad-info-dialog-mute-button ytp-ad-button-link")[0].click();
  document.getElementsByClassName("ytp-ad-feedback-dialog-reason-input")[0].click();
  document.getElementsByClassName("ytp-ad-feedback-dialog-confirm-button")[0].click();
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});

chrome.commands.onCommand.addListener((command) => {
  getCurrentTab().then((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  });
});