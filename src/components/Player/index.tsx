import { Box, Text, AspectRatio, Img } from "@chakra-ui/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { DefaultUi, Player as PlayerVime, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

interface PlayerProps {
  lessonSlug: string;
}

export function Player(props: PlayerProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
    fetchPolicy: "no-cache",
  });

  if (!data || !data.lesson) {
    return (
      <Box flex={1}>
        <Text p="6">Loading...</Text>
      </Box>
    );
  }

  return (
    <>
      <Box flex={1}>
        <Box bg="black" justifyContent="center">
          <AspectRatio ratio={16 / 9}>
            <PlayerVime>
              <Youtube videoId={data.lesson.videoId} />
              <DefaultUi />
            </PlayerVime>
          </AspectRatio>
        </Box>
        <Box p="8" maxW="1100px" mx="auto">
          <Box display={["block", "flex"]} alignItems="flex-start" gap="16">
            <Box flex={1}>
              <Text as="h1" fontSize="2xl" fontWeight="bold">
                {data.lesson.title}
              </Text>
              <Text as="p" fontSize="sm" mt="4" color="gray.200">
                {data.lesson.description}
              </Text>

              {data.lesson.teacher && (
                <Box display="flex" alignItems="center" gap="4" mt="6">
                  <Img
                    src={data.lesson.teacher.avatarURL}
                    w="calc(3rem + 16px)"
                    h="calc(3rem + 16px)"
                    borderRadius={8}
                    border="4px solid #202024"
                    outline="2px solid #42D3FF"
                    objectFit="cover"
                    alt="Profile image"
                  />
                  <Box display="flex" flexDirection="column" gap="2">
                    <Text fontSize="2xl" fontWeight="bold" display="block">
                      {data.lesson.teacher.name}
                    </Text>
                    <Text
                      as="span"
                      fontSize="sm"
                      color="gray.200"
                      display="block"
                    >
                      {data.lesson.teacher.bio}
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>
            <Box display="flex" mt={["4", "0"]} flexDirection="column" gap="4">
              <Box
                as="a"
                href=""
                p="4"
                fontSize="sm"
                bg="brand.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="bold"
                rounded="4"
                gap="2"
                _hover={{
                  bg: "brand.500",

                  transition: "all .2s ease-in-out",
                }}
              >
                <DiscordLogo size="24" />
                Comunidade no Discord
              </Box>
              <Box
                as="a"
                href=""
                p="4"
                fontSize="sm"
                border="1px solid #3BB8FF"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="bold"
                rounded="4"
                color="brand.600"
                gap="2"
                _hover={{
                  bg: "brand.500",
                  color: "gray.900",
                  transition: "all .2s ease-in-out",
                }}
              >
                <Lightning size="24" />
                Acesse o desafio
              </Box>
            </Box>
          </Box>
          <Box gap="8" mt="20" display="flex" gridColumn="2">
            <Box
              as="a"
              href=""
              bg="gray.700"
              rounded="4"
              overflow="hidden"
              display="flex"
              outline="1px solid #202024"
              alignItems="stretch"
              justifyContent="space-between"
              gap="6"
              _hover={{
                bg: "gray.600",
                transition: "all .2s ease-in-out",
              }}
            >
              <Box
                bg="brand.500"
                h="full"
                p="6"
                display="flex"
                alignItems="center"
              >
                <FileArrowDown size="40" />
              </Box>
              <Box py="6">
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  Material complementar
                </Text>
                <Text fontSize="sm" color="gray.200" mt="2">
                  Acesse o material complementar para acelerar o seu
                  desenvolvimento
                </Text>
              </Box>
              <Box
                h="full"
                p="6"
                display="flex"
                color="brand.500"
                alignItems="center"
              >
                <CaretRight size="24" />
              </Box>
            </Box>
            <Box
              as="a"
              href=""
              bg="gray.700"
              rounded="4"
              overflow="hidden"
              outline="1px solid #202024"
              display="flex"
              alignItems="stretch"
              justifyContent="space-between"
              gap="6"
              _hover={{
                bg: "gray.600",
                transition: "all .2s ease-in-out",
              }}
            >
              <Box
                bg="brand.500"
                h="full"
                p="6"
                display="flex"
                alignItems="center"
              >
                <FileArrowDown size="40" />
              </Box>
              <Box py="6">
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  Wallpaper exclusivos
                </Text>
                <Text fontSize="sm" color="gray.200" mt="2">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                  máquina
                </Text>
              </Box>
              <Box
                h="full"
                p="6"
                display="flex"
                color="brand.500"
                alignItems="center"
              >
                <CaretRight size="24" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
