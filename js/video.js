window.onload = function () {
    (function () {
        const playBtn = document.getElementById('playBtn');

        playBtn.onclick = function (e) {
            var iframeElem = this.parentElement.querySelector('iframe');
            this.hidden = true;
            iframeElem.style.display = 'block';
            iframeElem.src += "?autoplay=1";
            e.preventDefault();
        }
    })()
}