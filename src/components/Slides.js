import React from 'react';

function Slides({slides}) {
    console.log(slides[0]) ;
    const [currentSlide,setCurrentSlide] = React.useState(slides[0]) ;
    const currentIndexRef = React.useRef(0) ;
    const disableRestartAndPrev = slides[0] === currentSlide ;
    const nextDisabled = slides[slides.length-1] === currentSlide ;
    function onNextClick() {
        currentIndexRef.current += 1 ;
        setCurrentSlide(slides[currentIndexRef.current]) ;
    }
    function onPrevClick() {
        currentIndexRef.current -= 1 ;
        setCurrentSlide(slides[currentIndexRef.current]) ;
    }
    function onRestartClick() {
        currentIndexRef.current = 0 ;
        setCurrentSlide(slides[currentIndexRef.current]) ;

    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={onRestartClick}  disabled={disableRestartAndPrev} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={onPrevClick} disabled={disableRestartAndPrev} data-testid="button-prev" className="small">Prev</button>
                <button disabled={nextDisabled} onClick={onNextClick} data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
