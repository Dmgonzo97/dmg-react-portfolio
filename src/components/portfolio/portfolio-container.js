import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log('Portfolio has been rendered');
    }
    
    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];

        return data.map(item => {
            return <PortfolioItem title={item} url="Google.com" />;
        });
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                {this.portfolioItems()}
            </div>
        )
    };
}
