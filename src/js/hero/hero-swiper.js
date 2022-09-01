import Swiper, { Pagination } from 'swiper'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

    swiperSlider()
} )

const swiperSlider = () => {
    const heroItems = document.querySelector( '.hero' )

    if ( ! heroItems ) return

    const swiper = new Swiper('.swiper-hero', {
        modules: [ Pagination ],
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    } )
}
