import React, {useEffect, useState} from 'react';
import Button from "../Button/Button";
import '../../App.css';
import './TrailerView.css';

const VIDEO_PATH = ['assets/videos/video-1.mp4', 'assets/videos/video-2.mp4']

const TrailerView = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoSourceIndex = Math.random() >= 0.5 ? 1 : 0;

    const showHideVideoBasedOnDeviceWidth = () =>{
        if(window.innerWidth <= 960) {
            setShowVideo(false)
        } else {
            setShowVideo(true);
        }
    }

    useEffect(() => {
        showHideVideoBasedOnDeviceWidth();
    }, [])

    window.addEventListener('resize', showHideVideoBasedOnDeviceWidth);
    return(
        <div className={"trailer-container"}>
            {showVideo && <video autoPlay={true} loop={true} muted={true}>
                <source src={VIDEO_PATH[videoSourceIndex]}/>
            </video> }
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="trailer-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className={'far fa-play-circle'} />
                </Button>
            </div>
        </div>
    )
}

export default TrailerView;