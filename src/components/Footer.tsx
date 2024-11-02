import React from 'react';
import { Layout, Typography } from 'antd';
import styles from '@/styles/footer.scss'; // Optional custom styles if needed

const { Footer } = Layout;
const { Text } = Typography;

const ChatroomFooter: React.FC = () => {
  return (
    <Footer className="chatroom-footer" style={{ backgroundColor: '#000', padding: '10px 20px', textAlign: 'center',width:'100%' }}>
      <Text style={{ color: '#fff' }}>
        © 2024 Near&Dear Chatroom. All Rights Reserved.
      </Text>
    </Footer>
  );
};

export default ChatroomFooter;
