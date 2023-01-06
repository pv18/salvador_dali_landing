import React, {FC} from 'react';
import './Project.css';
import {NavLink} from 'react-router-dom';

interface IProjectProps {
    id: number
    title?: string;
    img?: string;
}

export const Project: FC<IProjectProps> = ({title, img, id}) => {
    return (
        <NavLink to={`/project/` + id}>
            <li className="project">
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    );
};
