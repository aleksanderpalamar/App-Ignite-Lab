import {Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure} from '@chakra-ui/react'
import {Book, SquaresFour} from 'phosphor-react'
import Vscode from '../Vscode'

interface ButtonPostsProps {
  title: string
}

export function ButtonApp({title}: ButtonPostsProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()  

  return (
    <>
      <HStack isInline align="center" justify="center" spacing={4} mt={4}>
      <Box
        as="a"
        onClick={onOpen}
        cursor="pointer"        
        bg="transparent"
        color="gray.100"
        border="1px solid #42D3FF"
        rounded={4}
        h="50px"
        padding="0 1.5rem"
        fontWeight="bold"
        textDecoration="none"
        display="flex"
        alignItems="center"        
        gap="0.5rem"
        fontSize="0.875rem"
        marginBottom="1.5rem"
        _hover={{
          bg: 'brand.600',
          color: 'white',
          transition:
            'color 0.2s ease-in-out, background-color 0.2s ease-in-out'
        }}
        _focus={{
          outline: 'transparent',
          boxShadow: '0 0 0 2px #42D3FF'
        }}
      >
        <SquaresFour size="20" />
        {title}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          rounded={'2xl'}
          maxW="100%"
          w="100%"
          h="100%"
          backgroundColor="rgba(255, 255, 255, 0.05)"
          backdropFilter="saturate(190%) blur(5px)"
        >
          <ModalCloseButton
            position="absolute"
            top={0}
            right={0}
            mt={4}
            mr={4}
            cursor="pointer"
            _hover={{color: 'red'}}
            transition="all 0.4s ease-in-out"
          />
          <ModalBody p={6} boxShadow="dark-lg">
            <Vscode />
          </ModalBody>
        </ModalContent>
      </Modal>
      </HStack>      
    </>
  )
}
