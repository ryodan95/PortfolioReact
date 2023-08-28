import React from "react";

function Services () {

    const header = {
        mainHeader: "My Expertise",
        subHeading: "Provide Wide Range of Digital Services",
    };

    const state = [
        {
            id: 1,
            icon: "./imagenes/optimizar.png",
            heading: "Optimize",
            text: "I can optimize desktop or notebook computers for better performance with modified windows and installation of essential programs.",
        },
        {
            id: 2,
            icon: "./imagenes/webdesing.png",
            heading: "Responsive Web",
            text: "I am a junior dynamic web designer, I am learning and adapting to new technologies.",
        },
        {
            id: 3,
            icon: "./imagenes/envios.png",
            heading: "Delivery",
            text: "I am very dynamic, in addition to the software, I can move around my city delivering packages to different meeting points, which allows me to coordinate clients.",
        },
        {
            id: 4,
            icon: "./imagenes/pc.png",
            heading: "Using Computer",
            text: "Basically, I've been using the computer ever since I can remember. I know how to do many things with it. I can adapt to any program and solve different types of errors.",
        },
        {
            id: 5,
            icon: "./imagenes/workflow.png",
            heading: "WorkFlow",
            text: "In addition to being flexible, I can adapt and work as a team if I need it, as well as good communication, willingness and punctuality.",
        }
    ];


    return (
        <div className="services" id="Services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h6 className="heading">{header.mainHeader}</h6>
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <img src={info.icon} alt="" className="commonIcons" />
                                <h4 className="services__box-header">{info.heading}</h4>
                                <p className="services__box-p">{info.text}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;