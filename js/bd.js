start_btn.onclick = function(){
    document.getElementsByClassName('wrapperF')[0].style= "display: block";
    document.getElementsByClassName('wrapper')[0].style= "display: none";
}
f.onclick = function(){
    document.getElementsByClassName('wrapperF')[0].style= "display: none";
    document.getElementsByClassName('wrapperS')[0].style= "display: block";

}
s.onclick = function(){
    document.getElementsByClassName('wrapperS')[0].style= "display: none";
    document.getElementsByClassName('wrapperT')[0].style= "display: block";

}
u.onclick = function(){
    document.location.href = "bd2.html";
}