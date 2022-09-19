import Swiper, { Pagination } from 'swiper'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

    swiperSlider()
} )

const swiperSlider = () => {
    const heroItems = document.querySelector( '.customers' )

    if ( ! heroItems ) return

    const swiper = new Swiper('.swiper-customers', {
        modules: [ Pagination ],
        slidesPerView: 1,
        spaceBetween: 64,

        pagination: {
            el: '.swiper-pagination.customers-pagination',
            clickable: true,
        }
    } )
}
