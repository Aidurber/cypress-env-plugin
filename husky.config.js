module.exports = {
  hooks: {
    'pre-commit': 'tsdx lint && yarn docs:gen && pretty-quick --staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
