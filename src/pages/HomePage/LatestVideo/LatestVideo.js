const LatestVideo = (props) => {
  // receiving props as an argument
  console.log(props);

  // props are passed from the parent component
  // props are immutable i.e. they cannot be changed from inside the component
  // props are read-only
  // props.title = "New Title"; // this will throw an error
  // props are objects

  return (
    <div className="card">
      <img src={props.thumbnailUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.views} Views</li>
        <li className="list-group-item">Published {props.publishedOn}</li>
      </ul>
    </div>
  );
};

export default LatestVideo;
