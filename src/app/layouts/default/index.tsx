import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutubeSquare, faGithubSquare, faTwitterSquare, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import './assets/fonts/bree-serif.scss';
import './assets/fonts/open-sans.scss';
import layoutStyles from './assets/styles.less';

function Layout(props) {
    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help

    return (
        <>
            <header className={layoutStyles.pageHeader}>
                <h1><NavLink exact={true} to="/">Eser Ozvataf</NavLink></h1>
                <p>Yazılım Düşünür, Planlar, Geliştirir, Konuşur</p>
                <div className={layoutStyles.followIcons}>
                    <a href="https://twitch.tv/laroux"><FontAwesomeIcon size="2x" icon={faTwitch} /></a>
                    <a href="https://www.youtube.com/channel/UCS3eVZDirUNTFrteoJsLP4g"><FontAwesomeIcon size="2x" icon={faYoutubeSquare} /></a>
                    <a href="https://github.com/eserozvataf"><FontAwesomeIcon size="2x" icon={faGithubSquare} /></a>
                    <a href="https://twitter.com/eserozvataf"><FontAwesomeIcon size="2x" icon={faTwitterSquare} /></a>
                    <a href="https://medium.com/@eserozvataf"><FontAwesomeIcon size="2x" icon={faMedium} /></a>
                    <a href="https://linkedin.com/in/eserozvataf"><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                    <a href="mailto:eser@ozvataf.com"><FontAwesomeIcon size="2x" icon={faEnvelopeSquare} /></a>
                </div>

                <h2><NavLink exact={true} to="/">Giriş</NavLink></h2>
                <h2><NavLink to="/about/">Hakkımda</NavLink></h2>
                <h2><NavLink to="/projects/">Projeler</NavLink></h2>
                <h2><NavLink to="/attendences/">Katılımlarım</NavLink></h2>
                <h2><NavLink to="/contact/">İletişim</NavLink></h2>
            </header>
            <main className={layoutStyles.pageContent}>
                {props.children}
            </main>
            <footer className={layoutStyles.pageFooter}>
                <section className={layoutStyles.footerMessage}>© 2019 Eser Ozvataf.</section>
            </footer>
        </>
    );
}

export {
    Layout as default,
};