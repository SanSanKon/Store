import { FC } from "react";
import storeItems from '../data/items.json';
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";


const Store: FC = () => {
    return (
        <>
            <h1 style={{color: '#3c5e91'}}>Store</h1>
            <Row lg={4} md={2} xs={1} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;