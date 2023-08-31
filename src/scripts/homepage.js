function paralox (){
    $(document).scrollTop(0);
    var logoTop = $("#logo").offset().top;
    var logoToTop = logoTop + ($("#logo").height() / 2);
    var pageWidth = $("body").width();
    var logoWidth = $("#logo").width();
    var innerWidth = $(".inner").width();
    var innerToPageDistanceLeft = (pageWidth - innerWidth) / 2
    var logoWidthWhenSits = innerWidth / 4.5; //logo width 

    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var speed = scroll;
        var difference = (logoWidth - logoWidthWhenSits) / innerToPageDistanceLeft;
        var currentLogoWidth = logoWidth - speed * difference;
        var marginRight = speed + speed * difference;
        var coverHeight = $(".cover").height();

        // how long should we scroll to make things smaller? 
        // How can we make the height minus the height
        // how can we make the logo stick to bottom
        // how can we animate till the yellow part is done


        if (
            speed <= innerToPageDistanceLeft &&
            currentLogoWidth >= logoWidthWhenSits
        ) {
            $(".cover-inner").removeClass("inner");

            $("#logo").css({
                right: marginRight,
                top: logoToTop + speed,
                width: currentLogoWidth,
            });

        } else {
            $(".cover-inner").addClass("inner")
            $("#logo").css({
                right: logoWidth - logoWidthWhenSits,
                width: logoWidthWhenSits,
            });
        }
        var logoHeight = $('.logo').height();

        if ((logoToTop + speed) < (coverHeight - logoHeight / 2)) {
            $("#logo").css({
                top: logoToTop + speed,
            });

        } else {
            $("#logo").css({
                top: coverHeight - logoHeight / 2,
                bottom: 0,

            });

            if (speed > ((coverHeight - logoHeight) - 180)) {
                $('.cover').addClass('fix');
            } else {
                $('.cover').removeClass('fix');
            }

        }

    });
}

$(document).ready(paralox());
$(window).on('resize', function(){
    location.reload();
    paralox()
});