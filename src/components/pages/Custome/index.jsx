import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import WorkWithUs from "../WorkWithus";
import * as styles from './styles.module.scss';
const Customepage = () =>{

    return(
        <>
            <div className={styles.custome_div}>
                <Row className={styles.projectrow}>
                    <Col>
                    <h2 className={styles.project}>PROJECT</h2>
                    <h1 className={styles.soft}>Custom Software Development</h1>
                   <p className={styles.quality}> We use quality-driven processes to build and implement industry-specific solutions to get maximum ROI</p>
                    </Col>
                </Row>
{/*                  
                <div className={styles.parentdiv}>
                    <div  className={styles.one}>
                        <div>
                             <StaticImage class={styles.C_images11} src="../../../assets/images/Choosee_main.png"></StaticImage>
                        </div>
                        <div>
                             <StaticImage class={styles.C_images12} src="../../../assets/images/Choosee_main.png"></StaticImage>
                        </div>
                    </div>
                    <div className={styles.two}>
                        <div>
                            <StaticImage class={styles.C_images21} src="../../../assets/images/Choosee_main.png"></StaticImage>
                        </div>
                        <div>
                             <StaticImage class={styles.C_images22} src="../../../assets/images/Choosee_main.png"></StaticImage>
                        </div>
                    </div>
                    
                    <div  className={styles.four}>
                        <div>
                             <StaticImage class={styles.C_images41} src="../../../assets/images/Choosee_main.png"></StaticImage>
                        </div>
                        <div>
                             <StaticImage class={styles.C_images42} src="../../../assets/images/Choosee_main.png"></StaticImage>
                        </div>
                    </div>
                </div> */}
                {/* <div className={styles.btnDiv} >
                     <button className={styles.Viewbutton} variant="primary" type="submit">
                        View All Projects
                    </button>
                </div> */}
                
            </div>
            <WorkWithUs />
                {/* <Container>
                    <Row className={styles.projectrow}>
                        <Col>
                            <h2 className={styles.Workus}>WORK WITH US</h2>
                            <p className={styles.Workgraph}> According to clients' requirements, we develop solutions using best programming languages and tools with the best intentions to keep our client happy.</p>
                        </Col>
                
                    </Row>
                    <div className={styles.btnDiv} >
                        <button className={styles.Viewbutton1} variant="primary" type="submit">
                            Contact Us
                        </button>
                    </div>
                </Container> */}
        </>
    )
} 
export default Customepage;