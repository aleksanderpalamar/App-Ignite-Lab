import { Box, Text } from "@chakra-ui/react";
import { useGetLessonsQuery } from "../../graphql/generated";
import { Lesson } from "../Cards/Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <>
      <Box as="aside" w="384px" p="6" borderLeft="1px solid #202024">
        <Text
          as="span"
          fontSize="2xl"
          fontWeight="bold"
          pb="6"
          mb="6"
          borderBottom="2px solid #202024"
          display="block"
        >
          Cronograma das Aulas
        </Text>
        <Box display="flex" flexDirection="column" gap="8">
           {data?.lessons.map(lesson => {
            return (
              <Lesson 
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
           })}       
        </Box>
      </Box>
    </>
  );
}
