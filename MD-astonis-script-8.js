/* Related Posts
-----------------------------------------------------------*/

  var labels = $(".post-label-anchor"),
      labelsLength = labels.length,
      relatedPostsUL = $("#related-posts").children("ul");

  if(labelsLength) {

    var labelText;

    if(labelsLength === 1) {
      labelText = labels.text().trim();

      $.ajax({
        url: "/feeds/posts/default/-/"+ labelText +"?alt=json-in-script&max-results=30",
        type: 'get',
        dataType: "jsonp",
        success: function (data) {

          var posturl = "";
          var htmlcode = '';
          var numOfEntries = data.feed.entry.length;
          var numOfPostsToBeDisplayed;

          if(numOfEntries < 3) {
            numOfPostsToBeDisplayed = numOfEntries;
          } else {
            numOfPostsToBeDisplayed = 3;
          }

          var randomNumber;
          if(numOfEntries >= 4) {
            randomNumber = [];
            for(var a = 0; a < numOfEntries; a++) {
              randomNumber[a] = a;
            }
          }

          var c = 0;
          for (var i = 0; i < numOfPostsToBeDisplayed ; i++) {

            var entry,
                entryToBeChoosen;

            if(numOfEntries > 3){
              entryToBeChoosen = randomNumber.splice(Math.floor(Math.random() * (numOfEntries - c)), 1);
              entry = data.feed.entry[entryToBeChoosen];
              c += 1;
            } else {
              entry = data.feed.entry[i];
            }

            var posttitle = entry.title.$t;
            var entryTitle = $(".entry-title").text().toLowerCase().trim();

            if(numOfEntries > 3 && entryTitle === posttitle.toLowerCase()) {
              entryToBeChoosen = randomNumber.splice(Math.floor(Math.random() * (numOfEntries - c - 1)), 1);
              entry = data.feed.entry[entryToBeChoosen];
              posttitle = entry.title.$t;
              c += 2;
            }

            if((numOfEntries === 3 || numOfEntries === 2 ) && entryTitle === posttitle.toLowerCase()) {
              i += 1;
              entry = data.feed.entry[i];
              posttitle = entry.title.$t;
            }

            for (var j = 0; j < entry.link.length; j++) {
              if (entry.link[j].rel == "alternate") {
                posturl = entry.link[j].href;
                break
              }
            }

            var content = entry.content.$t;
            var $content = $('<div>').html(content);

            if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
              var src2 = entry.media$thumbnail.url;
              var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>';
              } else if (content.indexOf("<img") > -1) {
                var src = $content.find('img:first').attr('src');
                var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>';
                } else {
                  var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
                  }
            htmlcode = '<li class="related-post-item"><div class="related-thumb">' + thumb + '</div><h3 class="related-post-title"><a href="' + posturl + '">' + posttitle + '</a></h3></li>';
            relatedPostsUL.append(htmlcode);
          }


          $('.related-post-img').each(function () {
            $(this).attr('style', function (i, src) {
              return src.replace('/default.jpg', '/mqdefault.jpg')
            }).attr('style', function (i, src) {
              return src.replace('s72-c', 's1600')
            })
          });
        }
      });

    } else if(labelsLength === 2) {

      var theFirstLabel = labels.eq(0).text().trim();
      var theLastLabel = labels.eq(1).text().trim();

      $.ajax({
        url: "/feeds/posts/default/-/" + theFirstLabel + "?alt=json-in-script&max-results=30",
        type: 'get',
        dataType: "jsonp",
        success: function (data) {

          if(data.feed.entry.length < 3) {

            $.ajax({
              url: "/feeds/posts/default/-/" + theLastLabel + "?alt=json-in-script&max-results=30",
              type: 'get',
              dataType: "jsonp",
              success: function (data) {

                var posturl = "";
                var htmlcode = '';
                var numOfEntries = data.feed.entry.length;
                var numOfPostsToBeDisplayed;

                if(numOfEntries < 3) {
                  numOfPostsToBeDisplayed = numOfEntries;
                } else {
                  numOfPostsToBeDisplayed = 3;
                }

                var randomNumber;
                if(numOfEntries >= 4) {
                  randomNumber = [];
                  for(var a = 0; a < numOfEntries; a++) {
                    randomNumber[a] = a;
                  }
                }


                var c = 0;
                for (var i = 0; i < numOfPostsToBeDisplayed ; i++) {

                  var entry,
                      entryToBeChoosen;

                  if(numOfEntries > 3){
                    entryToBeChoosen = randomNumber.splice(Math.floor(Math.random() * (numOfEntries - c)), 1);
                    entry = data.feed.entry[entryToBeChoosen];
                    c += 1;
                  } else {
                    entry = data.feed.entry[i];
                  }

                  var posttitle = entry.title.$t;
                  var entryTitle = $(".entry-title").text().toLowerCase().trim();

                  if(numOfEntries > 3 && entryTitle === posttitle.toLowerCase()) {
                    entryToBeChoosen = randomNumber.splice(Math.floor(Math.random() * (numOfEntries - c - 1)), 1);
                    entry = data.feed.entry[entryToBeChoosen];
                    posttitle = entry.title.$t;
                    c += 2;
                  }

                  if((numOfEntries === 3 || numOfEntries === 2 ) && entryTitle === posttitle.toLowerCase()) {
                    i += 1;
                    entry = data.feed.entry[i];
                    posttitle = entry.title.$t;
                  }

                  for (var j = 0; j < entry.link.length; j++) {
                    if (entry.link[j].rel == "alternate") {
                      posturl = entry.link[j].href;
                      break
                    }
                  }

                  var content = entry.content.$t;
                  var $content = $('<div>').html(content);

                  if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                    var src2 = entry.media$thumbnail.url;
                    var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>';
                    } else if (content.indexOf("<img") > -1) {
                      var src = $content.find('img:first').attr('src');
                      var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>';
                      } else {
                        var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
                        }
                  htmlcode = '<li class="related-post-item"><div class="related-thumb">' + thumb + '</div><h3 class="related-post-title"><a href="' + posturl + '">' + posttitle + '</a></h3></li>';
                  relatedPostsUL.append(htmlcode);
                }

                $('.related-post-img').each(function () {
                  $(this).attr('style', function (i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg')
                  }).attr('style', function (i, src) {
                    return src.replace('s72-c', 's1600')
                  })
                });
              }
            });
          } else {

            var posturl = "";
            var htmlcode = '';
            var numOfEntries = data.feed.entry.length;
            var numOfPostsToBeDisplayed;

            if(numOfEntries < 3) {
              numOfPostsToBeDisplayed = numOfEntries;
            } else {
              numOfPostsToBeDisplayed = 3;
            }

            var randomNumber;
            if(numOfEntries >= 4) {
              randomNumber = [];
              for(var a = 0; a < numOfEntries; a++) {
                randomNumber[a] = a;
              }
            }

            var c = 0;
            for (var i = 0; i < numOfPostsToBeDisplayed ; i++) {

              var entry,
                  entryToBeChoosen;

              if(numOfEntries > 3){
                entryToBeChoosen = randomNumber.splice(Math.floor(Math.random() * (numOfEntries - c)), 1);
                entry = data.feed.entry[entryToBeChoosen];
                c += 1;
              } else {
                entry = data.feed.entry[i];
              }

              var posttitle = entry.title.$t;
              var entryTitle = $(".entry-title").text().toLowerCase().trim();

              if(numOfEntries > 3 && entryTitle === posttitle.toLowerCase()) {
                entryToBeChoosen = randomNumber.splice(Math.floor(Math.random() * (numOfEntries - c - 1)), 1);
                entry = data.feed.entry[entryToBeChoosen];
                posttitle = entry.title.$t;
                c += 2;
              }

              if((numOfEntries === 3 || numOfEntries === 2 ) && entryTitle === posttitle.toLowerCase()) {
                i += 1;
                entry = data.feed.entry[i];
                posttitle = entry.title.$t;
              }

              for (var j = 0; j < entry.link.length; j++) {
                if (entry.link[j].rel == "alternate") {
                  posturl = entry.link[j].href;
                  break
                }
              }

              var content = entry.content.$t;
              var $content = $('<div>').html(content);

              if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                var src2 = entry.media$thumbnail.url;
                var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>';
                } else if (content.indexOf("<img") > -1) {
                  var src = $content.find('img:first').attr('src');
                  var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>';
                  } else {
                    var thumb = '<a class="related-post-img" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
                    }
              htmlcode = '<li class="related-post-item"><div class="related-thumb">' + thumb + '</div><h3 class="related-post-title"><a href="' + posturl + '">' + posttitle + '</a></h3></li>';
              relatedPostsUL.append(htmlcode);
            }

            $('.related-post-img').each(function () {
              $(this).attr('style', function (i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg')
              }).attr('style', function (i, src) {
                return src.replace('s72-c', 's1600')
              })
            });

          } // else if (data.feed.entry.length >= 2)           
        } // theFirstLabel success function
      }); // theFirstLabel ajax request

    } else if (labelsLength >= 3) {

      var label1 = labels.eq(0).text().trim(),
          label2 = labels.eq(1).text().trim(),
          label3 = labels.eq(2).text().trim();

      $.ajax({
        url: "/feeds/posts/default/-/"+ label1 +"?alt=json-in-script&max-results=30",
        type: 'get',
        dataType: "jsonp",
        success: function (data) {

          var entry,
              posturl = "",
              entryToBeChoosen,
              numOfEntries = data.feed.entry.length;

          if (numOfEntries > 1) {
            entryToBeChoosen = Math.floor(Math.random() * numOfEntries);
            entry = data.feed.entry[entryToBeChoosen];
          } else {
            entry = data.feed.entry[0];
          }

          var posttitle = entry.title.$t;
          var entryTitle = $(".entry-title").text().toLowerCase().trim();

          if(numOfEntries > 1 && entryTitle === posttitle.toLowerCase()) {
            if(entryToBeChoosen === 0) {
              entryToBeChoosen = Math.floor((Math.random() * (numOfEntries-1) + 1));
              entry = data.feed.entry[entryToBeChoosen];
            } else {
              entry = data.feed.entry[0];
            }
            posttitle = entry.title.$t;
          }

          for (var j = 0; j < entry.link.length; j++) {
            if (entry.link[j].rel == "alternate") {
              posturl = entry.link[j].href;
              break
            }
          }

          var content = entry.content.$t;
          var $content = $('<div>').html(content);

          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
            var src2 = entry.media$thumbnail.url;
            var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ src2 +') no-repeat center center;background-size: cover"/>'
            } else if (content.indexOf("<img") > -1) {
              var src = $content.find('img:first').attr('src');
              var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ src +') no-repeat center center;background-size: cover"/>'
              } else {
                var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ no_image_url +') no-repeat center center;background-size: cover"/>'
                }
          var htmlcode = '<li class="related-post-item"><div class="related-thumb">'+ thumb +'</div><h3 class="related-post-title"><a href="'+ posturl +'">'+ posttitle +'</a></h3></li>'

          $('.related-post-img').each(function () {
            $(this).attr('style', function (i, src) {
              return src.replace('/default.jpg', '/mqdefault.jpg')
            }).attr('style', function (i, src) {
              return src.replace('s72-c', 's1600')
            })
          });

          relatedPostsUL.append(htmlcode);

      $.ajax({
        url: "/feeds/posts/default/-/"+ label2 +"?alt=json-in-script&max-results=30",
        type: 'get',
        dataType: "jsonp",
        success: function (data) {

          var entry,
              posturl = "",
              entryToBeChoosen,
              numOfEntries = data.feed.entry.length;

          if (numOfEntries > 1) {
            entryToBeChoosen = Math.floor(Math.random() * numOfEntries);
            entry = data.feed.entry[entryToBeChoosen];
          } else {
            entry = data.feed.entry[0];
          }

          var posttitle = entry.title.$t;
          var entryTitle = $(".entry-title").text().toLowerCase().trim();
          var prevEntryTitle = $(".related-post-title").eq(0).text().toLowerCase().trim();
          var postT = posttitle.toLowerCase();

          if(numOfEntries > 1 && entryTitle === postT) {
            if(entryToBeChoosen === 0) {
              entryToBeChoosen = Math.floor((Math.random() * (numOfEntries-1) + 1));
              entry = data.feed.entry[entryToBeChoosen];
            } else {
              entry = data.feed.entry[0];
            }
            posttitle = entry.title.$t;
          }

          if(numOfEntries > 2 && (prevEntryTitle === postT && entryTitle !== postT) ){
            if(entryToBeChoosen === 0) {
              entryToBeChoosen = Math.floor((Math.random() * (numOfEntries-1) + 1));
              entry = data.feed.entry[entryToBeChoosen];
            } else {
              entry = data.feed.entry[0];
            }
            posttitle = entry.title.$t;
          }

          for (var j = 0; j < entry.link.length; j++) {
            if (entry.link[j].rel == "alternate") {
              posturl = entry.link[j].href;
              break
            }
          }

          var content = entry.content.$t;
          var $content = $('<div>').html(content);

          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
            var src2 = entry.media$thumbnail.url;
            var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ src2 +') no-repeat center center;background-size: cover"/>'
            } else if (content.indexOf("<img") > -1) {
              var src = $content.find('img:first').attr('src');
              var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ src +') no-repeat center center;background-size: cover"/>'
              } else {
                var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ no_image_url +') no-repeat center center;background-size: cover"/>'
                }
          var htmlcode = '<li class="related-post-item"><div class="related-thumb">'+ thumb +'</div><h3 class="related-post-title"><a href="'+ posturl +'">'+ posttitle +'</a></h3></li>'

          $('.related-post-img').each(function () {
            $(this).attr('style', function (i, src) {
              return src.replace('/default.jpg', '/mqdefault.jpg')
            }).attr('style', function (i, src) {
              return src.replace('s72-c', 's1600')
            })
          });
          relatedPostsUL.append(htmlcode);

      $.ajax({
        url: "/feeds/posts/default/-/"+ label3 +"?alt=json-in-script&max-results=30",
        type: 'get',
        dataType: "jsonp",
        success: function (data) {

          var entry,
              posturl = "",
              entryToBeChoosen,
              numOfEntries = data.feed.entry.length;

          if (numOfEntries > 1) {
            entryToBeChoosen = Math.floor(Math.random() * numOfEntries);
            entry = data.feed.entry[entryToBeChoosen];
          } else {
            entry = data.feed.entry[0];
          }

          var posttitle = entry.title.$t;
          var entryTitle = $(".entry-title").text().toLowerCase().trim();
          var prevEntryTitle1 = $(".related-post-title").eq(0).text().toLowerCase().trim();
          var prevEntryTitle2 = $(".related-post-title").eq(1).text().toLowerCase().trim();
          var postT = posttitle.toLowerCase();

          if(numOfEntries > 1 && (entryTitle === postT)) {
            if(entryToBeChoosen === 0) {
              entryToBeChoosen = Math.floor((Math.random() * (numOfEntries-1) + 1));
              entry = data.feed.entry[entryToBeChoosen];
            } else {
              entry = data.feed.entry[0];
            }
            posttitle = entry.title.$t;
          }

          if(numOfEntries > 2 && ((entryTitle !== postT) && (prevEntryTitle1 === postT || prevEntryTitle2 === postT))) {
            if(entryToBeChoosen === 0) {
              entryToBeChoosen = Math.floor((Math.random() * (numOfEntries-1) + 1));
              entry = data.feed.entry[entryToBeChoosen];
            } else {
              entry = data.feed.entry[0];
            }
            posttitle = entry.title.$t;
          }

          for (var j = 0; j < entry.link.length; j++) {
            if (entry.link[j].rel == "alternate") {
              posturl = entry.link[j].href;
              break
            }
          }

          var content = entry.content.$t;
          var $content = $('<div>').html(content);

          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
            var src2 = entry.media$thumbnail.url;
            var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ src2 +') no-repeat center center;background-size: cover"/>'
            } else if (content.indexOf("<img") > -1) {
              var src = $content.find('img:first').attr('src');
              var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ src +') no-repeat center center;background-size: cover"/>'
              } else {
                var thumb = '<a class="related-post-img" href="'+ posturl +'" style="background:url('+ no_image_url +') no-repeat center center;background-size: cover"/>'
                }
          var htmlcode = '<li class="related-post-item"><div class="related-thumb">'+ thumb +'</div><h3 class="related-post-title"><a href="'+ posturl +'">'+ posttitle +'</a></h3></li>'

          $('.related-post-img').each(function () {
            $(this).attr('style', function (i, src) {
              return src.replace('/default.jpg', '/mqdefault.jpg')
            }).attr('style', function (i, src) {
              return src.replace('s72-c', 's1600')
            })
          });
          relatedPostsUL.append(htmlcode);
        }
      }); // The third ajax request

        }
      }); // The second ajax request

        }
      }); // The first ajax request


    } // else if (labelsLength >= 3)
  } // if(labelsLength)