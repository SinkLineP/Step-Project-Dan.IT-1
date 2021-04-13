// our-services 

function tabs(evt, elText) {
    let i;
    let tabcontent = document.querySelectorAll(".tabs-content li");
    let tablinks = document.getElementsByClassName("tabs-title");
    let text = document.getElementById(elText);


    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    text.style.display = "block";
    evt.currentTarget.className += " active";
}

// function category(evt, elBtn) {
//     let i;
//     let btn = document.getElementById(elBtn);
//     let btnLink = document.getElementById("")
// }


