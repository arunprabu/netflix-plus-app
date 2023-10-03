import React, { useState } from "react";

const RecommendedVideos = () => {
  // let's have some recommended videos in an array
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Money Heist - Final Season",
      thumbnailUrl: "https://placehold.co/400x250?text=Money+Heist",
      description: "lorem ipsum dolor sit amet",
      views: "1M",
      publishedOn: "yesterday",
      isInWatchlist: true,
    },
    {
      id: 2,
      title: "Squid Games",
      thumbnailUrl: "https://placehold.co/400x250?text=Squid+Games",
      description: "lorem ipsum dolor sit amet",
      views: "1.2M",
      publishedOn: "2 days ago",
      isInWatchlist: false,
    },
    {
      id: 3,
      title: "H2O: Just Add Water",
      thumbnailUrl: "https://placehold.co/400x250?text=H20",
      description: "lorem ipsum dolor sit amet",
      views: "1.5M",
      publishedOn: "3 days ago",
      isInWatchlist: false,
    },
    {
      id: 4,
      title: "The Jungle Book",
      thumbnailUrl: "https://placehold.co/400x250?text=Lost+in+Space",
      description: "lorem ipsum dolor sit amet",
      views: "1.6M",
      publishedOn: "4 days ago",
      isInWatchlist: true,
    },
  ]);

  const handleManageWatchlist = (event, index) => {
    console.log(event);
    // update the state immutably 
    const duplicateVideos = [...videos ]; // spread operator
    duplicateVideos[index].isInWatchlist =
      !duplicateVideos[index].isInWatchlist;
    
    setVideos(duplicateVideos);
  }

  // we will use this array to render the videos in the UI
  // we will loop thru to avoid code duplication

  // Conditionals in react
  // if(videos.length === 0){
  //   return(
  //     <div className="alert alert-warning">
  //       No Recommended Videos Found. Try again later
  //     </div>
  //   )
  // }

  return (
    <div className="row">
      <p>We recommend some videos based on your watch history</p>

      <p>Videos Found: {videos.length}</p>

      {/* conditionals in JSX */}
      {videos.length === 0 && (
        <div className="alert alert-warning">
          No Recommended Videos Found. Try again later
        </div>
      )}

      {/* Let's loop thru -- lists and keys */}
      {videos.map((video, index) => {
        return (
          <div className="col-md-3" key={video.id}>
            <div className="card">
              <img
                src={video.thumbnailUrl}
                className="card-img-top"
                alt={video.title}
              />
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{video.views} Views</li>
                <li className="list-group-item">Published {video.views}</li>
                <li className="list-group-item">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={(event) => {
                      handleManageWatchlist(event, index);
                    }}
                  >
                    {video.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedVideos;
