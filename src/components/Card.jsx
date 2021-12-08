import React from 'react'
import "./Card.css"

export default function card() {
    return (
        <div className="Card">
            <div className="card-container">
            <div className="card-contents">
                <div className="banner">
                <div className="user-id"> user id</div>
                <div className="time-since">time since</div>
                </div>
                <div className="main-content">content</div>
                <div className="interact-section">
                    <div className="caption">user: caption</div>
                    <div className="comments">comments</div>
                    <div className="votes">votes</div>
                </div>
            </div>
            </div>
        </div>
    )
}

