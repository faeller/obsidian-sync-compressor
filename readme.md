# obsidian sync compressor

compress images to 4mb for obsidian vault syncing. works as pwa and can be packaged as android app.

## features

- drag & drop images or click to select
- smart compression: minimal for <4mb files, aggressive for larger ones
- remembers your vault folder (browser security still requires reselection)
- targets exactly 4mb for optimal syncing
- clean, minimal ui

## usage

### web/pwa
- visit https://faeller.github.io/obsidian-sync-compressor/www
- select your obsidian vault folder
- drop images or click to select
- compress & save

### android app (optional)
```bash
bun install
bunx cap add android
bunx cap sync
bunx cap open android
```

## tech

- vanilla js + react
- capacitor for native mobile
- file system access api (web)
- capacitor filesystem (mobile)

built for personal use with obsidian mobile sync limits.