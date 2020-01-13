import App from 'next/app';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

import "../assets/css/styles.css";

class MovieApp extends App{

	static async getInitialProps(appContext){
		//executing getinitialprops of page you are navigated
		const appProps = await App.getInitialProps(appContext);
		return{...appProps}
	}

	render(){

		const {Component, pageProps} = this.props;

		return(
			<div id="wrapper_body">
				<Head>
					<title>Home</title>
				</Head>

				<Header />

				<div id="wrapper_components">
					<Component {...pageProps} />
				</div>

				<Footer />
			</div>
		)
	}
}

export default MovieApp;