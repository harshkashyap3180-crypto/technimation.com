let buts = document.querySelectorAll(".navBut");
let bar = document.getElementById("searchBar");
let enableS = false;

let barSize = 0;


function searchBut() {
  if(enableS == false){
    enableS = true;
    
    bar.style.display = "block";
    buts.forEach((navBut) => {
      navBut.style.display = "none";
      
      
    });
    
  }
  else if (enableS == true) {
  enableS = false;
  bar.style.display = "none";
  buts.forEach((navBut) => {
  navBut.style.display = "block";
});
}
}


// for the buttons get focus line

let home = document.getElementById("home-but");
let project = document.getElementById("project-but");
let contact = document.getElementById("contact-but");
let about = document.getElementById("about-but");


// here are the pages with their ids
let homePage = document.getElementById("home-page");
let projectPage = document.getElementById("project-page");
let contactPage = document.getElementById("contact-page");
let aboutPage = document.getElementById("about-page");

home.classList.add("focusBut");
homePage.style.display = "block";
    projectPage.style.display = "none";
    contactPage.style.display = "none";
    aboutPage.style.display = "none";
    
    
let focusButs = () => {
  home.addEventListener("click", () => {
    home.classList.add("focusBut");
    project.classList.remove("focusBut");
    contact.classList.remove("focusBut");
    about.classList.remove("focusBut");
    
    homePage.style.display = "block";
    projectPage.style.display = "none";
    contactPage.style.display = "none";
    aboutPage.style.display = "none";
    
  });
  project.addEventListener("click", () => {
  project.classList.add("focusBut");
  home.classList.remove("focusBut");
  contact.classList.remove("focusBut");
  about.classList.remove("focusBut");
  
  
    homePage.style.display = "none";
    projectPage.style.display = "block";
    contactPage.style.display = "none";
    aboutPage.style.display = "none";
    
});
  contact.addEventListener("click", () => {
  contact.classList.add("focusBut");
  project.classList.remove("focusBut");
  home.classList.remove("focusBut");
  about.classList.remove("focusBut");
  
  
    homePage.style.display = "none";
    projectPage.style.display = "none";
    contactPage.style.display = "block";
    aboutPage.style.display = "none";
    
});
  about.addEventListener("click", () => {
  about.classList.add("focusBut");
  project.classList.remove("focusBut");
  contact.classList.remove("focusBut");
  home.classList.remove("focusBut");
  
  
    homePage.style.display = "none";
    projectPage.style.display = "none";
    contactPage.style.display = "none";
    aboutPage.style.display = "block";
    
});
  
};
focusButs();

