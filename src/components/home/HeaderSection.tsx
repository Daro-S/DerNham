import { Text, Title } from "@mantine/core";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
};
export const HeaderSection = ({ title, subtitle }: Props) => {
  return (
    <div>
      <Title pt={60} order={3}>
        {title}
      </Title>
      <Text size="sm" weight="400" sx={{ opacity: 0.6 }} mb={20}>
        {subtitle}
      </Text>
    </div>
  );
};
