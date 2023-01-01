const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click',()=>{

    if (sidebar.className === 'sidebar') 
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');
    });

navItems.forEach(navitem => {

    navitem.addEventListener('click',()=>{

        navItems.forEach(navitem=> {
            navitem.classList.remove('active')
        });

        navitem.classList.add('active')
    });

});






