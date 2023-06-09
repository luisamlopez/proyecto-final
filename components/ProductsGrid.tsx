import { useState } from "react";
import styles from "../styles/ProductsGrid.module.css";
import ProductDetail from "./ProductDetail";
import { Product } from "../api/Product";

export interface ProductsGridProps {
  data: Product;
}
export default function ProductsGrid(props: ProductsGridProps) {
  const [showModal, setShowModal] = useState(false);

  const [id, setId] = useState(1);

  return (
    <>
      <div
        className={styles.productCard}
        onClick={() => {
          setId(props.data.id);
          setShowModal(true);
        }}
      >
        <img src={props.data.image} alt={props.data.title} />
        <div className={styles.productInfo}>
          <div>
            <p>{props.data.title}</p>
            <p>${props.data.price}</p>
            <p>Categoría: {props.data.category}</p>
          </div>
        </div>
      </div>

      <ProductDetail
        data={props.data}
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
}
