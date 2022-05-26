import React from 'react';
import './Card.css';
import {FaEllipsisH, FaHeart,FaPaperPlane} from 'react-icons/fa';

export default function Card({ people }) {
  console.log(people);
  return people.map((person, index) => {
    return (
      <div className='card' key={index}>
        <div className='info'>
          <div className='name'>
            {person.name}
            <br />
            {person.location}
          </div>
          <div className='dots'>
          <FaEllipsisH icon="fa-solid fa-ellipsis" className='all-one'/>
          </div>
        </div>

        <div className='image'>
          {console.log(
            process.env.REACT_APP_API + '/image/' + person.postImage
          )}
          <img
            src={process.env.REACT_APP_API + '/image/' + person.postImage}
            alt='Not Found'
          />
        </div>

        <div className='details'>
          <div className='like'>
          <FaHeart icon="fa-solid fa-heart" className='all-two'/>
          </div>
          <div className='share'>
            <FaPaperPlane icon="fa-solid fa-paper-plane" className='all-three'/>
          </div>
          <div className='date'>{person.date}</div>
        </div>

        <div className='likeCounts'>
          <p>{person.likes} likes</p>
        </div>

        <div className='description'>
          <p>{person.description}</p>
        </div>
      </div>
    );
  });
}
