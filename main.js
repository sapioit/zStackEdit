 var app = require('app');
 var BrowserWindow = require('browser-window');
 require('crash-reporter').start();

 var mainWindow = null;

 app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
   app.quit();
 });

app.setPath("userData", __dirname + "/zStackEdit");

 app.on('ready', function() {
  mainWindow = new BrowserWindow({
   width: 1200,
   height: 860,
   resizable: true,
   title: "zStackEdit",
   icon: "/zStackEdit.icns",
   icon: "/zStackEdit.ico",
   icon: "/zStackEdit.png"
  });
  mainWindow.setOverlayIcon(
   __dirname + "/zStackEdit.png",
   "Test?");
  mainWindow.setTitle("zStackEdit");
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();
  mainWindow.on('closed', function() {
   mainWindow = null;
  });
  //mainWindow.toggleDevTools();
 });
