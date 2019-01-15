if(showPagination){
    $("#blog-pager").remove();

    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=10000",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var numOfEntries = e.feed.entry.length;
        var postOuter = $(".post-outer");
        var postOuterLength = postOuter.length;
        var len = postOuterLength;
        var numOfPages = Math.ceil(numOfEntries/postOuterLength);

        if(numOfPages !== 1 ){
          var entryWanted = e.feed.entry[postOuterLength-1];
          var pd = entryWanted.published.$t.replace(/\.\d*/, "");
          var code = '<span class="pagination-item active-page">1</span><a class="pagination-item" href="/search?updated-max='+ pd +'&max-results='+ len +'">2</a>';
          var next = '<a class="pagination-cont" href="/search?updated-max='+ pd +'&max-results='+ len +'">next</a>';
          var div = '<div class="pagination">';

          for(var i=0; i < numOfPages-2; i++){
            postOuterLength = postOuterLength + len;
            entryWanted = e.feed.entry[postOuterLength-1];
            pd = entryWanted.published.$t.replace(/\.\d*/, "");

            if(i !== (numOfPages-3)){
              code = code + '<a class="pagination-item" href="/search?updated-max='+ pd +'&max-results='+ len +'">'+ (i+3) +'</a>';
            } else {
              code = code + '<a class="pagination-item" href="/search?updated-max='+ pd +'&max-results='+ len +'">'+ (i+3) +'</a></div>';
            }
          }

          $(".Blog").append(div+code);
        }
        var p = $(".pagination");
        p.append(next);

        var pages = $(".pagination-item");
        if(pages.length >= 12){
          var thirdPage = $(".pagination-item").eq(2);
          var dots = "<span id='pDots'>...  </span>";

          pages.addClass("hide");
          thirdPage.after(dots);
          for(var i = 0; i < 3; i++) {
            pages.eq(i).removeClass("hide");
          }
          pages.eq(length-2).removeClass("hide");
          pages.eq(length-1).removeClass("hide");
        }
      }
    });
  }