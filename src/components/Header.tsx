import React from 'react';
import { Layout, Typography } from 'antd';
import styles from '@/styles/header.scss'; // Import your custom styles if needed

const { Header } = Layout;
const { Title } = Typography;

const ChatroomHeader: React.FC = () => {
  return (
    <Header className="chatroom-header" style={{ backgroundColor: '#000',width:'100%', padding: '0 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Title level={2} style={{ color: '#fff', margin: 0 }}>
        NEAR&DEAR
      </Title>
    </Header>
  );
};

export default ChatroomHeader;
