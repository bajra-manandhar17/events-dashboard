# Description

This is a simple side project to learn how to use Pocketbase.

## Installation

```bash
$ npm install
```

## Usage

```bash
$ npm start
```

## Requirements

- Node 18.18.*
- Create a `.env` file with these two variables:
  - `VITE_APP_POCKETBASE_HOST`: Your Pocketbase host
  - `VITE_APP_MAPBOX_TOKEN`: Your Mapbox account token
- Create a collection named `festival_events` on pocketbase with the following fields:
  - `event_title`: string
  - `event_description`: string
  - `event_start_date`: date
  - `event_end_date`: date
  - `event_latitude`: string
  - `event_longitude`: string
  - `event_location`: string

## License

MIT

