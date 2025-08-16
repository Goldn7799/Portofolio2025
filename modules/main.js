/**
  * @license
  * Copyright 2025 SGStudio Under Syeif Sultoni Akbar
  * 
  * Licensed under GNU General Public License Version 3 (the "License")
  * For more information on this, see
  * 
  *  https://www.gnu.org/licenses/
  * 
  * To "modify" a work means to copy from or adapt all or part of the work
  * in a fashion requiring copyright permission, other than the making of an
  * exact copy.  The resulting work is called a "modified version" of the
  * earlier work or a work "based on" the earlier work.
  * @author Syeif Sultoni Akbar
  * @license MIT
  * @copyright (c) 2025 Syeif Sultoni Akbar
 */
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

const navCollapseBtn = document.querySelector('.buttons-navcollapse')
function toggleNavside(forced) {
  if (forced) return () => {
    navCollapseBtn.classList.remove('active')
    document.querySelector('.navside').classList.add('hidenavside')
  }
  navCollapseBtn.classList.toggle('active')
  document.querySelector('.navside').classList.toggle('hidenavside')
}
navCollapseBtn.addEventListener('click', () => {
  toggleNavside()
})