import React from 'react'

function WrapperDashboard(props) {
    return (
        <div className="wrapperdashboard">
            <div className="elementsdashboard">
                {props.children}
            </div>
        </div>
    )
}

export default WrapperDashboard