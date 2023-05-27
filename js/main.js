function myFunction() {

  // Get the text field

  var copyText = document.getElementById("myInput"); 

  // Select the text field

  copyText.select();

  copyText.setSelectionRange(0, 99999); // For mobile devices 

  // Copy the text inside the text field

  navigator.clipboard.writeText(copyText.value);

  

  // Alert the copied text

  alert("Đã Sao Chép " + copyText.value);

}

  var channelID = "UCqZ4kYJ3QFdihfa3rZZa9Sg"; var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id="; $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) { var link = data.items[0].link; var id = link.substr(link.indexOf("=")+1); $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0"); });

var ping = new Date; $.ajax({ url: "ping-server.html", cache:false, success: function(output){ ping = new Date - ping; Console.log("Ping/Latency: " + ping); } });function show(shown, hidden) { document.getElementById(shown).style.display='block'; document.getElementById(hidden).style.display='none'; return false; } 
