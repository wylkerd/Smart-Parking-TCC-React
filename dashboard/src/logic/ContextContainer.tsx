import { ChakraProvider } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

export function ContextContainer({ children }: PropsWithChildren<any>) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}