import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { WINDOW_WIDTH_MD } from '../common/global'
import targetElement from '../common/global'


document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurgerMenu()
} )

const toggleBurgerMenu = () => {
    const burgerMenu    = document.querySelector( '.header-wrapp' )
    const burgerButton  = document.querySelector( '.burger-button' )

        if ( ! burgerButton && ! burgerMenu && targetElement ) return

        burgerButton.addEventListener( 'click', () => {
            if ( ! burgerMenu.classList.contains( 'opened') ) {
                burgerMenu.classList.add( 'opened')
                enableBodyScroll( targetElement )
            }    else {
                burgerMenu.classList.remove( 'opened')
                disableBodyScroll( targetElement )
            }
            if ( ! burgerButton.classList.contains( 'opened') ) {
                burgerButton.classList.add( 'opened' )
            }   else {
                burgerButton.classList.remove( 'opened' )
            }
        } )

    window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        if( windowWidth >= WINDOW_WIDTH_MD )
            burgerMenu.classList.remove( 'opened' )
            burgerButton.classList.remove ( 'opened' )
    } )
}

