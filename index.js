// This function switches the content being viewed.
function switchContent(div) {
    let selectedDiv = div
    // Run the hide animation
    document.querySelector('.contentbox').style.animation = 'hide 0.5s forwards';

    // After hide animation, change content and run show animation
    setTimeout(function(){
        document.querySelector('#welcome').style.display = 'none';
        document.querySelector('#about').style.display = 'none';
        document.querySelector('#projects').style.display = 'none';
        document.querySelector('#resume').style.display = 'none';
        document.querySelector(selectedDiv).style.display = 'block';
        document.querySelector('.contentbox').style.animation = 'show 0.5s forwards';
        console.log(selectedDiv);
        // Reset functionality after show animation
        setTimeout(function(){
            document.querySelector('.contentbox').style.animation = 'none';
        }, 500)
    }, 500)
}

document.addEventListener('DOMContentLoaded', function() {

    // Call switchContent with nav buttons
    document.querySelector('#navabout').addEventListener('click', () => {
        switchContent('#about');
    });
    document.querySelector('#navprojects').addEventListener('click', () => {
        switchContent('#projects');
    });
    document.querySelector('#navresume').addEventListener('click', () => {
        switchContent('#resume');
    });

    // Call switchContent with landing page buttons
    document.querySelector('#landabout').addEventListener('click', () => {
        switchContent('#about');
    });
    document.querySelector('#landprojects').addEventListener('click', () => {
        switchContent('#projects');
    });
    document.querySelector('#landresume').addEventListener('click', () => {
        switchContent('#resume');
    });

    // Project link in About page
    document.querySelector('#projectslink').addEventListener('click', () => {
        switchContent('#projects');
    });

    // Show landing page when banner is clicked
    document.querySelector('#bannerlink').addEventListener('click', () => {
        switchContent('#welcome');
    });

    // Switch CSS files with darkmode switch
    document.querySelector('#cssswitch').addEventListener('click', () => {
         if (document.querySelector('#cssswitch').innerHTML == '<i class="bi bi-moon"></i>') {
            document.querySelector('#cssswitch').innerHTML = '<i class="bi bi-brightness-high"></i>';
            document.querySelector('#cssfile').href = 'style2.css';
         }
         else {
            document.querySelector('#cssswitch').innerHTML = '<i class="bi bi-moon"></i>';
            document.querySelector('#cssfile').href = 'style.css';
         }
         
    });

})