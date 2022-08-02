import { Layout, Space, Typography } from "antd";
const { Header } = Layout;

const HeaderNav = () => (
    <Header>
        <Space>
          <Typography className="brand">🐊 Snap Game</Typography>
        </Space>
    </Header>
)

export default HeaderNav