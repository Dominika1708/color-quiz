import './Header.css'

const Header = () => (
    <header className='header'>
        <div className='header-logo'>
            <img src='../../public/colors.png' alt='header logo' width={50} height={50}></img>
            <p className='header-title'>COLOR QUIZ</p>
        </div>
    </header>
);

export default Header