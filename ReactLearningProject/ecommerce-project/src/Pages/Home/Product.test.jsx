import { it, expect, describe,vi } from 'vitest';
import  Product  from './Product';
import { render, screen /* check the fake web page */ } from '@testing-library/react' // render a component for a fake web page.

//Testing a Component -> 
// render(<Product/ >) -> display the component on the page.
describe('Product Component', () => {
     it('display the product details correctly', () => {
        const product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        };

        const loadCart = vi.fn();  // creates a fake fn() which doesn't do anything     
        // loadcart() contact with backend but in our tests, we should not contact a real backend.
        // Sol. is to make a (mock) -> fake version of the funciton.

        render(<Product product={product} loadCart={loadCart} />);
        
        expect(
            screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument(); // checks if this element exist on the fake web page.

        expect(
            screen.getByText('$10.90')
        ).toBeInTheDocument();

        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src','images/products/athletic-cotton-socks-6-pairs.jpg')

        expect(
            screen.getByTestId('product-rating-stars-image')
        ).toHaveAttribute('src','images/ratings/rating-45.png')

        expect(
            screen.getByText('87')
        ).toBeInTheDocument();
    });
})