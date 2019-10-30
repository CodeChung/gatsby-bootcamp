import React from 'react'
import webButlerBody from './WebButlerPhillips.module.scss'

const WebButlerPhillips = (props) => {
    return (
        <div
            onClick={props.incrementCount} 
            className={webButlerBody.faceContainer}>
            <script
                src='js/butlerJuice.js'
                dangerouslySetInnerHTML={{
                    __html: `
                        var name = 'world';
                        console.log('Hello ' + name)
                    `,
                }} />
            <div className={webButlerBody.count}>
                {props.count}
            </div>
            <div className={webButlerBody.speech} />
            <div className={webButlerBody.arrowDown}></div>
            <div className={webButlerBody.face}>
                <div className={webButlerBody.eyes}>
                    <div className={webButlerBody.eye} />
                    <div className={webButlerBody.eye} />
                </div>
            </div>
            <h2>Web Butler<br />Phillips</h2>
        </div>
    )
}

export default WebButlerPhillips