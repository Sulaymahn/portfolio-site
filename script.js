let showSideBar = false;
const sideBar = document.getElementById('sidebar');
const sideBarBtn = document.getElementById('sidebar-toggle-btn');
const sidebarlinks = document.querySelectorAll('#sidebar a');
sidebarlinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        if (showSideBar) {
            toggleSideBar();
        }

        const t = document.getElementById(link.getAttribute('href').substring(1));
        const y = t.getBoundingClientRect().top + window.pageYOffset - 100;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    });
});

function toggleSideBar() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        openSideBar();
    } else {
        closeSideBar();
    }
}

function openSideBar() {
    sideBarBtn.classList.add('active');
    sideBar.style.animation = 'slideIn 200ms ease-in forwards';
}

function closeSideBar() {
    sideBarBtn.classList.remove('active');
    sideBar.style.animation = 'slideOut 200ms ease-in forwards';

    sidebarlinks.forEach(link => {
        link.style.animation = 'slideOut 200ms ease-in forwards';
        link.addEventListener('animationend', () => {
            link.style.animation = '';
        });
    });
}