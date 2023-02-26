import Кремль from "./../img/кремль.jpg";
import МузейЛеденца from "./../img/музейЛеденца.jpg";
import МузейПавлова from "./../img/музейПавлова.jpg";
import ПамятникЕК from "./../img/памятникЕК.jpg";
import ПамятникСЕ from "./../img/памятникСЕ.jpg";
import homeImg from "./../img/home.jpg";
import DifImg from "./../img/difImg.jpg";

import NewFoto from "./../components/NewFoto/NewFoto";

const Gallery = () => {
	return ( 
		<main id="main" className="section">
		<div className="container">
			<div className="project-details">
				<h1 className="title-1">Галерея</h1>
				<div className="block">
					<div className="img">
						<img src={Кремль} alt="Attr img" className="attr__img"/>
						<img src={МузейЛеденца} alt="Attr img" className="attr__img"/>
						<img src={МузейПавлова} alt="Attr img" className="attr__img"/>
						<img src={ПамятникЕК} alt="Attr img" className="attr__img"/>
						<img src={ПамятникСЕ} alt="Attr img" className="attr__img"/>
						<img src={homeImg} alt="Home img" className="home__img"/>
						<img src={DifImg} alt="Dif img" className="dif__img"/>
					</div>
					<NewFoto/>
				</div>
			</div>
		</div>
		</main>
	);
}

export default Gallery;