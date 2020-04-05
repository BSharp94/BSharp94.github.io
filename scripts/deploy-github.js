const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/BSharp94/BSharp94.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)