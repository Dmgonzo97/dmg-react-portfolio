import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl: "https://dmgonzo.devcamp.space/portfolio/portfolio_items",
      apiAction: "get",
      portfolioItem: {},
    }
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  getPortfolioItems() {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl + `/${this.props.match.params.slug}`,
      withCredentials: true
    })
      .then(response => {
        console.log('response', response);
        this.setState({
          portfolioItem: response.data.portfolio_item
        })
      })
      .catch(error => {
        console.log('get portfolio item error', error);
      })
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPostition: "center center"
    };

    const logoStyles = {
      width: '200px',
    }

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
          <div className="cat">{category}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className='site-link' target='_blank'>
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}