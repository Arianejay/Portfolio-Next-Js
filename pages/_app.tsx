import '../styles/globals.css'
import type { AppProps } from 'next/app'

// imports
import Layout from '../components/Layout'

// context
import { StateContext } from '../context/Context'

// lib
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Ariane Jay Tan</title>
      <StateContext>
        <Layout>
          <Toaster
            toastOptions={{
              success: {
                iconTheme: {
                  primary: '#121212',
                  secondary: '#fff',
                },
              },
            }}
            containerStyle={{ right: 0, bottom: 0 }}
          />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  )
}

export default MyApp
