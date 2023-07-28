import React from 'react'
import { Box ,Text } from '@chakra-ui/react'

export const BookingContents = (props) => {
    const { booking } = props;
    const { date, week, time, name, number_of_adults, number_of_children, booking_category, note } = booking
  return (
    <Box fontSize={"lg"}>
      <Text>
        {date}({week})
      </Text>
      <Text>{time}</Text>
      <Text>{name}</Text>
      <Text>
        大人{number_of_adults}人 子供
        {number_of_children}人
      </Text>
      <Text color={booking_category.name === "LINE" && "green.500"}>
        {booking_category.name}
      </Text>
      <Text>{note}</Text>
    </Box>
  );
}

