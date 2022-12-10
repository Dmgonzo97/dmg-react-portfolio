import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PortfolioManager from './pages/portfolio-manager';
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from './auth/auth';
import NoMatch from "./pages/no-match";
import Blog from './pages/blog';

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loggedInStatus: "NOT_LOGGED_IN"
		};

		this.handleSucessfulLogin = this.handleSucessfulLogin.bind(this)
		this.handleUnsucessfulLogin = this.handleUnsucessfulLogin.bind(this)
		this.handleSucessfulLogout = this.handleSucessfulLogout.bind(this)
	}

	handleSucessfulLogin() {
		this.setState({
			loggedInStatus: "LOGGED_IN"
		});
	}

	handleUnsucessfulLogin() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN"
		});
	}

	handleSucessfulLogout() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN"
		});
	}

	checkLoginStatus() {
		return axios.get("https://api.devcamp.space/logged_in", {
			withCredentials: true
		})
			.then(response => {
				const loggedIn = response.data.logged_in;
				const loggedInStatus = this.state.loggedInStatus;

				// if loggedIn and status LOGGED_IN => return data
				// if loggedIn status NOT_LOGGED_IN => update state
				// if not loggedIn and status LOGGED_IN => update state

				if (loggedIn && loggedInStatus === "LOGGED_IN") {
					return loggedIn
				} else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
					this.setState({
						loggedInStatus: "LOGGED_IN"
					});
				} else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
					this.setState({
						loggedInStatus: "NOT_LOGGED_IN"
					})
				}
			})
			.catch(error => {
				console.log('Error', error);
			})
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	authorizedPages() {
		return [
			<Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />
		];
	}

	render() {
		return (
			<div className='container'>

				<Router>
					<div>
						<NavigationContainer
							loggedInStatus={this.state.loggedInStatus}
							handleSucessfulLogout={this.handleSucessfulLogout}
						/>

						<Switch>
							<Route exact path="/" component={Home}></Route>

							<Route
								path="/auth"
								render={props => (
									<Auth
										{...props}
										handleSucessfulLogin={this.handleSucessfulLogin}
										handleUnsucessfulLogin={this.handleUnsucessfulLogin}
									/>
								)}
							/>

							<Route path="/about-me" component={About}></Route>
							<Route exact path="/blog" component={Blog} />
							<Route path="/contact" component={Contact}></Route>
							{this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}

							<Route
								exact
								path="/portfolio/:slug"
								component={PortfolioDetail}
							/>
							<Route component={NoMatch} />

						</Switch>
					</div>
				</Router>

			</div>
		);
	}
}
