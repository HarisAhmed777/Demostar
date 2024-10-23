import React from 'react';
import profile from '../images/profile.avif';
import { useNavigate } from "react-router-dom";

function Blogs({ img, title, para, date, time, comments, name }) {
  const navigate = useNavigate();

  function handlenews() {
    const news = { img, title, para, date, time, comments, name };
    navigate('/seperatenews', { state: { news } });
  }

  return (
    <div className="card bestofferborderradius">
      <img className="cardimg" src={img} alt="Card image cap" />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <p>{date}</p>
          <p>{time}</p>
          <p>{comments}</p>
        </div>
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-between">
          <div>
            <img src={profile} alt="" className="newstipsimg" />
            <p className="d-inline fw-bold">{name}</p>
          </div>
          <div>
            <p className="fw-bold mt-4 hoverpointer" onClick={handlenews}>
              Keep Reading
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
