/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('navbar_toggle');
const navMenu = document.getElementById('navbar_menu');

navToggle.addEventListener('click', () =>{
    document.getElementById("navbar_search_dropdown").className  = 'hide_dropdown';
    document.getElementById("navbar_account_dropdown").className  = 'hide_dropdown';
    showOrHideMenu();
});

const showOrHideMenu = () =>{

    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('show-icon');

}

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach((item) =>{

    const dropdownButton = item.querySelector('.dropdown__button') ;

    dropdownButton.addEventListener('click', () =>{
        
        const showDropdown = document.querySelector('.show-dropdown');
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown);
        }
        toggleItem(item);
        
    });

});

const toggleItem = (item) =>{
    
    const dropdownContainer = item.querySelector('.dropdown__container');

    if(item.classList.contains('show-dropdown')){
        item.classList.remove('show-dropdown');
        dropdownContainer.removeAttribute('style');
    } else{
        item.classList.add('show-dropdown');
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)');
const dropdownContainer = document.querySelectorAll('.dropdown__container');

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
    if(mediaQuery.matches){
    
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style');
        });

        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown');
        });
    }
}

addEventListener('resize', removeStyle);

/*=============== SHOW SEARCH BAR & ACCOUNT ===============*/
const searchIcon = document.getElementById("navbar_search_icon");
const searchDropdown = document.getElementById("navbar_search_dropdown");
const accountIcon = document.getElementById("navbar_account_icon");
const accountDropdown = document.getElementById("navbar_account_dropdown");

const showOrHideDropdown = (icon, item)=> {
    icon.addEventListener("click",(e)=>{
       
        if(navMenu.classList.contains("show-menu")){
            showOrHideMenu();
        }

        icon === searchIcon ?accountDropdown.className = 'hide_dropdown' :searchDropdown.className = 'hide_dropdown';
        item.classList = item.className === 'visible_dropdown' ?'hide_dropdown' :'visible_dropdown';
    });
}

showOrHideDropdown(searchIcon, searchDropdown);
showOrHideDropdown(accountIcon, accountDropdown);

// hide search & account dropdown when navbar_menu is hovered
navMenu.addEventListener("mouseover", ()=> {
    accountDropdown.className = 'hide_dropdown';
    searchDropdown.className = 'hide_dropdown';
});


