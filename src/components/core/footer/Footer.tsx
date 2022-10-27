import {
  Container,
  CSSObject,
  Grid,
  Group,
  List,
  Space,
  Text,
} from '@mantine/core';
import React from 'react';
import {AiFillFacebook} from 'react-icons/ai';
import {SiTelegram} from 'react-icons/si';
import {FaTwitterSquare} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';

const Footer = () => {
  const wrapper: CSSObject = {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };
  //style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A" }}
  return (
    <div style={{backgroundColor: '#F2F9FF'}}>
      <Container size="lg" pb={120.78} pt={50}>
        <div>
          <Group sx={wrapper}>
            <Grid style={{width: '25%'}}>
              <Text weight={600} size="md">
                Dernham
              </Text>
              <Space h="sm" />
              <Text
                size="sm"
                pb="lg"
                weight={400}
                color="rgba(26, 26, 26, 0.8)">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus,
                libero massa, felis sit eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Risus, libero massa, felis sit eu.
              </Text>
              <Grid>
                <Grid.Col>
                  <Text weight={600} size="md">
                    Follow us on
                  </Text>
                </Grid.Col>
                <Grid.Col>
                  <Group style={{fontSize: 21, color: '#1A1A1A'}}>
                    <AiFillFacebook />
                    <SiTelegram />
                    <FaTwitterSquare />
                    <BsYoutube />
                  </Group>
                </Grid.Col>
              </Grid>
            </Grid>
            <div>
              <Text weight={600} size="md" color="#1A1A1A">
                Popular Attraction
              </Text>
              <Space h="sm" />
              <List
                size="sm"
                listStyleType="none"
                style={{color: 'rgba(26, 26, 26, 0.8)'}}>
                <List.Item>Angkor Wat</List.Item>
                <List.Item>Chongkranroy community</List.Item>
                <List.Item>Phnom Khrom</List.Item>
                <List.Item>Banteay Srey</List.Item>
                <List.Item>Bakong </List.Item>
                <List.Item>Baray </List.Item>
              </List>
            </div>
            <div>
              <Text weight={600} size="md" color="#1A1A1A">
                Available Cities
              </Text>
              <Space h="sm" />
              <List
                size="sm"
                listStyleType="none"
                style={{color: 'rgba(26, 26, 26, 0.8)'}}>
                <List.Item>Siem Reap</List.Item>
                <List.Item>Phnom Penh</List.Item>
                <List.Item>Battambang</List.Item>
              </List>
            </div>
            <div>
              <Text size="md" weight={600} color="#1A1A1A">
                Join DerNham
              </Text>
              <Space h="sm" />
              <Text size="sm" color="rgba(26, 26, 26, 0.8)">
                Become DerNham vendor Career
              </Text>
            </div>
          </Group>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
