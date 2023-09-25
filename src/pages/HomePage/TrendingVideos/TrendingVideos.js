import { useState } from 'react';

const TrendingVideos = () => {
  // state -- is a placeholder to keep component wide updateable data 
  // state is a JS object
  // state is a reserved keyword
  // Let's try having state in a functional component
  // using a hook called useState
  const [resolution, setResolution] = useState("4K");
  console.log(resolution);
  
  const handleChangeResolution = () => {
    setResolution('8K');
  }

  return (
    <div className="row">
      <p>Enjoy the trending videos in stunning {resolution} resolution</p>
      <button onClick={handleChangeResolution}>Change resolution</button>

      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">random video #1</h5>
            <p className="card-text">...... desc </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">1M Views</li>
            <li className="list-group-item">Published yesterday</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendingVideos;
