const dropdownBtn = document.querySelector('#dropdown-btn');
const dropContent = document.querySelector('#dropdown-content');

dropdownBtn.addEventListener('click', () => {
    if(dropContent.classList.contains('hidden')){
        dropContent.classList.remove('hidden');
    }
    else{
        dropContent.classList.add('hidden');
    }
})

const burger = document.querySelector('#hamburger');
const navItems = document.querySelector('#nav-features');

burger.addEventListener('click', () => {
    if(navItems.classList.contains('-translate-x-[100%]')){
        navItems.classList.remove('-translate-x-[100%]')
        navItems.classList.add('border','border-red-500')
    }
})