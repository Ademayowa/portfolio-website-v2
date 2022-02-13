import { Col, Badge } from 'react-bootstrap';
import styles from '@/styles/Skills.module.css';

export default function SkillsList({ skill }) {
  return (
    <div className={styles.badge}>
      <Badge bg='secondary' className='p-3 me-3 mb-3'>
        {skill.skill}
      </Badge>
    </div>
  );
}
