const { app, BrowserWindow, globalShortcut } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
}
function openUrl(){
 win.loadFile('index.html');
}
function devTools(){
  win.webContents.toggleDevTools();
}

function shotcuts(){
  const openUrlShorcut = globalShortcut.register('Control+p',openUrl);
  const openDevTools = globalShortcut.register('Control+i',devTools);
}

app.whenReady().then(createWindow).then(shotcuts);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})