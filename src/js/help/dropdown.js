import  { renderSVGs } from '../common/global'

document.addEventListener( 'DOMContentLoaded',  () => {
    'use strict'

    renderSVGs( document.querySelector( '.dropdown-items' ) )
    toogleDropdown()
} )

const toogleDropdown = () => {
    const dropdowns = document.querySelectorAll( '.dropdown-item' )

    if ( ! dropdowns.length ) return

    dropdowns.forEach( dropdown => {
        dropdown.addEventListener( 'click', () => {
            const dropdownOpen = dropdown.querySelector( '.dropdown-open' )

            if ( ! dropdownOpen ) return

            if ( ! dropdown.classList.contains( 'opened') ) {
                dropdown.classList.add( 'opened' )
                reCalculateDropdownHeight(dropdown)
            }
            else {
                dropdown.classList.remove( 'opened' )
                dropdownOpen.style.height = '0'
            }
        })
    })
}

/**
 * Window resize function.
 */
window.addEventListener('resize', () => {
    // Get all opened dropdowns.
    const dropdowns = document.querySelectorAll( '.dropdown-item.opened' )

    if( ! dropdowns.length ) return

    dropdowns.forEach(dropdown => reCalculateDropdownHeight(dropdown))
})

/**
 * Re-calculates dropdown height.
 *
 * @param {HTMLElement} dropdown
 */
const reCalculateDropdownHeight = dropdown => {
    const dropdownOpen  = dropdown.querySelector( '.dropdown-open' ),
        dropdownInner   = dropdown.querySelector( '.dropdown-inner' )

    if (! dropdownOpen || ! dropdownInner) return

    dropdownOpen.style.height = `${ dropdownInner.getBoundingClientRect().height }px`
}