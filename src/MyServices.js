import React from 'react'

export default function MyServices() {
    return (
        <div className="myservices">
            <h1>My services</h1>
            <div className="myservices-container">
                    <div className="design">
                        <h1>Design UI</h1>
                       
                            <span>
                                Design creative UI,
                                with good UX.
                            </span>
                       
                    </div>
                    <div className="frontend">
                        <h1>Coding</h1>
                        
                            <span>
                                Coding and making connection between UI
                                and back end. State managment  
                            </span>
                       
                    </div>
                    <div className="backend">
                       <h1> Content making</h1>
                       
                            <span>
                            creative writing, and content creation
                            </span>
                        
                    </div>
            </div>
        </div>
    )
}
