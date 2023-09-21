import LatestVideo from "./LatestVideo/LatestVideo";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center">Let's learn about Core React Concepts!</h1>
      <hr/>

      <h2>Latest Videos | Demo of Props</h2>

      <div className="row">
        <div className="col-md-3">
          <LatestVideo
            title="Bayern Munich 4-3 Man Utd"
            description="Harry Kane nets first Champions League goal
              for hosts to beat Man Utd in group opener"
            thumbnailUrl="https://placehold.co/400x250"
            views="1.5M"
            publishedOn="yesterday"
          />
        </div>

        <div className="col-md-3">
          
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      </div>

      {/* <h2>Trending Videos | Demo of States, Events</h2>

      <h2>
        Recommended Videos | Demo of States, Events, Conditional Rendering,
        Lists & Keys
      </h2> */}
    </div>
  );
};

export default HomePage;
