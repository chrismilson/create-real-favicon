# create-real-favicon

Use this package to generate icon assets for an app from a high resolution
master image.

## Usage

```bash
yarn create real-favicon /path/to/master/icon.png
```

*or*

```bash
npx create-real-favicon /path/to/master/icon.png
```

### Options

There are limited options currently.

- `--no-ios` Will cease production of apple touch icons.
- `--no-desktop` Will cease production of desktob browser icons.
- `--no-android` Will cease production of android chrome icons.
- `-o <output-path>` Will place the generated files at a specified path.