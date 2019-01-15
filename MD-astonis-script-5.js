  if(showPagination) {
    $("#blog-pager").remove();
    var label = $(".status-msg-body").children("b").text().trim();

    if(label.length){
      $.ajax({
        url: "/feeds/posts/default/-/"+ label +"?alt=json-in-script&max-results=10000",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var url = location.href;
          var h = url.match(/max-results=\d*/);
          var maxResults = h[0].replace("max-results=", "")*1;
          var len = maxResults*1;
          var numOfEntries = e.feed.entry.length;
          var numOfPages = Math.ceil(numOfEntries/maxResults);
          var a = url.match(/updated-max=[^a-z][^\&]*/);

          if(a !== null) {
            var s = a[0].replace("updated-max=", "");
            s = s.replace(/\.\d*/, ""); 
          }

          if(numOfPages !== 1 ){
            var entryWanted = e.feed.entry[maxResults-1];
            var pd = entryWanted.published.$t.replace(/\.\d*/, "");

            if(a === null) {
              var code = '<span class="pagination-item active-page">1</span><a href="/search/label/'+ label +'?updated-max='+ pd +'&max-results='+ len +'" class="pagination-item">2</a>';
            } else {
              if(s === pd){
                var code = '<a href="/search/label/'+ label +'?&max-results='+ len +'" class="pagination-item">1</a><span class="pagination-item active-page">2</span>';
              } else {
                var code = '<a class="pagination-item"  href="/search/label/'+ label +'?&max-results='+ len +'">1</a><a href="/search/label/'+ label +'?updated-max='+ pd +'&max-results='+ len +'" class="pagination-item">2</a>';
              }
            }

            var div = '<div class="pagination">';

            if(numOfPages !== 2){
              for(var i=0; i < numOfPages-2; i++){
                maxResults = maxResults + len;
                entryWanted = e.feed.entry[maxResults-1];
                pd = entryWanted.published.$t.replace(/\.\d*/, "");

                if(i !== (numOfPages-3)){
                  if(s === pd){
                    code = code + '<span class="pagination-item active-page">'+ (i+3) +'</span>';
                  } else {
                    code = code + '<a class="pagination-item" href="/search/label/'+ label +'?updated-max='+ pd +'&max-results='+ len +'">'+ (i+3) +'</a>';
                  }
                } else {
                  if(s === pd){
                    code = code + '<span class="pagination-item active-page">'+ (i+3) +'</span></div>';
                  } else {
                    code = code + '<a class="pagination-item" href="/search/label/'+ label +'?updated-max='+ pd +'&max-results='+ len +'">'+ (i+3) +'</a></div>';
                  }
                }
              }
            }
            $(".Blog").append(div+code);
          }

          var p = $(".pagination");
          var pitems = $(".pagination-item");
          var activeElem = $(".active-page");
          var lp = pitems.eq(pitems.length-1);
          var next = activeElem.next().attr("href");
          var prev = activeElem.prev().attr("href");
          var prevElem = "<a class='pagination-cont' href='"+ prev +"'>prev</a>";
          var nextElem = "<a class='pagination-cont' href='"+ next +"'>next</a>";

          if(a !== null){
            p.prepend(prevElem);
            if(!(lp.hasClass("active-page"))) {
              p.append(nextElem);
            }
          } else {
            p.append(nextElem);
          }

          var numOfPages = pitems.length;
          if(numOfPages >= 12) {
            var index = pitems.index(activeElem);
            var dots = "<span id='pDots'>...  </span>";

            if(index < 4) { 
              var fourthPage = $(".pagination-item").eq(3);

              pitems.addClass("hide");
              for(var i = 0; i < 4; i++) {
                pitems.eq(i).removeClass("hide");
              }

              if(index === 3){
               	pitems.eq(4).removeClass("hide");
                pitems.eq(5).removeClass("hide").after(dots);;
              } else {
                fourthPage.after(dots);
              }

              pitems.eq(numOfPages-1).removeClass("hide");
            } else {
              pitems.eq(0).after(dots);
              
              if(index < numOfPages-5){
                pitems.eq(index+2).after(dots);
                pitems.addClass("hide");
                pitems.eq(0).removeClass("hide");
                pitems.eq(index).removeClass("hide");
                pitems.eq(index+1).removeClass("hide");
                pitems.eq(index+2).removeClass("hide");
                pitems.eq(index-1).removeClass("hide");
                pitems.eq(index-2).removeClass("hide");
                pitems.eq(numOfPages-1).removeClass("hide");
              } else {
                for(var i = 0; i < index-2; i++) {
                  pitems.eq(i).addClass("hide");
                }
                pitems.eq(0).removeClass("hide");
              }
            }
          } /* if(numOfPages >= 12) */
        }
      });
    } else {

      $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results=10000",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var url = location.href;
          var h = url.match(/max-results=\d*/);
          var maxResults = h[0].replace("max-results=", "")*1;
          var len = maxResults*1;
          var numOfEntries = e.feed.entry.length;
          var numOfPages = Math.ceil(numOfEntries/maxResults);
          var a = url.match(/updated-max=[^a-z][^\&]*/);
          var s = a[0].replace("updated-max=", "");
          s = s.replace(/\.\d*/, ""); 

          if(numOfPages !== 1 ){
            var entryWanted = e.feed.entry[maxResults-1];
            var pd = entryWanted.published.$t.replace(/\.\d*/, "");

            if(s === pd){
              var code = '<a href="/" class="pagination-item">1</a><span class="pagination-item active-page">2</span>';
            } else {
              var code = '<a href="/" class="pagination-item">1</a><a class="pagination-item" href="/search?updated-max='+ pd +'&max-results='+ len +'">2</a>';
            }

            var div = '<div class="pagination">';

            if(numOfPages !== 2){
              for(var i=0; i < numOfPages-2; i++){
                maxResults = maxResults + len;
                entryWanted = e.feed.entry[maxResults-1];
                pd = entryWanted.published.$t.replace(/\.\d*/, "");

                if(i !== (numOfPages-3)){
                  if(s === pd){
                    code = code + '<span class="pagination-item active-page">'+ (i+3) +'</span>';
                  } else {
                    code = code + '<a class="pagination-item" href="/search?updated-max='+ pd +'&max-results='+ len +'">'+ (i+3) +'</a>';
                  }
                } else {
                  if(s === pd){
                    code = code + '<span class="pagination-item active-page">'+ (i+3) +'</span></div>';
                  } else {
                    code = code + '<a class="pagination-item" href="/search?updated-max='+ pd +'&max-results='+ len +'">'+ (i+3) +'</a></div>';
                  }
                }
              }	
            }
            $(".Blog").append(div+code);
          }

          var p = $(".pagination");
          var pitems = $(".pagination-item");
          var activeElem = $(".active-page");
          var lp = pitems.eq(pitems.length-1);
          var next = activeElem.next().attr("href");
          var prev = activeElem.prev().attr("href");
          var prevElem = "<a class='pagination-cont' href='"+ prev +"'>prev</a>";
          var nextElem = "<a class='pagination-cont' href='"+ next +"'>next</a>";

          p.prepend(prevElem);
          if(!(lp.hasClass("active-page"))) {
            p.append(nextElem);
          }

          var numOfPages = pitems.length;
          if(numOfPages >= 12) {
            var index = pitems.index(activeElem);
            var dots = "<span id='pDots'>...  </span>";

            if(index < 4) { 
              var fourthPage = $(".pagination-item").eq(3);

              pitems.addClass("hide");
              for(var i = 0; i < 4; i++) {
                pitems.eq(i).removeClass("hide");
              }

              if(index === 3){
               	pitems.eq(4).removeClass("hide");
                pitems.eq(5).removeClass("hide").after(dots);;
              } else {
                fourthPage.after(dots);
              }

              pitems.eq(numOfPages-1).removeClass("hide");
            } else {
              pitems.eq(0).after(dots);
              
              if(index < numOfPages-5){
                pitems.eq(index+2).after(dots);
                pitems.addClass("hide");
                pitems.eq(0).removeClass("hide");
                pitems.eq(index).removeClass("hide");
                pitems.eq(index+1).removeClass("hide");
                pitems.eq(index+2).removeClass("hide");
                pitems.eq(index-1).removeClass("hide");
                pitems.eq(index-2).removeClass("hide");
                pitems.eq(numOfPages-1).removeClass("hide");
              } else {
                for(var i = 0; i < index-2; i++) {
                  pitems.eq(i).addClass("hide");
                }
                pitems.eq(0).removeClass("hide");
              }
            }
          } /* if(numOfPages >= 12) */
        }
      });
    }
  }
