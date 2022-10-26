import { Button } from "@mantine/core";
import dayjs from "dayjs";
import { IVendor } from "~/domains/vendor";
import { convertTime24To12 } from "~/utils";
import { useStyles } from "../SlideShowStyle";

type Props = {
  vendor: IVendor;
  status: string;
  time: string;
};

export const StatusButton = ({ vendor, status, time }: Props) => {
  const today = dayjs().day() - 1;
  const { classes } = useStyles();

  return (
    <Button
      variant="outline"
      className={
        status === "Close" ? classes.closeButton : classes.Activebutton
      }
      radius={6}
    >
      {status}
      <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
        &nbsp; - {time} {convertTime24To12(vendor.openingTime[today].close)}
      </span>
    </Button>
  );
};
