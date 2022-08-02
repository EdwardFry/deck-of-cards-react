import { Row, Typography } from "antd"

const { Title } = Typography

const CardCounter = (props) => (
    <Row style={{justifyContent: "center", marginTop: "50px"}}>
        {props.deckMetaData? <Title style={{background: "white", padding: 10, borderRadius: 10}} level={2}>Card {52 - props.deckMetaData.remaining} of 52</Title>: <></>}
    </Row>
)

export default CardCounter