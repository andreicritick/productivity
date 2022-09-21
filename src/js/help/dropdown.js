import  { renderSVGs } from '../common/global'

document.addEventListener( 'DOMContentLoaded',  () => {
    'use strict'

    renderSVGs( document.querySelector( '.dropdown-items' ) )
    toogleDropdown()
} )

const toogleDropdown = () => {
    const dropdown = document.querySelectorAll( '.dropdown-item' )

    if ( ! dropdown.length ) return

    dropdown.forEach( item => {

        item.addEventListener( 'click', () => {

            const dropdownOpen = item.querySelector( '.dropdown-open' )
            const dropdownInner = item.querySelector( '.dropdown-inner' )

            if ( ! dropdownOpen && ! dropdownInner) return

            if ( ! item.classList.contains( 'opened') ) {
                item.classList.add( 'opened' )

                const textHeight = dropdownInner.getBoundingClientRect().height
                dropdownOpen.style.height = `${ textHeight }px`
            }
            else {
                item.classList.remove( 'opened' )
                dropdownOpen.style.height = '0'
            }
        })
    })
}