import Proptypes from "prop-types";

function Card({children, reverse}) {
    return (
        <div className={`card ${reverse && "reverse"}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: Proptypes.node.isRequired,
    reverse: Proptypes.bool
}

export default Card;
