/* Sidebar Widgets
--------------------------------------*/
$("#footer-wrapper .HTML").each(function () {
	var widget = $(this);
	var widgetContent = widget.children(".widget-content");
	var widgetContentText = widgetContent.text().trim();
	var wct = widgetContentText.toLowerCase();
	if ((wct === "randomposts1") || (wct === "random posts1")) {
		widgetContent.addClass("randomposts1");
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script",
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				var entryLength = e.feed.entry.length,
				a = entryLength - footerRandomPostsNum,
				n = Math.floor(Math.random() * (a + 1));
				$.ajax({
					url: "/feeds/posts/default?alt=json-in-script&end-index=" + n + "",
					type: "get",
					dataType: "jsonp",
					success: function (e) {
						var img = new Array();
						var trtd = '';
						for (var i = 0; i < footerRandomPostsNum; i++) {
							var entry = e.feed.entry[n + i];
							var posttitle = entry.title.$t;
							var posturl;
							var post_comments;
							var comment_url;
							for (var k = 0; k < entry.link.length; k++) {
								if (entry.link[k].rel == 'alternate') {
									posturl = entry.link[k].href;
									break
								}
							}
							for (var k = 0; k < entry.link.length; k++) {
								if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
									post_comments = entry.link[k].title;
									comment_url = entry.link[k].href;
									break
								}
							}
							if ("content" in entry) {
								var postcontent = entry.content.$t
							}
							s = postcontent;
							a = s.indexOf("<img");
							b = s.indexOf("src=\"", a);
							c = s.indexOf("\"", b + 5);
							d = s.substr(b + 5, c - b - 5);
							if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
								img[n] = d;
								var post_image = img[n]
							} else {
								var post_image = no_image_url
							}
							var trtd = trtd + '<li class="post-wrapper clearfix"><a href="' + posturl + '" class="random_post-image" style="background: url(' + post_image + ') no-repeat center;background-size: cover"></a><a href="' + posturl + '"><h3 class="random_post-title">' + posttitle + '</h3></a><a href="' + comment_url + '" class="post-comments"><i class="fa fa-comment-o icon"></i>' + post_comments + '</a></li>'
						}
						widgetContent.html('<ul class="random-posts">' + trtd + '</ul>')
					}
				})
			}
		})
	} else if ((wct === "randomposts2") || (wct === "random posts2")) {
		widgetContent.addClass("randomposts2");
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script",
			type: "get",
			dataType: "jsonp",
			success: function (e) {
				var entryLength = e.feed.entry.length,
				a = entryLength - footerRandomPostsNum,
				n = Math.floor(Math.random() * (a + 1));
				$.ajax({
					url: "/feeds/posts/default?alt=json-in-script&end-index=" + n + "",
					type: "get",
					dataType: "jsonp",
					success: function (e) {
						var img = new Array();
						var trtd = '';
						for (var i = 0; i < footerRandomPostsNum; i++) {
							var entry = e.feed.entry[n + i];
							var posttitle = entry.title.$t;
							var posturl;
							for (var k = 0; k < entry.link.length; k++) {
								if (entry.link[k].rel == 'alternate') {
									posturl = entry.link[k].href;
									break
								}
							}
							if ("content" in entry) {
								var postcontent = entry.content.$t
							}
							s = postcontent;
							a = s.indexOf("<img");
							b = s.indexOf("src=\"", a);
							c = s.indexOf("\"", b + 5);
							d = s.substr(b + 5, c - b - 5);
							if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
								img[n] = d;
								var post_image = img[n]
							} else {
								var post_image = no_image_url
							}
							var summary = postcontent.replace(/<.+?>/g, '').substring(0, 90) + "...";
							var trtd = trtd + '<li class="post-wrapper clearfix"><a href="' + posturl + '" class="post-image" style="background: url(' + post_image + ') no-repeat center;background-size: cover"></a><div class="title-summary-wrapper"><a href="' + posturl + '" class="post-title"><h3 class="heading">' + posttitle + '</h3></a><p class="post-summary">' + summary + '</p></div></li>'
						}
						widgetContent.html('<ul class="random-posts">' + trtd + '</ul>')
					}
				})
			}
		})
	} else if ((wct === "recentposts1") || (wct === "recent posts1")) {
		widgetContent.addClass("recentposts1");
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=" + footerRecentPostsNum + "",
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
							break
						}
					}
					if ("content" in entry) {
						var postcontent = entry.content.$t
					}
					s = postcontent;
					a = s.indexOf("<img");
					b = s.indexOf("src=\"", a);
					c = s.indexOf("\"", b + 5);
					d = s.substr(b + 5, c - b - 5);
					if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
						img[i] = d;
						var post_image = img[i]
					} else {
						var post_image = no_image_url
					}
					var trtd = trtd + '<li class="recent-post-item"><a href="' + posturl + '" class="post-image" style="background: url(' + post_image + ') no-repeat center; background-size: cover;"></a><a href="' + posturl + '" class="post-title"><h2 class="heading">' + posttitle + '</h2></a></li>'
				}
				widgetContent.html("<ul class='recent-posts-wrapper'>" + trtd + "</ul>")
			}
		})
	} else if ((wct === "recentposts2") || (wct === "recent posts2")) {
		widgetContent.addClass("recentposts2");
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=" + footerRecentPostsNum + "",
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
							break
						}
					}
					if ("content" in entry) {
						var postcontent = entry.content.$t
					}
					s = postcontent;
					a = s.indexOf("<img");
					b = s.indexOf("src=\"", a);
					c = s.indexOf("\"", b + 5);
					d = s.substr(b + 5, c - b - 5);
					if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
						img[i] = d;
						var post_image = img[i]
					} else {
						var post_image = no_image_url
					}
					var summary = postcontent.replace(/<.+?>/g, '').substring(0, 90) + "...";
					var trtd = trtd + '<li class="post-wrapper clearfix"><a href="' + posturl + '" class="post-image" style="background: url(' + post_image + ') no-repeat center;background-size: cover"></a><div class="title-summary-wrapper"><a href="' + posturl + '" class="post-title"><h3 class="heading">' + posttitle + '</h3></a><p class="post-summary">' + summary + '</p></div></li>'
				}
				widgetContent.html("<ul class='recent-posts-wrapper'>" + trtd + "</ul>")
			}
		})
	}
});