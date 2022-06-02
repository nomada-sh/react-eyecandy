import React from "react";
import {Layout, Typography} from "antd";
import {Logo} from "../molecules/Logo";
import {PrimaryNav} from "../molecules/PrimaryNav";
import {PageHeader} from "../molecules/PageHeader";
import {FooterNav} from "../molecules/FooterNav";
import {CardList} from "../templates/CardList";

const {
  Content,
  Header,
  Footer
} = Layout;

const {Title, Paragraph, Text, Link} = Typography;

export function Cards() {
  return (
    <CardList
      title="Look at these amazing cards"
      subtitle="Wow, that's a really nice list of cards"
      cards={[
        {
          title: 'Card 1',
          image: 'https://picsum.photos/200',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Card 2',
          image: 'https://picsum.photos/300',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Card 3',
          image: 'https://picsum.photos/400',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Card 4',
          image: 'https://picsum.photos/500',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Card 5',
          image: 'https://picsum.photos/600',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Card 6',
          image: 'https://picsum.photos/700',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ]}
    />
  );
}

