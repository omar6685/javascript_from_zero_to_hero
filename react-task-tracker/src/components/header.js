import PropTypes from "prop-types"
import Button from "./button"


const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='hello' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototypes = {
    title: prototypes.string.isRequired,
}

export default Header