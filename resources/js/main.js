$(window).ready(updateHeight);
$(window).resize(updateHeight);
function updateHeight() {
    var height = [];
    var x = 0;
    $('.myimg').each(function () {
        height[x] = $(this).height()+61.9;
        console.log(height[x]);
        x++;
    });

    x = 0;
    $('.flip-container').each(function () {

        $(this).height(height[x]);;
        x++;
    });

    x = 0;
    $('.front').each(function () {

        $(this).height(height[x]);;
        x++;
    });

    x = 0;
    $('.back').each(function () {

        $(this).height(height[x]);;
        x++;
    });
}