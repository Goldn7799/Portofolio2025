import { animate, utils, onScroll } from './anime.esm.js';

onload = () => {
  setTimeout(() => {
    document.querySelectorAll('.cube')[1].classList.remove('opanone')
    setTimeout(() => {
      document.querySelectorAll('.cube')[2].classList.remove('opanone')
      setTimeout(() => {
        document.querySelectorAll('.cube')[0].classList.remove('opanone')
        setTimeout(() => {
          document.querySelector('.loading-screen').classList.add('opanone')
          setTimeout(() => {
            document.querySelector('.loading-screen').classList.add('d-none')
          }, 500);
        }, 4000);
      }, 1000);
    }, 2000);
  }, 800);
}