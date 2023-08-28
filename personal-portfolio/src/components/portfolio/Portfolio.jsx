import React, { useState } from "react";
import "./portfolio.css";
import data from "./data";

function Portfolio () {
    const [item, setItem] = useState(data);

    const filterItem = (cateItem) => {
        const updateItem = data.filter((curElem) => {
            return curElem.category === cateItem
        })
        setItem(updateItem);
    }
    return (
        <section className="portfolio mtop" id="Portfolio">
            <div className="container">

                    <div className="head flexSB">
                        <div className="left">
                            <h6>Creative Works</h6>
                            <h2>Check My Portfolio</h2>
                        </div>
                    </div>
                <div className="links">
                    <ul className="flexSB">
                        <li className="active" onClick={() =>setItem(data)}>All</li>
                        <li  onClick={() =>filterItem("Design")}>Design</li>
                        <li  onClick={() =>filterItem("Homenaje")}>Homenaje</li>
                        <li  onClick={() =>filterItem("Sheets")}>Sheets</li>
                        <li  onClick={() =>filterItem("Calculadora")}>Calculadora</li>
                    </ul>
                </div>
                    <div className="content grid mtop">
                        {item.map((elem) => {
                            const {cover, title} = elem;
                            return (
                                <div className="box">
                                    <div className="img">
                                        <img src={cover} alt="" />
                                    </div>
                                    <div className="overlay">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </section>
    )
}

export default Portfolio;