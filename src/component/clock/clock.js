import React from "react"
const Header = (props) => {
    React.useEffect(() => {
        let timerId = setInterval(() => {
            props.setTime(props.time)
        })
        clearInterval(timerId)
    })
    return <>
        <h2>Count Up</h2>
        {!props.clock ? <div id="display">
            <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
        </div>
            :
            <div className="main-clock">
                <div className="clock">
                    <div
                        className="sec_hand"
                        style={{
                            transform: `rotateZ(${props.time * 0.006}deg)`
                        }}
                    />
                    <span className="twelve">60</span>
                    <span className="one">5</span>
                    <span className="two">10</span>
                    <span className="three">15</span>
                    <span className="four">20</span>
                    <span className="five">25</span>
                    <span className="six">30</span>
                    <span className="seven">35</span>
                    <span className="eight">40</span>
                    <span className="nine">45</span>
                    <span className="ten">50</span>
                    <span className="eleven">55</span>
                </div>
            </div>}
        {!props.thems ? <button onClick={props.themeMode}>Dark</button> : <button onClick={props.themeMode}>Light</button>}
    </>
}
export default Header