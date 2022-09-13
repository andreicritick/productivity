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

    console.log( images )
}


