//Importa módulos app e BrowserWindow do Electron
const{app, BrowserWindow} = require('electron');

//funcao para criar a janela principal
function createWindow() {
   
    //Criar uma nova instancia do BrowserWindow
    const window = new BrowserWindow({
        width: 800, //Largura da janela
        height: 600, //Altura da janela

    })

    //Carregar arquivo HTML na janela
    window.loadFile('src/pages/index.html');
}

//Evento que é acionado quando o electron está pronto.
app.whenReady().then(() => {
    createWindow(); //Chama função de criar a janela
})