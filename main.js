const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    })

    win.loadFile('./index.html')
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
})