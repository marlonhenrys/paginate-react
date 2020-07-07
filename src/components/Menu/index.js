import React, { Component } from 'react';
import { IoIosHome, IoMdFiling, IoMdFingerPrint } from 'react-icons/io';

import "./styles.css";

class Menu extends Component {

    state = {
        page: window.location.pathname,
        atual: '#p1'
    }

    componentDidMount() {
        var { page, atual } = this.state;

        document.querySelector(atual).removeAttribute('class', 'atual');

        switch (page) {

            case '/home':
                atual = '#p2';
                break;
            case '/profile':
                atual = '#p3';
                break;
            default:
                atual = '#p1';
        }
        
        document.querySelector(atual).setAttribute('class', 'atual');
    }

    render() {
        return (
            <footer id="menu" >
                <ul>
                    <li title="Produtos"><a id="p1" href="/"><IoMdFiling /></a></li>
                    <li title="Home"><a id="p2" href="/home"><IoIosHome /></a></li>
                    <li title="Perfil"><a id="p3" href="/profile"><IoMdFingerPrint /></a></li>
                </ul>
            </footer>
        )
    }
}

export default Menu;