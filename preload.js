// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  };
  
  
  document.getElementById("home-text").style.color = "white" ;
  document.getElementById("background-black").style.background = "#3b3838";
  document.getElementById("background-black").style.fontFamily = "Open Sans, sans-serif";
  
  
  
});
/*
To get chrome verson, just do:
We are using Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    and Electron <span id="electron-version"></span>.
*/