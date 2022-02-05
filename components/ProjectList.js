import { Col, Card, Text } from 'react-bootstrap';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
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
              <BsEyeFill /> Live
            </a>
            {repo && (
              <a href={repo} target='_blank' rel='noopener noreferrer'>
                <FaGithubSquare className='ms-3' />
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
