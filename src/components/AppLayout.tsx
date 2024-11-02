import React from "react";
import { Layout } from "antd";
import Header from "../components/Header"
import Footer from "../components/Footer"



const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Layout style={{ 
      display: 'flex',
      minHeight: '100vh',
   
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    }}>
      <Header></Header>
      <Content style={{}}>{children}</Content>
      <Footer ></Footer>
    </Layout>
  );
};

export default AppLayout;
