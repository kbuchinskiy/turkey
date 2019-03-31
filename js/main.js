window.onload = function () {
    const playBtn = document.getElementById('playBtn');
    const form = document.querySelector('section.form');
    const gotoFormButtons = document.querySelectorAll('[data-action="goto-form"]');
    const themeButtons = document.querySelectorAll('.theme-btn');


    playBtn.onclick = function (e) {
        var iframeElem = this.parentElement.querySelector('iframe');
        this.hidden = true;
        iframeElem.style.display = 'block';
        iframeElem.src += "?autoplay=1";
        e.preventDefault();
    }

    Array.prototype.forEach.call(gotoFormButtons, function (button) {
        button.onclick = function () {

            form.scrollIntoView({
                behavior: 'smooth'
            });
        }
    })


    Array.prototype.forEach.call(themeButtons, function (button) {
        let arrowImg = document.createElement('img');
        arrowImg.src = 'images/arrow.png';
        arrowImg.className = 'arrow';

        button.appendChild(arrowImg)
    })




}