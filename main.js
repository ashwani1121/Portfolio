document.addEventListener('DOMContentLoaded', function () {
    // Select the CLC image link
    const clcImage = document.querySelector('.projects__img[href="clc.html"]');

    // Add a click event listener
    clcImage.addEventListener('click', function (e) {
        window.location.href = 'clc.html';
    });

    // EVM Project
    const evmImage = document.querySelector('.projects__img[href="evm.html"]');
    evmImage.addEventListener('click', function (e) {
        window.location.href = 'evm.html';
    });

    // Facebook Login Project
    const fbImage = document.querySelector('.projects__img[href="facebook-login.html"]');
    fbImage.addEventListener('click', function (e) {
        window.location.href = 'facebook-login.html';
    });
});



/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Event listeners for opening modals
document.querySelectorAll('.project__item').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const modalId = item.getAttribute('href').substring(1); // Get modal ID from href
    openModal(modalId);
  });
});

// Close the modal when user clicks outside of it
window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}


document.querySelector('.contact__button').addEventListener('click', async () => {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const message = document.querySelector('textarea[placeholder="write massege"]').value;

    try {
        const response = await fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert('Message sent successfully');
        } else {
            alert('Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
