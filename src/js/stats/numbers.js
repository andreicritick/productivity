import { isInScope } from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	runningNumbers()
})

const runningNumbers = () => {

	const stepTime = 100

	function outNum( elem ) {
		let numElem = document.querySelectorAll( elem )

		numElem.forEach( elem => {
			let n = 0,
				step = parseInt( elem.dataset.step ),
				limit = parseInt( elem.dataset.limit )

			let interval = setInterval( ( ) => {
				n = n + step

				if ( n  >= limit ) {
					elem.innerHTML = limit
					clearInterval( interval )
				}   else {
					elem.innerHTML = n
				}

			}, stepTime )
		} )
	}

	document.addEventListener( 'scroll', () => {
		const stats = document.querySelectorAll( '.stats-wrapp-item' )
		stats.forEach( stat => {

			if ( ! stat || stat.classList.contains( 'scrolled' ) ) return

			if ( isInScope( '.stats-num', window.scrollY ) ) {
				stat.classList.add( 'scrolled' )
				outNum( '.stats-num span' )
			}
		} )
	} )
}
