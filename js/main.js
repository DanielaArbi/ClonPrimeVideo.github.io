$(() => {


    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24',
        dataType: 'json'
    }).done(function (data) {
        mostrarDatos(data)
        
    })

  



})


/**
 * recibe el array de la api y la recorre
 * poniendolas en el html
 * @param {*} datos 
 */
let mostrarDatos = (datos) => {
    // console.log(datos)
    let peliculas = '';

    datos.results.map(pelicula => {
        peliculas += `<div class = "pelicula">
    
    <img class= "poster" title="${pelicula.title}" data-peli="${pelicula.overview}"  onclick="infoPelicula('${pelicula.poster_path}','${pelicula.title}','${pelicula.overview}')"   src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
    <h3 class="titulo">${pelicula.title} </h3>
    </div>
     `
    });
    $('#contenedor').append(peliculas);


}



let infoPelicula = (img,title,sipnosis) => {
    window.sessionStorage.setItem('title',title);
    window.sessionStorage.setItem('descripcion',sipnosis);
    //let url = `https://image.tmdb.org/t/p/w500/${img}`;
    window.location.href= './html/infoPeliculas.html?url='+img;
}












/* input buscar */
/*$('#formBuscar').on('submit',function(e){
    e.preventDefault();

    $('#txtBuscar').val()
  })  

  let titulos = Array.from(document.querySelectorAll('.contenedor'));
  
  console.log(titulos) ; */
