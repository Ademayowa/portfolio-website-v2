import { Col, Card, Text } from 'react-bootstrap';
import Link from 'next/link';
import { FaCodeBranch, FaEye } from 'react-icons/fa';
import styles from '@/styles/ProjectList.module.css';

export default function ProjectList({
  project: { info, technologies, title, url, repo },
}) {
  return (
    <Col md={6} lg={4}>
      <Card>
        <Card.Body>
          <Card.Title className={styles.ptitle}>{title}</Card.Title>

          <Card.Text className={styles.pinfo}>{info}</Card.Text>
          <div className={styles.ptech}>{technologies}</div>

          <div className={styles.picons}>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <FaEye /> Live
            </a>
            {repo && (
              <a href={repo} target='_blank' rel='noopener noreferrer'>
                <FaCodeBranch className='ms-3' /> Code
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
