import style from "../styles/ProductDetail.module.css";

export interface ProductDetailProps {
  data: {
    image: string;
    title: string;
    price: number;
    category: string;
    description: string;
  };
  isVisible: boolean;
  onClose: () => void;
}

export default function ProductDetail(props: ProductDetailProps) {
  if (!props.isVisible) return null;
  const handleClose = (e: any) => {
    if (e.target.id === "modal") props.onClose();
  };
  return (
    <div className={style.modal} onClick={handleClose} id="modal">
      <h1>Detalle del producto</h1>
      <button
        className={style.modal__close}
        onClick={() => {
          props.onClose();
        }}
      >
        X
      </button>{" "}
      <div className={style.card}>
        <div className={style.card__content}>
          <div className={style.card__category}>
            <span>{props.data.category}</span>
          </div>
          <h2 className={style.card__title}>{props.data.title}</h2>
          <p className={style.card__description}>{props.data.description}</p>
          <div className={style.card__price}>
            <span className={style.card__priceOld}>${props.data.price}</span>
          </div>

          <button className={style.card__button}>Comprar</button>
        </div>
      </div>
      <img src={props.data.image} alt={props.data.title} />
    </div>
  );
}
