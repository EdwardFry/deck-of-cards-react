import { Row, Typography } from "antd"

const { Title } = Typography

const SnapOutput = (props) => (
    <Row style={{justifyContent: "center"}}>
        {props.snap.snap? <Title>SNAP {props.snap.type}!</Title> : <Title style={{color: "white"}}>.</Title>}
    </Row>
)

export default SnapOutput