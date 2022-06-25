import { Box } from "@chakra-ui/react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);

  const availableDateFormatted = format(props.availableAt, "EEEE' • ' dd ' de' MMMM' • 'k'h':mm", {
    locale: ptBR,
  });

  //const isActiveLesson = slug === props.slug;

  return (
    <>
      {isLessonAvailable ? (
        <Link to={`/event/lesson/${props.slug}`}>
        <Box as="span" color="gray.300" fontSize="sm">
          {availableDateFormatted}
        </Box>

        <Box border="1px solid #323238" _hover={{ border: "1px solid #42D3FF", transition: "all .2s ease-in-out"}} rounded={4} p="4" mt="2">
          <Box
            as="header"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {isLessonAvailable ? (
              <Box
                as="span"
                color="brand.500"
                fontSize="sm"
                fontWeight="medium"
                display="flex"
                gap="2"
                alignItems="center"
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </Box>
            ) : (
              <Box
                as="span"
                color="orange.500"
                fontSize="sm"
                fontWeight="medium"
                display="flex"
                gap="2"
                alignItems="center"                               
              >
                <Lock size={20} weight="thin" />
                Em breve
              </Box>
            )}
            <Box
              as="span"
              fontSize="xs"
              border="1px solid #fba94c"
              rounded={4}
              px="2"
              color="white"
            >
              {props.type === "live" ? "LIVE" : "AULA PRÁTICA"}
            </Box>
          </Box>
          <Box fontWeight="bold" mt="5" display="block">
            {props.title}
          </Box>
        </Box>
      </Link>
      ) : (
        <Box
          as="a" 
          cursor="not-allowed"
          style={{
            opacity: 0.5,
          }}                 
        >
        <Box as="span" color="gray.300" fontSize="sm">
          {availableDateFormatted}
        </Box>

        <Box border="1px solid #323238" rounded={4} p="4" mt="2">
          <Box
            as="header"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {isLessonAvailable ? (
              <Box
                as="span"
                color="brand.500"
                fontSize="sm"
                fontWeight="medium"
                display="flex"
                gap="2"
                alignItems="center"
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </Box>
            ) : (
              <Box
                as="span"
                color="orange.500"
                fontSize="sm"
                fontWeight="medium"
                display="flex"
                gap="2"
                alignItems="center"                               
              >
                <Lock size={20} weight="thin" />
                Em breve
              </Box>
            )}
            <Box
              as="span"
              fontSize="xs"
              border="1px solid #fba94c"
              rounded={4}
              px="2"
              color="white"
            >
              {props.type === "live" ? "LIVE" : "AULA PRÁTICA"}
            </Box>
          </Box>
          <Box fontWeight="bold" mt="5" display="block">
            {props.title}
          </Box>
        </Box>
      </Box>
      )}
    </>
  );
}
