import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    switchForm()
})

const switchForm = () => {
    const headerForm    =   document.querySelector( '.header-form' )
    const formButtons   =   document.querySelectorAll( '.button.open-form' )
    const closeButton   =   document.querySelector( '.close-form' )
    const targetElement =   document.querySelector( '#form-lock' )

    if ( ( ! headerForm ) && ( ! formButtons ) && ( ! closeButton ) && ( ! targetElement ) ) return

    formButtons.forEach( formButton => {

        formButton.addEventListener( 'click', () => {
            if ( ! headerForm.classList.contains( 'opened' ) ) {
                headerForm.classList.add( 'opened' )
                disableBodyScroll( targetElement )
            }
        } )
    } )

    closeButton.addEventListener( 'click', () => {
        if ( ! formButtons) return

        if ( headerForm.classList.contains( 'opened' ) ) {
            headerForm.classList.remove( 'opened' )
            enableBodyScroll( targetElement )
        }
    } )
}