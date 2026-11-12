import sharp from 'sharp'
import { writeFile, mkdir } from 'node:fs/promises'
const images = [
  {
    "key": "ring",
    "file": "sede-higuereta-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-14128756-80c7-4582-9f2d-3d2990f94031.png"
  },
  {
    "key": "marsano",
    "file": "sede-marsano-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-587544dc-04b0-4871-85ec-35247bf1e177.png"
  },
  {
    "key": "vip",
    "file": "membresia-vip-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-f8dceb8c-1358-4593-9a58-2d1aef2b45fd.png"
  },
  {
    "key": "super-vip",
    "file": "membresia-super-vip-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-bcfa066f-8656-47b1-b598-a594bc99d720.png"
  },
  {
    "key": "gloves",
    "file": "guantes-horarios-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-c2696445-d455-4a4e-ab94-37b7279fb400.png"
  },
  {
    "key": "trainer-boxeo",
    "file": "entrenador-boxeo-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-e12cb55d-1552-40ad-b2a6-cc3118b83077.png"
  },
  {
    "key": "trainer-muay",
    "file": "entrenador-muay-thai-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-bb4dd67c-3fd6-4821-8dfc-8b52d91b6914.png"
  },
  {
    "key": "trainer-kick",
    "file": "entrenador-kickboxing-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-5253a09a-68e8-4550-88dd-f253ffc90c9b.png"
  },
  {
    "key": "trainer-mma",
    "file": "entrenador-mma-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-0a086180-5c08-44f0-91a6-92e30a05dea9.png"
  },
  {
    "key": "trainer-jiujitsu",
    "file": "entrenador-jiujitsu-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-2041e5d5-07cc-4e10-afdd-aaf51569ae76.png"
  },
  {
    "key": "community",
    "file": "comunidad-demo.webp",
    "source": "C:\\Users\\johan\\.codex\\generated_images\\01a1d06e-157f-7be2-9028-53ed1a7f2b8f\\exec-b791d38e-fe86-4f43-a145-3b8d687a5c11.png"
  }
]
await mkdir('public/img', { recursive: true })
for (const image of images) {
 if (!image.source) throw new Error('Missing generated asset: ' + image.key)
 await sharp(image.source).resize({width: image.key.startsWith('trainer') ? 600 : 1400, withoutEnlargement: true}).webp({quality:84}).toFile('public/img/'+image.file)
 console.log(image.file)
}
await sharp('C:/Users/johan/Downloads/Hero/hero.png').extract({left:80,top:8,width:112,height:112}).composite([{input:Buffer.from('<svg width="112" height="112"><circle cx="56" cy="55" r="54.5" fill="white"/></svg>'),blend:'dest-in'}]).webp({quality:98}).toFile('public/img/pecos-logo.webp')
await sharp('public/img/Hero_fondo.webp').extract({left:0,top:0,width:235,height:170}).webp({quality:90}).toFile('public/img/red-texture.webp')
await writeFile('public/img/generated-assets.json', JSON.stringify(images.map(({key,file})=>({key,file,generated:true,provisional:true})),null,2))

