document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	const tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'

	const firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
} )

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