import React from 'react';
import { Box, Code, IconButton, Switch, Text } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

import Link from 'next/link';

import { useState } from 'react';

const IndividualStats = ({individualDetails}) => {
    console.log(individualDetails);
  return (
    <Table mb={20} mt={40} w={1000}>
      <thead>
        <Tr>
          <Th w="200px">Name</Th>
          <Th>Total Runs</Th>
          <Th>Out</Th>
          <Th>Number of Balls</Th>
          <Th>Average</Th>
          <Th>StrikeRate</Th>
          <Th>Player Details</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
          <Box as="tr" key={individualDetails.batsman}>
            <Td fontWeight="medium">{individualDetails.batsman}</Td>
            <Td>{individualDetails.total_runs}</Td>
            <Td>
                    <Code>{individualDetails.out}</Code>
            </Td>
            <Td>
              {individualDetails.numberofballs}
            </Td>
            <Td>
              {individualDetails.average}
            </Td>
            <Td>
              {individualDetails.strikerate}
            </Td>
            <Td>
              <Link href={`/player/${individualDetails.batsman}`}>
                  <a>View Details</a>
              </Link>
            </Td>
          </Box>
      </tbody>
    </Table>
  );
};

export default IndividualStats;
