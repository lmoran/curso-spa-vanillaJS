//importamos el getData
import getData from '../utils/getData'

//generamos una funcion que nos va retornar la vista que necesitamos:
const Home = async () => {
  const characters = await getData()
  const view = `
    <div class="Characters">
      ${characters.results
        .map(
          character => `
        <article class="Character-item">
        <a href= "#/${character.id}/">
          <img src= "${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
        </a>
      </article>
      `
        )
        .join('')} 
    </div> `
  //como es arreglo lo va separar por comillas y para eso utilizamos join uqe va eliminar eso.
  return view
}
//exportamos el archivo para que lo podamos utilizar en otros archivos de JavaScript
export default Home
