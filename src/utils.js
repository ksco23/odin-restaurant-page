export const createElWithText = (el, text) => {
    const newEl = document.createElement(el);
    newEl.textContent = text;
    return newEl;
};

export const createElWithHtml = (el, html) => {
    const newEl = document.createElement(el);
    newEl.innerHTML = html;
    return newEl;
};