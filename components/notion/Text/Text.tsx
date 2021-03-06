import React from "react"
import RichText from "./RichText"
import { RichTextType } from "../../../lib/util/notion/types"

export interface TextProps {
  rich_texts: RichTextType[]
  block_id: string
}

const Text: React.FC<TextProps> = ({ rich_texts, block_id }) => {
  const style = (() => {
    if (rich_texts.length === 0) {
      return {
        minHeight: "30px",
      }
    }
    return {}
  })()

  return (
    <span className={`notion-text`} style={style}>
      {rich_texts.map((t, index) => (
        <RichText
          key={`${block_id}-t-${JSON.stringify(t)}-${index}`}
          rich_text={t}
        />
      ))}
    </span>
  )
}

export default Text
