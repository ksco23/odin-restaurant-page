export function menu() {
    const contentContainer = document.getElementById('content');

    const menuDiv = document.createElement('div');
    menuDiv.dataset.tabSection = 'menu';

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    menuDiv.append(h1);

    contentContainer.append(menuDiv);
}