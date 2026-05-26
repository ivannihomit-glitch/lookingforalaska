const pagesMap = {
    page1: document.getElementById('page1'),
    page2: document.getElementById('page2'),
    page3: document.getElementById('page3'),
    page4: document.getElementById('page4')
};

const navButtons = document.querySelectorAll('.nav-btn');

function switchToPage(pageId) {
    Object.values(pagesMap).forEach(page => {
        if(page) page.classList.remove('active-page');
    });
    const targetPage = pagesMap[pageId];
    if(targetPage) targetPage.classList.add('active-page');

    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const pageId = btn.getAttribute('data-page');
        if(pageId && pagesMap[pageId]) {
            switchToPage(pageId);
        }
    });
});

const defaultActive = document.querySelector('.nav-btn[data-page="page1"]');
if(defaultActive) defaultActive.classList.add('active');