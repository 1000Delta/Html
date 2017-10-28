var history = document.getElementById("history");
document.getElementById("d20").onclick = function() {
    document.getElementById("d20Die").innerHTML = 
        x = Math.ceil(Math.random() * 20);
    history.innerHTML = history.innerHTML + (x + "<br>");    
    
}
document.getElementById("d12").onclick = function() {
    document.getElementById("d12Die").innerHTML = 
        x = Math.ceil(Math.random() * 12);
    history.innerHTML =  + (x + "<br>");    
    }
document.getElementById("d10").onclick = function() {
    if (x = (x = Math.ceil(Math.random() * 100)) - x % 10)
    {
        document.getElementById("d10Die1").innerHTML = x;
    }
    else
    {
        document.getElementById("d10Die1").innerHTML = (x = 10);
    }
    document.getElementById("d10Die2").innerHTML =
        x = Math.ceil(Math.random() * 10);
    history.innerHTML = history.innerHTML + (x + "<br>");    
    }
document.getElementById("d8").onclick = function() {
    document.getElementById("d8Die").innerHTML = 
        x = Math.ceil(Math.random() * 8);
    history.innerHTML = history.innerHTML + (x + "<br>");    
    }
document.getElementById("d6").onclick = function() {
    document.getElementById("d6Die").innerHTML = 
        x = Math.ceil(Math.random() * 6);
    history.innerHTML = history.innerHTML + (x + "<br>");    
    
}
document.getElementById("d4").onclick = function() {
    document.getElementById("d4Die").innerHTML = 
        x = Math.ceil(Math.random() * 4);
    history.innerHTML = history.innerHTML + x + "<br>";    
    
}
