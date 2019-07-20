        //---------title animation----------
window.addEventListener('load', function(){
        var title = document.getElementById("title");
        
        title.classList.add("fade_in"); //title animation
      
        
    });

// ------ add playback time to smoke video ------
let video = document.getElementById("video");

video.playbackRate = 0.5; //changes the rate the video plays




        //------scroll animations-------
let boxes = document.querySelectorAll('.flex_item');


window.addEventListener('scroll', () => {
        
        //  contact us services animation below
    animate_contact_services_area_h3();
    animate_contact_services_area_p();
    animate_contact_services_area_contact();
    animate_repair();
    
    
    

    
}); //end of scroll event



//functions

        //services area h3
function animate_contact_services_area_h3(){
    
        //h3 in contact services area
    let area_title = document.getElementById("header_3"); //selects the h3 tag
    let area_position = area_title.getBoundingClientRect().top; //gets the top position of h3
    let screen_position = window.innerHeight; //gets the height of the window
    
		/*scrolled into viewport and has not scrolled out of viewport add class*/
    if(area_position < screen_position && area_position > 0){       
        area_title.classList.add("slide_in_right");           
		} 
   /*in viewport scrolling up and not out of viewport*/
	if(area_position > 0 && area_position < screen_position){
		area_title.classList.add("slide_in_right");
	}
	/*if scrolled passed remove class*/
    if(area_position < 0){
		area_title.classList.remove("slide_in_right");
		}
    /*if scrolled about remove class*/
	if(area_position > screen_position){
		area_title.classList.remove("slide_in_right");
	}
    
    
}
        //services area paragraph
function animate_contact_services_area_p(){
    
    
    let area_paragraph = document.getElementById("paragraph"); //selects the paragrpah
    let area_paragraph_position = area_paragraph.getBoundingClientRect().top; //gets top position
    let screen_position = window.innerHeight; //gets the height of the window
    
    if(area_paragraph_position < screen_position){
        
        area_paragraph.classList.add("slide_in_left");
        
    }
    
    /*in viewport scrolling up and not out of viewport*/
	if(area_paragraph_position > 0 && area_paragraph_position < screen_position){
		area_paragraph.classList.add("slide_in_left");
	}
	/*if scrolled passed remove class*/
    if(area_paragraph_position < 0){
		area_paragraph.classList.remove("slide_in_left");
		}
    /*if scrolled about remove class*/
	if(area_paragraph_position > screen_position){
		area_paragraph.classList.remove("slide_in_left");
	}
    
}

        //services area title and button
function animate_contact_services_area_contact(){
    
        
    let contact_area_div = document.getElementById("contact_area"); //selects the area
    let contact_area_position = contact_area_div.getBoundingClientRect().top; //top position
    let screen_position = window.innerHeight; //user's height of window
    
    if(contact_area_position < screen_position){
           
        contact_area_div.classList.add("fade_in");
        
    }
    
    /*in viewport scrolling up and not out of viewport*/
	if(contact_area_position > 0 && contact_area_position < screen_position){
		contact_area_div.classList.add("fade_in");
	}
	/*if scrolled passed remove class*/
    if(contact_area_position < 0){
		contact_area_div.classList.remove("fade_in");
		}
    /*if scrolled about remove class*/
	if(contact_area_position > screen_position){
		contact_area_div.classList.remove("fade_in");
	}
    
}

        //i need repair and 24/7 repair
function animate_repair(){
    
    let repair = document.getElementById("i_need_repair"); //selects title and button
    let repair_emergancy = document.getElementById("emergancy");
    let repair_position = repair.getBoundingClientRect().top; //top position of repair
    let screen_position = window.innerHeight; //screen height
    
    
    if(repair_position < screen_position){
       
        repair.classList.add("fade_in");
        repair_emergancy.classList.add("pop_in");
    }
    
    
    /*in viewport scrolling up and not out of viewport*/
	if(repair_position > 0 && repair_position < screen_position){
		repair.classList.add("fade_in");
        repair_emergancy.classList.add("pop_in");
	}
	/*if scrolled passed remove class*/
    if(repair_position < 0){
		repair.classList.remove("fade_in");
        repair_emergancy.classList.remove("pop_in");
		}
    /*if scrolled about remove class*/
	if(repair_position > screen_position){
		repair.classList.remove("fade_in");
        repair_emergancy.classList.remove("pop_in");
	}
    
}



