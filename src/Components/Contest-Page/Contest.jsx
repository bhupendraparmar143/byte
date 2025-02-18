import React from 'react'
import './Contest.css'
const Contest = () => {
    return (
        <section>
            <div className="container wow">
                <div className="center">
                    <h3 className="heading-component wow animate__animated animate__fadeInDown">Contest</h3>
                </div>
                <div className="contest-main-div">
                    <div className="contest-inner-div">
                        <div className="border">
                            <h5 className="">Upcoming Contest</h5>
                            <div className="contest-box">
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">Coding Challenges</a></h6>
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">Coding Challenges</a></h6>
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">Coding Challenges</a></h6>
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">Coding Challenges</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="contest-inner-div">
                        <div className="border">
                            <h5 className="">Past Contest</h5>
                            <div className="contest-box">
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">CSS Battle</a></h6>
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">CSS Battle</a></h6>
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">DSA Challenge</a></h6>
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">DSA Challenge</a></h6>
                                <h6 className="wow animate__animated animate__zoomIn"><a href="">DSA Challenge</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contest
