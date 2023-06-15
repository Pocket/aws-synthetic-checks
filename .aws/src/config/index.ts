const name = 'SyntheticChecks';
const domainPrefix = 'syntheticchecks';
const isDev = process.env.NODE_ENV === 'development';
const environment = isDev ? 'Dev' : 'Prod';

export const config = {
  name,
  isDev,
  domainPrefix,
  prefix: `${name}-${environment}`,
  environment,
  tags: {
    service: name,
    environment,
  },
};
