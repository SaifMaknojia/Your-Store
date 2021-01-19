import React from 'react';
import Directory from '../../components/directory/Directory';
import './homepage.scss';
import { Link } from 'react-router-dom';



const HomePage = () => {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};
export default HomePage;
