$(function() {
    var $activeSlide = $('#slides .slide:first-child');
    
    $activeSlide.addClass("showing");
    
    $("#decline").on("click", function(){
        goToSlide('decline');
    });

    $("#approve").on("click", function(){
        goToSlide('approve');
    });
    
    function goToSlide(action) {
        $activeSlide.removeClass("showing");
        $activeSlide = $activeSlide.next(".slide");

        if (action == "approve") {
            console.log("ACTION", action)
        } else {
            console.log("ACTION", action)
        }
        $activeSlide.addClass("showing");
    }
});
