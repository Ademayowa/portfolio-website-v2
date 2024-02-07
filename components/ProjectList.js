import { Col, Card, Text, Badge } from 'react-bootstrap';
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
          <h5 className='mt-4'>Technologies</h5>
          {technologies.map((tech, index) => (
            <Badge key={index} bg='secondary' className={styles.tech}>
              {tech}
            </Badge>
          ))}

          <div className={styles.picons}>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <FaEye /> View Project Site
            </a>
            {repo && (
              <a href={repo} target='_blank' rel='noopener noreferrer'>
                <FaCodeBranch className='ms-3' /> Source Code
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
