import React from "react";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header-section">
                                <h2>Hello, I Am</h2>
                                <h1>Hector Poggi</h1>
                                <p>Junior <br />Web Developer</p>
                                <div className="header__buttons">
                                    <a href="https://github.com/ryodan95" className="btn btn-outline">
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./imagenes/yopng.png" alt="" className="image" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;