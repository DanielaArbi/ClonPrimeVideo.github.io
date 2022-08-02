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



let infoPelicula = (img, title, sipnosis) => {
    //una de las formas de pasar info a otra pestaña html, es hacerla persistir y guaradarla en session o local estorage
    window.sessionStorage.setItem('descripcion', sipnosis);

    //esta es otra forma concatenando la info en la url usando el objeto window, haciendo que me lleve a la otra pagina
    //con el location y propiedad href
    window.location.href = './html/infoPeliculas.html?url=' + img + '&' + title;
}



/* input buscar - evento de formulario */
$('#formBuscar').on('submit', function (e) {
    e.preventDefault();
    console.log('hola')
    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24',
        dataType: 'json'
    }).done(function (data) {
        console.log(data)
        data.results.map(peli => {
            if ( peli.title.toLowerCase().includes($('#txtBuscar').val().toLowerCase())) {
                console.log(peli.title);
                let cardPeli = `<div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${peli.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${peli.title}</h5>
                  <p class="card-text">${peli.overview}</p>
                  <a href="#" class="btn btn-primary">Ver película</a>
                </div>
              </div>`;
                $('#contenedor').html(cardPeli);

            }/* else{   //no funciona
                let noFound = '<p class="text-info fs-1">Película no encontrada</p>';
                $('#contenedor').html(noFound);
            } */
        })
    })
})



