import "./FeaturedProducts.scss";
import Card from "../Card/Card";

import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eql]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        {/* Your paragraph content */}
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong !"
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
