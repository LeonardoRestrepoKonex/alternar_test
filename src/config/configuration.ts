import * as fs from 'fs';
import * as yaml from 'js-yaml';

export default () => {
  const NODE_ENV = process.env.NODE_ENV;
  console.log('Estamos en modo: ', NODE_ENV);
  const envs = {
    DEV: __dirname + '/../../config.yaml',
    QA: __dirname + '/../../config.yaml',
    PROD: __dirname + '/../config.yaml',
  };

  return yaml.load(fs.readFileSync(envs[NODE_ENV], 'utf8')) as Record<
    string,
    any
  >;
};
