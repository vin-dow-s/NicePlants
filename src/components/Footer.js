import { useState } from 'react'
import '../styles/Footer.scss'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	
	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@'))
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
	}

	return (
		<footer className='np-footer'>
			<div className='np-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='np-footer-elem'>Entrez votre mail :</div>
				<input 
					placeholder='Votre mail...'
					onChange={handleInput}
					value={inputValue}
					onBlur={handleBlur}
				/>
		</footer>
	)
}

export default Footer