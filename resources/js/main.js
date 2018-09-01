window.addEventListener('resize', function (){
	updateHeight();
	var archive_message=document.querySelector('#archives-message');
    if(archive_message != null)
    {
	    archive_message.style.height = window.innerHeight - 609.19 + "px";
	}
});


// Disables sakura animation if it is a mobile device
function isMobile() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(    hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)    0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac    (er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v    )w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-    d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(    m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(     |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(    k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-|     |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(    ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(    07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(    c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(    gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-    v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))    check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check; 
}

// Assigns heights to each polaroid depending on image dimensions
// Update height for the archive message vertical centering
function updateHeight() {
    imagesLoaded(document.body, function() {
        var polaroids = document.querySelectorAll('.flip-container');
        Array.prototype.forEach.call(polaroids, function(polaroid) {
			var height = polaroid.querySelector('img').height + 83;
            polaroid.style.height = height + "px";
			polaroid.querySelector('.back').style.height = height - 8 + "px";
        });
    });
}

window.onload = function() {
    // Loads all images
    updateHeight();
    $("#loader").fadeOut("slow");
    //Starts animation
    if (!isMobile()) {
        $('body').sakura({
            className: 'spring',
            fallSpeed: 1.09,
            newOn: 1000, // Interval after which a new petal is added
        });
    }
    
    var nav_dropdowns = document.querySelectorAll('nav .dropdown');
    Array.prototype.forEach.call(nav_dropdowns, function(nav_dropdown) {
        //Set max height for dropdown allowing for smooth animation
        nav_dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-content').style.maxHeight = this.getAttribute("data-height") + "px";
        });
        //Set max height back to 0 for dropdown allowing for smooth animation
        nav_dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-content').style.maxHeight = "0px";
        });
    });
};

// Toggles the responsive navbar with hamburger button
var hamburger = document.querySelector('nav button');
hamburger.addEventListener('click', function(){
    this.classList.toggle("is-active");
    var navbar = document.querySelector("#myTopnav");
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "topnav";
    }
});

// Handles comment submission with error/success messages and disabling/enabling form elements
$('#comment-form').submit(function () {
    var form_fields = this.elements;
    for (var i = 0; i < form_fields.length; ++i) {
        form_fields[i].readOnly = true;
    }
    $('#comment-form-submit').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            $('#comment-form-submit').html('Submitted').addClass('btn-disabled').prop('disabled', true);
            $('#comment-form .js-notice').attr('style', 'background-color: #BCE496');
            showAlert('<strong>Thanks for your comment!</strong> It will show on the site once it has been reviewed and approved.');
        },
        error: function (err) {
            console.log(err);
            $('#comment-form-submit').html('Submit Comment');
            $('#comment-form .js-notice').attr('style', 'background-color: #EEB6B6;');
            showAlert('<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.');
            for (var i = 0; i < form_fields.length; ++i) {
                form_fields[i].readOnly = false;
            }
        }
    });
    return false;
});

// Displays alert message within comment form
function showAlert(message) {
    $('#comment-form .js-notice').removeClass('hidden');
    $('#comment-form .js-notice-text').html(message);
}

function showHide (className, show)
{
    var items = document.querySelectorAll(className);
    var archive_message = document.querySelector('#archives-message');
    if (show == true && items.length == 0) 
    {
        if (curseason == "all")
        {
            archive_message.innerHTML =  "Nothing found in all of " + curyear;
        }
        else
        {
            archive_message.innerHTML =  "Nothing found in the " + curseason + " of " + curyear;
        }
        archive_message.style.display = "block";
    }
    else
    {
        archive_message.style.display = "none";
    }
    
    Array.prototype.forEach.call(items, function(item) {
        if (show == true)
        {
            item.style.display = "block";
        }
        else
        {
            item.style.display = "none";
        }
    });
}

// Select year with the up and down arrows
var year = document.querySelector('#year');
var curyear = parseInt(year.innerHTML, 10);
var curseason = "all";
document.querySelector('#year-up').addEventListener('click', function(){
    curyear = parseInt(year.innerHTML, 10);
    showHide('.all' + curyear, false);
    curyear++;
    year.innerHTML = curyear;
    showHide('.' + curseason + curyear, true);
    if (curyear >= 2022)
    {
        year.style.color = '#e87889';
    }
    else
    {
        year.style.color = '#7F7F7F';
    }
});

document.querySelector('#year-down').addEventListener('click', function(){
    curyear = parseInt(year.innerHTML, 10);
    showHide('.all' + curyear, false);
    curyear--;
    year.innerHTML = curyear;
    showHide('.' + curseason + curyear, true);
    if (curyear <= 2015)
    {
        year.style.color = '#e87889';
    }
    else
    {
        year.style.color = '#7F7F7F';
    }
});

/***************** RANGE SLIDER ******************* */
var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 25,
      style = '';
  
  // Set active label
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  //Set the curseason variable with slider changes and change animation
  curseason = curLabel.attr("data-season");
  $("#archives-panel").trigger("change-season", curseason);
        
  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, #e8c5d6 0%, #e8c5d6 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #e8c5d6 0%, #e8c5d6 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
    showHide('.' + curseason + curyear, false);
    sheet.textContent = getTrackStyle(this);
    showHide('.' + curseason + curyear, true);
});

// Change input value on label click
var range_labels = document.querySelectorAll('.range-labels li');
Array.prototype.forEach.call(range_labels, function(label) {
    label.addEventListener('click', function () {
        $rangeInput.val( $(this).index() + 1).trigger('input');        
    });
});

function setYear(){
    var selectYear = document.querySelector("select");    
    showHide('.all' + curyear, false);
    curyear = selectYear.options[selectYear.selectedIndex].text;
    showHide('.all' + curyear, true);
}

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  $(window).scroll(function(event) {
    el=$('.left-trees');
    if (el.visible(true)) {
        console.log("visible");
        el.addClass("in"); 
    } 
    });
