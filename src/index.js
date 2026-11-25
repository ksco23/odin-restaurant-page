import './styles.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

home();
menu();
about();

const contentSections = document.querySelectorAll('[data-tab-section]');

const navBtns = document.querySelectorAll('nav button');

navBtns.forEach(btn => {
    if (btn.id === 'home') {
        btn.classList.add('active');
        contentSections.forEach(section => {
            if (section.dataset.tabSection === 'home') {
                section.classList.add('active');
            }
        })
        //contentSections.querySelector('[data-tab-section="home"]').classList.add('active');
    }

    btn.addEventListener('click', function () {
        navBtns.forEach(el => el.classList.remove('active'));

        const tabId = this.id;
        this.classList.add('active');
        contentSections.forEach(section => {
            if (section.dataset.tabSection === tabId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        //contentSections.querySelector(`[data-tab-section="${this.id}"]`).classList.add('active');
    });
});