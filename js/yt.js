var channelID = "qZ4kYJ3QFdihfa3rZZa9Sg"; var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id="; $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) { var link = data.items[0].link; var id = link.substr(link.indexOf("=")+1); $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0"); });// Set the date we're counting down to
