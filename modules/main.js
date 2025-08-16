/**
  * @license
  * Copyright 2025 SGStudio Under Syeif Sultoni Akbar
  * 
  * Licensed under All Rights Reserved (the "License")
  * For more information on this, see
  * 
  * @see https://en.wikipedia.org/wiki/All_rights_reserved
  * 
  * This All Rights Reserved license strictly prohibits the reproduction,
  * distribution, or modification of content without written permission.
  * All materials, including text, graphics, and code, are protected by copyright.
  * Any alteration of work is considered a "modification" and requires the consent
  * of the copyright holder. For any use or inquiries, must be contacted first.
  * @author Syeif Sultoni Akbar
  * @license All_Rights_Reserved
  * @copyright (c) 2025 Syeif Sultoni Akbar
 */
import { animate, utils, onScroll } from './anime.esm.js';

/**
 * Provide Loading Function on website loaded.
 */
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

/**
 * Public function for responsive navbar (navbarside).
 */
function toggleNavside(forced) {
  if (forced) return () => {
    navCollapseBtn.classList.remove('active')
    document.querySelector('.navside').classList.add('hidenavside')
  }
  navCollapseBtn.classList.toggle('active')
  document.querySelector('.navside').classList.toggle('hidenavside')
}

/**
 * Button for Navbar collapse on SM mode.
 */
navCollapseBtn.addEventListener('click', () => {
  toggleNavside()
})