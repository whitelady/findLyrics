'use strict';

/* Controllers */

//This controller retrieves data from the lyricsService and associates it with the $scope
//The $scope is ultimately bound to the customers view
app.controller('LyricsController', function ($scope, $http, $q, findLyricsService) {
	$scope.data = {};
	$scope.itemsPerPage = 10;
	$scope.maxSize = 10;
	
	//artist
	$scope.data.totalPages = 0;
	$scope.data.totalItems = 0;
	$scope.data.currentPage = 1;
	
	//song
	$scope.data.totalSongPages = 0;
	$scope.data.totalSongItems = 0;
	$scope.data.currentSongPage = 1;

	
	//artist & song
	$scope.data.totalArtSongPages = 0;
	$scope.data.totalArtSongItems = 0;
	$scope.data.currentArtSongPage = 1;
	
	//lyrics
	$scope.data.totalLyricPages = 0;
	$scope.data.totalLyricItems = 0;
	$scope.data.currentLyricPage = 1;
	
	
	$scope.showPagArtist = false;
	$scope.showPagSong = false;
	$scope.showPagArtSong = false;
	$scope.showPagLyric = false;
	
    $scope.findLyricsArtistSong = function () {
		$scope.data.totalArtSongPages = 0;
		$scope.data.totalArtSongItems=0;
		$scope.data.currentArtSongPage = 1;
		$scope.showPagArtSong = false;
		findArtistSong();
    };
	
	 $scope.findLyricsArtSongChanged = function () {
		findArtistSong();
    };
	
	 $scope.findLyricsArtist = function () {
		$scope.data.currentPage = 1;
		$scope.data.totalPages = 0;
		$scope.data.totalItems=0;
		$scope.showPagArtist = false;
		findArtist();
    };
	
	 $scope.findLyricsArtistChanged = function () {
		findArtist();
    };
	
	
	 $scope.findLyricsSong = function () {
		$scope.data.totalSongPages = 0;
		$scope.data.totalSongItems=0;
		$scope.data.currentSongPage = 1;
		$scope.showPagSong = false;
		findSong();
    };
	
	 $scope.findLyricsSongChanged = function () {
		findSong();
    };
	
	 $scope.findLyricsText = function () {
		$scope.data.totalLyricPages = 0;
		$scope.data.totalLyricItems=0;
		$scope.data.currentLyricPage = 1;
		$scope.showPagLyric = false;
		findLyrics();
    };
	
	 $scope.findLyricsLyricChanged = function () {
		findLyrics();
    };
	
	//find  Artist
	function findArtist() {
		findLyricsService.getLyricsArtist($scope.data.artistname,$scope.itemsPerPage,$scope.data.currentPage)
		.then(function (lyrics) {
			var result = [];

			for(var i in lyrics.data.meta)
				result.push([i, lyrics.data.meta [i]]);
			if($scope.data.totalPages == 0){
				$scope.data.totalPages = parseInt(result[0][1]);
				$scope.data.totalItems = $scope.data.totalPages * $scope.itemsPerPage;
			}
			if ($scope.data.totalPages > 0) {
				$scope.showPagArtist = true;
			}
			$scope.data.currentPage = result[2][1];
			$scope.lyrics = lyrics.data;
		});
	};
	
	//Find artist & song
	function findArtistSong() {
		findLyricsService.getLyricsArtistSong($scope.data.artist,$scope.data.song,$scope.itemsPerPage,$scope.data.currentArtSongPage)
		.then(function (lyrics) {
			var result = [];

			for(var i in lyrics.data.meta)
				result.push([i, lyrics.data.meta [i]]);
			if($scope.data.totalArtSongPages == 0){
				$scope.data.totalArtSongPages = parseInt(result[0][1]);
				$scope.data.totalArtSongItems = $scope.data.totalArtSongPages * $scope.itemsPerPage;
	
			}
			if ($scope.data.totalArtSongPages > 0) {
				$scope.showPagArtSong = true;
			}
			$scope.data.currentArtSongPage = result[2][1];
			$scope.lyricsartistsong = lyrics.data;
		});
	};
	
	//find song
	function findSong() {
		findLyricsService.getLyricsSong($scope.data.track,$scope.itemsPerPage,$scope.data.currentSongPage)
		.then(function (lyrics) {
			var result = [];

			for(var i in lyrics.data.meta)
				result.push([i, lyrics.data.meta [i]]);
			if($scope.data.totalSongPages == 0){
				$scope.data.totalSongPages = parseInt(result[0][1]);
				$scope.data.totalSongItems = $scope.data.totalSongPages * $scope.itemsPerPage;
			}
			if ($scope.data.totalSongPages > 0) {
				$scope.showPagSong = true;
			}
			$scope.data.currentSongPage = result[2][1];
			console.log($scope.data.totalSongPages);
			$scope.lyricsong = lyrics.data;
		});
	};
	
	//find by Lyrics
	
	function findLyrics() {
		findLyricsService.getLyricsText($scope.data.lyricstext,$scope.itemsPerPage,$scope.data.currentLyricPage)
		.then(function (lyrics) {
			var result = [];

			for(var i in lyrics.data.meta)
				result.push([i, lyrics.data.meta [i]]);
			if($scope.data.totalLyricsPages == 0){
				$scope.data.totalLyricsPages = parseInt(result[0][1]);
				$scope.data.totalLyricsItems = $scope.data.totalLyricsPages * $scope.itemsPerPage;
			}
			if ($scope.data.totalLyrcsPages > 0) {
				$scope.showPagLyric = true;
			}
			$scope.data.currentLyricPage = result[2][1];
			$scope.lyrics_text = lyrics.data;
		});
	};
	
	
	
});

