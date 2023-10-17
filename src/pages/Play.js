import { useState } from 'react';
import PlayingField from '../components/PlayingField/PlayingField';

export default function Play(props) {
	return(
		<div className="HomePage">
			<center>
				<h1>THAT PONG! PO-PONG PONG PONG!</h1>
				<PlayingField />

			</center>
		</div>
	) 
}
