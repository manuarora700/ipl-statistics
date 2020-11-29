import React from 'react';
import { Box, Code, IconButton, Switch, Text } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

const TeamDetails = ({teamDetails}) => {
    // console.log("TEAM DETAILS:",teamDetails);
  return (
    <Table mb={20} mt={40} w={1000}>
      <thead>
        <Tr>
          <Th w="200px">Name</Th>
          <Th>Home Wins</Th>
          <Th>Away Wins</Th>
          <Th>Home Matches</Th>
          <Th>Away Matches</Th>
          <Th>Home Win %</Th>
          <Th>Away Win %</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
      
          <Box as="tr" key={teamDetails.team}>
            <Td fontWeight="medium">{teamDetails.team}</Td>
            <Td>{teamDetails.home_wins}</Td>
            <Td>
                    <Code>{teamDetails.away_wins}</Code>
            </Td>
            <Td>
              {teamDetails.home_matches}
            </Td>
            <Td>
              {teamDetails.away_matches}
            </Td>
            <Td>
              {teamDetails.home_win_percentage}
            </Td>
            <Td>
              {teamDetails.away_win_percentage}
            </Td>
          </Box>
    
      </tbody>
    </Table>
  );
};

export default TeamDetails;
