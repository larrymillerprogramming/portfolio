let cssfile = 'style.css'

document.addEventListener('DOMContentLoaded', function() {

   // Detect which CSS file is active, apply it, and prepare the switch button
   if (sessionStorage.getItem('night') != null && sessionStorage.getItem('night') == 'on') {
      cssfile = 'style2.css';
      document.querySelector('#cssswitch').innerHTML = '<i class="bi bi-brightness-high"></i>';
   }
   document.querySelector('#cssfile').href = cssfile;

   // Switch CSS files with darkmode switch
   document.querySelector('#cssswitch').addEventListener('click', () => {
      if (document.querySelector('#cssswitch').innerHTML == '<i class="bi bi-moon"></i>') {
         document.querySelector('#cssswitch').innerHTML = '<i class="bi bi-brightness-high"></i>';
         document.querySelector('#cssfile').href = 'style2.css';
         sessionStorage.setItem('night', 'on');
      }
      else {
         document.querySelector('#cssswitch').innerHTML = '<i class="bi bi-moon"></i>';
         document.querySelector('#cssfile').href = 'style.css';
         cssfile = 'style.css';
         sessionStorage.setItem('night', 'off');
      }     
   });

})