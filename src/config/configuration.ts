import * as path from 'path';

const DATA_DIR = path.join(__dirname, '..', '..', 'data');

export default () => ({
  maxLayover: 3,
  dataSource: {
    airports: `${DATA_DIR}/airports.json`,
    routes: `${DATA_DIR}/routes.json`,
  },
});
