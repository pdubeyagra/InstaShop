import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext.js';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums.jsx';
import Productdisplay from '../Components/Productdisplay/Productdisplay.jsx';
import PropTypes from 'prop-types';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='Product'>
      <Breadcrums product={product} />
      <Productdisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

Product.propTypes = {
  productId: PropTypes.number,
  all_product: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // other product properties
  }))
};

export default Product;
