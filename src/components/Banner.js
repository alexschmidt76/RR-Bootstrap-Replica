
export default function Banner() {
    return (
        <div style={{
        'backgroundColor': '#D43684', 
        'color': '#FFF5FA', 
        'textAlign': 'center',
        'padding': '5px 0 5px 0'
        }}>
            <img style={{'display': 'inline-block', 'marginRight': '10px', 'height': '50px'}}
            src='https://www.instacart.com/assets/landing/free-delivery-banner/money-in-hand-2988e326b3804d2f9ce663293a224a733ee00c6ebb0450d7eeff18acdfdb7ca5.svg' />
            <h5 style={{'display': 'inline-block'}}><b>FREE delivery</b> for your first 3 orders. <b>Place your order today!</b></h5>
        </div>
    );
}