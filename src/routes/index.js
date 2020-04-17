//importamos los templates:
import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'

//vamos a establecer las rutas:
const router = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}
//vamos a crear nuestro manejador routes se va encargar de mostrar los elementos segun la lógica, obtener valores del navegador y como vamos a estructurarlos.
const routes = async () => {
  //vamos a establecer los templates que los vamos a indexar a public index.html osea los templates los vamos a renderizar en las clases de header y content de index.html de public.
  //creamos una constante y le vamos a psar null si es caso que no la encontremos o el id del elemento:
  const header = null || document.getElementById('Header')
  const content = null || document.getElementById('Content')
  //las indexamos: ojo le colocamos await porque vamos a esperar la petición de ese template Header
  header.innerHTML = await Header
}
export default router
