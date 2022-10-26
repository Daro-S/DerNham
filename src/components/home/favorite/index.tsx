import { Carousel } from "@mantine/carousel";
import { Card, Skeleton, Text } from "@mantine/core";
import React from "react";

import { HeaderSection } from "../HeaderSection";
import { useFavorite } from "~/services/user";
import { VendorImage } from "../VendorImage";
import { useStyles } from "../SlideShowStyle";
import LikeIcon from "../LikeIcon";
import { useSession } from "next-auth/react";
import { IVendor } from "~/domains/vendor";
import Link from "next/link";

const Favorite = () => {
  const onSucess = (data: IVendor) => {
    console.log(data);
  };
  const onError = (error: any) => {
    console.log(error);
  };

  const { data, isLoading } = useFavorite(onSucess, onError);
  const { classes } = useStyles();
  const session = useSession();
  const isLogin = session.status === "authenticated";
  const dataExisted = data?.data.length != 0;

  return (
    <div>
      {isLogin && dataExisted && (
        <>
          <Skeleton visible={isLoading}>
            <HeaderSection title="Your favorite restaurant" subtitle="" />
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
                      <Link href={"/vendors/" + item.id}>
                        <VendorImage
                          alt={item.name}
                          blurhash={item.uploadImage.blurhash}
                          width={250}
                          height={219}
                          src={item.uploadImage.path}
                        />
                      </Link>
                    </Card.Section>
                    <LikeIcon isFavorite={item.isFavorite} id={item.id} />
                    <Text size="md" weight={600}>
                      {item.name}
                    </Text>
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Skeleton>
        </>
      )}
    </div>
  );
};

export default Favorite;
