;(function () {
  // convert a tweet JavaScript object to an HTML string
  function buildTweetHTML (tweet) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(tweet)}</code>
        </div>
    `
  }

  // here we have four tweets, each represented by a JavaScript Object,
  // all collected into an Array.
  const tweetsData = [
    {
      user: {
        handle: '@officialjaden',
        username: 'Jaden Smith',
        isVerified: true,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: 'The Moment That Truth Is Organized It Becomes A Lie',
      likes: 231,
      retweets: 12,
      replies: 21
    },
    {
      user: {
        handle: '@officialjaden',
        username: 'Jaden Smith',
        isVerified: true,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
      likes: 112,
      retweets: 2,
      replies: 24
    },
    {
      user: {
        handle: '@DigitalCrafts',
        username: 'DigitalCrafts Bootcamp',
        isVerified: false,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: 'Sign up for our next course plz!',
      likes: 11,
      retweets: 3,
      replies: 14
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

})()
