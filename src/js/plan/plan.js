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
	const plan	= document.querySelector('.plan')

	if( ! plan ) return

	const popup	= plan.querySelector( '.plan-popup' ),
		button	= plan.querySelector( '.plan-button' )

	setTargetElement( 'plan-popup' )

	if ( ! popup || ! button ) return

	plan.addEventListener('click', e => {
		const target = e.target

		if( target.className && target.classList.contains('plan-button') ){
			processPopup(target, popup,'plan-player')
			closePopup(popup)
		}
	})
}