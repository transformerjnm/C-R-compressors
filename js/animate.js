        //---------title animation----------
window.addEventListener('load', function(){
        var title = document.getElementById("title");
        var button = document.getElementById("freeEvaluation");
        var services = document.getElementById("services_animate");
          //title animation
        title.className = "fade-in";
      
          
        
    });


        //------scroll animations-------
const boxes = document.querySelector("div.flex_item");

window.addEventListener('scroll', () => {
        
        // services animation below
    console.log(window.innerHeight); //space between the top and bottom of the browser 524
    
    console.log(boxes.getBoundingClientRect().top); // boxes are in viewport at 422
    
    

    
    
    

    
}); //end of scroll event



//functions

function animatesmoke(){
    
    
    
}