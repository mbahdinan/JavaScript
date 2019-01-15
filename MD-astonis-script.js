/* News Ticker Widget
--------------------------------------*/

  var newsTicker = $('#top-nav .HTML .widget-content');
  var newsTickerContent = newsTicker.text().trim();
  var newsTickerUl = $('#news-ticker');
  newsTicker.remove();

  if((newsTickerContent.toLowerCase() !== 'no') && (newsTickerContent !== '"no"')) {

    if(newsTickerContent !== "[recent]") {
      $.ajax({
        url: "/feeds/posts/default/-/"+ newsTickerContent +"?alt=json-in-script&max-results="+ newsTickerPostsNum +"",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

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

            var trtd = trtd + '<li class="nt-item"><a class="ticker-title" href="'+posturl+'"><h3 class="heading">'+posttitle+'</h3></a></li>';
          }
          newsTickerUl.html(trtd);

          var ntw = $("#news-ticker"),
              ntitems = $(".nt-item"),
              l = ntitems.length,
              mt,
              mtp;

          function autoPlayBN () {
            bnAutoPlay = setInterval (function (){
              mt = ntw.css("margin-top");
              mtp = parseInt(mt, 10);

              if(mtp !== ((l-1)*(-43))) {
                ntw.css("marginTop", mtp - 43);
              } else {
                ntw.css("marginTop", "0px");
              }

            }, newsTickerSpeed*1000);
          };
          autoPlayBN();

          ntw.on("mouseenter", ntw, function () {
            clearInterval(bnAutoPlay);
          });

          ntw.on("mouseleave", ntw, autoPlayBN);

        }
      });

    } else {

      $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results="+ newsTickerPostsNum +"",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var trtd= '';
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

            var trtd = trtd + '<li class="nt-item"><a class="ticker-title" href="'+posturl+'"><h3 class="heading">'+posttitle+'</h3></a></li>';
          }
          newsTickerUl.html(trtd);

          var ntw = $("#news-ticker"),
              ntitems = $(".nt-item"),
              l = ntitems.length,
              mt,
              mtp;

          function autoPlayBN () {
            bnAutoPlay = setInterval (function (){
              mt = ntw.css("margin-top");
              mtp = parseInt(mt, 10);

              if(mtp !== ((l-1)*(-43))) {
                ntw.css("marginTop", mtp - 43);
              } else {
                ntw.css("marginTop", "0px");
              }

            }, newsTickerSpeed*1000);
          };
          autoPlayBN();

          ntw.on("mouseenter", ntw, function () {
            clearInterval(bnAutoPlay);
          });

          ntw.on("mouseleave", ntw, autoPlayBN);

        }
      });
    } 
  } else {
    $("#top-nav .HTML").remove();
  } 