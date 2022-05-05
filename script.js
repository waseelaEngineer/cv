let locate = document.getElementById("locate");

window.onscroll = function(){

    let value = scrollY;
    console.log(value);

    if ( screen.width < 700){

        //for Mobile
        if ( value < 810 && 0 < value){
            locate.innerHTML = "Profile"
        }
        if ( value < 2250 && 810 < value){
            locate.innerHTML = "Projects"
        }
        if ( value < 3150 && 2250 < value){
            locate.innerHTML = "Education"
        }
        if ( value < 4215 && 3150 < value){
            locate.innerHTML = "Skills"
        }
        if ( value < 5000 && 4215 < value){
            locate.innerHTML = "Work"
            locate.style.display = "block"
        }
        if ( value < 10000 && value > 5000 ) {
            locate.style.display = "none"
        }
    }
    else{
        // for PC
        if ( value < 610 && 0 < value){
            locate.innerHTML = "Profile"
        }
        if ( value < 3880 && 610 < value){
            locate.innerHTML = "Projects"
        }
        if ( value < 5600 && 3880 < value){
            locate.innerHTML = "Education"
        }
        if ( value < 7330 && 5600 < value){
            locate.innerHTML = "Skills"
        }
        if ( value < 8810 && 7330 < value){
            locate.innerHTML = "Work"
            locate.style.display = "block"
        }
        if ( value < 10000 && value > 8810 ) {
            locate.style.display = "none"
        }

    }

    


}