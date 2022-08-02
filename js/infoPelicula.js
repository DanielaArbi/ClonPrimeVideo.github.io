$(()=>{
    //obtengo la descripcion guardada del sessionStorage y la agreago a mi html
    let descripcion = window.sessionStorage.getItem('descripcion');
    $('#sipnosis').append(descripcion);


    //obtengo la url con el search
    let datoImg = window.location.search;
    //lo agreo al html . convierto ese datoImg en array y lo divido por por el & y selecciono la  primera posicion despues de eso
    //y despues sustituyo %20 por espacios
    $('#tituloPeli').append(datoImg.split('&')[1].split('%20').join(' '));    
    $('#infoPeli').append(`<img class="imgInfoPeli" src="https://image.tmdb.org/t/p/w500/${datoImg.split('?url=').join('').split('&')[0]}">`);



})