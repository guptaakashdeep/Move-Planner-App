
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
	
    // load streetview

    // YOUR CODE GOES HERE!
	var street = $('#form-container').find('#street').val();
	var city = $('#form-container').find('#city').val();
    var loc = street+","+city;
    var image = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location='+loc+'"'+">";
	$('body').append(image);
	

    return false;
};

$('#form-container').submit(loadData);
