var code = 0;
var pos = ["translateY(-0%)", "translateY(-100%)", "translateY(-200%)", "translateY(-300%)"];
var a = 0;
var transition_1 = document.getElementById('transition');
var bouton = document.getElementById("next");
var bouton_2 = document.getElementById("previous");
var bouton_3 = document.getElementById('reload_button');
var scrolling_2 = document.getElementById('scroll');
var translate = ["translateY(0%)", "translateY(-100%)", "translateY(-200%)", "translateY(-300%)"];
var point_one = document.getElementById("point");
var point_two = document.getElementById("point2");
var point_three = document.getElementById("point3");
var point_four = document.getElementById("point4");
var point_jor = [point_one, point_two, point_three, point_four];
var button_nav_1 = document.getElementById('nav_1');
var button_nav_2 = document.getElementById('nav_2');
var button_nav_3 = document.getElementById('nav_3');
var transition_2 = document.getElementById('transition_page_1');
var transition_3 = document.getElementById('transition_page_2');

/********** TRANSITION PAGE D'ARRIVER ***********/
window.onload = function () {

    button_nav_1.style.transform = "translateY(-120%)";
    button_nav_2.style.transform = "translateY(-120%)";
    button_nav_3.style.transform = "translateY(-120%)";
    bouton_3.style.transform = "translateY(-160%)";
    button_nav_1.style.transition = "none";
    button_nav_2.style.transition = "none";
    button_nav_3.style.transition = "none";
    bouton_3.style.transition = "none";
    point_one.style.transform = "translateY(1000%)";
    point_two.style.transform = "translateY(1000%)";
    point_three.style.transform = "translateY(1000%)";
    point_four.style.transform = "translateY(1000%)";
    bouton.style.transform = "translateY(200%)";
    bouton_2.style.transform = "translateY(200%)";
    point_one.style.transition = "none";
    point_two.style.transition = "none";
    point_three.style.transition = "none";
    point_four.style.transition = "none";
    bouton.style.transition = "none";
    bouton_2.style.transition = "none";
    transition_1.style.transition = "0.2s";

    setTimeout(function () {
        transition_1.style.opacity = "0";
        transition_1.style.zIndex = "0";

    }, 150);



    setTimeout(function () {
        button_nav_1.style.transform = "translateY(0%)";
        button_nav_2.style.transform = "translateY(0%)";
        button_nav_3.style.transform = "translateY(0%)";
        bouton_3.style.transform = "translateY(0%)";
        button_nav_1.style.transition = "0.8s";
        button_nav_2.style.transition = "0.8s";
        button_nav_3.style.transition = "0.8s";
        bouton_3.style.transition = "0.8s";
        point_one.style.transform = "translateY(1000%)";
        point_one.style.transform = "translateY(0%)";
        point_two.style.transform = "translateY(0%)";
        point_three.style.transform = "translateY(0%)";
        point_four.style.transform = "translateY(0%)";
        bouton.style.transform = "translateY(0%)";
        bouton_2.style.transform = "translateY(0%)";
        point_one.style.transition = "0.8s";
        point_two.style.transition = "0.8s";
        point_three.style.transition = "0.8s";
        point_four.style.transition = "0.8s";
        bouton.style.transition = "0.8s";
        bouton_2.style.transition = "0.8s";


    }, 1300);

    setTimeout(function () {

        transition_2.style.boxShadow = "0px 0px 5px #03e9f4,0px 0px 15px #03e9f4";
        transition_3.style.boxShadow = "0px 0px 5px #03e9f4,0px 0px 15px #03e9f4";

    }, 700);

    setTimeout(function () {

        transition_2.style.transform = "translateX(-105%)";
        transition_3.style.transform = "translateX(105%)";

    }, 1000);

};



/********** TRANSITION SECTION WITH BUTTON NEXT AND PREVIOUS AND THE INDICATOR BUTTONS/SCROLL/KEYDOWN*UP ***********/


bouton.addEventListener('click', function () {
    if (a > 2) {
        a = 2;
    }


    a++;
    changing_section(a);


});


bouton_2.addEventListener('click', function () {

    if (a < 1) {
        a = 1;
    }

    a--;
    changing_section(a);

});

point_one.addEventListener('click', function () {



    a = 0;
    changing_section(a);

});

point_two.addEventListener('click', function () {






    a = 1;
    changing_section(a);

});

point_three.addEventListener('click', function () {


    a = 2;
    changing_section(a);


});

point_four.addEventListener('click', function () {


    a = 3;
    changing_section(a);


});



/********** TRANSITION SECTION WITH SCROLL MOUSE ***********/




window.addEventListener("mousewheel", myfunction);


function myfunction(scrolling_2) {




    if (scrolling_2.deltaY > 0) {

        if (a > 2) {
            a = 2;
        }

        a++;
        changing_section(a);

    } else if (scrolling_2.deltaY < 0) {
        if (a < 1) {
            a = 1;
        }

        a--;
        changing_section(a);
    }


    if (a == 1) {


        window.removeEventListener("mousewheel", myfunction);
        setTimeout(function () {
            window.addEventListener("mousewheel", myfunction)
        }, 500);


    } else if (a == 2) {

        window.removeEventListener("mousewheel", myfunction);
        setTimeout(function () {
            window.addEventListener("mousewheel", myfunction)
        }, 500);
    }

}
/********** TRANSITION SECTION WITH KEYCODE ***********/

window.addEventListener("keyup", function (event) {
    code = event.keyCode;
    if (code == 38) {

        if (a > 2) {
            a = 2;
        }
      
        changing_section(a);
        a--;

    } else if (code == 40) {
           if (a < 1) {
        a = 1;
    }

        changing_section(a);
        a++;

    }

});

function changing_section(a) {


    if (a == 0) {
        scrolling_2.style.transform = translate[a]; 
        point_two.style.background = "grey";
    } else if (a == 1) {
        scrolling_2.style.transform = translate[a];
        point_four.style.background = "grey";
        point_three.style.background = "grey";
        point_one.style.background = "grey";
    } else if (a == 2) {
        scrolling_2.style.transform = translate[a];
        point_four.style.background = "grey";
        point_two.style.background = "grey";
        point_one.style.background = "grey";
    } else if (a == 3) {
        scrolling_2.style.transform = translate[a];       
        point_three.style.background = "grey";
    }


    
    point_jor[a].style.background = "white";


}

changing_section(a);
          
 

                                   
                 
           