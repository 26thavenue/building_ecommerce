interface ProductCardProps{
    product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductCard