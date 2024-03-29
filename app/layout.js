'use client'
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext.js';
import { AuthContextProvider } from './context/authContext.js';
import StyledComponentsRegistry from './registry.js';
import { Container } from './styled_container.js';
import NavBar from './content/navbar/navbar.js';
import HeroSection from './content/pages/hero/page.js';
import Highlight from './content/pages/highlights/page.js';
import FootNav from './content/footer/page.js';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Fay's Dalgona</title>
        <meta name="description" content="Fay's Dalgona" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin"/>
        <link href="https://fonts.googleapis.com/css2?family=Montez&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500;700&display=swap" rel="stylesheet"/>
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body>
        <ChakraProvider>
          <AlertProvider>
            <AuthContextProvider>
              <StyledComponentsRegistry>
                <Container>
                  <NavBar/>
                  <HeroSection/>
                  <Highlight/>
                  {children}
                  <FootNav/>
                </Container>
              </StyledComponentsRegistry>
            </AuthContextProvider>
          </AlertProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
