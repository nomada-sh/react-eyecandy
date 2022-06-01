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

export function Page() {
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
        <PageHeader style={{marginTop: '1.5rem'}}>
          This is the page title
        </PageHeader>
        <div
          style={{
            background: "#fff",
            padding: "1.5rem",
          }}
        >
          <Title level={2}>
            This is a second-level title
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam necessitatibus reprehenderit ipsum repellat quasi ratione sit possimus 🙂 eveniet, ea, ut mollitia repudiandae eligendi unde aperiam molestiae voluptatibus error. Dolorem, iure.
          </Paragraph>
          <Paragraph>
            Lorem <Text strong>ipsum dolor sit amet</Text>, consectetur adipiscing elit. Integer fringilla sem a urna porttitor fringilla. Nulla eget justo felis. eget volutpat justo mattis nec. Sed a orci turpis. Aliquam aliquet placerat dui.
          </Paragraph>
          <Paragraph>
            <Link>Aliquam erat volutpat.</Link> Mauris vulputate scelerisque feugiat. Cras a erat a diam venenatis aliquam. Sed tempus, purus ac pretium varius, risus orci sagittis purus, quis auctor libero magna nec magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eros dolor.
          </Paragraph>
          <Paragraph>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ol>
          </Paragraph>
          <Title level={3}>
            This is a third-level title
          </Title>
          <Paragraph>
            Aliquam ultrices cursus mauris, eget volutpat justo mattis nec. Sed a orci turpis. Aliquam aliquet placerat dui, consectetur tincidunt leo tristique et. Vivamus enim nisi, blandit a venenatis quis, convallis et arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero sapien, placerat in sodales eu, tempor quis dui. Vivamus egestas faucibus pulvinar. Maecenas eget diam nunc. Phasellus at sem eros, ac suscipit neque. Phasellus sollicitudin libero a odio dignissim scelerisque. Aliquam purus nulla, tempor eget ullamcorper quis, rhoncus non dui.
          </Paragraph>
          <Title level={3}>
            <Link>
              This is a linked title
            </Link>
          </Title>
          <Paragraph>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            <blockquote>
              This is a blockquote. Eget volutpat justo mattis nec. Sed a orci turpis. Aliquam aliquet placerat dui, consectetur tincidunt leo eget est blandit dignissim a eu ante. Morbi augue nulla Cite Source
            </blockquote>
          </Paragraph>
          <Title level={4}>
            This is a forth-level title
          </Title>
          <Paragraph>
            Cras at fringilla ipsum. Donec nec libero eget est blandit dignissim a eu ante. Morbi augue nulla, luctus eu sagittis vel, malesuada ut felis. Aliquam erat volutpat. Morbi malesuada augue ac massa hendrerit fermentum. Integer scelerisque lacus a dolor convallis lobortis. Curabitur mollis ante in massa ultricies dignissim.
          </Paragraph>
          <Title level={5}>
            This is a fifth-level title
          </Title>
          Cras at fringilla ipsum. Donec nec libero eget est blandit dignissim a eu ante. Morbi augue nulla, luctus eu sagittis vel.
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

