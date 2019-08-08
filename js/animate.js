//on load 
window.addEventListener('load', function () {
    /*page transition*/
    let body = document.querySelector('body');
    body.classList.add('page_transition');
    //---------title animation----------
    if (document.getElementById("title")) {
        var title = document.getElementById("title");
        title.classList.add("fade_in2"); //title animation   
    }
});

// ------ add playback time to smoke video ------
if (document.getElementById("video")) {
    let video = document.getElementById("video");
    video.playbackRate = 0.5; //changes the rate the video plays
}

//------scroll animations-------
window.addEventListener('scroll', () => {


    animate_contact_services_area_h3();
    animate_contact_services_area_p();
    animate_contact_services_area_contact();
    animate_repair();
    animate_who_we_are_h3();
    animate_who_we_are_p();
    animate_who_we_are_questions();
    animate_footer_h3();
    animate_footer_li();
    animate_footer_button();




}); //end of scroll event



//functions

//check element position
function check_element_position(element, element_position, animation) {

    let screen_position = window.innerHeight; //gets the height of the window

    /*scrolled into viewport and has not scrolled out of viewport add class*/
    if (element_position < screen_position && element_position > 0) {
        element.classList.add(animation);
    }
    /*in viewport scrolling up and not out of viewport*/
    if (element_position > 0 && element_position < screen_position) {
        element.classList.add(animation);
    }
    /*if scrolled passed remove class*/
    if (element_position < 0) {
        element.classList.remove(animation);
    }
    /*if scrolled about remove class*/
    if (element_position > screen_position) {
        element.classList.remove(animation);
    }

}

function check_2element_position(element1, element2, element_position, animation1, animation2) {
    
    let screen_position = window.innerHeight; //gets the height of the window

    if (element_position < screen_position) {

        element1.classList.add(animation1);
        element2.classList.add(animation2);
    }


        /*in viewport scrolling up and not out of viewport*/
    if (element_position > 0 && element_position < screen_position) {
        element1.classList.add(animation1);
        element2.classList.add(animation2);
    }
        /*if scrolled passed remove class*/
    if (element_position < 0) {
        element1.classList.remove(animation1);
        element2.classList.remove(animation2);
    }
        /*if scrolled about remove class*/
    if (element_position > screen_position) {
        element1.classList.remove(animation1);
        element2.classList.remove(animation2);
    }

}

function check_multiple_elements(odd, even, odd2, even2, odd3, element_position, animation1, animation2){
    
    let screen_position = window.innerHeight;
    


    if (element_position < screen_position) {

        odd.classList.add(animation1);
        even.classList.add(animation2);
        odd2.classList.add(animation1);
        even2.classList.add(animation2);
        odd3.classList.add(animation1);

    }


    /*in viewport scrolling up and not out of viewport*/
    if (element_position > 0 && element_position < screen_position) {

        odd.classList.add(animation1);
        even.classList.add(animation2);
        odd2.classList.add(animation1);
        even2.classList.add(animation2);
        odd3.classList.add(animation1);
    }
    /*if scrolled passed remove class*/
    if (element_position < 0) {

        odd.classList.remove(animation1);
        even.classList.remove(animation2);
        odd2.classList.remove(animation1);
        even2.classList.remove(animation2);
        odd3.classList.remove(animation1);
    }
    /*if scrolled about remove class*/
    if (element_position > screen_position) {

        odd.classList.remove(animation1);
        even.classList.remove(animation2);
        odd2.classList.remove(animation1);
        even2.classList.remove(animation2);
        odd3.classList.remove(animation1);
    }

    
}

//services area h3
function animate_contact_services_area_h3() {

    //h3 in contact services area
    if (document.getElementById("header_3")) {

        let area_title = document.getElementById("header_3"); //selects the h3 tag
        let area_position = area_title.getBoundingClientRect().top; //gets the top position of h3

        check_element_position(area_title, area_position, "slide_in_right");


    }


}
//services area paragraph
function animate_contact_services_area_p() {


    if (document.getElementById("paragraph")) {

        let area_paragraph = document.getElementById("paragraph"); //selects the paragrpah
        let area_paragraph_position = area_paragraph.getBoundingClientRect().top; //gets top position


        check_element_position(area_paragraph, area_paragraph_position, "slide_in_left");

    }

}

//services area title and button
function animate_contact_services_area_contact() {

    if (document.getElementById("contact_area")) {


        let contact_area_div = document.getElementById("contact_area"); //selects the area
        let contact_area_position = contact_area_div.getBoundingClientRect().top; //top position


        check_element_position(contact_area_div, contact_area_position, "fade_in");


    }

}

//i need repair and 24/7 repair
function animate_repair() {

    if (document.getElementById("i_need_repair") && document.getElementById("emergancy")) {

        let repair = document.getElementById("i_need_repair"); //selects title and button
        let repair_emergancy = document.getElementById("emergancy");
        let repair_position = repair.getBoundingClientRect().top; //top position of repair
        


        check_2element_position(repair, repair_emergancy, repair_position, "fade_in", "pop_in");

    }

}

//who we are
function animate_who_we_are_h3() {

    if (document.getElementById("who_header")) {

        let who_header = document.getElementById("who_header");
        let who_header_position = who_header.getBoundingClientRect().top;
        
        check_element_position(who_header, who_header_position, "slide_in_right");

    }


}

function animate_who_we_are_p() {

    if (document.getElementById("who_p")) {

        let who_p = document.getElementById("who_p");
        let who_p_position = who_p.getBoundingClientRect().top;
        
        check_element_position(who_p, who_p_position, "slide_in_left");

    }

}

function animate_who_we_are_questions() {

    if (document.getElementById("questions")) {

        let questions = document.getElementById("questions");
        let questions_position = questions.getBoundingClientRect().top;
        
        check_element_position(questions, questions_position, "fade_in");

    }

}

//footer
function animate_footer_h3() {

    if (document.getElementById("header_three") && document.getElementById("header_three2")) {

        let header = document.getElementById("header_three");
        let header_two = document.getElementById("header_three2");
        let header_position = header.getBoundingClientRect().top;
        
        check_2element_position(header, header_two, header_position, "slide_in_left", "slide_in_right");

    }

}


function animate_footer_li() {

    let odd = document.getElementById("odd");
    let even = document.getElementById("even");
    let odd2 = document.getElementById("odd2");
    let even2 = document.getElementById("even2");
    let odd3 = document.getElementById("odd3");
    let ul_position = odd.getBoundingClientRect().top;
    
    check_multiple_elements(odd, even, odd2, even2, odd3, ul_position, "slide_in_left", "slide_in_right");
    

}


function animate_footer_button() {

    let footer_btn = document.getElementById("footer_btn");
    let btn_position = footer_btn.getBoundingClientRect().top;
    
    check_element_position(footer_btn, btn_position, "fade_in");

}

/*moile navigation*/
let nav_active = false;
let mobile_nav_logo = document.querySelector('.mobile_nav_logo');
let mobile_nav = document.querySelector('.mobile_nav');
/*open and close mobile nav when mobile nav logo is clicked*/
mobile_nav_logo.addEventListener('click',
    function () {
        mobile_nav.classList.toggle('mobile_nav_active');
        mobile_nav_logo.classList.toggle('mobile_logo_active');
        nav_active = !nav_active;
    }
);
//if  mobile nav is open and clicked outside of nav. close  mobile nav
let main = document.querySelector('main');
if (nav_active = true) {
    main.addEventListener('click', function () {
        mobile_nav.classList.remove('mobile_nav_active');
        mobile_nav_logo.classList.remove('mobile_logo_active');
        nav_active = !nav_active;
    })
}
