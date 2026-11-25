export function home() {
    const contentContainer = document.getElementById('content');

    const homeDiv = document.createElement('div');
    homeDiv.dataset.tabSection = 'home';

    const h1 = document.createElement('h1');
    h1.textContent = 'My Fancy Restaurant';

    const para = document.createElement('p');
    para.textContent = 'Welcome to My Fancy Restaurant! We are happy you visited us, but we have no food at the moment.';

    homeDiv.append(h1, para);
    contentContainer.append(homeDiv);
}