'use strict';
// window.alert('hello');
const ipcRenderer = require('electron').ipcRenderer;

const second = 1000;
const interval = 1 * Number(second);

setInterval(() => {
  ipcRenderer.send('update');
}, interval);

ipcRenderer.send('ready');

ipcRenderer.on('message', (e, args) => {
  console.log(e);
  console.log(args);
});

ipcRenderer.on('update', (e, args) => {
  console.log(e);
  console.log(args);
});
