import React from "react"
import * as styles from "./styles.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Facebook from "assets/icons/Facebook"
import Instagram from "assets/icons/Instagram"
import Pinterest from "assets/icons/Pinterest"
import YouTube from "assets/icons/YouTube"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
	const width=190;
	return (
		<Container fluid className={styles.contain}  >
			{/* <Container className={styles.onlymedium}> */}
			<div className={styles.setLargeScreen}>
				<Row className={styles.mobileScreenSet}>
					<Col xs={12} sm={4} md={4} >
						<div>
							<StaticImage className={styles.footerimg} width={width} src="../../../assets/logos/LogoWhite.png" alt="" />
						</div>
						<Row>
							<Col>
								<div className={styles.divroww}>
									<a href="#" target="_blank" className={styles.social_icon}>
										<Facebook />
									</a>
									<a href="#" target="_blank" className={styles.social_icon}>
										<YouTube />
									</a>
									<a href="#" target="_blank" className={styles.social_icon}>
										<Instagram />
									</a>
									<a href="#" target="_blank" className={styles.social_icon}>
										<Pinterest />
									</a>
								</div>
							</Col>
							<div className={styles.mercury}	>MercurySols © 2022</div>
						</Row>
					</Col>
					<Col   xs={12} sm={4} md={4} >
						<div className={styles.contactParent} >
							<div>
								<h1 className={styles.listss}>Contact Us</h1>
							</div>
							<div className="d-flex forcenter">
									<StaticImage className={styles.picc} src="../../../assets/images/email.png" alt="" />
								<a href="mailto:hr@mercurysols.org" className={styles.lists}>
									hr@mercurysols.org
								</a>
							</div>
							<div className="d-flex">
								<StaticImage className={styles.picc} src="../../../assets/images/email.png" alt="" />
								<a className={styles.lists} href="mailto:info@mercurysols.org">
									info@mercurysols.org
								</a>
							</div>
							<div className="d-flex">
								<div>
									<StaticImage className={styles.picc} src="../../../assets/images/phone.png" alt="" />
								</div>
								<a href="tel:+92 300 6777686" className={styles.lists}>+92 300 6777686</a>
							</div>
							<div className="d-flex">
								<div>
									<StaticImage className={styles.picc} src="../../../assets/images/phone2.png" alt="" />
								</div>
								<a href="tel:+92 68 5905990" className={styles.lists}>+92 68 5905990</a>
							</div>
						</div>
					</Col>
					<Col className="text-center text-sm-center" xs={12} sm={4} md={4} >
						<StaticImage className={styles.mapimage} src="../../../assets/images/location.png" alt="" />
						<div>
							<div className={styles.addressdiv}>
								Mercury Sols, Abbasia Town Main Road, Rahim Yar Khan, Punjab 64200, Pakistan
							</div>
							<router-link to="/">
								<div className={styles.linkk}>
									<div className={styles.requestfooter}>	Request A Quote	</div>
								</div>
							</router-link>
						</div>
					</Col>
				</Row>
				</div>
			{/* </Container> */}
		</Container>
	)
}

export default Footer
