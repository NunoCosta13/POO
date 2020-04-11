(function() {

    var preload = document.getElementById("preload")
    var loading = 0
    var id = setInterval(frame, 64)
    var loaded = false

    function frame() {
        if (loading == 100 && !loaded) {
            clearInterval(id);
            window.open("./content/login.html", "_self")
            loaded = true
        } else {
            loading = loading + 1
            if (loading == 90) {
                preload.style.animation = "fadeout 1s ease"
            }
        }
    }

})();