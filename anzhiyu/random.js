var posts=["post/20240925100320.html","post/20240924221104.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };