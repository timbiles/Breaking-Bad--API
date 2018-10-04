import React from 'react';

import './Characters.css';

const Characters = props => {
  const { person } = props;

  const map = person.occupation.split(',').map((e,i)=>{
    return <p key={i}>
      {e}
    </p>
  })

  return (
    <div className="character">
      <img src={person.img} alt={person.name} />
      <div className="char_btm">
        <h4>{person.name}</h4>
        <div>
          <img className='bee_logo' src="https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg" alt=""/>
        <p> {person.nickname}</p>
        </div>
        {/* {map} */}
      </div>
    </div>
  );
};

export default Characters;























// random
  // const occupation = person.occupation.split(',').map((e,i)=> {
  //   return <div key={i}>
  //     {e}
  //   </div>
  // })