export const WINDOW_WIDTH_MD = 768

let targetElement

export const setTargetElement = elementId => {
    targetElement = document.querySelector( `#${ elementId }` )

    if ( ! targetElement ) console.error( 'There is no given element' )
}

export const getTargetElement = () => targetElement