import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Services
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
      </a>
      A propos
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
      </a>
      Contact
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
      </a>
      Terms
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
      </a>
      Privacy
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
      </a>
    </Text>
  )
}

export default MedusaCTA
