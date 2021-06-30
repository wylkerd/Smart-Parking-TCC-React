import { ChakraProvider } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

function MyApp({ children }: PropsWithChildren<any>) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default MyApp