import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
import { getOneSpot } from '../../store/spots';
import "./footer.css"


function Footer() {
    return (
        <footer className='footer'>
            <p id='developed-by'>Developed By: Eric Cortez</p>
            <a id='git-linkd' href='https://github.com/Eric-Cortez/LodgeINN'><i class="fab foot-icon fa-github"></i></a>
            <a id='git-linkd' href='https://www.linkedin.com/in/eric-cortez-0101/'><i class="fab foot-icon fa-linkedin"></i></a>
        </footer>
    )
}

export default Footer;