import { useState } from 'react';
import PlayingField from '../components/PlayingField/PlayingField';

export default function Play(props) {
	return(
		<div className="HomePage">
			<center>
				<h1>THAT PONG! PO-PONG PONG PONG!</h1>
				<PlayingField />
				{/* <div>
				<img src="https://media.git.generalassemb.ly/user/15881/files/8b5cd280-1f37-11ea-9c27-c9bb294aa61f"/>
				</div>
				<div>
				<img src="https://lh4.googleusercontent.com/Wp6jVNMlvYa2Q8BZ6kIzCbbasfZmNSaWIBJjLKEIDzYB9O6skIt3zyrpqPUjTSXG9WQF23WihWl43h_9UHZtugB96EAulCDDqNtB-KtWYWXJbTTMgHGrG7WU881GACAsrZXe8pJlux6xqGlB46AQliYn=s2048"/>
				</div>				 */}
			</center>
		</div>
	) 
}