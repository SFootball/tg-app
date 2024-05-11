import React, { useMemo } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import messiImg from "../assets/messi.jpeg";
import ronaldoImg from "../assets/cristiano-ronaldo.jpeg";
import ronaldinioImg from "../assets/ronaldinio.jpeg";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function FrontCarousel() {
  const { t, i18n } = useTranslation();
  console.log("language", i18n.language);

  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = useMemo(() => {
    return [
      {
        title: "Lionel Messi",
        text: "Being a leader means taking responsibility and inspiring others to be their best.",
        be: "BE",
        strong: "TALENT",
        image: messiImg,
      },
      {
        title: "Cristiano Ronaldo",
        text: "I've never tried to hide the fact that it is my intention to be the best",
        be: "BE",
        strong: "BEST",
        image: ronaldoImg,
      },
      {
        title: "Ronaldinho Caucho",
        text: "Our confidence comes from our preparation.",
        be: "BE",
        strong: "PERSEVERANCE",
        image: ronaldinioImg,
      },
      // {
      //   title: "Andrey Arshavin",
      //   text: "TRAINING HARD",
      //   be: "BE",
      //   strong: "HERO",
      //   image: arshavinImg,
      // },
    ];
  }, []);

  return (
    <Flex
      position={"relative"}
      maxH={{ base: "85vh" }}
      // height={"150vh"}
      width={"full"}
      overflow={"hidden"}
      mt="-50"
      filter={"brightness(80%)"}
      bgColor={"background"}
    ></Flex>
  );
}

// <Slider {...settings} ref={(slider: Slider) => setSlider(slider)}>
// {cards.map((card, index) => (
//   <Box
//     key={index}
//     // height={"6xl"}
//     h={{ base: "100%" }}
//     position="relative"
//     backgroundPosition="center"
//     backgroundRepeat="no-repeat"
//     backgroundSize="cover"
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     // backgroundPositionX="fixed"
//     backgroundAttachment="fixed"
//     // background= "rgb(255,255,255)"
//     // background= "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0,1) 100%)"
//     backgroundImage={`url(${card.image})`}
//   >
//     {/* This is the block you need to change, to customize the caption */}
//     <Container size="container.2xxl" height="600px" position="relative">
//       {/* <Center> */}

//       {/* </Center> */}
//       <Box
//         // spacing={6}
//         w={"full"}
//         // maxW={"lg"}
//         position="absolute"
//         top="50%"
//         transform={[
//           "translate(10%,15%)",
//           "translate(80%,50%)",
//           "translate(20%,20%)",
//           "translate(50%,-30%)",
//         ]}
//       >
//         <Heading
//           mt="30"
//           letterSpacing="10px"
//          ml="2"
//           fontSize={{ base: "sm", md: "md", lg: "xl" }}
//           fontWeight="500"
//           w="100%"
//           color="#fff"
//         >
//           {card.title}
//         </Heading>
//         <Heading
//           color="#fff"
//           fontSize={["50px", "60px", "70px", "90px"]}
//         >
//           {card.be}
//           <span style={{ color: "#f45f02" }}> {card.strong}</span>
//         </Heading>
//         <Text
//           fontSize={["30px", "40px", "50px", "60px"]}
//           fontWeight="650"
//           color="#fff"
//         >
//           {card.text}
//         </Text>
//         <Button color="#fff" ml="2" bg={"#f45f02"}>
//           {/* GET INFO */}
//           {t("getInfo")}
//         </Button>
//       </Box>
//     </Container>
//   </Box>
// ))}
// </Slider>
