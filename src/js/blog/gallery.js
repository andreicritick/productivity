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
    document.querySelector( '.blog' ).append( modal )

    const modalImage = document.createElement( 'img' );
    modalImage.setAttribute( 'src', imageSource );
    modal.append( modalImage )

    const galleryButtons = document.createElement( 'div' )
    galleryButtons.setAttribute( 'class', 'gallery-buttons' )
    document.querySelector( '.modal' ).append( galleryButtons )

    const prevButton = document.createElement( 'button' )
    prevButton.setAttribute( 'class', 'prev-button')
    prevButton.innerHTML = 'Prev'
    document.querySelector( '.gallery-buttons' ).append( prevButton )
    console.log ( prevButton )

    const nextButton = document.createElement( 'button' )
    nextButton.setAttribute( 'class', 'next-button')
    nextButton.innerHTML = 'Next'
    document.querySelector( '.gallery-buttons' ).append( nextButton )
    console.log ( nextButton )
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