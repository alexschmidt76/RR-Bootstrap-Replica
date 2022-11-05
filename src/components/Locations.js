import { Button } from "react-bootstrap";

export default function Locations() {
    let locationsData = [
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: ''
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: ''
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: ''
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: ''
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: '1.4mi'
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: '3mi'
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: ''
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: ''
        },
        {
            imgUrl: 'https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/142/2567b473-d7f9-4928-bad2-2152fadb0877.png',
            name: 'Store Name',
            deliveryTime: 'Delivery by 12:00pm',
            pickupDistance: '2.2mi'
        },
    ].map(location => {
        return (
            <div style={{'width': '32%', 'margin': '5px'}}>
                <Button variant='light' style={{'width': '100%'}}>
                    <img src={location.imgUrl} alt='' style={{ 'display': 'inline-block' }} />
                    <div style={{ 'display': 'inline-block'}}>
                        <h3>{location.name}</h3>
                        <p>
                            {
                                location.pickupDistance ? 
                                `${location.deliveryTime} - ${location.pickupDistance}` : 
                                location.deliveryTime
                            }
                        </p>
                    </div>
                </Button>
            </div>
        )
    }
    );

    return (
        <div style={{'textAlign': 'center', 'width': '60%', 'margin': 'auto'}}>
            <h3>Choose Your Store</h3>
            <div className='d-flex flex-wrap'>
                {locationsData}
            </div>
            <h4>Show More</h4>
        </div>
    );
}