import React from 'react';
import { Link } from 'react-router-dom';

const quizselect = props => {
return<div>
    <h1>Select a quiz type!</h1>
<Link to='/quiz' className='btn btn-primary my-1'>
            Multiple choice quiz!
          </Link>

          <Link to='/truefalse' className='btn btn-primary my-1'>
            True/False quiz!
          </Link>

</div>;
}

quizselect.propTypes = {};

export default quizselect;