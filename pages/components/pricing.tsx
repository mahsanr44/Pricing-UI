import { Box, Button, Flex, Heading, Text, HStack, Icon, StackProps, Stack } from '@chakra-ui/react';
import React from 'react';
import CheckIcon from '../components/icons';


function ListItem(props: StackProps) {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' align='flex-start' {...rest}>
            <Icon as={CheckIcon} h='22px' w='22px' flexShrink={0} />
            <Text textAlign={['left', 'left', 'center']}>{children}</Text>
        </HStack>
    )
}

export default function Pricing() {
    return (
        <Box mx={['6']}>
            <Box maxW={['994px']} margin='auto' mt='-258px' borderRadius='12px' overflow='hidden' boxShadow='box-shadow: 0px 10px 10px -5px #0000000A;
        box-shadow: 0px 20px 25px -5px #0000001A;' >
                <Flex direction={['column', 'column', 'row']}>
                    <Box bg='#F0EAFB' p={['62px']}   >
                        <Text fontSize='24px' fontWeight='800' >Premium PRO</Text>
                        <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='16px'>$329</Heading>
                        <Text fontSize='18px' fontWeight='500' mt='8px'> billed just once</Text>
                        <Button colorScheme='purple' size='lg' w={['auto', '282px', '282px']}
                            mt='6'>Get Started</Button>
                    </Box>
                    <Box p={['32px', '32px', '60px']} fontSize='18px' bg='white'>
                        <Text textAlign='left'>
                            Access these features when you get this pricing package for your business.
                        </Text>
                        <Stack as='ul' spacing='5' pt='6'>
                            <ListItem>International calling and messaging API</ListItem>
                            <ListItem>Additional phone numbers</ListItem>
                            <ListItem>Automated messages via Zapier</ListItem>
                            <ListItem>24/7 support and consulting</ListItem>

                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}