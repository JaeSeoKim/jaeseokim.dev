<div align="center">
  <h1>jaeseokim.dev</h1>
</div>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
 ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Notion Api](https://img.shields.io/badge/Notion%20Api-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## ๐ฉ ๊ฐ๋ฐ ๋ชฉํ

๊ธฐ์กด Gastsby.js๋ก ์ ์ํ ๋ธ๋ก๊ทธ์ ์ด๊ธฐ ๊ตฌ์กฐ์ ๋ฌธ์ ๋ก ์ธํด ์ ์ง๋ณด์๊ฐ ์ ์  ํ๋ค์ด์ ธ์ ์๋กญ๊ฒ Notion๋ฅผ Cms๋ก ์ฌ์ฉํ๋ ๋ธ๋ก๊ทธ ๊ฐ๋ฐ

- [jaeseokim.github.io](https://github.com/JaeSeoKim/jaeseokim.github.io)
- [jaeseokim.github.io#102](https://github.com/JaeSeoKim/jaeseokim.github.io/issues/102)

๊ธฐ์กด [nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit) ์ ๊ฐ์ ๋น๊ณต์ Notion API๋ฅผ ์ฌ์ฉํ ํ๋ก์ ํธ๊ฐ ์์ผ๋ ๋๋ง์ ๋ธ๋ก๊ทธ๋ฅผ ์๋กญ๊ฒ ๋ง๋ค๊ณ  ์ถ์ด์ ๊ณต์ Notion API๋ฅผ ์ด์ฉํ์ฌ ๊ฐ๋ฐํ๊ธฐ๋ก ๊ฒฐ์ ํจ.

## ๐ดโโ๏ธ ๋ก๋๋ทฐ

- [X] @notionhq/client ์ฌ์ฉ ๋ฐฉ๋ฒ ๋ถ์ํ๊ธฐ
- [x] page์ ๋ํ ๋ชจ๋  ์ ๋ณด๋ฅผ ๊ฐ์ ธ์ค๋ ํจ์ ๊ฐ๋ฐ ํ๊ธฐ + ํด๋น Type ์ ์ ํ๊ธฐ
  - [x] page api end-point [`/api/page/[page_id]`](https://jaeseokim-dev.vercel.app/api/page/13cb8d2d3328425e815a1896267f5906) -> **์์ ํ์คํธ์ฉ API ์ถํ deprecated**
- [ ] ๊ธฐ๋ณธ์ ์ธ Block Component ์์ฑํ๊ธฐ
  - [x] paragraph
  - [x] heading
    - [x] heading_1
    - [x] heading_2
    - [x] heading_3
    - [x] id ๋ฐ anchor ์ถ๊ฐ
  - [x] audio
  - [x] bookmark
    - [x] OpenGraph-CORS API ๋ง๋ค๊ธฐ `/api/opengraph/[encodeURI]` ~~Server Side์์ fetchํ์ฌ ๋ ๋๋ง ํ๋๋ก ์์ ~~ API๋ก ๋ค์ ๊บผ๋ด์ด ์ฌ์ฉ (Build ์๊ฐ ๋จ์ถ)
    - [x] next 12 -> next 11 ๋ณต๊ท re2 ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ฏธ์ง์
  - [x] file
  - [x] pdf
    - [x] ~~react-pdf ์ฌ์ฉ์ Nextjs์์ Component๋ฅผ ์ด๋ป๊ฒ ์ ๋ฌํ ์ง ์ ์ ํ์~~ react-pdf ์ฌ์ฉ ์ํจ. file ๋ค์ด์ผ๋ก ์นํ
  - [x] video
    - [x] youtube embed - react-youtube
    - [x] viemo embed - react-viemo
    - [ ] Error์ ํ๋ฉด ๊ตฌ์ ํ์
  - [x] embed
  - [x] image
  - [x] column
  - [x] column_list
  - [x] bulleted_list
    - closure + context api๋ฅผ ์ด์ฉํ์ฌ ํด๊ฒฐ
  - [x] numbered_list
  - [x] callout
  - [x] child_page
  - [x] equation
  - [x] code
  - [x] toggle
  - [x] quote
  - [x] to_do
  - [x] divider
  - [x] synced_block
  - [x] link_to_page
  - [ ] child_database
    - ํ์ฌ ๊ฐ๋จํ๊ฒ Table ๋ด์ฉ ์ถ๋ ฅ ์ฑ๊ณต
    - properties์ ๋ํ ํํฐ๋ง ๋ฐ ์ ๋ ฌ๋ฑ ๋ฑ์ด ์ ์ฉ์ด ์๋๋ฏ๋ก ์ด๋ค ํํ์ ๋ ์ด์์ ์ผ๋ก ๋ณด์ฌ์ค์ง ๊ฒฐ์  ํ์
  - [ ] table_of_contents
  - [ ] breadcrumb
  - [ ] template
- [x] Notion-S3 File ์ ๊ทผ ์ ํ ์๊ฐ ์ด์ ํด๊ฒฐ
  - [Next.js์ ์ฆ๋ถ๋น๋](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration)๋ฅผ ์ฌ์ฉํ๊ฒ ๋  ๊ฒฝ์ฐ 1์๊ฐ ๋์ ์ ๊ทผ ๊ฐ๋ฅํ URL๋ฅผ ๋ฐํ ์ฆ revaildate ์๊ฐ์ด 1์๊ฐ ๋ณด๋ค ๊ธด ๊ฒฝ์ฐ ์ ๋๋ก ์๋ ํ์ง ์๋ ์ด์์ ์ด์  ์บ์๋ฅผ ์ด์ฉํ์ฌ ์๋ตํ ๊ฒฝ์ฐ ํ์ผ์ ๋ํด์ ์ ๊ทผ ๋ถ๊ฐ๋ฅํ ์ด์๊ฐ ์์.
  - ์ถ๊ฐ API ์ ์ ๋ฐ `swr` ๋ฅผ ์ด์ฉํ์ฌ Client ๋จ์์ src๋ฅผ fetch ํ์ฌ ์ฌ์ฉํ๋๋ก ์์ 
  - [`/api/file/[block_id]`](https://jaeseokim-dev.vercel.app/api/file/ac17cd1f-0332-47fc-ab96-636965b5d41d)
    - ~~file์ src๋ฅผ ์ ๋ฌํ๋ ๊ฒ์ด ์๋ ํด๋น body์ stream ์ ๋ฌํ๋ proxy๋ก ๋ณ๊ฒฝ!~~
      - API response for /api/file/7cf64b0a-7751-4fe6-8675-80d3f5f460fa exceeds 4MB. This will cause the request to fail in a future version.
      - https://nextjs.org/docs/messages/api-routes-body-size-limit
      - File์ ๊ฒฝ์ฐ ์๋ต๊ฐ์ด 4MB๋ฅผ ๋์ด๊ฐ๋ฏ๋ก ์ค์ ๋ก ์ฌ์ฉํ๋ ๊ฒ์ด ๋ถ๊ฐ๋ฅ ๊ธฐ์กด ๋ฐฉ์์ผ๋ก revert
  - [`/api/image/[src]?block_id`](https://jaeseokim-dev.vercel.app/api/image/https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8782469d-eb5f-4978-a557-c5a968cb5786%2FKakaoTalk_Photo_2021-08-25-18-12-05.jpeg?block_id=847114de-c703-45be-a237-3f12a18fdee1)
    - Image์ ๊ฒฝ์ฐ Proxy ํํ๋ก ์ ๋ฌํ๋๋ก ์์ , Image์ ์๋ณธ ์ฌ์ด์ฆ๊ฐ 4mb ์ด์์ผ ๊ฒฝ์ฐ๋ฅผ ๋๋นํ์ฌ ์ถํ CloudeFlare๋ฅผ ์ด์ฉํ API Endpoint๋ก ๋์ฒดํ  ์์ 
