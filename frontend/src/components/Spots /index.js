import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAllSpots } from "../../store/spots"
import { Link, Route, useParams } from 'react-router-dom';
import "./Spots.css"

function Spots() {
    const dispatch = useDispatch()
    const allSpots = useSelector(state => state.spots.list)
    // console.log(allSpots[1])


    useEffect(() => {
        dispatch(getAllSpots())
    }, [])


    return (
        <div className="main-container">
            <div className="left-container">
                {allSpots?.map(spot => (
                    <div key={`${spot.title}1`} className="spots-container">
                        <div key={`${spot.title}2`} className="image-container">
                            {/* <img id='spot-image' key={spot.id} src={spot?.Images[0]?.url}></img> */}
                            <img key={`${spot.title}3`} crossOrigin="anonymous" id='spot-image' key={spot.id} src={spot?.Images[0]?.url} />
                        </div>
                        <div key={`${spot.title}4`} className="info">
                            <Link key={`${spot.title}5`}  to={`/spots/${spot.id}`}>
                                <h2 key={`${spot.title}6`} id="spot-name" key={spot.title}>{spot.title}</h2>
                            </Link>
                            <ul key={`${spot.title}7`} className="details">
                                <li id="price" key={`${spot.title}8`}>${spot.price} / night</li>
                                <li key={`${spot.title}9`}>{spot.guests} guests</li>
                                <li key={`${spot.title}10`}>{spot.bedrooms} bed</li>
                                <li key={`${spot.title}11`}>{spot.bathrooms} bath</li>
                                <li key={`${spot.title}12`}>{spot.address}</li>
                                <li key={`${spot.title}13`}>{spot.city}</li>
                                <li key={`${spot.title}14`}>{spot.state}</li>
                                <li key={`${spot.title}15`}>{spot.zipCode}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="right-container fill">
                {/* <img id='map-image' src='https://images.unsplash.com/photo-1530738270955-2ed78de5c2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80' /> */}
                <img id='map-image' src='https://images.unsplash.com/photo-1614021026464-5ebe74fd55ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80' />
            </div>
        </div>
    )
}


export default Spots;