import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from '../common/global'

let playerObject

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	togglePopup()
} )

const onYouTubeIframeAPIReady = (videoId) => {
	if(! videoId) return

	playerObject = new YT.Player('player', {
		videoId: videoId,
		events: {
			'onReady': onPlayerReady
		}
	})
}

/**
 * When YT player is ready.
 *
 * @param {Object} event	Player ready event.
 */
const onPlayerReady = event => {
	event.target.setVolume(20)
	event.target.playVideo()

	if (!playerObject) playerObject = event.target
}

const togglePopup = () => {
	const popup			 = document.querySelector( '.hero-popup' )
	const playButtons	 = document.querySelectorAll( '.hero-button' )
	setTargetElement( 'body-scroll' )

	if ( ! popup && playButtons.length ) return

	const popupCloseButton	= popup.querySelector( '.close-frame' ),
		  popupFrame		= popup.querySelector( '.hero-popup-frame' )

	playButtons.forEach( button => {
		button.addEventListener( 'click', () => {
			if ( popup.classList.contains( 'opened' ) ) return

			const ytUrl	= button.dataset.yt

			if (!popupFrame || !ytUrl) return

			popup.classList.add( 'opened' )

			const videoId = getParamsFromUrl(ytUrl).v

			if( playerObject ){
				playerObject.playVideo()
			}	else {
				onYouTubeIframeAPIReady(videoId)
			}

			if ( popup.classList.contains( 'opened' ) )
				disableBodyScroll( getTargetElement() )
		} )
	} )

	popupCloseButton.addEventListener( 'click', () => {
		popup.classList.remove( 'opened')

		popupFrame.innerHTML = '<div id="player"></div>'

		if( playerObject ){
			playerObject.destroy()
			playerObject = null
		}

		if ( ! popup.classList.contains( 'opened' ) )
			enableBodyScroll( getTargetElement() )
	} )
}

/**
 * Get parameters from URL.
 *
 * @param {String} url	YouTube URL.
 * @returns {Object} params	Parameters from YouTube URL.
 */
const getParamsFromUrl = url => {
	const regex		= /[?&]([^=#]+)=([^&#]*)/g,
		  params	= {}
	let match

	while(match = regex.exec(url))
		params[match[1]] = match[2]

	return params
}