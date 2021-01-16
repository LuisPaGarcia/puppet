## Puppet v1.0

### Dependencies

To run this scrapper, complete this pre-requirements:

1. Get Node LTS [here](https://nodejs.org/es/download/).
1. To validate the installation, run:

```sh
$ node -v
# output: vX.X.X
```

and

```sh
$ npm -v
# output: X.X.X
```

### How to start puppet

0. Clone or download this repo. Open it in your terminal. See how [here](https://askubuntu.com/a/375880)

1. Install dependencies, run:

```sh
$ npm install
```

2. Execute the split script, to create chunk files in `/input-parts/` directory:

```sh
$ npm run split 5500
```

3. Execute start script with the filename to scrap:

```sh
$ npm run start nog-1-5500.json
```

4. You must run the script for each file.

### Available scripts

## `npm run split [ChunkSize]`:

Will create a copy of all the nogs listed in `input/included.json` and will create chunks with a lenght setted by you. Before create the new files will delete all the files existing inside `input/input-parts/` directory.

Each file will be called with this pattern `nogs-{index}-{NumberOfNogsInside}.json`, like `nogs-1-5500.json`.

This next will create 8 files inside `/input-parts` directory, 7 files with 5500 nogs and 1 file with 3241 nogs. **You must define the chunk lenght**, this example uses 5500 as lenght. If you're lazy af and don't define the chunk size, the script will use 3000 as default.

```sh
$ npm run split 5500

  - Erased: ./input-parts/
  done nogs-1-5500.json
  done nogs-2-5500.json
  done nogs-3-5500.json
  done nogs-4-5500.json
  done nogs-5-5500.json
  done nogs-6-5500.json
  done nogs-7-5500.json
  done nogs-8-3241.json
```

-

## `npm run split-reset`:

This script will delete all the content of `/input-parts`.

```sh
 npm run split-reset

- Erased: ./input-parts/
```

## `npm run start [filename]`:

To start the scrap, you must run `npm run split [ChunkLenght]` first, scroll to top just a little bit to see the ussage. Once you have generated the file chunks, you **must specify the file name after the `npm run start` script**.

```sh
$ npm run start nog-1-5500.json
```

Start to scrap data using the the **specified file name** nogs list. This script exclude the nog listed in `input/excluded.json`. Every nog scrapped will be saved in `input/empty.json` **if the nog doesn't have data**, and will save the nog ID in `input/completed.json` **if the nog id have data.**

The data scrapped will be saved in `output/data.json` and converted to csv in `output/data.csv.`.

## `npm run reset`:

Will erase the content of the

- `input/completed.json`.
- `input/empty.json`.
- `input/included.json`.
- `output/data.json`.
- `output/data.csv`.

**This will clear all the information scraped, use it only if you want to start from zero again**
