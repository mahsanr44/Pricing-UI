import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box pb={['112px']} as='section'>
            <Box color='gray.50' bg='purple.600' p='10px' pt='32px' pb='180px' display="flex" justifyContent="center" alignItems="center" textAlign={['left','left','center']}>
                <Heading fontWeight='extrabold' fontSize={['40px']} >
                    Simple pricing for your business
                    <Text fontWeight='500' fontSize={['20px']}  mt='10px' textAlign={['left','left','center']}>
                        Plans that are carefully crafted to suit your business.
                    </Text>
                </Heading>
            </Box>
        </Box>
    )
}
