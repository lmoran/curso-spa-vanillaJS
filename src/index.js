import router from './routes/index'
//creamos el evento que va estar escuchando que la carga de la pagina ha sucedido, como va tarer todos los elementos en una sola carga:
window.addEventListener('load', router)
//evento qu eva escuchar el evento de cambio de hash y lo va mostrar:
window.addEventListener('hashchange', router)
