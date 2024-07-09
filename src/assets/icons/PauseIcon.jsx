import PropTypes from 'prop-types'

function PauseIcon({ color = '#fff' }){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
    )
}
PauseIcon.propTypes = {
    color: PropTypes.string,
}
export default PauseIcon