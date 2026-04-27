import { Col, Card } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import styles from '@/styles/ProjectList.module.css';

export default function ProjectList({
  project: { info, title, url },
}) {
  return (
    <Col md={6} lg={4}>
      <Card>
        <Card.Body>
          <Card.Title className={styles.ptitle}>{title}</Card.Title>
          <Card.Text className={styles.pinfo}>{info}</Card.Text>

          <div className={styles.picons}>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <FaEye /> View Blog
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
