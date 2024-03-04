import React from 'react';
import TaskCard from './../TaskCard/TaskCard';

const NotFound = () => {
  return (
    <TaskCard
      style={{ position: 'absolute', top: '50%', left: '50%' }}
      cardData={{
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum non labore eaque suscipit saepe sapiente maxime odit mollitia, officiis assumenda quod tenetur sunt at praesentium, distinctio aperiam odio quas?',
        priority: 'Medium',
        deadline: '03/04/2024',
        id: 132314,
      }}
    />
  );
};

export default NotFound;
