import { ActionIcon } from "@mantine/core";
import React from "react";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useAddToFavorite } from "~/services/user";
import { useStyles } from "./SlideShowStyle";

type Props = {
  isFavorite: number;
  id: number;
};

const LikeIcon = ({ isFavorite, id }: Props) => {
  const { classes } = useStyles();
  const { mutate } = useAddToFavorite();

  return (
    <div>
      {isFavorite ? (
        <ActionIcon
          onClick={() => mutate(id)}
          className={classes.filledIcon}
          radius={360}
          size="lg"
        >
          <BsFillSuitHeartFill size={20} />
        </ActionIcon>
      ) : (
        <ActionIcon
          onClick={() => mutate(id)}
          className={classes.icon}
          radius={360}
          size="lg"
        >
          <BsSuitHeart size={20} />
        </ActionIcon>
      )}
    </div>
  );
};

export default LikeIcon;
