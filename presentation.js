$(document).ready(function(){
    let kiryuVisible = false
    $("#kiryu").css("visibility", "hidden")

    $("#secret-button").click(function(){
        if (kiryuVisible) {
            $("#kiryu").css("visibility", "hidden")
            kiryuVisible = false
        } else {
            $("#kiryu").css("visibility", "visible")
            kiryuVisible = true
        }
    })
});