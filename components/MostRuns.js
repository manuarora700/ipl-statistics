import React from 'react';
import { Box, Code, IconButton, Switch, Text } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

import Link from 'next/link';

import { useState } from 'react';

const MostRuns = ({mostRunsDetails}) => {
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
      {mostRunsDetails.map((details) => (
          <Box as="tr" key={details.batsman}>
            <Td fontWeight="medium">{details.batsman}</Td>
            <Td>{details.total_runs}</Td>
            <Td>
                    <Code>{details.out}</Code>
            </Td>
            <Td>
              {details.numberofballs}
            </Td>
            <Td>
              {details.average}
            </Td>
            <Td>
              {details.strikerate}
            </Td>
            <Td>
              <Link href={`/player/${details.batsman}`}>
                  <a>View Details</a>
              </Link>
            </Td>
          </Box>
         ))}
      </tbody>
    </Table>
  );
};

export default MostRuns;
