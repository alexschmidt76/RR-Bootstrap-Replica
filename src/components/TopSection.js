import { Col, Row, Container, Dropdown, ButtonGroup, Button } from "react-bootstrap";

export default function TopSection() {
    return (
        <div style={{
        'backgroundImage': 'url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)',
        'backgroundColor': '#deedd6',
        'backgroundPosition': 'right center',
        'backgroundRepeat': 'no-repeat',
        'zIndex': '-1',
        'height': '100%',
        'width': '100%',
        'padding': '40px 20px 25px 20px'
        }}>
            <Container>
                <Row>
                    <Col sm='1'>
                        <Dropdown as={ButtonGroup}>
                            <Button variant='light'>Flag</Button>
                            <Dropdown.Toggle variant='light' split id='dropdown-split-basic' />
                            <Dropdown.Menu>
                                <Dropdown.Item href='#/US'>US</Dropdown.Item>
                                <Dropdown.Item href='#/CA'>CA</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col sm='5'>
                        <h1>Order groceriess for delivery or pickup today</h1>
                        <p>Whatever you want from local stores, brought right to your door.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}