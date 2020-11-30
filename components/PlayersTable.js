import React from 'react';
import Link from 'next/link';
import { Box, Code, IconButton, Switch, Text } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

const PlayersTable = ({playerDetails}) => {
  return (
    <Table mb={20} mt={40} w={600}>
      <thead>
        <Tr>
          <Th w="300px">Name</Th>
          <Th>Details</Th>
        </Tr>
      </thead>
      <tbody>
      {playerDetails.map((playerDetails) => (
          <Box as="tr" key={playerDetails.Player_Name}>
            <Td fontWeight="medium">{playerDetails.Player_Name}</Td>
            <Td>
                <Link href={`/player/${playerDetails.Player_Name}`}>
                    <a>View Details</a>
                </Link>
            </Td>
          </Box>
        ))}

      </tbody>
    </Table>
  );
};

export default PlayersTable;
