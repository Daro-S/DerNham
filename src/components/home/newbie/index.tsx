import { Carousel } from "@mantine/carousel";
import { Button, Card, Group, Skeleton, Text } from "@mantine/core";
import React from "react";

import { HeaderSection } from "../HeaderSection";
import { useStyles } from "../SlideShowStyle";
import { VendorImage } from "../VendorImage";
import { useVendors } from "~/services/vendor";
import LikeIcon from "../LikeIcon";

const Newbie = () => {
  const { classes } = useStyles();
  const { data, isLoading } = useVendors({ orderBy: "asc" });

  return (
    <Skeleton visible={isLoading}>
      <Group position="apart">
        <HeaderSection
          title="Newbie restaurants"
          subtitle="You might want to check these restaurant"
        />
        <Button mt={40} className={classes.viewAllBtn}>
          View all
        </Button>
      </Group>
      <Carousel
        mt="lg"
        slideSize="18%"
        slideGap="md"
        align="start"
        slidesToScroll={3}
        draggable
        classNames={{
          control: classes.control,
        }}
      >
        {data?.data.map((item) => (
          <Carousel.Slide key={item.id}>
            <Card>
              <Card.Section>
                <VendorImage
                  width={265}
                  height={270}
                  blurhash={item.uploadImage.blurhash}
                  src={item.uploadImage.path}
                />
              </Card.Section>
              <LikeIcon isFavorite={item.isFavorite} id={item.id} />
            </Card>
            <Text size="lg" weight="600">
              {item.name}
            </Text>
            <Text size="sm" weight={400}>
              Book {item.totalOfBooking} times
            </Text>
            <Text size="sm" weight={400}>
              {item.type.name}{" "}
              <span className={classes.dollar}> {item.priceRange}</span>
            </Text>
            <Text size="sm" weight={400}>
              {item.city.name}
            </Text>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Skeleton>
  );
};

export default Newbie;
