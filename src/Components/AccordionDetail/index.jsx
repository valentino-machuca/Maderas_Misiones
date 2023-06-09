import React, { useState } from 'react'
import s from './AccordionDetail.module.scss';

//assets
import logo from '../Navbar/assets/darklogo.png';
import logow from '../Navbar/assets/whitelogo.png';

//materialUi
import {
	Grid,
	Modal,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccordionItem from "./Accordion";


const AccordionDetail = ({open, setOpen, data, dark}) => {
	const [selected, setSelected] = useState(data?.image);

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<Grid container>
				<Grid item container xs={12} md={10} lg={10} className={s.boxModal} sx={{ bgcolor: dark ? "#222222" : "#EEEEEE" }}>
					<Grid container item xs={12} sx={{display: "flex", justifyContent: "center"}}>
						<Grid item xs={11.5} sx={{display: 'flex', justifyContent: 'space-between', px: 1, mt: 2}}>
							<img src={dark ? logow : logo} alt='logo' height='30rem'/>
							<CloseIcon onClick={() => setOpen(false)} sx={{color: dark ? '#EEEEEE' : "#222222", transition: '.3s', '&:hover': {scale: '1.1', cursor: 'pointer'}}}/>
						</Grid>

						<Grid item container xs={11.5} className={s.datacontainer}>
							<Grid item lg={5} xs={11} className={s.image}>
								<img src={selected} alt={data.title} style={{objectFit: 'scale-down', height: '85%', width: '100%'}}/>
							</Grid>
							<Grid item lg={7.4} xs={11} className={s.acordiones}>
								{
									data.accordeonItems.map((item, i) => {
										return <AccordionItem data={item} key={i} setSelected={setSelected}/>
									})
								}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Modal>
	)
};

export default AccordionDetail;