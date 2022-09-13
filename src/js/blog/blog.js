import Swiper, { Pagination, Navigation } from 'swiper'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

    blogSlider()
} )

const blogSlider = () => {
    const blog = document.querySelector( '.swiper-blog' )

    if ( ! blog ) return

    const swiper = new Swiper('.swiper-blog', {
        modules: [ Pagination, Navigation ],
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination.blog',
            clickable: true,
        },

        navigation: {
            nextEl: '.blog-navigation-arrow-right',
            prevEl: '.blog-navigation-arrow-left',
        }
    } )
}