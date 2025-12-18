// script.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.textContent.trim().toLowerCase();
            if(lang === 'en') {
                document.body.classList.add('en');
                document.body.classList.remove('ar');
                localStorage.setItem('lang', 'en');
            } else {
                document.body.classList.add('ar');
                document.body.classList.remove('en');
                localStorage.setItem('lang', 'ar');
            }
        });
    });
    //<img src="logo.JPG" width="80" height="40" draggable="false" style="border-radius: 100px;
                         //   box-shadow: 0px 0px 20px black;">

    // Load saved language
    const savedLang = localStorage.getItem('lang');
    if(savedLang) {
        if(savedLang === 'en') {
            document.body.classList.add('en');
            document.body.classList.remove('ar');
        } else {
            document.body.classList.add('ar');
            document.body.classList.remove('en');
        }
    }
});
