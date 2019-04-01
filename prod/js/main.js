window.onload = function () {
    const playBtn = document.getElementById('playBtn');
    const form = document.querySelector('section.form');
    const gotoFormButtons = document.querySelectorAll('[data-action="goto-form"]');
    const themeButtons = document.querySelectorAll('.theme-btn');


    playBtn.onclick = function (e) {
        const videoContainer = document.getElementById('video');
        const iframeElem = document.createElement('iframe');
        iframeElem.src = 'https://www.youtube.com/embed/0Ls_DH_jlfo?autoplay=1';
        iframeElem.frameBorder = 0;
        iframeElem.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        videoContainer.appendChild(iframeElem);

        e.target.hidden = true;
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