const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('imgPopup');

    workSection.appendChild(imgPopup);

    imgPopup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    bigImage.style.height = 'auto';
    bigImage.style.maxHeight = '100%';
    bigImage.style.width = 'auto';
    bigImage.style.maxWidth = '100%';
    bigImage.style.position = 'absolute';
    bigImage.style.top = '50%';
    bigImage.style.transform = 'translate(0, -50%)';
    imgPopup.appendChild(bigImage);

    console.log(bigImage.naturalWidth);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.imgPopup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;