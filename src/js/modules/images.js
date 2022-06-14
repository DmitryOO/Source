const images = () => {
  const imgPopUp = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img'); 

  imgPopUp.classList.add('popup');
  workSection.appendChild(imgPopUp);


  imgPopUp.style.justifyContent = 'center';
  imgPopUp.style.alignItems = 'center';
  imgPopUp.style.display = 'none';
  imgPopUp.appendChild(bigImg);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopUp.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
      bigImg.style.maxWidth= '100%';
      document.body.style.overflow = 'hidden';
    }

    if (target && target.matches('div.popup')) {
      target.style.display = 'none';
      document.body.style.overflow = 'visible';
    }
  });
};

export default images;