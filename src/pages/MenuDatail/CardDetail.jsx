import './CardDetail.css'
import { Col, Container, Row } from "react-bootstrap";

const CardDetail = ({item}) => {
  return(
      <>
        {item.map(e=>
          <Container className="mb-3" key={e.id}>
              <Row>
                  <Col sm={6}>
                      <img src={e.image} alt={e.title} width={450} className="img-detail"/>
                  </Col>
                  <Col sm={6} className="text-detail">
                    <h1>{e.title}</h1>
                    <h3>${e.price}</h3>
                    <h5>{e.description}</h5>
                  </Col>
              </Row>
          </Container>
        )}
      </>
  );
};

export default CardDetail;
