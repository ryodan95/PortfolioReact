import React from "react";

function About () {
    return (
      <div className="about" id="About">
        <div className="container">

            <div className="common">
                <h1 className="about-title">About Me</h1>
                <div className="underline-border"></div>
            </div>

            <div className="row h-650 alignCenter">
                <div className="col-6">
                    <div className="about__img">
                        <img src="./imagenes/yosentado.jpg" alt="" className="small-image" />
                    </div>
                </div>

                <div className="col-6">
                    <div className="about__info">
                        <h1>Responsive Web <br /> Based in Argentina, Bs As</h1>
                        <div className="about__info">
                        <p>
                            Hello! I'm Hector Poggi, a junior developer who embarked on my coding journey earlier this year. While my experience might be relatively fresh, my passion and dedication to programming are unwavering. I'm excited to share a little about myself and my journey in the world of development. <br /><br />

                            Starting out in the fascinating realm of programming, I've already managed to bring a few projects to life, showcasing my evolving skills and creativity. Despite being in the early stages of my career, my determination and discipline drive me forward. One of the key principles I've embraced is continuous learning. I believe that every hurdle is an opportunity to learn, whether it's through online resources, collaborative projects, or trial and error. I thrive on pushing myself to master new concepts and technologies. <br /><br />

                            My current focus lies in web development, and I've dived headfirst into HTML, CSS, and JavaScript. I understand the importance of crafting user-friendly interfaces and ensuring a seamless user experience. Additionally, I've started exploring various frameworks to enhance my abilities further. My familiarity with Git and GitHub ensures that I can collaborate effectively with other developers and manage version control efficiently. <br /><br />

                            What sets me apart is my drive to take on challenges and explore uncharted territories. I'm committed to absorbing knowledge and turning it into practical skills. I firmly believe that my journey as a developer is just beginning, and I'm eager to contribute my energy, enthusiasm, and fresh perspective to your team. <br /><br />

                            I'm excited about the prospect of joining a company where I can grow as a developer and make meaningful contributions. I'm open to soaking up every opportunity to learn and adapt, and I'm ready to embrace any language or framework necessary to excel in my role. My goal is not just to be part of a team, but to become an indispensable asset by constantly evolving and staying ahead of the curve. <br /><br />

                            Thank you for considering me as a potential addition to your team. I'm eager to embark on this exciting journey together and bring my determination, discipline, and commitment to contribute to the company's success. <br /><br />

                            Sincerely, <br />
                                Hector Poggi
                        </p>
                            <div className="about__buttons">
                                <a href="‪C:\Users\Poggi\Documents\CV Poggi 2023.pdf" download className="btn about-btn-outline">
                                Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default About;