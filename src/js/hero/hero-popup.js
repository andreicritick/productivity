import {
	setTargetElement,
	processPopup,
	closePopup
} from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	togglePopup()
} )

const togglePopup = () => {
	const popup	 = document.querySelector( '.hero-popup' )
	const hero	 = document.querySelector( '.hero' )
	setTargetElement( 'body-scroll' )

	if ( ! popup || ! hero ) return

	hero.addEventListener('click', e => {
		const target = e.target

		if( target.className && target.classList.contains('hero-button') ){
			processPopup(target, popup, 'player')
			closePopup(popup)
		}
	})
}