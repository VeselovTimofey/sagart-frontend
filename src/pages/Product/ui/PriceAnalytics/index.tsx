// NOTE: This is a temporary component

import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { Avatar, Typography, Stack } from '@mui/material';
import { ArrowDropUp } from '@mui/icons-material';
import { IproductPriceData } from '../../../../utils/mock/priceHistory';

interface IPriceAnalytics {
  data: IproductPriceData;
}

export default function PriceAnalytics({
  data: { price, priceHistory },
}: IPriceAnalytics) {
  return (
    <Stack direction="column" gap={1.25}>
      <Stack direction="row" gap={3}>
        <Avatar src="/sagart-frontend/self-portrait.jpeg" />
        <Stack direction="column" gap={0.5}>
          <Typography fontWeight={600}>
            {price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            })}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography fontSize={12}>44 000 ₽ | +30,3%</Typography>
            <ArrowDropUp color="success" />
          </Stack>
        </Stack>
      </Stack>
      <SparkLineChart
        sx={{ border: '1px solid #D9D9D9' }}
        colors={['#63ABFD']}
        data={Array.from(priceHistory.entries()).map(([, value]) => value)}
        xAxis={{
          scaleType: 'time',
          data: Array.from(priceHistory.keys()).map((date) => new Date(date)),
          valueFormatter: (value: Date) => value.toLocaleDateString(),
        }}
        height={100}
        showTooltip
        showHighlight
      />
      <Typography fontSize={12}>Период: 1 год</Typography>
    </Stack>
  );
}
