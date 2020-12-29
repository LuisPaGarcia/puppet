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

2. Execute start script:

```sh
$ npm run start
```

![run example ](https://github.com/LuisPaGarcia/puppet/raw/main/%20screen.png)

### Available scripts

## `npm run start`: 
Start to scrap data using the `input/included.json` nogs list. This script exclude the nog listed in `input/excluded.json`. Every nog scrapped will be saved in `input/empty.json` **if the nog doesn't have data**, and will save the nog ID in `input/completed.json` **if the nog id have data.**

The data scrapped will be saved in `output/data.json` and converted to csv in `output/data.csv.`.

## `npm run reset`:
Will erase the content of the 
- `input/completed.json`.
- `input/empty.json`.
- `input/included.json`.
- `output/data.json`.
- `output/data.csv`.

