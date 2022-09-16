
$(function() {
    $(".male").click(function() {
        $(".sex").addClass("clickMale") ;
    });
});

$(function() {
    $(".male").click(function() {
        $(".sex").removeClass("clickFemale") ;
    });
});

$(function() {
    $(".female").click(function() {
        $(".sex").addClass("clickFemale");
    });
});

$(function() {
    $(".female").click(function() {
        $(".sex").removeClass("clickMale") ;
    });
});

$(function() {
    $(".age0").click(function() {
        $(".age").addClass("clickAge0") ;
    });
});

var regexp = /[\s\u{3000}]/ug;
var text = $age.text();
if(text.replace(regexp, '') == ''){
    $age.removeClass("clickAge0");
}

$(function() {
    $(".height0").click(function() {
        $(".height").addClass("clickHeight0") ;
    });
});

$(function() {
    $(".weight0").click(function() {
        $(".weight").addClass("clickWeight0") ;
    });
});

