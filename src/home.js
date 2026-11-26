import { createElWithHtml, createElWithText } from "./utils.js";

export function home() {

    const contentArr = [];

    contentArr.push(createElWithHtml('h2', 'Welcome to the <i>Overpriced Cafe</i>!'));

    contentArr.push(createElWithText('p', 'We offer a superior price experience to go along with our exceptionally average cuisine!'));

    return (contentArr);
}