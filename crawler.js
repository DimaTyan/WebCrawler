var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.reddit.com", function(error, response, body){
  if(error){
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);
  var $ = cheerio.load(body);

  $('div#siteTable > div.link').each(function(index){
    var title = $(this).find('p.title > a.title').text().trim();
    var subreddit = $(this).find('a.subreddit').text().trim();
    var user = $(this).find('a.author').text().trim();

    console.log("Title: " + title);
    console.log("Subreddit " + subreddit);
    console.log("User " + user);
  });
});
