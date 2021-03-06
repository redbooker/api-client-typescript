import gql from 'graphql-tag'

import { CryptoCurrency } from '../../constants/currency'

export const GET_ASSETS_NONCES_QUERY = gql`
  query getAssetsNonces(
    $payload: GetAssetsNoncesParams!
    $signature: Signature!
  ) {
    getAssetsNonces(payload: $payload, signature: $signature) {
      asset
      nonces
    }
  }
`
export interface AssetsNoncesData {
  asset: CryptoCurrency
  nonces: number[]
}

export interface GetAssetsNoncesData extends Array<AssetsNoncesData> {}
