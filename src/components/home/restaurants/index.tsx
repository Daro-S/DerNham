import {
  Text,
  Card,
  Badge,
  Button,
  Stack,
  Skeleton,
  Grid,
  createStyles,
} from '@mantine/core';

import {HeaderSection} from '../HeaderSection';
import {useVendors} from '~/services/vendor';
import {VendorImage} from '../VendorImage';
import {convertPromotionToString} from '~/utils/promotion';
import {StatusButton} from './StatusButton';
import {isBetweenCheck} from '~/utils';

const ListRestaurants = () => {
  const {data, isLoading} = useVendors();
  const {classes} = useStyles();

  return (
    <Skeleton visible={isLoading}>
      <Stack>
        <HeaderSection title="All restaurants" subtitle="" />
        <Grid pt={30} className={classes.listWrapper} gutter="lg" pb="sm">
          {data?.data.map(item => (
            <Grid.Col key={item.id} span={3}>
              <Card pb={0}>
                <Card.Section>
                  <VendorImage
                    blurhash={item.uploadImage.blurhash}
                    width={265}
                    src={item.uploadImage.path}
                    height={259}
                  />
                </Card.Section>
                {item.promotion && (
                  <Badge
                    className={classes.badge}
                    radius={3}
                    mt="75%"
                    size="lg">
                    {convertPromotionToString(
                      item.promotion.amount,
                      item.promotion.amountType,
                    )}{' '}
                    Discount
                  </Badge>
                )}
              </Card>
              <Text size="lg" weight="600">
                {item.name}
              </Text>
              <Text size="sm" weight={400}>
                {item.type.name}{' '}
                <span className={classes.dollar}>{item.priceRange}</span>
              </Text>
              <Text size="sm" weight={400}>
                Book {item.totalOfBooking} times
              </Text>

              {isBetweenCheck(item) ? (
                <StatusButton vendor={item} status="Now Open" time="Close" />
              ) : (
                <StatusButton vendor={item} status="Close" time="Tomorrow" />
              )}
              <Text size="sm" weight={400} pb={20}>
                {item.distance.toFixed(2)} km from you
              </Text>
            </Grid.Col>
          ))}
        </Grid>
        <Button
          mb={50}
          variant="outline"
          size="md"
          className={classes.ViewAllBtn}>
          View all menu
        </Button>
      </Stack>
    </Skeleton>
  );
};

const useStyles = createStyles(() => ({
  listWrapper: {
    alignItems: 'flex-start',
  },
  dollar: {
    color: '#3A9B7A',
  },
  badge: {
    background: '#FFA337',
    color: '#000000',
    position: 'absolute',
    left: '10%',
    top: '10%',
    textTransform: 'lowercase',
  },
  ViewAllBtn: {
    width: 335,
    borderRadius: 10,
    color: '#1A1A1A',
    fontWeight: 400,
    border: '1px solid rgba(0, 0, 0, 0.3)',
  },
}));

export default ListRestaurants;
