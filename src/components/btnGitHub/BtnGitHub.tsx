import React, { FC } from 'react';
import gitHubIcon from '../../img/icons/gitHub-black.svg';
import './BtnGitHub.css';

interface IBtnGitHubProps {
  link?: string;
}

export const BtnGitHub: FC<IBtnGitHubProps> = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
      <img src={gitHubIcon} alt='icon GitHub' />
      GitHub repo
    </a>
  );
};
