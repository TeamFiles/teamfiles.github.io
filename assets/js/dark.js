var lightmode = document.getElementById('inner-switch');

$("#mode").on("click", function() {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("#mode").html("<a class=\"btn btn-secondary\">Dark Mode</a>");
        localStorage.setItem('lightmode', 'true');
    } else {
        $("body").addClass("dark");
        $("#mode").html("<a class=\"btn btn-secondary\">Light Mode</a>");
        localStorage.setItem('lightmode', 'false');
    }
});

if (localStorage.getItem('lightmode') === 'true') {
    $("body").removeClass("dark");
    $("#mode").html("<a class=\"btn btn-secondary\">Dark Mode</a>");
} else if (localStorage.getItem('lightmode') === 'false') {
    $("body").addClass("dark");
    $("#mode").html("<a class=\"btn btn-secondary\">Light Mode</a>");
}