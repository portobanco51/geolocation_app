import React from 'react'
import northPic from "../imgs/NorthernHemisphere.jpg"
import southPic from "../imgs/SouthernHemisphere.jpg"

const hemisphereConfig = {
    Northern: {
        text: "You are on the Northern Hemisphere",
        picture: northPic
    },
    Southern: {
        text: "You are on the Southern Hemisphere",
        picture: southPic
    }
}

export const HemisphereDisplay = ({ latitude }) => {


    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]


    const showModal = () => {
        let modal = document.querySelector('.modal');
        modal.showModal()
    }
    const closeModal = () => {
        let modal = document.querySelector('.modal');
        modal.close()
    }

    return (
        <>
            <div><b>Your Latitude: </b>{latitude}</div>
            <dialog className='modal'>
                <h1>{text} </h1>
                <img className='pic' src={picture} alt="hemisphere" ></img>
                <button className='btn close-modal' onClick={closeModal}>Close</button>
            </dialog>
            <button className='btn modal-button' onClick={showModal}>Show my Hemisphere!</button>

        </>
    )
}
