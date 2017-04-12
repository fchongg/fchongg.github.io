$('.nav').click(function() {
    var id = $(this).attr('id');
    console.log("THIS IS THE ID", id);
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});