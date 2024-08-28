import { useState } from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

const PigetImplementationSample = () => {
  const [walletData, setWalletData] = useState('')
  const [userPrivateKey, setUserPrivateKey] = useState('')

  return (
    <div className='w-full flex-col justify-center pt-5 overflow-x-auto'>
      <p className='text font-bold text-3xl text-center'>PiGET Implementation Sample</p>

      <div className='divide-y divide-dotted divide-slate-800'>

        {/* >> Step 1: Read piget file content */}
        <Step1
          walletData={walletData}
          setWalletData={setWalletData} />

        {/* >> Step 2: Get user's private key by decrypt userData based on encryption key */}
        <Step2
          walletData={walletData}
          userPrivateKey={userPrivateKey}
          setUserPrivateKey={setUserPrivateKey}
        />

        {/* >> Step 3: Use user's private key for execute transaction */}
        <Step3
          walletData={walletData}
          userPrivateKey={userPrivateKey}
        />
      </div>
    </div>
  )
}

export default PigetImplementationSample