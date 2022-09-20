import  { renderSVGs } from '../common/global'

document.addEventListener( 'DOMContentLoaded',  () => {
    'use strict'

    renderSVGs( document.querySelector( '.dropdown-items' ) )
    toogleDropdown()
} )

const toogleDropdown = () => {
    const dropdown =document.querySelectorAll( '.dropdown-item' )

    if ( ! dropdown.length ) return

    dropdown.forEach( item => {
        item.addEventListener( 'click', () => {
            if ( ! item.classList.contains( 'opened') )
                item.classList.add( 'opened' )
            else item.classList.remove( 'opened' )
        })
    })
}