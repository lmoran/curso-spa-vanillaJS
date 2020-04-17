//importamos los templates:
import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

//vamos a establecer las rutas:
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}
//vamos a crear nuestro manejador routes se va encargar de mostrar los elementos segun la lógica, obtener valores del navegador y como vamos a estructurarlos.
const router = async () => {
  //vamos a establecer los templates que los vamos a indexar a public index.html osea los templates los vamos a renderizar en las clases de header y content de index.html de public.
  //creamos una constante y le vamos a psar null si es caso que no la encontremos o el id del elemento:
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  //las indexamos: ojo le colocamos await porque vamos a esperar la petición de ese template Header
  header.innerHTML = await Header()
  //jalamos el hash:
  let hash = getHash()
  //veirificamos el hash con el resolveRoutes y le pasamos el hash de arriba
  let route = await resolveRoutes(hash)
  //vamos a comparar las rutas de la const routes: ejem si lo traido por resolveRoutes sea un /id lo comparamos con /:id de routes
  //routes./ , routes./:id
  let render = routes[route] ? routes[route] : Error404
  //Lo mostramos en el navegador en content:
  content.innerHTML = await render()
}
export default router
