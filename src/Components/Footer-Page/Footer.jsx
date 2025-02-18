import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="inner-box">
                    <div className="box wow animate__animated animate__slideInUp">
                        <h4>STAY CONNECTED</h4>
                        <h6>BANARAS HINDU UNIVERSITY</h6>
                    </div>
                    <div className="box wow animate__animated animate__slideInUp">
                        <h4>CONTACT US</h4>
                        <h6><span><i class="fa-regular fa-envelope"></i> : </span><a href="">Demo@bhu.ac.in</a></h6>
                        <h6><span><i class="fa-solid fa-phone"></i> : </span><a href="">1234567890</a></h6>
                    </div>
                    <div className="box wow animate__animated animate__slideInUp">
                        <h4>FIND OUT MORE</h4>
                        <h6><span><i class="fa-solid fa-chevron-right"></i> : </span><a href="">Facilities</a></h6>
                        <h6><span><i class="fa-solid fa-chevron-right"></i> : </span><a href="">Members</a></h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
