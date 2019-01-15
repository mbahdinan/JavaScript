/* Featured Posts Widget
--------------------------------------*/

  var featuredPostsSection = $('#featured-posts .widget-content');
  var featuredPostsContent = featuredPostsSection.text().trim();

  if((featuredPostsContent.toLowerCase() !== 'no') && (featuredPostsContent !== '"no"')) {
    $.ajax({
      url: "/feeds/posts/default/-/"+ featuredPostsContent +"?alt=json-in-script&max-results=4",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var img  = new Array();
        var trtd = '';		
        var numOfEntries = e.feed.entry.length;

        for (var i = 0; i < numOfEntries; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t;
          var posturl;

          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          }

          if ("content" in entry) {
            var postcontent = entry.content.$t;
          }

          s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

          if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
            img[i] = d;
            var post_image = img[i];
          } else {
            var post_image = no_image_url;
          }

          var post_comments;

          for (var k = 0; k < entry.link.length; k++) {
            if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
              post_comments = entry.link[k].title;
              break;
            }
          } 

          post_comments = parseInt(post_comments, 10);

          var trtd = trtd + '<li class="featured-posts-item"><a href="'+ posturl +'" class="featured-posts-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="featured-posts-title"><h2 class="heading">'+ posttitle +'</h2></a><span class="featured-posts-comments">'+ post_comments +'</a></li>';

        }
        featuredPostsSection.html("<ul class='fp-items-wrapper clearfix'>" + trtd + "</ul>");
      }

    });
  } else {
    $(".featured-posts-wrapper").remove();
  }

//]]>
</script> <!-- Featured Posts AJAX Requests -->

<script>
//<![CDATA[

  $(".home-widgets .HTML").each(function () {

    var widget = $(this);
    var widgetContent = widget.children(".widget-content");
    var widgetContentText = widgetContent.text().trim();
    var a = widgetContentText.match(/[^[\]]+(?=])/g);
    a[1] = a[1].toLowerCase();
    widgetContent.addClass(a[1]).addClass("clearfix");

    if(a[1] === "bleft") {

      $.ajax({
        url: "/feeds/posts/default/-/"+ a[0] +"?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var img = new Array();
          var trtd2 = '';
          var numOfEntries = e.feed.entry.length;

          for (var i = 0; i < numOfEntries; i++) {
            var entry = e.feed.entry[i];
            var posttitle = entry.title.$t;
            var posturl;
            var post_comments;
            var comment_url;

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            } 

            for (var k = 0; k < entry.link.length; k++) {
              if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
                post_comments = entry.link[k].title;
                comment_url = entry.link[k].href;
                break;
              }
            } 

            if( i !== 0){
              post_comments = parseInt(post_comments, 10);
            }

            postdate = entry.published.$t;

            var day = postdate.split("-")[2].substring(0,2);
            var m = postdate.split("-")[1];
            var y = postdate.split("-")[0];

            var daystr = day+ '/' + m + '/' + y;

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            if(i === 0){
              s = postcontent;
              a = s.indexOf("<img");
              b = s.indexOf("src=\"", a);
              c = s.indexOf("\"", b + 5);
              d = s.substr(b + 5, c - b - 5);


              if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                img[i] = d;
                var post_image = img[i];
              } else {
                var post_image = no_image_url;
              }

              var summary = postcontent.replace(/<.+?>/g, '').substring(0, 120) + "...";

              var trtd1 = '<div class="big-post"><a href="'+ posturl +'" class="big-post-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="big-post-title"><h2 class="heading">'+ posttitle +'</h2></a><p class="big-post-summary">'+ summary +'</p><div class="big-post-info"><span class="publish-date"><i class="fa fa-clock-o icon"></i>'+ daystr +'</span><a class="comments" href="'+comment_url +'"><i class="fa fa-comment-o icon"></i>'+ post_comments +'</a></div></div>';

            } else {
              var trtd2 = trtd2 + '<li class="small-post clearfix"><a href="'+ posturl +'" class="small-post-title"><h2 class="heading">'+ posttitle +'</h2></a><div class="small-post-info"><span class="publish-date"><i class="fa fa-clock-o icon"></i>'+ daystr +'</span><a class="comments" href="'+comment_url +'"><i class="fa fa-comment-o icon"></i>'+ post_comments +'</a></div></li>';
            }

          }

          widgetContent.html(trtd1 + "<ul class='small-posts-wrapper'>" + trtd2 + "</ul>");
        }

      });
    } else if(a[1] === "grids") {

      $.ajax({
        url: "/feeds/posts/default/-/"+ a[0] +"?alt=json-in-script&max-results="+ gridsPostsNum +"",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var img = new Array();
          var trtd = '';
          var numOfEntries = e.feed.entry.length;

          for (var i = 0; i < numOfEntries; i++) {
            var entry = e.feed.entry[i];
            var posttitle = entry.title.$t;
            var posturl;

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            } 

            for (var k = 0; k < entry.link.length; k++) {
              if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
                post_comments = entry.link[k].title;
                comment_url = entry.link[k].href;
                break;
              }
            } 

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);

            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
              img[i] = d;
              var post_image = img[i];
            } else {
              var post_image = no_image_url;
            }

            var summary = postcontent.replace(/<.+?>/g, '').substring(0, 140)+ "...";
            summary = summary.split(" ");
            summary.pop();
            summary = summary.join(" ")  + "...";


            var share = '<div class="post-share"><a class="post-share_link facebook" href="http://www.facebook.com/sharer.php?u='+ posturl +'" target="_blank"><i class="fa fa-facebook"></i></a><a class="post-share_link twitter" href="http://twitter.com/share?url='+ posturl +'" target="_blank"><i class="fa fa-twitter"></i></a><a class="post-share_link pinterest" href="http://pinterest.com/pin/create/button/?source_url='+ posturl +'" onclick="javascript:window.open(this.href, &apos;&apos;, &apos;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600&apos;);return false;" target="_blank"><i class="fa fa-pinterest"></i></a><a class="post-share_link googleplus" href="https://plus.google.com/share?url='+ posturl +'" target="_blank"><i class="fa fa-google-plus"></i></a></div>'

            var trtd = trtd + '<li class="big-post"><a href="'+ posturl +'" class="big-post-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="big-post-title"><h2 class="heading">'+ posttitle +'</h2></a>'+ share +'<p class="big-post-summary">'+ summary +'</p></li>';

          }

          widgetContent.html("<ul class='big-posts-wrapper'>" + trtd + "</ul>");
        }

      });
    } else if(a[1] === "twocolumns") {

        $.ajax({
          url: "/feeds/posts/default/-/"+ a[0] +"?alt=json-in-script&max-results="+ twocolumnsPostsNum +"",
          type: "get",
          dataType: "jsonp",
          success: function (e) {

            var img = new Array(),
                trtd= '',
                numOfEntries = e.feed.entry.length;

            for (var i = 0; i < numOfEntries; i++) {
              var entry = e.feed.entry[i];
              var posttitle = entry.title.$t;
              var posturl;
              var post_comments;
              var comment_url;

              for (var k = 0; k < entry.link.length; k++) {
                if (entry.link[k].rel == 'alternate') {
                  posturl = entry.link[k].href;
                  break;
                }
              } 

              for (var k = 0; k < entry.link.length; k++) {
                if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
                  post_comments = entry.link[k].title;
                  comment_url = entry.link[k].href;
                  break;
                }
              }

              post_comments = parseInt(post_comments, 10);
              
              var postdate = entry.published.$t;

              var day = postdate.split("-")[2].substring(0,2);
              var m = postdate.split("-")[1];
              var y = postdate.split("-")[0];

              var daystr = day+ '/' + m + '/' + y;

              if ("content" in entry) {
                var postcontent = entry.content.$t;
              }

              s = postcontent;
              a = s.indexOf("<img");
              b = s.indexOf("src=\"", a);
              c = s.indexOf("\"", b + 5);
              d = s.substr(b + 5, c - b - 5);

              if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                img[i] = d;
                var post_image = img[i];
              } else {
                var post_image = no_image_url;
              }

              var trtd = trtd + '<li class="twocolumns-content_item clearfix"><a href="' + posturl + '" class="post-image-square" style="background: url(' + post_image + ') no-repeat center; background-size: cover;"></a><a href="' + posturl + '" class="post-title"><h2 class="heading">' + posttitle + '</h2></a><span class="publish-date"><i class="fa fa-clock-o icon"></i>'+ daystr +'</span><a class="comments" href='+comment_url +'><i class="fa fa-comment-o icon"></i>'+ post_comments +'</a></li>';              

            }

            widgetContent.html("<ul class='clearfix'>" + trtd + "</ul>");
          }

        });
      } /* twocolumns */
      else if(a[1].toLowerCase() === "bsummary") {

        $.ajax({
          url: "/feeds/posts/default/-/" + a[0] + "?alt=json-in-script&max-results=4",
          type: "get",
          dataType: "jsonp",
          success: function (e) {

            var img = new Array();
            var trtd2= '';
            var numOfEntries = e.feed.entry.length;
       
            for (var i = 0; i < numOfEntries; i++) {
              var entry = e.feed.entry[i];
              var posttitle = entry.title.$t;
              var posturl;
              var post_comments;
              var comment_url;

              for (var k = 0; k < entry.link.length; k++) {
                if (entry.link[k].rel == 'alternate') {
                  posturl = entry.link[k].href;
                  break;
                }
              } 

              if ("content" in entry) {
                var postcontent = entry.content.$t;
              }

              s = postcontent;
              a = s.indexOf("<img");
              b = s.indexOf("src=\"", a);
              c = s.indexOf("\"", b + 5);
              d = s.substr(b + 5, c - b - 5);

              if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;

              var post_image = img[i].replace('s1600/', 's500-c/');

              if (i === 0) {
                var trtd1 = '<div class="big-post clearfix"><a href="'+ posturl +'" class="post-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"><h2 class="post-title">'+ posttitle +'</h2></a></div>';
              } else {
                for (var k = 0; k < entry.link.length; k++) {
                  if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
                    post_comments = entry.link[k].title;
                    comment_url = entry.link[k].href;
                    break;
                  }
                } 

                post_comments = parseInt(post_comments, 10);

                var postdate = entry.published.$t;

                var day = postdate.split("-")[2].substring(0,2);
                var m = postdate.split("-")[1];
                var y = postdate.split("-")[0];

                var daystr = day+ '/' + m + '/' + y;

                trtd2 = trtd2 + '<li class="content-item clearfix"><a href="' + posturl + '" class="post-image-square" style="background: url(' + post_image + ') no-repeat center; background-size: cover;"></a><a href="' + posturl + '" class="post-title"><h2 class="heading">' + posttitle + '</h2></a><span class="publish-date"><i class="fa fa-clock-o icon"></i>'+ daystr +'</span><a class="comments" href='+comment_url +'><i class="fa fa-comment-o icon"></i>'+ post_comments +'</a></li>';
              }
            }
            widgetContent.html(trtd1 + "<ul class='other-posts'>" + trtd2 + "</ul>");
          }
        });
      } /* bsummary */

  });


/*---- Add the title "Latest Posts" to the Blog widget ----*/
var blog = $(".Blog");
var blogHeader = "<div class='title'>latest posts</div>";
blog.prepend(blogHeader); 