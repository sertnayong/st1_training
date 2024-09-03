import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppWrapper } from '@/context'
import NavBar from "@/components/NavBar";
import { NavBarProvider } from "@/context/NavBarContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavBarProvider>
      <NavBar /><Component {...pageProps} />
    </NavBarProvider>
  )
}
