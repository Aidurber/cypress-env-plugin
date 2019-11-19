module.exports = {
  hooks: {
    'pre-commit': 'tsdx lint && pretty-quick --staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
