//title animation
    window.addEventListener('load', function(){
        var title = document.getElementById("title");
        var button = document.getElementById("freeEvaluation");
          //title animation
        title.className = "fade-in";
      
          //evaluation button animation
        button.className = "hideMe1";
        
    });


//scroll animations

window.addEventListener('scroll', () => {
    
        //scrollheight of document - height of the window; to get total amount of scrollable height
    const scrollable = document.documentElement.scrollHeight - window.innerHeight; 
    
        //website scrolls down 1295 pixels (as of july 8th 2019 7:27p.m)
    const scrolled = window.scrollY; 
        
    
        //left off here WBY
    if(scrolled > 0){
            animatesmoke();
       }
    
        
    /*    //if scrolled to the bottom
    if(Math.ceil(scrolled) === scrollable){
        
        alert('youve reached the bottom!');
        
    }*/
    
});



//functions

function animatesmoke(){
    
    
    
}