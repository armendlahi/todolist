import React from 'react'

const firstName = 'Armend';
const lastName = 'Lahi';

const MyList = ()=> {
    return <div>
          <h1 style= {{color: 'red', backgroundColor: 'orange', fontSize:'45px'}} >{`${firstName} ${lastName}`}</h1>
          <p> I am Armend lahi and I am yangest programer in the city</p>
          <h4>My favorite language</h4>
          <ul>
          <li> Java script</li>
          <li> Python</li>
          <li> Java </li>
          </ul>
          </div>
    
};

export default MyList;

