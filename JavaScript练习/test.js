var c = 0;
document.getElementById(btn).onclick = function timer() 
{
    setTimeout("timer()", 1000);
    c++;
}
document.getElementById(screen).innerText = c;