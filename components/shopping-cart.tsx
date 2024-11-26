// components/ShoppingCart.tsx
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCart = () => {
    return (
        <div className="p-2">
            <FaShoppingCart className="text-xl" /> {/* Shopping cart icon */}
        </div>
    );
};

export default ShoppingCart;