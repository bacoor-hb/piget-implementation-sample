# PiGET Implementation Sample

## How to implement PiGET in 3 steps
  ```bash
  Step 1: Read the content of PiGET connection json file
  ステップ1: PiGET 接続 json ファイルの内容を読み取る

  Step 2: Get the private key of the user by decrypting "userData"
  ステップ2: ユーザーの暗号化キーに基づいて、"userData"を復号化してユーザーの秘密鍵を取得する

  Step 3: To execute a transaction on the blockchain, use the user's private key to create a Web3 wallet then execute eth_signMessage
  ステップ3: ブロックチェーン上でトランザクションを実行するため、ユーザーの秘密鍵を使用してWeb3ウォレットを作成し、eth_signMessageを実行する
  ```


## Environment Setup

### Information Using In This Sample

- **Sample PiGET json file using at `Step 1`**

    Using PiGET json file at `/public/KEYRING-PIGET-demo-0x877a.json`
    ```bash
    U2FsdGVkX1+2gkZCfyHNIJhGU6loEkuJLU4iD68fmMxwDczxbeNrDUdoE1dnZgcAuGRZhM297Dp8JE2ymLNNkTAFm7xJIAdl2w5TGF98OXFxjceVmKR6xTl3+2RzvoG8SHd0vY9ZPl6lZvTeQk4PLNV+ICa46F2esJuZGI1cgE/pv5QLuqkp7h2QKubOSmVlCXo0Qtf6+nGcvaPU4uGDrht4xYpVOdRQLcBP8mjMvawU0wjoft7gNMCAfw6BUjW1JwVM/kD9mQ6R1x0DcDTzaGznX+OHG4wohJq9vEZxPsNOGyYP2TwmZL61ME+QI+jGUR9BgIVpQjfotpsSLO+fwBAWUveNb94iV8fgmwItCsPAhhfK/MbHVrRg8QKTjWA30/z5ZvOpBn4F3erJAvM+ZPrId8q9+LYezbi3tw3BS9o276HMIesREtajud69CxPFqX+Mz7KpWFN/3JEOL+kwvZK9npcsrnWUGYraAvAa1ApRsyFPsLuGqihPyX03kleW
    ```
&nbsp;
- **Encryption key key using at `Step 2`**
  ```bash
  St4H1XUafM
  ```

### Running the app in development
Required [Node.js](https://nodejs.org) **version >= 12.22.0**

- Clone the repo and change the directory
  ```bash
  git clone https://github.com/bacoor-hb/piget-implementation-sample.git
  cd piget-implementation-sample
  ```


- Install npm packages
  ```bash
  yarn
  ```

- Create your .env.local file on root folder with this content
  ```bash
  NEXT_PUBLIC_FILE_ENCRYPT_KEY=St4H1XUafM
  NEXT_PUBLIC_PIGET_API=https://api-airdropband.keyring.app/service/v1
  NEXT_PUBLIC_PIGET_API_KEY=pRRaMF77ERrMXqjB9yglpyMkT5eLKcB7
  ```

- Start app with your custom port
  ```bash
  yarn dev --port 3003
  ```

- Open http://localhost:3003 with your browser to see the result.

