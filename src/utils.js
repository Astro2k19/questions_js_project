
export function isValid(text) {
    return text.length >= 10;
}


export function createModal(title, body) {
    let modal = document.createElement('div');
    modal.classList.add('auth-modal');
    let html = `<div>${title}</div>
       <div>${body}</div>
    `
    modal.innerHTML = html;
    mui.overlay('on', modal)
}