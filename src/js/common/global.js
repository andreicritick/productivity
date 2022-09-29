import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'

export const WINDOW_WIDTH_MD = 768

let windowHeight = window.innerHeight,
	targetElement,
	playerObject,
	playerId

export const getWindowHeight = () => windowHeight

export const setTargetElement = elementId => {
    targetElement = document.querySelector( `#${ elementId }` )

    if ( ! targetElement ) console.error( 'There is no given element' )
}

export const getTargetElement = () => targetElement

export const setPlayerId = plId => playerId = plId

/**
 * Render SVG code from images (<img /> tags).
 *
 * @param {Object}	wrapper		DOM element, inside which need to render svgs.
 * @param {String}	imgSelector	Specific selector for <img /> tag to render SVG.
 */
export const renderSVGs = ( wrapper, imgSelector = '' ) => {
	if( ! wrapper ) return

	// Get images with specific selector only OR all images.
	const selector	= imgSelector ? `img${imgSelector}` : 'img',
		images		= wrapper.querySelectorAll( selector ),
		svgs		= []

	// If there are no images - exit.
	if( ! images.length ) return

	// Get only svg images to svgs array.
	images.forEach( img => {
		let src			= img.src,
			extension	= src.slice( -4 )

		if( extension === '.svg' ) svgs.push( img )
	} )

	// If there are no svgs - exit.
	if( ! svgs.length ) return

	const parser = new DOMParser()

	svgs.forEach( svg => {
		// Fetch the file from the server.
		fetch( svg.src )
			.then( response => response.text() )
			.then( text => {
				// Turn the raw text into a document with the svg element in it.
				const parsed = parser.parseFromString( text, 'text/html' )
				// Select the <svg> element from that document.
				const svgTag = parsed.querySelector( 'svg' )

				// If the svg is found, replace the image with the svg.
				if( svgTag ) svg.replaceWith( svgTag )
			} )
	} )
}

/**
 * Check if User scrolled to specific DOM element.
 *
 * @param {String}  elementSelector  Specific DOM element selector.
 * @param {Number}  st        Window scroll top value.
 * @param {Number}  offset      Offset value (top and bottom).
 * @returns      True if element is in scope, false if not.
 */
export const isInScope = ( elementSelector, st, offset = 0 ) => {
	const element  = document.querySelector( elementSelector )
	if ( ! element) return
	let bodyRect  = document.body.getBoundingClientRect(),
		elemRect  = element.getBoundingClientRect(),
		elemTop    = elemRect.top - bodyRect.top

	if( ! element ) return

	return st >= (elemTop - getWindowHeight() + offset) && st <= (elemTop + element.clientHeight - offset)
}

/**
 * Get parameters from URL.
 *
 * @param {String} url		YouTube URL.
 * @returns {Object} params	Parameters from YouTube URL.
 */
export const getParamsFromUrl = url => {
	const regex		= /[?&]([^=#]+)=([^&#]*)/g,
		params	= {}
	let match

	while(match = regex.exec(url))
		params[match[1]] = match[2]

	return params
}

/**
 * Process popup for YouTube video.
 *
 * @param {Object} button		Clicked button with data-yt attribute.
 * @param {Object} popup		Popup DOM element.
 * @param {String} plId			Player ID attribute for popup to replace with iframe.
 */
export const processPopup = (button, popup, plId) => {
	const popupFrame = popup.querySelector( '.hero-popup-frame' )

	if ( popup.classList.contains( 'opened' ) ) return

	const ytUrl	= button.dataset.yt

	if (!popupFrame || !ytUrl) return

	popup.classList.add( 'opened' )

	const videoId = getParamsFromUrl(ytUrl).v

	if( playerObject ){
		playerObject.playVideo()
	}	else {
		setPlayerId(plId)
		onYouTubeIframeAPIReady(videoId)
	}

	if ( popup.classList.contains( 'opened' ) )  disableBodyScroll( getTargetElement() )
}

/**
 * Close popup with YouTube video.
 *
 * @param {Object} popup		Popup DOM element.
 */
export const closePopup = (popup) => {
	const popupFrame = popup.querySelector( '.hero-popup-frame' ),
		popupCloseButton = popup.querySelector( '.close-frame' )

	popupCloseButton.addEventListener( 'click', () => {
		popup.classList.remove( 'opened')

		popupFrame.innerHTML = `<div id="${playerId}"></div>`

		if( playerObject ){
			playerObject.destroy()
			playerObject = null
		}

		if ( ! popup.classList.contains( 'opened' ) )
			enableBodyScroll( getTargetElement() )
	} )
}

/**
 * Create YouTube object.
 *
 * @param {String} videoId		YouTube video ID.
 */
export const onYouTubeIframeAPIReady = (videoId) => {
	if(! window.YT || ! videoId) return

	playerObject = new YT.Player(playerId, {
		videoId: videoId,
		events: {
			'onReady': event => {
				event.target.setVolume(20)
				event.target.playVideo()

				if (!playerObject) playerObject = event.target
			}
		}
	})
}