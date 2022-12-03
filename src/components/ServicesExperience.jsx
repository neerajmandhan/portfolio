import React, { useState } from "react";

function ServicesExperience() {
    const [services] = useState([
        {
            icon: "fa-paintbrush",
            title: "Web UI Design",
            desc: "Smooth user Intertace for best user experience",
            active: false,
        },
        {
            icon: "fa-pen-to-square",
            title: "Full Stack Development",
            desc: "Product design according to the specific needs",
            active: true,
        },
        {
            icon: "fa-ruler",
            title: "Branding",
            desc: "Differentiate your business from others on social media platforms",
            active: false,
        },
    ]);
    return (
        <section className="services-experience">
            <div className="container">
                <div className="services" id="services">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`service ${service.active ? "active" : ""}`}
                        >
                            <i className={`fas ${service.icon}`} />
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <button className="btn">Know More</button>
                        </div>
                    ))}
                </div>
                <div className="experiences" id="experiences">
                    <div className="experience">
                        <h3>6</h3>
                        <p>Month Experience</p>
                    </div>
                    <div className="portfolios">
                        <div className="portfolio">
                            <h4>10+</h4>
                            <p>International Clients</p>
                        </div>
                        <div className="portfolio">
                            <h4>06</h4>
                            <p>Months Experience</p>
                        </div>
                        <div className="portfolio">
                            <h4>15+</h4>
                            <p>Completed Projects</p>
                        </div>
                        <div className="portfolio">
                            <h4>20</h4>
                            <p>Achievements</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesExperience;
