'use strict';

/* Services */

  
  //This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('findLyricsService', function ($http) {
	 var lyrics;
	 var apikey='87132fec391c5ee9faef3a237e9663';
	 var baseurl='http://api.lyricsnmusic.com/songs?';	 
	 
    this.getLyricsArtistSong = function (artist,song,perpage,page) {
		console.log("artista: " + artist);
		console.log("song: " + song);
		var urlcall;
		urlcall = baseurl + 'api_key='+apikey+'&artist='+artist+'&track='+song+'&per_page='+perpage+'&page='+page+'&callback=JSON_CALLBACK';
		var promise = $http.jsonp(urlcall).
		success(function(data, status, headers, config,statusText) {
		  // this callback will be called asynchronously
		  // when the response is available
		  return data;
		}).
		error(function(data, status, headers, config, statusText) {
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		  console.log(headers);
		  console.log(status);
		});
		 return promise;
    };
	
	
	this.getLyricsArtist = function (artist,perpage,page) {
		console.log("artista: " + artist);
		console.log("per page: " + perpage);
		var urlcall;
		//page = page +1;
		console.log("page: " + page);
		urlcall = baseurl + 'api_key='+apikey+'&artist='+artist+'&per_page='+perpage+'&page='+page+'&callback=JSON_CALLBACK';
		var promise = $http.jsonp( urlcall).
		success(function(data, status, headers, config,statusText) {
		  // this callback will be called asynchronously
		  // when the response is available
		  return data;
		}).
		error(function(data, status, headers, config, statusText) {
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		  console.log(headers);
		  console.log(status);
		});
		 return promise;
    };
	
	this.getLyricsSong = function (song,perpage,page) {
		console.log("song: " + song);
		var urlcall;
		urlcall = baseurl + 'api_key='+apikey+'&track='+song+'&per_page='+perpage+'&page='+page+'&callback=JSON_CALLBACK';
		var promise = $http.jsonp( urlcall).
		success(function(data, status, headers, config,statusText) {
		  // this callback will be called asynchronously
		  // when the response is available
		  return data;
		}).
		error(function(data, status, headers, config, statusText) {
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		  console.log(headers);
		  console.log(status);
		});
		 return promise;
    };
	
	this.getLyricsText = function (lyricsText,perpage,page) {
		lyricsText = lyricsText.replace(/(\r\n|\n|\r)/gm,"");
		console.log("artista: " + lyricsText);
		var urlcall;
		urlcall = baseurl + 'api_key='+apikey+'&lyrics='+lyricsText+'&per_page='+perpage+'&page='+page+'&callback=JSON_CALLBACK';
		var promiseText = $http.jsonp( urlcall).
		success(function(data, status, headers, config,statusText) {
		  // this callback will be called asynchronously
		  // when the response is available
		  console.log("data: " + data.data);
		  return data;
		}).
		error(function(data, status, headers, config, statusText) {
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		  console.log(statusText);
		  console.log(status);
		});
		 return promiseText;
    };

});
