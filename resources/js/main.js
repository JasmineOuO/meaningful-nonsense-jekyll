$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight() {
    var newHeight = $('#button').outerHeight();
    $('.flip-container').height(newHeight);
    $('.front').height(newHeight);
    $('.back').height(newHeight);
}