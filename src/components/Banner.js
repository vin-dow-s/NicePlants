import '../styles/Banner.scss'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'Nice Plants'
    return (
    <div className="np-banner">
        <img src={ logo } alt='Nice Plants' className='np-banner__logo' />
        <h1 className='np-banner__title'>{ title }</h1>
    </div>
    )
}

export default Banner