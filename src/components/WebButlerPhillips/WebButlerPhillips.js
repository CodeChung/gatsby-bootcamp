import React from 'react'
import webButlerBody from './WebButlerPhillips.module.scss'

const WebButlerPhillips = () => {
    return (
        <div className={webButlerBody.faceContainer}>
            <div className={webButlerBody.face}>
                <div className={webButlerBody.eyes}>
                    <div className={webButlerBody.eye}></div>
                    <div className={webButlerBody.eye}></div>
                </div>
            </div>
            <h2>Web Butler<br />Phillips</h2>
        </div>
    )
}

export default WebButlerPhillips