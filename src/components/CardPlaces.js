import { Card, Image, Row } from 'antd';

const CardPlaces = (props) => (
    <Row style={{justifyContent: "center"}}>
        <Card style={{ width: 300, height: 400, background: "none", border: "none", margin: 3 }} className={props.snap.snap? "snap": ""}>
            {props.cards.length > 1? 
                <Image width="100%" height="100%" src={props.cards[props.cards.length - 2].image} /> 
                : 
                <Card style={{ width: "100%", height: 350, background: "rgba(201, 201, 201, 0.37)", borderRadius: 15, margin: 3 }}/>}
        </Card>
        
        <Card style={{ width: 300, height: 400, background: "none", border: "none", margin: 3 }} className={props.snap.snap? "snap": ""}>
            {props.cards.length > 0? 
                <Image width="100%" height="100%" src={props.cards[props.cards.length - 1].image} /> 
                : 
                <Card style={{ width: "100%", height: 350, background: "rgba(201, 201, 201, 0.37)", borderRadius: 15, margin: 3 }}/>}
        </Card>
        
    </Row>
)


export default CardPlaces