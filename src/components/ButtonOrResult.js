import { Row, Button, Typography } from "antd"

const { Title } = Typography

const ButtonOrResult = (props) => (
    <Row style={{justifyContent: "center", margin: "50px 0px"}}>
        {props.deckMetaData.remaining > 0? 
          <Button type="primary" shape="round" size="large" onClick={props.drawCard}>Draw card</Button>
          :
          <Title style={{background: "white", padding: 10, borderRadius: 10}}>Suit Matches: {props.suitMatches}, Value Matches: {props.valueMatches}</Title>
        }
    </Row>
)

export default ButtonOrResult