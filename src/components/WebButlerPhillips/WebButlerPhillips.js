import React from 'react'
import webButlerBody from './WebButlerPhillips.module.scss'

const WebButlerPhillips = (props) => {
    return (
        <div
            onClick={props.incrementCount} 
            className={webButlerBody.faceContainer}>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        var name = 'world';
                        console.log('Hello ' + name)
                    `,
                }}>

            </script>
            {props.count}
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