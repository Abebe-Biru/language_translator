$(document).ready(function(){
    $("#translate").click(function(){
        var lang_one = $("#lang_one").val();
        var lang_two = $("#lang_two").val();
        var text = $("#text").val();
        $.ajax({
            url:"process.php",
            type:"POST",
            data: {lang_one: lang_one, lang_two: lang_two, text: text},
            success:function(status){
             text = $("#text_t").val(status);
            }
        });
    });
});