let home = document.getElementById("homeVal")
let guest= document.getElementById("guestVal")
let val = 0
let vals = 0
let begin = false
function oneH()
{
    if(begin==false) return
    val+=1
    home.textContent = val
}
function twoH()
{
    if(begin==false) return
    val+=2
    home.textContent = val
}
function thrH()
{
    if(begin==false) return
    val+=3
    home.textContent = val
}

function one()
{
    if(begin==false) return
    vals+=1
    guest.textContent = vals
}
function two()
{
    if(begin==false) return
    vals+=2
    guest.textContent = vals
}
function thr()
{
    if(begin==false) return
    vals+=3
    guest.textContent = vals
}
function start()
{
    begin=true
}

function stop()
{
    begin=false
}
function end()
{
    begin=false
    val=0
    vals=0
    guest.textContent = val
    home.textContent = vals
}