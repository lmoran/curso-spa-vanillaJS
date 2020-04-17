const resolveRoutes = route => {
  //comparamos si el route es igual a un /, id, o alguna seccion en la que el user está navegando:
  //en nuestro poryecto los personjes no superan los mil, por eso si queremos obtener un id no vamos a tener un id de mas de tres niveles por ejemplo: id: 999
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id'
    return validRoute
  }
  //para casos como /about
  return `/${route}`
}
export default resolveRoutes
