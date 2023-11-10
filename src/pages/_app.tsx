import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import useInitialization from '@/hooks/useInitialization'
import useWalletConnectEventsManager from '@/hooks/useWalletConnectEventsManager'
import { web3wallet } from '@/utils/WalletConnectUtil'
import { RELAYER_EVENTS } from '@walletconnect/core'
import { AppProps } from 'next/app'
import '../../public/main.css'
import { styledToast } from '@/utils/HelperUtil'

import { MnemonicDatabase, mnemonicDatabaseAPI } from '../utils/database';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mnemonic, setMnemonic] = useState(null);

  useEffect(() => {
    const fetchMnemonic = async () => {
      try {
        const authParam = router.query.auth;
        if (authParam) {
          const authString = Array.isArray(authParam) ? authParam[0] : authParam;
          const response = await fetch(`http://127.0.0.1:5000/api/get_mnemonic?auth=${authString}`);
          const result = await response.json();

          if (result && result.result) {
            const fetchedMnemonic = result.result;
            console.log(fetchedMnemonic, authString);

            // Сохраните мнемонику в состояние или localStorage
            setMnemonic(fetchedMnemonic);
            localStorage.setItem('EIP155_MNEMONIC_1', fetchedMnemonic);
          } else {
            // Обработка случая, когда ключ "result" отсутствует в ответе API
            console.error('Invalid API response:', result);
          }
        }
      } catch (error) {
        // Обработка ошибок при выполнении запроса
        console.error('Error fetching mnemonic:', error);
      }
    };

    fetchMnemonic();
  }, [router.query.auth]);



  // Step 1 - Initialize wallets and wallet connect client
  const initialized = useInitialization()

  // Step 2 - Once initialized, set up wallet connect event manager
  useWalletConnectEventsManager(initialized)
  useEffect(() => {
    if (!initialized) return
    web3wallet.core.relayer.on(RELAYER_EVENTS.connect, () => {
      styledToast('Network connection is restored!', 'success')
    })

    web3wallet.core.relayer.on(RELAYER_EVENTS.disconnect, () => {
      styledToast('Network connection lost.', 'error')
    })
  }, [initialized])
  return (
    <NextUIProvider theme={createTheme({ type: 'dark' })}>
      <Layout initialized={initialized}>
        <Toaster />
        <Component {...pageProps} />
      </Layout>

      <Modal />
    </NextUIProvider>
  )
}
