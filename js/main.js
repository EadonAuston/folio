function createPortfolioCard(dataItem, imageNumber, category, type, dataItem2) {
   let portfolioCard = document.createElement('div');
   let portfolioBody = document.createElement('div');
   let portfolioImage = document.createElement('img');
   let portfolioLink = document.createElement('div');
   let portfolioLinkDiv = document.createElement('div');
   let portfolioLinkH3 = document.createElement('h3');

   portfolioCard.classList.add('portfolio-card');
   portfolioCard.dataset.item = dataItem;
   portfolioCard.dataset.open = dataItem2;
   portfolioBody.classList.add('card-body');
   portfolioImage.alt = 'portfolio-icon';
   portfolioImage.src = `./assets/images/portfolio-${imageNumber}.jpg`;
   portfolioLink.classList.add('card-popup-box');
   portfolioLinkDiv.innerHTML = category;
   portfolioLinkH3.innerHTML = type;

   portfolioLink.appendChild(portfolioLinkDiv);
   portfolioLink.appendChild(portfolioLinkH3);

   portfolioBody.appendChild(portfolioLink);
   portfolioBody.appendChild(portfolioImage);

   portfolioCard.appendChild(portfolioBody);
   document.querySelector('.portfolio-grid').appendChild(portfolioCard);

}
createPortfolioCard('web', 1, 'Web Development', 'Food Website', "web-1");
createPortfolioCard('web', 2, 'Web Development', 'Skate Website', "web-2");
createPortfolioCard('web', 3, 'Web Development', 'Eating Website', "web-3");
createPortfolioCard('ui', 4, 'UI Design', 'Cool Design', "ui-1");
createPortfolioCard('app', 5, 'App Development', 'Game App', "app-1");
createPortfolioCard('app', 6, 'App Development', 'Gambling App', "app-2");
createPortfolioCard('ui', 7, 'UI Design', 'Cool Looks Design', "ui-2");
createPortfolioCard('ui', 8, 'UI Design', 'Fantastic Design', "ui-3");


function createModal(id, innerText, imageNumber) {
    let modal = document.createElement('div');
    let modalDialog = document.createElement('div');
    let modalHeader = document.createElement('header');
    let modalHeaderH3 = document.createElement('h3');
    let modalHeaderI = document.createElement('i');
    let modalBody = document.createElement('div');
    let modalBodyWrapper = document.createElement('div');
    let modalBodyWrapperImg = document.createElement('img');
    let modalBodyTextWrapper = document.createElement('div');
    let modalBodyTextWrapperP1 = document.createElement('p');
    let modalBodyTextWrapperP1Strong = document.createElement('strong');
    let modalBodyTextWrapperP2 = document.createElement('p');
    let modalBodyTextWrapperP3 = document.createElement('p');

    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalHeader);
    modalDialog.appendChild(modalBody);
    modalHeader.appendChild(modalHeaderH3);
    modalHeader.appendChild(modalHeaderI);
    modalBody.appendChild(modalBodyWrapper);
    modalBody.appendChild(modalBodyTextWrapper);
    modalBodyWrapper.appendChild(modalBodyWrapperImg);
    modalBodyTextWrapper.appendChild(modalBodyTextWrapperP1);
    modalBodyTextWrapper.appendChild(modalBodyTextWrapperP2);
    modalBodyTextWrapper.appendChild(modalBodyTextWrapperP3);
    modalBodyTextWrapperP1.appendChild(modalBodyTextWrapperP1Strong);

    modal.classList.add('modal');
    modal.classList.add('isVisible');
    modal.dataset.animation = 'slideInOutTop';
    modal.id = id;
    modalDialog.classList.add('modal-dialog');
    modalHeader.classList.add('modal-header');
    modalHeaderI.classList.add('fas');
    modalHeaderI.classList.add('fa-times');
    modalHeaderI.dataset.close = '';
    modalHeaderH3.innerText = innerText;
    modalBody.classList.add('modal-body');
    modalBodyWrapperImg.classList.add('img-wrapper');
    modalBodyWrapperImg.src = `./assets/images/portfolio-${imageNumber}.jpg`;
    modalBodyTextWrapper.classList.add('text-wrapper');
    modalBodyTextWrapperP1Strong.innerHTML = "My first awesome website";
    modalBodyTextWrapperP2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    modalBodyTextWrapperP3.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    document.querySelector('.all-modals').appendChild(modal);

}   

createModal('web-1', 'Web Project 1', 1);
createModal('web-2', 'Web Project 2', 2);
createModal('web-3', 'Web Project 3', 3);
createModal('ui-1', 'UI Project 1', 4);
createModal('app-1', 'App Project 1', 5);
createModal('app-2', 'App Project 2', 6);
createModal('ui-2', 'UI Project 2', 7);
createModal('ui-3', 'UI Project 3', 8);










const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn'; 
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]'

const root = document.documentElement;


// Theme
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Portfolio
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

// Modal
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
    if (document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    }
    elm.classList.add(active);
};

const setTheme = val => {
    if (val === dark) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
};

if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach(btn => {
        btn.classList.remove(active);
    });

    if(currentTheme === dark) {
        switcher[1].classList.add(active);
    } else {
        switcher[0].classList.add(active);
    }
}


toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    if(!tab.className.includes(open)) {
        tab.classList.add(open);
    } else {
        tab.classList.remove(open);
    }
});

for (const elm of switcher) {
    elm.addEventListener('click', function() {
        const toggle = this.dataset.toggle;
        setActive(elm, switcherBtn);
        setTheme(toggle);
    })
}

searchBox.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase().trim();
    portfolioItems.forEach(card => {
        if (card.dataset.item.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
})

for (const link of filterLink) {
    link.addEventListener('click', function() {
        setActive(link, '.filter-link');
        const filter = this.dataset.filter;
        portfolioItems.forEach((card) => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (card.dataset.item === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    })
}

// Modal/Full Site Modal "Open buttons"
for (const elm of openModal) {
    elm.addEventListener('click', function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);

    })
}

for (const elm of closeModal) {
    elm.addEventListener('click', function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    })
}

//Modal
document.addEventListener('click', (e) => {
 
    if (e.target === document.querySelector('.modal.is-visible')) {
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
});

const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elms', marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
}