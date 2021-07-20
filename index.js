var elem = document.getElementById("imgs");
var array = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg", "img8.jpg"];
var i = 0;
function slide() {
    elem.setAttribute("src", array[i]);
    i++;
    i = i%8;
}
setInterval(slide, 1500);

var checkbox = document.querySelector('input[name = theme]');
checkbox.addEventListener('change', function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
})