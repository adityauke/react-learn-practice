import React, { useState } from 'react';

const Question = (props) => {
	const { title, info } = props
    const [show, setShow] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
                <button className="btn" onClick={() => setShow((show) => !show)}>{show ? '-' : '+'}</button>
      </header>
            {show ? <p>{info}</p> : null}
			
    </article>
	)
}

export default Question
