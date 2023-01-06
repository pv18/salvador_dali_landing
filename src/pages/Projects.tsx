import React from 'react';
import { projects } from '../helpers/projectList';
import { Project } from '../components/project/Project';

export const Projects = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h2 className='title-1'>Projects</h2>
        <ul className='projects'>
          {projects.map((project) => (
            <Project key={project.id} title={project.title} img={project.img} id={project.id}/>
          ))}
        </ul>
      </div>
    </main>
  );
};
