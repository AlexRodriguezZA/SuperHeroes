export const getPathImage = (path) =>{
    const prefix = "uploads/";
    const startIndex = path.indexOf(prefix) + prefix.length;
    const result = path.substring(startIndex);
    const ruta_imagen = "http://localhost:5000/publicCharactersImage/" + result;
    return ruta_imagen;

  
}
