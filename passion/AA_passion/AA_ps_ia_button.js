
var page=0;             
var i = 0;
var pos = ["translateY(-0%)","translateY(-100%)","translateY(-200%)","translateY(-300%)"];                          
var a = 0;
var transition_1 = document.getElementById('transition');
var bouton =  document.getElementById("next");
var bouton_2 =  document.getElementById("previous");
var bouton_3 = document.getElementById('reload_button');
var scrolling_2 = document.getElementById('scroll');
var translate = ["translateY(0%)" , "translateY(-100%)" , "translateY(-200%)" , "translateY(-300%)"];
var point_one = document.getElementById("point");
var point_two = document.getElementById("point2" );
var point_three = document.getElementById("point3" );
var point_four = document.getElementById("point4" );
var point_jor=[point_one , point_two , point_three , point_four ];
var button_nav_1 = document.getElementById('nav_1');
var button_nav_2 = document.getElementById('nav_2');
var button_nav_3 = document.getElementById('nav_3');
var background_color = [background_color_btc, background_color_btc_2 , background_color_btc_3, background_color_btc_4];
var lecture_2 = document.getElementById("content_lecture_2");
var lecture_1 = document.getElementById("content_lecture");
var transition_2 = document.getElementById('transition_page_1');
var transition_3 = document.getElementById('transition_page_2');    

            
             button_nav_1.addEventListener('click', function (){
                 
                          button_nav_1.style.transform = "translateY(-120%)"; 
                          button_nav_2.style.transform = "translateY(-120%)"; 
                          button_nav_3.style.transform = "translateY(-120%)"; 
                          bouton_3.style.transform = "translateY(-150%)";
                          point_one.style.transform = "translatey(1000%)";
                          point_two.style.transform = "translatey(1000%)";
                          point_three.style.transform = "translatey(1000%)";
                          point_four.style.transform = "translatey(1000%)";
                          bouton.style.transform = "translatey(200%)";
                          bouton_2.style.transform = "translatey(200%)";
                          transition_1.style.zIndex="1000";
                         
                     
                          
                 
                           setTimeout(function(){
                           
                            transition_1.style.opacity="1";
                               
                           },550);
                         
                               
                        setTimeout(function(){
                                     
                                     window.location= "AA_ps_index.html";                                     
                                         
                                        },1000);
                
             
             });
            
             button_nav_2.addEventListener('click', function (){
                 
                     
                 
                 
                 
                 
                 
                          button_nav_1.style.transform = "translateY(-120%)"; 
                          button_nav_2.style.transform = "translateY(-120%)"; 
                          button_nav_3.style.transform = "translateY(-120%)"; 
                          bouton_3.style.transform = "translateY(-150%)";
                          point_one.style.transform = "translatey(1000%)";
                          point_two.style.transform = "translatey(1000%)";
                          point_three.style.transform = "translatey(1000%)";
                          point_four.style.transform = "translatey(1000%)";
                          bouton.style.transform = "translatey(200%)";
                          bouton_2.style.transform = "translatey(200%)";
                          transition_1.style.zIndex="1000";
                          page=1; 
                     
                          
                 
                           setTimeout(function(){
                           
                            transition_1.style.opacity="1";
                               
                           },550);
                         
                 
                   setTimeout(function(){
                       
                                     
                                     window.location= "AA_ps_jeux_video.html";                                     
                                         
                                        },1000);
                 
                    
             
             });
            
            
             button_nav_3.addEventListener('click', function (){
                 
                         button_nav_1.style.transform = "translateY(-120%)"; 
                          button_nav_2.style.transform = "translateY(-120%)"; 
                          button_nav_3.style.transform = "translateY(-120%)"; 
                          bouton_3.style.transform = "translateY(-150%)";
                          point_one.style.transform = "translatey(1000%)";
                          point_two.style.transform = "translatey(1000%)";
                          point_three.style.transform = "translatey(1000%)";
                          point_four.style.transform = "translatey(1000%)";
                          bouton.style.transform = "translatey(200%)";
                          bouton_2.style.transform = "translatey(200%)";
                       transition_1.style.zIndex="1000";
                          
                     
                          
                 
                           setTimeout(function(){
                           
                            transition_1.style.opacity="1";
                               
                           },550);
                         
                 
                   setTimeout(function(){
                                     
                                     window.location= "AA_ps_blockchain.html";                                     
                                         
                                        },1000);
             
             });
                           