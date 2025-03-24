import { shimmer_card_unit } from "../../../../public/common/constant";
const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };

const Shimmer = () => {
    return (
      <div className="shimmer-container">
              <div className="shimmer-search-box"> </div>

        {new Array(shimmer_card_unit).fill(0).map((element, index) => {
          return <CardShimmer key={index.toString() + 1} />;
        })}
      </div>
    );
  };
  export default Shimmer;