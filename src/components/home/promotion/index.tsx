import { Carousel } from "@mantine/carousel";
import { Card, Badge, Text, Skeleton, Button, Group } from "@mantine/core";
import React from "react";

import { HeaderSection } from "../HeaderSection";
import { useVendors } from "~/services/vendor";
import { VendorImage } from "../VendorImage";
import { convertPromotionToString } from "~/utils/promotion";
import { useStyles } from "../SlideShowStyle";
import LikeIcon from "../LikeIcon";

export const Promotion = () => {
  const { data, isLoading } = useVendors();
  const { classes } = useStyles();

  return (
    <Skeleton visible={isLoading}>
      <Group position="apart">
        <HeaderSection
          title="Grab your promotion"
          subtitle="Don't miss this promotion event"
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
              {item.promotion && (
                <Badge className={classes.badge} radius={3} mt="80%" size="lg">
                  {convertPromotionToString(
                    item.promotion.amount,
                    item.promotion.amountType
                  )}{" "}
                  Discount
                </Badge>
              )}
            </Card>
            <Text size="lg" weight="600">
              {item.name}
            </Text>
            <Text size="sm" weight={400}>
              Book {item.totalOfBooking} times
            </Text>
            <Text size="sm" weight={400}>
              {item.type.name}.{" "}
              <span className={classes.dollar}>{item.priceRange}</span>
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
