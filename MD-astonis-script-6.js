  $(".sidebar-wrapper .HTML").each(function () {

    var widget = $(this);
    var widgetContent = widget.children(".widget-content");
    var widgetContentText = widgetContent.text().trim();
	var wct = widgetContentText.toLowerCase();

    if((wct === "randomposts1") || (wct === "random posts1")) {
      
      widgetContent.addClass("randomposts1");

      $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var entryLength = e.feed.entry.length,
              a = entryLength - sidebarRandomPostsNum,
              n = Math.floor(Math.random() * (a + 1));

          $.ajax({
            url: "/feeds/posts/default?alt=json-in-script&end-index=" + n + "",
            type: "get",
            dataType: "jsonp",
            success: function (e) {

              var img  = new Array();
              var trtd = '';

              for (var i = 0; i < sidebarRandomPostsNum; i++) {
                var entry = e.feed.entry[n+i];
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

                if ("content" in entry) {
                  var postcontent = entry.content.$t;
                }

                s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

                if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                  img[n] = d;
                  var post_image = img[n];
                } else {
                  var post_image = no_image_url;
                }

                var trtd = trtd + '<li class="post-wrapper clearfix"><a href="'+ posturl +'" class="random_post-image" style="background: url('+ post_image +') no-repeat center;background-size: cover"></a><a href="'+ posturl +'"><h3 class="random_post-title">'+ posttitle +'</h3></a><a href="'+ comment_url +'" class="post-comments"><i class="fa fa-comment-o icon"></i>'+ post_comments +'</a></li>';

              }
              widgetContent.html('<ul class="random-posts">' + trtd + '</ul>'); 
            }
          });
        }
      });

    } else if((wct === "randomposts2") || (wct === "random posts2")) {
      
      widgetContent.addClass("randomposts2");

      $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var entryLength = e.feed.entry.length,
              a = entryLength - sidebarRandomPostsNum,
              n = Math.floor(Math.random() * (a + 1));

          $.ajax({
            url: "/feeds/posts/default?alt=json-in-script&end-index=" + n + "",
            type: "get",
            dataType: "jsonp",
            success: function (e) {

              var img  = new Array();
              var trtd = '';

              for (var i = 0; i < sidebarRandomPostsNum; i++) {
                var entry = e.feed.entry[n+i];
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
                  img[n] = d;
                  var post_image = img[n];
                } else {
                  var post_image = no_image_url;
                }

                var summary = postcontent.replace(/<.+?>/g, '').substring(0, 90) + "...";
                
                var trtd = trtd + '<li class="post-wrapper clearfix"><a href="'+ posturl +'" class="post-image" style="background: url('+ post_image +') no-repeat center;background-size: cover"></a><div class="title-summary-wrapper"><a href="'+ posturl +'" class="post-title"><h3 class="heading">'+ posttitle +'</h3></a><p class="post-summary">'+ summary +'</p></div></li>';

              }
              widgetContent.html('<ul class="random-posts">' + trtd + '</ul>'); 
            }
          });
        }
      });

    } else if((wct === "recentposts1") || (wct === "recent posts1")) {

      widgetContent.addClass("recentposts1");

      $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results="+ sidebarRecentPostsNum +"",
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

            var trtd = trtd + '<li class="recent-post-item"><a href="'+ posturl +'" class="post-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="post-title"><h2 class="heading">'+ posttitle +'</h2></a></li>';

          }

          widgetContent.html("<ul class='recent-posts-wrapper'>" + trtd + "</ul>");
        }

      });
    } else if((wct === "recentposts2") || (wct === "recent posts2")) {

      widgetContent.addClass("recentposts2");

      $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results="+ sidebarRecentPostsNum +"",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var img = new Array();
          var trtd = '';
          var numOfEntries = e.feed.entry.length;

          for (var i = 0; i < sidebarRandomPostsNum; i++) {
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

            var summary = postcontent.replace(/<.+?>/g, '').substring(0, 90) + "...";

            var trtd = trtd + '<li class="post-wrapper clearfix"><a href="'+ posturl +'" class="post-image" style="background: url('+ post_image +') no-repeat center;background-size: cover"></a><div class="title-summary-wrapper"><a href="'+ posturl +'" class="post-title"><h3 class="heading">'+ posttitle +'</h3></a><p class="post-summary">'+ summary +'</p></div></li>';

          }
          widgetContent.html("<ul class='recent-posts-wrapper'>" + trtd + "</ul>");
        }

      });
    } else if(widgetContentText.charAt(0) === "[") {
      var a = widgetContentText.match(/[^[\]]+(?=])/g);
      widgetContent.addClass(a[0]);

      if(a[0].toLowerCase() === "socialcounter") {
        var content = '';
        var c = a.length;

        for(i=1; i<c; i+=3) {
          var content = content + '<li class="social_item-wrapper"><a href="'+ a[i+1] +'" class="social_item social_'+ a[i] +'"><i class="fa fa-'+ a[i] +' social_icon"></i><br/><span class="social_num">'+ a[i+2] +'</span></a></li>' 
        }     

        widgetContent.html('<ul class="social-counter">' +  content + '</ul>');

      }
    }

  });

/*---- Add the sub headline to "follow by email" widget ----*/
  var f = $(".FollowByEmail .widget-content");
  if(f.length) {
    f.prepend("<p class='subhead'>"+ followByEmailMessage +"</p>");
  }


/*---- Remove the paranthesis in the List Label widget ----*/
  var l = $(".cloud-label-widget-content .label-count");
  if(l.length) {
    var s;
    var a;
    l.each(function (){
      var _self = $(this);
      s = _self.text().trim();
      a = s.replace(/\D/g, "");
      _self.text(a);
    });
  }


/*---- Increase the size of the image in the Popular Posts widget and decrease the number of characters in the snippet ----
  var ppimg = $(".PopularPosts img");
  if(ppimg.length) {
    ppimg.each(function (){
      var _self = $(this);
      var src = _self.attr("src").replace("s72-c", "s700");
      _self.attr("src", src);
    });
  }

  var ppsnippet = $(".PopularPosts .item-snippet");
  if(ppsnippet.length) {
    ppsnippet.each(function (){
      var _self = $(this);
      var t = _self.text();
      t = t.substring(0,120) + "...";
      _self.text(t);
    });
  }
*/
