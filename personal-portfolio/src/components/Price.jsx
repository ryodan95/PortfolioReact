import React from "react";

function Price () {

const header = {
    subHeading: "Popular Pricing Plan for Creative Project",
    text: 
    "These are my Junior prices with the web pages, and the optimization in the operating system."
};

const state = [
    {
        id:1,
        heading: "Junior",
        price: 25,
        msg1: "Responsive Web",
        msg2: "HTML,CSS,jS",
    },
    {
        id:2,
        heading: "Advanced",
        price: 10,
        msg1: "Computer Optimized",
        msg2: "Optimized Windows, Programs and solves",
    },
];

    return (
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h2 className="mainHeader">
                        {header.subHeading}
                    </h2>
                    <h6 className="mainContent">{header.text}</h6>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {state.map((prices) => (
                        <div className="col-4" key={prices.id}>
                            <div className="price">
                                <div className="priceHeading">${prices.heading}</div>
                                <div className="price__rs">
                                    <span>$</span>
                                    {prices.price}
                                </div>
                                <ul>
                                    <li>{prices.msg1}</li>
                                    <li>{prices.msg2}</li>
                                </ul>
                                <div className="price__btn">
                                    <a href="price" className="btn btn-outline">
                                        Start Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Price