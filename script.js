window.onload=function(){
    const toggleButton = document.querySelector('.toggle');
const navBar = document.querySelector('.nav');
const navBar2 = document.querySelector('.toggle');
const navBar3 = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('toggle-menu');
  navBar2.classList.toggle('toggle-menu');
  navBar3.classList.toggle('toggle1');
});
$('#navbar .nav a').click(function() {
    $('#navbar .nav a').removeClass("active");
    $(this).find('#navbar .nav a').addClass("active");
});
}

