import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import * as styles from './styles.module.scss';
const WorkWithUs = () =>{

    return(
        <>
                <Container>
                    <Row className={styles.projectrow}>
                        <Col>
                            <h2 className={styles.Workus}>WORK WITH US</h2>
                            <p className={styles.Workgraph}> According to clients' requirements, we develop solutions using best programming languages and tools with the best intentions to keep our client happy.</p>
                        </Col>
                
                    </Row>
                    <div className={styles.btnDiv} >
                        <button className={styles.Viewbutton1} variant="primary" type="submit">
                            CONTACT US
                        </button>
                    </div>
                </Container>
        </>
    )
} 
export default WorkWithUs;