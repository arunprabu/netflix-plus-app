import React from 'react'

const RecommendedVideos = () => {
  // let's have some recommended videos in an array

  // we will use this array to render the videos in the UI
  // we will loop thru to avoid code duplication
  
  
  return (
    <div className="row">
      <p>We recommend some videos based on your watch history</p>

      <p>Videos Found: </p>

      <div className='alert alert-warning'>
        No Recommended Videos Found. Try again later
      </div>

      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">video title</h5>
            <p className="card-text">...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">1M Views</li>
            <li className="list-group-item">Published today</li>
            <li className="list-group-item">
              <button className="btn btn-success btn-sm">
                Add to Watchlist
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">video title</h5>
            <p className="card-text">...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">1M Views</li>
            <li className="list-group-item">Published today</li>
            <li className="list-group-item">
              <button className="btn btn-success btn-sm">
                Add to Watchlist
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">video title</h5>
            <p className="card-text">...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">1M Views</li>
            <li className="list-group-item">Published today</li>
            <li className="list-group-item">
              <button className="btn btn-success btn-sm">
                Add to Watchlist
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">video title</h5>
            <p className="card-text">...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">1M Views</li>
            <li className="list-group-item">Published today</li>
            <li className="list-group-item">
              <button className="btn btn-success btn-sm">
                Add to Watchlist
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecommendedVideos