var posts=["2024/09/25/Centos7安装Nginx/","2024/09/24/Centos7安装Mysql/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };