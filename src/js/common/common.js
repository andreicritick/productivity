document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	const tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'

	const firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
	smoothScrollForAnchors()
} )

const smoothScrollForAnchors = () => {
	const anchors = document.querySelectorAll( '.link-for-scrolling' )
		if ( ! anchors ) return

		for ( let anchor of anchors ) {
			anchor.addEventListener( 'click', function ( e ) {
				e.preventDefault()

			const blockID = anchor.getAttribute( 'href' ).substring( 1 )

			document.getElementById( blockID ).scrollIntoView( {
				behavior: 'smooth',
				block: 'start'
			} )
		} )
	}
}