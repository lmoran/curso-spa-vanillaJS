//aqui vamos a construir toda la configuración que va tener nuestro poryecto:
//nos va permitir acceder a donde estamos en las carpetas. Ya sea en local o en la nube. no importa donde te encuentres:
const path = require('path')
//archivo necesario para trabajar con HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
//En el sgte modulo se va encontrar toda la configuraación de lo que va a suceder. Modulo para exportar, ese modulo es un objeto.
module.exports = {
  //vamos a declarar el punto de entrada con su ruta, aqui vive nuestro código inicial y de aqui parte al desarrollo
  entry: './src/index.js',
  //vamos a declarar la salida donde se envía el proyecto estructurado y compilado listo para producción:
  output: {
    //creamos el lugar a donde se exportará nuestro proyecto:
    path: path.resolve(__dirname, 'dist'),
    //creamos el nombre del archivo final para producción:
    filename: 'main.js'
  },
  //creamos las extensiones que va tener nuestro proyecto:
  resolve: {
    extensions: ['.js']
  },
  //creamos un modulo con las reglas necesarias que vamos a utilizar
  module: {
    rules: [
      {
        //estructura de BABEL:
        //creamos un test que nos permite identificar los archivos según se encuentran en nuestro entorno.
        test: /\.js?$/,
        //Excluimos la carpeta de node_modules:
        exclude: /node_modules/,
        //Utilizamos un loader como configuración establecida:
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  //Establecemos los plugins que vamos a utilizar:
  plugins: [
    //Instanciamos nuestro html-webpack-plugin que permite trabajar con los archivos html
    new HtmlWebpackPlugin([
      {
        //Como vamos a inyectar un valor a un archivo HTML
        inject: true,
        //Dirección donde se encuentra el template principal
        template: './public/index.html',
        //EL nombre que tendrá el archivo
        filename: './index.html'
      }
    ])
  ]
}
