import { formatMoney } from "../../utils/money";
import { useState } from "react";
import dayjs from "dayjs";

const DeliveryOptions = ({cartItem , deliveryOptions}) => {
    const [selectedOptions, setSelectedOptions] = useState({});
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                let priceString = 'Free Shipping';
                if (deliveryOption.priceCents > 0) {
                    priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`
                }
                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input
                            type="radio"
                            checked={selectedOptions[cartItem.productId] === deliveryOption.id}
                            onChange={() => {
                                setSelectedOptions(prev => ({
                                    ...prev,
                                    [cartItem.productId]: deliveryOption.id
                                }));
                            }}
                            name={`delivery-option-${cartItem.productId}`}
                        />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimateDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DeliveryOptions