window.addEventListener("scroll", function(){
    //console.log(this.window.scrollY)
    if(this.window.scrollY > 300){
        this.document.getElementsByTagName("section")[1].style.backgroundColor = "red";
    }
});