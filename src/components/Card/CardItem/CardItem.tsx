import React from 'react';
import { Link } from 'react-router-dom';
import '../Cards.css';

interface ICardProps {
    source: string;
    text: string;
    label: string;
    path: string;
}

const CardItem = (props: ICardProps) => {
    const {text, label, path, source} = props;
    return (
        <>
            <li className="cards__item">
                <Link to={path} className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={`assets/images/${source}`} alt="Travel image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}


export default CardItem;