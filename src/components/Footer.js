import { Layout, Row, Typography } from "antd";

const { Footer } = Layout

const FooterNav = () => (
    <Footer>
        <Row style={{justifyContent: "center"}}>
            <Typography>Snap game using the API: <a href="https://deckofcardsapi.com/" target="#">https://deckofcardsapi.com</a></Typography>
        </Row>
    </Footer>
)

export default FooterNav