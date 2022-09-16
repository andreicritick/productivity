import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    galleryPopup()
} )

const images = []

const galleryPopup = () => {
    const galleryImages = document.querySelectorAll( '.gallery-img' )

    if ( ! galleryImages.length ) return

    galleryImages.forEach( image => {
        image.addEventListener( 'click', e =>  {
            createImagesArr( image )
            createModal( e.target.src )
        } )
    } )
}

const createModal = imageSource => {
    const modal = document.createElement( 'div' )
    modal.setAttribute( 'class', 'modal' )
    modal.id = 'modal-lock'
    modal.innerHTML = `<div class="modal-inner">
        <img class="modal-image" src="${ imageSource }">
        <nav class="gallery-buttons">
            <button class="modal-button prev-button">Prev</button>
            <button class="modal-button next-button">Next</button>
        </nav>
    </div>`
    document.querySelector( '.blog' ).append( modal )
    setTargetElement( 'modal-lock' )
    disableBodyScroll( getTargetElement() )

    modal.addEventListener( 'click', e => {
        e.stopPropagation()

        enableBodyScroll( getTargetElement() )
        if ( e.target.className === 'modal' ) modal.remove()
    } )

        // const prev = document.querySelector('.modal-button.prev-button')
        // const next = document.querySelector('.modal-button.next-button')

        // prev.addEventListener( 'click', () => {
        //     console.log( images)
        //     if (  )
        // } )

        // next.addEventListener( 'click', ( ) => {
        //     console.log( 'pidor2')
        // } )
}

const createImagesArr = currentImage => {
    const gallery = currentImage.closest( '.blog-gallery' )

    if ( ! gallery ) return

    const galleryImages = gallery.querySelectorAll( '.gallery-img' )

    if ( ! galleryImages.length ) return

    galleryImages.forEach( img => {
        let isActive = 0

        if ( img.src === currentImage.src ) isActive = 1

        images.push( {
            src: img.src,
            isActive: isActive
        } )
    } )
}



