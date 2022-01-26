# Chrome Extenstion: Skip Youtube

## Motivation
An alternative to skip youtube ads because I don't want to subscribe to youtube premium or using adblock. 

## How it Works
This extension basically just inspecting the HTML document using javascript and simulate some click to report the ads, so it will be skipped in less than 1 second.

However there is a certain condition where it isn't work when we can not report the ads i.e. `Survey`

## Installation
1. [Load extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) into Chrome using developer mode 
2. Once loaded, you can click the extension icon to skip youtube ads, or use shortcut `Command+Shift+S`

# Warning
- Only tested on MacOS using Chrome `Version 97.0.4692.71 (Official Build) (x86_64)`
- If youtube make changes on their HTML attributes, this extension would not working
- Currently it's not available in the Chrome Store
- Don't be confused with the manifest details as this codebase originally from [Page Redder example](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/examples/page-redder). I am just too lazy to change it.
