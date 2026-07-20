import React, { useContext } from "react";
import { useParams } from "react-router";
import { MyStore } from "../context/MyContext";
import { useEffect } from "react";

import Breadcrumb from "../components/Breadcrumb";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import ProductFeatures from "../components/ProductFeatures";
import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(MyStore);

  const product = products.find((item) => item.id === Number(id));
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-2xl font-semibold">Loading Product...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Breadcrumb product={product} />

      <div className="grid lg:grid-cols-2 gap-14 mt-8">
        <ProductImage product={product} />

        <ProductInfo product={product} />
      </div>

      <ProductFeatures />

      <RelatedProducts product={product} />

      <Footer />
    </div>
  );
};

export default ProductDetails;
