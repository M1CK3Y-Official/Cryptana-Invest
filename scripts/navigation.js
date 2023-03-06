// Opretter en variable, som indeholder en template med html tags til min burger-menu

let navTmpl = ` 
<div class="navigationHandle "><i class='fa-solid fa-bars'></i></div>
<div class="navigation">
    <div class="menus">
    <div class="navigation-links"></div>
</div>
</div>`  

const navContainer = document.querySelector('#nav-container'); // opretter en variable, som får fat i nav containeren via den's id
navContainer.insertAdjacentHTML('beforeend', navTmpl); // indsætter navigation templaten fra øverst i scriptet



// Opretter et array, som indeholder mine menupunkter, og deres destination

let linksArr = [ 
    {
        link : 'index.html', // Destinationen på menupunktet
        title : 'Hjem' // Navnet på menupunktet
    },
    {
        link : '#',
        title : 'Din wallet'
    },
    {
        link : '#',
        title : 'FAQ'
    },
    {
        link : '#kontakt',
        title : 'Kontakt'
    },
]


const linksContainer = document.querySelector('.navigation-links');

linksArr.forEach((linkObj) => { // Opretter en function, som med array ovenover

    linksContainer.insertAdjacentHTML('beforeend', `<a href="${linkObj.link}">${linkObj.title}</a>`); // Indsætter HTML med link og navn på alle menupunkterne fra array


    // Sørger for at menuen lukker, efter der er blevet trykket på et menupunkt

    linksContainer.addEventListener('click', () => {
        const nav2 = document.querySelector('.navigation');
        nav2.classList.remove('active'); // Fjerner class'en active
    })
})

const navHandle = document.querySelector('.navigationHandle');
navHandle.addEventListener('click', () => {

    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
    
})