import React from "react";
import {Layout, Typography} from "antd";
import {Logo} from "../molecules/Logo";
import {PrimaryNav} from "../molecules/PrimaryNav";
import {PageHeader} from "../molecules/PageHeader";
import {FooterNav} from "../molecules/FooterNav";

const {
  Content,
  Header,
  Footer
} = Layout;

const {Title, Paragraph, Text, Link} = Typography;

export function BlogPost() {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <PrimaryNav />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <PageHeader
          title="Blog Post"
          subtitle="Posted by John Doe"
          style={{margin: '1.5rem 0'}}
        />
        <div
          style={{
            background: "#fff",
            padding: "1.5rem",
          }}
        >
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam necessitatibus reprehenderit ipsum repellat quasi ratione sit possimus 🙂 eveniet, ea, ut mollitia repudiandae eligendi unde aperiam molestiae voluptatibus error. Dolorem, iure.
          </Paragraph>
          <Paragraph>
            Lorem <Text strong>ipsum dolor sit amet</Text>, consectetur adipiscing elit. Integer fringilla sem a urna porttitor fringilla. Nulla eget justo felis. eget volutpat justo mattis nec. Sed a orci turpis. Aliquam aliquet placerat dui.
          </Paragraph>
          <Paragraph>
            <Link>Aliquam erat volutpat.</Link> Mauris vulputate scelerisque feugiat. Cras a erat a diam venenatis aliquam. Sed tempus, purus ac pretium varius, risus orci sagittis purus, quis auctor libero magna nec magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eros dolor.
          </Paragraph>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <FooterNav />
      </Footer>
    </Layout>
  );
}

