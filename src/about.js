export function about() {
    const contentContainer = document.getElementById('content');

    const aboutDiv = document.createElement('div');
    aboutDiv.dataset.tabSection = 'about';

    const h1 = document.createElement('h1');
    h1.textContent = 'About';
    aboutDiv.append(h1);

    contentContainer.append(aboutDiv);
}