import './styles.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

const navBtns = document.querySelectorAll('nav button');

navBtns.forEach(btn => {
    if (btn.id === 'home') {
        btn.classList.add('active');
        buildSection('home');
    }

    btn.addEventListener('click', function () {
        navBtns.forEach(el => el.classList.remove('active'));

        const tabId = this.id;
        this.classList.add('active');
        buildSection(tabId);
    });
});

function buildSection(sectionId) {
    const contentEl = document.getElementById('content');
    contentEl.replaceChildren();
    if (sectionId === 'home') {
        contentEl.append(...home());
    }
    else if (sectionId === 'menu') {
        contentEl.append(...menu());
    }
    else if (sectionId === 'about') {
        contentEl.append(...about());
    }
}