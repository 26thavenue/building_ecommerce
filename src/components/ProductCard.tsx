import { Product } from "@prisma/client";
import Link from "next/link";

interface ProductCardProps{
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const isNew =Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      <figure>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        <p>{product.description}</p>
        <h3 className=""> {product.price} </h3>
      </div>
    </Link>
  );
}

export default ProductCard