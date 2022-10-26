import dayjs from "dayjs";
import Image from "next/image";
import { Box, createStyles, Stack, Text } from "@mantine/core";
import { useNotifications } from "~/services/user";

const useStyles = createStyles((theme) => ({
  notificationItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.sm,
    padding: theme.spacing.xs,

    "&:hover": {
      backgroundColor: theme.colors.brand[0],
      cursor: "pointer",
    },
  },
}));

function Notifications() {
  const { classes } = useStyles();
  const { data } = useNotifications();

  return (
    <Stack>
      {data?.map((item, index) => (
        <Box key={item.createdAt + index} className={classes.notificationItem}>
          <div>
            <Image
              src={item.profile.path}
              width={50}
              height={50}
              layout="fixed"
              alt="notification"
              style={{ borderRadius: 50 }}
            />
          </div>
          <Box ml="sm">
            <Text size="sm">{item.content}</Text>
            <Text size="xs" color="gray">
              {dayjs(item.createdAt).fromNow()}
            </Text>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

export default Notifications;
