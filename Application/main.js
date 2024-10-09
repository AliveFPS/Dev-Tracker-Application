const { app, BrowserWindow } = require('electron')
const path = require('path')

app.whenReady().then(() => {
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    myWindow.loadFile('index.html')
})