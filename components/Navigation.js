import React from 'react';
import { Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';


const Navigation = ({home, goBack}) => {

    return (
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            <Link href={home}>
              <a>Home</a>
            </Link>
            
          </Button>
          <Button colorScheme="teal" variant="outline">
          <Link href={goBack}>
              <a>Go Back</a>
            </Link>
          </Button>
        </Stack>
    )

}

export default Navigation;