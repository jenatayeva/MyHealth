import React, { Fragment } from "react";
import "../../style/App.scss";
import HeaderImg from "../../imgs/Header-img.svg";

const Home = () => {
	return (
		<Fragment>
			<section id='HomePage'>
				<div className='container container-header'>
					<div className='text-content'>
						<div className='texts'>
							<h1>
								Find <span>Best Clinic</span> To Get Solutions.
							</h1>
							<p>
								Health is one of the most important thing for us therefore
								immediately check your health for you good.
							</p>
						</div>
						<div className='buttons'>
							<button className='btn btn-blue'>Appointment</button>
							<button className='btn btn-light'>
								<i className='fa-solid fa-magnifying-glass'></i>Search hospital
							</button>
						</div>
					</div>
					<div className='img-content'>
						<img src={HeaderImg} />
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
