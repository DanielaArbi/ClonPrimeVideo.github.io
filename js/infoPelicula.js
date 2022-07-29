$(()=>{
    let titulo = window.sessionStorage.getItem('title');
    let descripcion = window.sessionStorage.getItem('descripcion')
    //window.sessionStorage.removeItem('url');
    $('#tituloPeli').append(titulo);
    $('#sipnosis').append(descripcion);
    let datoImg = window.location.search;
    $('#infoPeli').append(`<img class="imgInfoPeli" src="https://image.tmdb.org/t/p/w500/${datoImg.split('?url=').join('')}">`);



})