import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement, WINDOW_WIDTH_MD } from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurgerMenu()
} )

const toggleBurgerMenu = () => {
    const burgerMenu    = document.querySelector( '.header' )
    const burgerButton  = document.querySelector( '.burger-button' )

        if ( ! burgerButton && ! burgerMenu ) return

        burgerButton.addEventListener( 'click', () => {
            setTargetElement( 'body-lock' )

            if ( ! burgerMenu.classList.contains( 'opened') ) {
                burgerMenu.classList.add( 'opened')
                disableBodyScroll( getTargetElement() )
            }    else {
                burgerMenu.classList.remove( 'opened')
                enableBodyScroll( getTargetElement() )
            }
        } )

    window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        if ( windowWidth >= WINDOW_WIDTH_MD )
            burgerMenu.classList.remove( 'opened' )
    } )
}

