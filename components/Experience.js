import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronDoubleRight } from 'react-icons/bs';

export default function Experience({ experience: { title } }) {
  return (
    <Container className='experience'>
      <Row>
        <Col lg={10}>
          <h2>{title}</h2>
        </Col>
      </Row>
    </Container>
  );
}
