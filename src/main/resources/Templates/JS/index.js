$(function() {
    //GET de novedades
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1313/news?page=0&size=3',
        success: function(data) {
            data.content.forEach(function (news) {
                $('#divNovedades')
                .append(`<div class="col-lg-4" style="width: 15rem; id="cardNew">
                            <img class="card-img-top" src="${news.image}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title" id="titleNovedades">${news.name}</h5>
                                <p class="card-text" id="contenidoNovedades">${news.content}</p>
                            </div>
                         </div>`);
            })
        }
    });

    //GET de organizacion
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1313/organization/public',
        success: function(dataOrg) {
            console.log(dataOrg);
            $('#navHeader img')
            .attr('src', dataOrg.image);
            $('#footerOng img')
            .attr('src', dataOrg.image);
        }
    })
});