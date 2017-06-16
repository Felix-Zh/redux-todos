let env;

if (__BUILD_ENV__ === 'dev' || __BUILD_ENV__ === 'qa') {
  env = 'qa.';
} else if (__BUILD_ENV__ === 'yz') {
  env = 'yz';
} else if (__BUILD_ENV__ === 'prod') {
  env = '';
}

export const ACTIVITY_HUJIANG_COM = `${env}activity.hujiang.com`;