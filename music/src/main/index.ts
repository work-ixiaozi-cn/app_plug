import { ipcMain } from 'electron';

ipcMain.on('window:test', (event) => {
    console.log({event});
});