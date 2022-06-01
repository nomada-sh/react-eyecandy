import React from "react";
import {Col, Layout, Menu, Row} from "antd";
import {MailOutlined, AppstoreOutlined} from "@ant-design/icons";
import {Logo} from "../molecules/Logo";
import Meta from "antd/lib/card/Meta";
import {PrimaryNav} from "../molecules/PrimaryNav";
import {Card} from "../molecules/Card";
import {PageHeader} from "../molecules/PageHeader";
import {FooterNav} from "../molecules/FooterNav";

export type Card = {
  title: string;
  description?: string;
  image?: string;
}


export interface CardListProps {
  title: string;
  subtitle: string;
  cards: Card[];
}

const {
  Content,
  Header,
  Footer
} = Layout;

export function CardList({
  title, subtitle, cards,
}: CardListProps) {
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
        <PageHeader style={{ marginTop: '1.5rem' }}>
          {title}
        </PageHeader>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            background: "#fff",
            padding: "1.5rem",
          }}
        >
          {cards.map((card, i) => (
            <Card
              key={i}
              style={{
                flex: "1 0 auto",
                width: 240
              }}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
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

