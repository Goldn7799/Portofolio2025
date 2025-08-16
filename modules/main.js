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
import { animate, utils, onScroll, stagger, text } from './anime.esm.js';
const debug = true
const partialDebug = true

const [ container ] = utils.$('body')

animate('.dynamicisland', {
  autoplay: onScroll({
    container, 
    debug: (partialDebug) ? false : debug, 
    target: '.asu',
    onLeaveBackward: () => {
      animate('.dynamicisland', {
        width: '200px',
        height: '35px',
        backgroundColor: '',
        borderRadius: '10px',
        backdropFilter: '',
        delay: 100,
        duration: 250,
        ease: 'inOut',
      })
      animate('.dynamicisland', {
        opacity: 1,
        duration: 0,
        delay: 0,
        ease: 'inOut'
      })
      animate('.diItem', {
        opacity: 1,
        delay: 350,
        duration: 250,
        ease: 'inOut',
        autoplay: true
      })
      animate('.dynamic-nav .contents', {
        display: 'none',
        opacity: 0,
        delay: 0,
        duration: 250,
        ease: 'inOut'
      })
    },
    onEnterForward: () => {
      animate('.dynamicisland', {
        width: '95%',
        height: '60px',
        backgroundColor: 'rgba(0, 0, 255, 0.4)',
        borderRadius: '5px',
        backdropFilter: 'blur(10px)',
        delay: 100,
        duration: 250,
        ease: 'inOut'
      })
      animate('.dynamicisland', {
        opacity: 0,
        duration: 250,
        delay: 250,
        ease: 'inOut'
      })
      animate('.diItem', {
        opacity: 0,
        delay: 0,
        duration: 250,
        ease: 'inOut',
        autoplay: true
      })
      animate('.dynamic-nav .contents', {
        display: 'flex',
        opacity: 1,
        delay: 250,
        duration: 250,
        ease: 'inOut'
      })
    }
  })
})



let morphDynamic = false
function morphDynamicIsland() {
  if (morphDynamic) {
    morphDynamic = false;
    animate('.dynamicisland', {
      width: '200px',
      height: '35px',
      backgroundColor: '',
      borderRadius: '10px',
      backdropFilter: '',
      delay: 100,
      duration: 250,
      ease: 'inOut'
    })
  } else {
    morphDynamic = true;
    animate('.dynamicisland', {
      width: '95%',
      height: '60px',
      backgroundColor: 'rgba(0, 0, 255, 0.4)',
      borderRadius: '5px',
      backdropFilter: 'blur(10px)',
      delay: 100,
      duration: 250,
      ease: 'inOut'
    })
  }
}

function loadDynamicIsland() {
  animate('.dynamicisland', {
    keyframes: {
      '0%' : {
        y: '-150%',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
      },
      '45%' : {
        y: ''
      },
      '70%' : {
        width: '30px',
        height: '30px',
        borderRadius: '50%'
      },
      '76%' : {
        borderRadius: '10px'
      },
      '100%' : {
        width: '200px',
        height: '35px'
      }
    },
    delay: 250,
    duration: 650,
    ease: 'inExpo',
    autoplay: true
  })
  animate('.diTitem', {
    opacity: 1,
    delay: 1000,
    duration: stagger(250, 50),
    ease: 'inOut',
    autoplay: true
  })
  animate(document.querySelectorAll('.diTitem')[0], {
    duration: 500,
    scale: 1.2,
    ease: 'outBounce',
    autoplay: true,
    loop: true
  })
}

function triggerShowSongTitle(title) {
  console.log(`${title}`)
  animate('.song-title', {
    display: 'flex',
    duration: 0,
    delay: 0
  })
  document.getElementById('songTitleText').innerHTML = `<marquee>${title}</marquee>`
  const time = title.split('').length * 85
  animate('.song-title', {
    opacity: 1,
    duration: 500,
    delay: 100
  })
  setTimeout(() => {
    animate('.song-title', {
      opacity: 0,
      display: 'none',
      duration: 500,
      delay: 0
    })
    animate('.song-title', {
      display: 'flex',
      duration: 0,
      delay: 500
    })
  }, 2450 + time);
}

/**
 * Provide Loading Function on website loaded.
 */
onload = () => {
  animate('.dynamicisland', {
    y: '-150%',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    delay: 0,
    duration: 0
  })
  if (debug) {
    loadDynamicIsland()
    console.log('debug enabled')
    document.querySelector('.loading-screen').classList.add('d-none')
    return;
  };
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
            loadDynamicIsland()
          }, 500);
        }, 4000);
      }, 1000);
    }, 2000);
  }, 800);
}

// setInterval(() => {
//   console.log(window.scrollY)
// }, 100);


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