import React, { useState } from 'react';
import s from './Home.module.scss';

//Componente
import Landing from '../Landing';
import Navbar from '../Navbar';
import Products from '../Producs';
import Construction from '../Construction';
import Floors from '../Floors';
import Contact from '../Contact';
import MobileMenu from '../Navbar/MobileMenu';
import About from '../About';
import Footer from '../Footer';
import Mapas from "../Mapas";
import Wspbutton from "../Wspbutton";

//Material UI
import {
	Grid,
} from '@mui/material';
import Applicated from '../ApplicatedProducts';
import Especification from '../Especification';

const Home = () => {

	const [open, setOpen] = useState(false);

	return(
		<Grid container className={s.container}>
				<Wspbutton/>
				<MobileMenu open={open} setOpen={setOpen}/>
				<Navbar setOpen={setOpen}/>
				<Landing/>
				<Products/>
				<Construction/>
				<Floors/>
				<Applicated/>
				<About/>
				<Especification/>
				<Contact/>
				<Mapas/>
				<Footer/>
		</Grid>
	)
}

export default Home;