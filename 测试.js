document.getElementById("roller").onclick = function() {
    document.getElementById("die").innerHTML = 
        "&#x268" + Math.floor(Math.random() * 6) + ";"
        +"&#x268" + Math.floor(Math.random() * 6) + ";"
        +"&#x268" + Math.floor(Math.random() * 6) + ";"
        +"&#x268" + Math.floor(Math.random() * 6) + ";"
        +"&#x268" + Math.floor(Math.random() * 6) + ";";
    
};