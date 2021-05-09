import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

interface IButtonProps {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    buttonStyle?: string;
    buttonSize?: string;
    className?: string;
}

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = (props: IButtonProps) => {
    const {buttonStyle, buttonSize, children, onClick, type} = props;
    const checkButtonStyle = buttonStyle && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize =  buttonSize && SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to="/signup" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button;