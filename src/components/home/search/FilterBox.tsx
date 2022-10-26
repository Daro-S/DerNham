import dayjs from "dayjs";
import {
  ActionIcon,
  Button,
  createStyles,
  Group,
  Menu,
  Popover,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { Calendar } from "@mantine/dates";
import { IoPeopleOutline } from "react-icons/io5";
import {
  convertTime12To24,
  convertTime24To12,
  dateFormat,
  getSelectTimes,
} from "~/utils";
import { useSearchFormContext } from "./context";

import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "next-i18next";

export const FilterBox = () => {
  return (
    <Button.Group>
      <SelectGuest />
      <SelectTime />
      <SelectDate />
    </Button.Group>
  );
};

export const SelectGuest = () => {
  const { t } = useTranslation(["common", "home"]);
  const { classes } = useStyles();
  const { values, setFieldValue } = useSearchFormContext();

  function increase() {
    setFieldValue("guest", values.guest + 1);
  }

  function decrease() {
    setFieldValue("guest", values.guest > 1 ? values.guest - 1 : 1);
  }

  return (
    <Popover width={300} withArrow withinPortal>
      <Popover.Target>
        <Button
          size="lg"
          color="dark"
          variant="white"
          leftIcon={<IoPeopleOutline />}
          classNames={{ label: classes.btnLabel }}
        >
          {values.guest} {t("common.guest")}
        </Button>
      </Popover.Target>
      <Popover.Dropdown py="lg">
        <Title order={5}>{t("home.searchGuestTitle")}</Title>
        <Group mt="md" position="apart">
          <Group>
            <IoPeopleOutline />
            <Text size="sm">
              {values.guest} {t("common.guest")}
            </Text>
          </Group>
          <Group>
            <ActionIcon variant="filled" radius="xl" onClick={decrease}>
              <AiOutlineMinus />
            </ActionIcon>
            <ActionIcon
              color="brand"
              variant="filled"
              radius="xl"
              onClick={increase}
            >
              <AiOutlinePlus />
            </ActionIcon>
          </Group>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
};

const SelectTime = () => {
  const { classes } = useStyles();
  const [opened, { close, toggle }] = useDisclosure(false);
  const { values, setFieldValue } = useSearchFormContext();

  function onSelect(time: string) {
    setFieldValue("time", convertTime12To24(time));
    close();
  }

  const times = getSelectTimes();

  return (
    <Menu width={100} opened={opened} onChange={toggle} withArrow withinPortal>
      <Menu.Target>
        <Button
          size="lg"
          variant="default"
          onClick={toggle}
          leftIcon={<AiOutlineClockCircle />}
          classNames={{ label: classes.btnLabel }}
        >
          {convertTime24To12(values.time)}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <ScrollArea style={{ height: 250 }}>
          {times.map((item) => (
            <Menu.Item key={item.day} onClick={() => onSelect(item.time)}>
              {item.time}
            </Menu.Item>
          ))}
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
};

const SelectDate = () => {
  const { classes } = useStyles();
  const [opened, { close, toggle }] = useDisclosure(false);
  const { values, setFieldValue } = useSearchFormContext();

  function onChange(date: Date | null) {
    setFieldValue("date", dateFormat(date!));
    close();
  }

  return (
    <Popover opened={opened} onChange={toggle} withArrow withinPortal>
      <Popover.Target>
        <Button
          size="lg"
          onClick={toggle}
          variant="default"
          leftIcon={<AiOutlineCalendar />}
          classNames={{ label: classes.btnLabel }}
        >
          {dayjs(values.date).format("ddd DD MMM")}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Calendar value={dayjs(values.date).toDate()} onChange={onChange} />
      </Popover.Dropdown>
    </Popover>
  );
};

const useStyles = createStyles((theme) => ({
  btnLabel: {
    fontSize: theme.fontSizes.sm,
    fontWeight: "normal",
  },
}));
