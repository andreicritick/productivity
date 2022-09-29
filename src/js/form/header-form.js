import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    switchForm()
})

const switchForm = () => {
    const headerForm        =   document.querySelector( '.header-form' )
    const formButtons       =   document.querySelectorAll( '.button.open-form' )
    const targetElement     =   document.querySelector( '#form-lock' )

    if ( ( ! headerForm ) && ( ! formButtons ) && ( ! targetElement ) ) return

    formButtons.forEach( formButton => {

        formButton.addEventListener( 'click', () => {
            if ( ! headerForm.classList.contains( 'opened' ) ) {
                headerForm.classList.add( 'opened' )
                disableBodyScroll( targetElement )
            }
        } )
    } )

    headerForm.addEventListener( 'click', e => {
        e.stopPropagation()

        const target = e.target

        if ( target.className && target.classList.contains( 'header-form' ) ) {
            enableBodyScroll( targetElement )
            headerForm.classList.remove( 'opened' )
        }
    } )
}