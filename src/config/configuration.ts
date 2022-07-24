import * as path from 'path';

const DATA_DIR = path.join(__dirname, '..', '..', 'data');

export default () => ({
  dataSource: {
    airports: `${DATA_DIR}/airports.dat`,
    routes: `${DATA_DIR}/routes.dat`,
  },
});
