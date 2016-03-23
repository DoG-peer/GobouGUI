'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const spawn = require('child_process').spawn;
// const task = spawn('gobou', ['--help']);
const task = spawn('go', ['run', 'test/simple.go']);
// const task = spawn('ruby', ['-e', '5.times{puts Time.now;STDOUT.flush;sleep 1}']);

const size = {width: 600, height: 480};
var mainWindow = null;
var messages = [];

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: size.width, height: size.height});
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

ipcMain.on('ready', (e, args) => {
  let res = "hoge";
  e.sender.send('message', res);
});

ipcMain.on('update', (e, args) => {
  if (messages.length !== 0) {
    e.sender.send('update', messages);
  }
  messages = [];
});

task.stdout.on('data', data => {
  messages.push(data.toString());
});

