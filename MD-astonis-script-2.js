/* Slider Widget
--------------------------------------*/

  var slider = $('#slider .widget-content');
  var sliderContent = slider.text().trim();
  slider.addClass('clearfix');

  if((sliderContent !== 'no') && (sliderContent !== '"no"')) {
    if(sliderContent !== "[recent]") {
      $.ajax({
        url: "/feeds/posts/default/-/"+ sliderContent +"?alt=json-in-script&max-results=3",
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
            var author = entry.author[0].name.$t;

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

            var post_category = entry.category[0].term;
            if(entry.category.length >= 2){
              if(post_category === sliderContent) {
                post_category = entry.category[1].term;
              }
            }
            var category = '<a class="slider-category" href="/search/label/'+ post_category +'?max-results=10">'+ post_category +'</a>';

            var post_comments;
            for (var k = 0; k < entry.link.length; k++) {
              if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
                post_comments = entry.link[k].title;
                break;
              }
            } 
            post_comments = parseInt(post_comments, 10);

            var trtd = trtd + '<div class="slider-item" style="background: url('+ post_image +') no-repeat center;background-size: cover"><div class="slider-item-info">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h2 class="heading">'+ posttitle +'</h2></a><div class="slider-post-info"><span class="writer"><i class="fa fa-user icon"></i>'+ author +'</span><span class="slider-comments"><i class="fa fa-comments icon"></i>'+ post_comments +'</span></div></div></div>';

          }
          slider.html('<div class="slider"><button id="left"><i class="fa fa-chevron-left"></i></button><button id="right"><i class="fa fa-chevron-right"></i></button><div class="slider-inside">' + trtd + '</div></div>');

          var left = $("#left");
          var right = $("#right");
          var inside = $(".slider-inside");
          var item = $(".slider-item").eq(0);

          var w = window.innerWidth;
          if (w <= 980) {
            inside.css("width", w*3 + "px");
            left.addClass("show");
            right.addClass("show");
            left.removeClass("hide");
            right.removeClass("hide");
          } else {
            inside.css("width", "auto");
            inside.css("marginLeft", "0px");
            left.addClass("hide");
            right.addClass("hide");
            left.removeClass("show");
            right.removeClass("show");
          }

          $(window).on("resize", function () {
            w = window.innerWidth;
            if (w <= 980) {
              inside.css("width", w*3 + "px");
              left.addClass("show");
              right.addClass("show");
              left.removeClass("hide");
              right.removeClass("hide");
            } else {
              inside.css("width", "auto");
              inside.css("marginLeft", "0px");
              left.addClass("hide");
              right.addClass("hide");
              left.removeClass("show");
              right.removeClass("show");
            }
          });

          function sliderL() {
            var marginLeft = inside.css("marginLeft");
            var width = item.outerWidth()*(-1);
            if (marginLeft === "0px") {
              inside.css("marginLeft", (width*2+"px"));
            } else if (marginLeft === (width*2+"px")) {
              inside.css("marginLeft", width+"px");
            } else {
              inside.css("marginLeft", "0px");
            }
          }

          function sliderR() {
            var marginLeft = inside.css("marginLeft");
            var width = item.outerWidth()*(-1);
            if (marginLeft === "0px") {
              inside.css("marginLeft", width+"px");
            } else if (marginLeft === (width+"px")) {
              inside.css("marginLeft", width*2);
            } else {
              inside.css("marginLeft", "0px");
            }
          }

          left.on("click", sliderL);
          right.on("click", sliderR);
        }
      });
    } else {
      $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results=3",
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
            var author = entry.author[0].name.$t;

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

            var post_category = entry.category[0].term;
            if(entry.category.length >= 2){
              if(post_category === sliderContent) {
                post_category = entry.category[1].term;
              }
            }
            var category = '<a class="slider-category" href="/search/label/'+ post_category +'?max-results=10">'+ post_category +'</a>';

            var post_comments;
            for (var k = 0; k < entry.link.length; k++) {
              if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
                post_comments = entry.link[k].title;
                break;
              }
            } 
            post_comments = parseInt(post_comments, 10);

            var trtd = trtd + '<div class="slider-item" style="background: url('+ post_image +') no-repeat center;background-size: cover"><div class="slider-item-info">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h2 class="heading">'+ posttitle +'</h2></a><div class="slider-post-info"><span class="writer"><i class="fa fa-user icon"></i>'+ author +'</span><span class="slider-comments"><i class="fa fa-comments icon"></i>'+ post_comments +'</span></div></div></div>';

          }
          slider.html('<div class="slider"><button id="left"><i class="fa fa-chevron-left"></i></button><button id="right"><i class="fa fa-chevron-right"></i></button><div class="slider-inside">' + trtd + '</div></div>');

          var left = $("#left");
          var right = $("#right");
          var inside = $(".slider-inside");
          var item = $(".slider-item").eq(0);

          var w = window.innerWidth;
          if (w <= 980) {
            inside.css("width", w*3 + "px");
            left.addClass("show");
            right.addClass("show");
            left.removeClass("hide");
            right.removeClass("hide");
          } else {
            inside.css("width", "auto");
            inside.css("marginLeft", "0px");
            left.addClass("hide");
            right.addClass("hide");
            left.removeClass("show");
            right.removeClass("show");
          }

          $(window).on("resize", function () {
            w = window.innerWidth;
            if (w <= 980) {
              inside.css("width", w*3 + "px");
              left.addClass("show");
              right.addClass("show");
              left.removeClass("hide");
              right.removeClass("hide");
            } else {
              inside.css("width", "auto");
              inside.css("marginLeft", "0px");
              left.addClass("hide");
              right.addClass("hide");
              left.removeClass("show");
              right.removeClass("show");
            }
          });

          function sliderL() {
            var marginLeft = inside.css("marginLeft");
            var width = item.outerWidth()*(-1);
            if (marginLeft === "0px") {
              inside.css("marginLeft", (width*2+"px"));
            } else if (marginLeft === (width*2+"px")) {
              inside.css("marginLeft", width+"px");
            } else {
              inside.css("marginLeft", "0px");
            }
          }

          function sliderR() {
            var marginLeft = inside.css("marginLeft");
            var width = item.outerWidth()*(-1);
            if (marginLeft === "0px") {
              inside.css("marginLeft", width+"px");
            } else if (marginLeft === (width+"px")) {
              inside.css("marginLeft", width*2);
            } else {
              inside.css("marginLeft", "0px");
            }
          }

          left.on("click", sliderL);
          right.on("click", sliderR);
        }
      });
    }
  } else {
    $("#slider").remove()
  }