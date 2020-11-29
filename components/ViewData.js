import React from 'react';
import { Box, Code, IconButton, Switch, Text } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

const ViewData = ({playerDetails}) => {
  return (
    <Table mb={20} mt={40} w={1000}>
      <thead>
        <Tr>
          <Th w="200px">Name</Th>
          <Th>Country</Th>
          <Th>DOB</Th>
          <Th>Batting</Th>
          <Th>Bowling</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
       
          <Box as="tr" key={playerDetails.Player_Name}>
            <Td fontWeight="medium">{playerDetails.Player_Name}</Td>
            <Td>{playerDetails.Country}</Td>
            <Td>
                    <Code>{playerDetails.DOB}</Code>
            </Td>
            <Td>
              {playerDetails.Batting_Hand}
            </Td>
            <Td>
              {playerDetails.Bowling_Skill}
            </Td>
          </Box>
        
      </tbody>
    </Table>
  );
};

export default ViewData;
