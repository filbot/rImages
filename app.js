// Get a reference to the comments list in the main DOM.
var commentsList = document.getElementById('posts');

$.getJSON(
  "http://www.reddit.com/r/pics.json?jsonp=?",
  function foo(data)
  {
    $.each(
      data.data.children.slice(0, 100),
      function (i, post) {
        var tmpl = document.getElementById('post-template').content.cloneNode(true);
        tmpl.querySelector('.post-title').innerText = post.data.title;
        var imgUrl = post.data.url;
        var extension = imgUrl.split('.').pop();
        if (extension !== 'jpg' || extension !== 'gif') {
          return;
        } else {
          tmpl.querySelector('.post-image').src = post.data.url;
        }
        commentsList.appendChild(tmpl);
      }
    );
  }
)
.success(function() { console.log("second success"); })
.error(function() { console.log("error"); })
.complete(function() { console.log("complete"); });
