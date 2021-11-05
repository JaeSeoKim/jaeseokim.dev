import { AudioType, CalloutType } from "./types"
import { $ElementType, $NonMaybeType } from "utility-types"
import { notion } from "."

const findFileSrc = (file: $ElementType<AudioType, "audio">) => {
  if (file.type === "external") {
    return { url: file.external.url }
  }
  return { url: file.file.url, expiry_time: file.file.expiry_time }
}
const findEmojiSrc = (
  file: $ElementType<$ElementType<CalloutType, "callout">, "icon">
) => {
  if (!file || file.type === "emoji") {
    return undefined
  }
  if (file.type === "external") {
    return { url: file.external.url }
  }
  if (file.type === "file") {
    return { url: file.file.url, expiry_time: file.file.expiry_time }
  }
}

const getFileSrc = async (block_id: string) => {
  const block = await notion.blocks.retrieve({
    block_id: block_id,
  })

  if (block.type === "callout") {
    return findEmojiSrc(block.callout.icon)
  }

  if (block.type === "image") {
    return findFileSrc(block.image)
  }
  if (block.type === "audio") {
    return findFileSrc(block.audio)
  }
  if (block.type === "file") {
    return findFileSrc(block.file)
  }
  if (block.type === "pdf") {
    return findFileSrc(block.pdf)
  }
  if (block.type === "video") {
    return findFileSrc(block.video)
  }
}

export default getFileSrc
