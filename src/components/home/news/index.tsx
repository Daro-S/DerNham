import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Card,
  Divider,
  Group,
  Skeleton,
  Text,
} from "@mantine/core";
import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { usePromotionBanner } from "~/services/vendor";
import { HeaderSection } from "../HeaderSection";
import { useStyles } from "../SlideShowStyle";
import { VendorImage } from "../VendorImage";

export const News = () => {
  const { data, isLoading } = usePromotionBanner();
  const { classes } = useStyles();

  return (
    <div>
      <div>
        <Text size="sm" color="rgba(0, 0, 0, 0.6)" pb={21}>
          <Group>
            It’s look like you are in [location district,Siem Reap].
            <div>
              <Group>
                <ActionIcon className={classes.actionIcon} radius={360}>
                  <BiTargetLock size={18} color={"white"} />
                </ActionIcon>
                <Text color={"#FFA337"} weight={500} size="sm">
                  Find place nearby
                </Text>
              </Group>
            </div>
          </Group>
        </Text>
        <Divider color={"rgba(0, 0, 0, 0.05)"} />
      </div>
      {data?.length != 0 && (
        <Skeleton visible={isLoading}>
          <HeaderSection
            title="News and promotion"
            subtitle="Stay up to date and grab your promotion"
          />
          <Carousel
            slideSize="18%"
            slideGap="md"
            align="start"
            slidesToScroll={3}
            classNames={{
              control: classes.control,
            }}
          >
            {data?.map((item) => (
              <Carousel.Slide key={item.id}>
                <Card>
                  <Card.Section>
                    <VendorImage
                      width={280}
                      height={200}
                      blurhash={item.uploadImage.blurhash}
                      src={item.uploadImage.path}
                    />
                  </Card.Section>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Skeleton>
      )}
    </div>
  );
};
