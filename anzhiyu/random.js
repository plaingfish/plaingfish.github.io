var posts=["post/20240925105823.html","post/20241106190825.html","post/20240924221104.html","post/20240925100320.html","post/20241106210755.html","post/20241106204219.html","post/20241106211540.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };