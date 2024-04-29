// import { Image, VStack } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import logo from "./assets/logo.svg";
// import heroImg from "./assets/hero-img.jpeg";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./entities/Footer/Footer";
import { Navbar } from "./entities/Navbar/Navbar";

function App() {
  // const [starting, setStarting] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setStarting(false);
  //   }, 2000);
  // }, []);

  // if (starting) {
  //   return (
  //     <VStack
  //       overflow={"hidden"}
  //       bg="black"
  //       position={"relative"} // bgImage={women}     bgSize={"80%"}
  //       minH="100vh"
  //       justify="center"
  //       align="center"
  //     >
  //       <Image
  //         zIndex={999}
  //         width={{ base: "200px", md: "400px" }}
  //         className="slide-in-blurred-top"
  //         src={logo}
  //       />
  //       <Image
  //         position={"absolute"}
  //         minW={{ base: "800px", md: "none" }}
  //         h="100%"
  //         src={heroImg}
  //       />
  //     </VStack>
  //   );
  // }
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
