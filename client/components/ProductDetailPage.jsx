import React, { useEffect } from 'react';

const ProductDetailPage = (props) => {
  useEffect(() => {
    console.log(props.match.params.id);
    props.fetchProductById(props.match.params.id);
  }, [props.location]);

  return (
    <div>
      <h1>PRODUCT PAGE</h1>
      {Object.keys(props.productById).map((info) => (
        <div>
          {<h3>{info}</h3>}
          {info !== 'features' && <p>{props.productById[info]}</p>}
        </div>
      ))}
    </div>
  );
};

export default ProductDetailPage;