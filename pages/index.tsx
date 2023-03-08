import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Index.module.css';
import { Button, Card, Col, Row } from 'react-bootstrap';


export default function Home() {
  return (
    <>
      <main className={styles.center}>
        <Card>
          <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--X9Ev7eRd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png" />
          <Card.Body>
            <Card.Title>Quick start Guide to learn NextJs</Card.Title>
            <Card.Text>
              Site that I made to learn NextJs. It's a no-bs self guide to make nextjs project. 
            </Card.Text>
            <Row xs={1}  xl={3} className="g-1 text-center">
              <Col>
              <Button variant="primary" >Server Side Rendered Page</Button>
              </Col>
              <Col>
              <Button variant="primary">Client Side Page</Button>
              </Col>
              <Col>
              <Button variant="primary">Third Type Page</Button>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      </main>
    </>
  )
}
