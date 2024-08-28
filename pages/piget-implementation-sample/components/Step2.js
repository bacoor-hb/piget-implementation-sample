import { useState } from 'react'
import MyButton from '../../../components/Button'
import cryptoUtils from '../../../utils/crypto'

/**
 *
 * Step 2: Get user's private key by decrypt userData based on encryption key
 */
const Step2 = ({
  walletData,
  userPrivateKey,
  setUserPrivateKey
}) => {
  const [errorGetPrivateKey, setError] = useState(false)
  const { userData } = walletData || {}

  const handleGetEncryptKey = (passcode) => {
    const userPrivateKey = cryptoUtils.decryptData(userData, process.env.NEXT_PUBLIC_FILE_ENCRYPT_KEY)
    if (cryptoUtils.isValidPrivateKey(userPrivateKey)) {
      setUserPrivateKey(userPrivateKey)
      setError(false)
    } else {
      setUserPrivateKey('')
      setError(true)
    }
  }

  return (
    <div className='w-full flex flex-col mt-16'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 2: Get the private key of the user by decrypting "userData"</span>
        <span className='font-bold'>2: ユーザーの暗号化キーに基づいて、"userData"を復号化してユーザーの秘密鍵を取得する</span>
      </div>

      <div className='mt-2'>
        <MyButton
          label='Get Private Key'
          disabled={!userData}
          onClick={handleGetEncryptKey} />
      </div>

      <div className='mt-4'>
        <span className='font-[500]'>User's Private Key</span>
        <pre className='text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto w-auto rounded-sm'>
          {
            userPrivateKey || '-'
          }
        </pre>
      </div>
    </div>
  )
}

export default Step2
