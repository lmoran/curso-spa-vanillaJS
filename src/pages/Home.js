//generamos una funcion que nos va retornar la vista que necesitamos:
const Home = () => {
  const view = `
    <div class="Characters">
      <article class="Character-item">
        <a href= "#/1/">
          <img src= "image" alt="name">
          <h2>Name</h2>
        </a>
      </article>
    </div>
`
  return view
}
//exportamos el archivo para que lo podamos utilizar en otros archivos de JavaScript
export default Home
