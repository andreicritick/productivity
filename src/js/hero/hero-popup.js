document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	togglePopup()
} )

const togglePopup = () => {
	const popup			= document.querySelector( '.hero-popup' )
	const playButtons	= document.querySelectorAll( '.hero-button' )

	if ( ! popup && playButtons.length ) return

	const popupCloseButton = popup.querySelector( '.close-frame' )

	playButtons.forEach( button => {
		button.addEventListener( 'click', () => {
			if ( popup.classList.contains( 'opened' ) ) return

			const iframe = button.closest( '.swiper-slide' ).querySelector( '.iframe' )

			if ( ! iframe ) return

			const iframeClone = iframe.cloneNode( true )
			const popupFrame = popup.querySelector( '.hero-popup-frame' )

			popupFrame.innerHTML = ''
			popupFrame.appendChild( iframeClone )
			popup.classList.add( 'opened' )
		} )
	} )

	popupCloseButton.addEventListener( 'click', () => {
		popup.classList.remove( 'opened')
	} )
}