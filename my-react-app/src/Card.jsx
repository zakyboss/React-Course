import './index.css'
import PropTypes from 'prop-types'

export default function Cards({propsObj}){
   
    const { name, career, hobbies, photo } = propsObj;
    return (
        <div className="container">
            <div className="content">
                <img src={photo} alt="profile pic" />
               <h3>{name}</h3>
               <p>{career||'No Career Found'}</p>
                <ul style={{ listStyle: "none" }}>
          <h4>Hobbies Are </h4>
          {hobbies.length < 1 ? 
            <li>No Hobbies found</li>
          : 
            hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
          }
        </ul>
                </div>
        </div>
    )
}
Cards.propTypes = {
    name: PropTypes.string,
    career: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string), // Should be an array, not string
    photo: PropTypes.string,
  };
  Cards.defaultProps={
    name : 'Guest',
     career:'none',
     hobbies:'none',
     photo:'unavailable'

  }
  