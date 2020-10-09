$(document).ready(function(){
// console.log('dom called');
let currentPath = window.location.pathname;
if(currentPath.indexOf('smarterpartner')>0){
  playVideo();
}


function playVideo(){
    $('.video-modal-container').removeClass('non-visible');
    let mainVideoClass = $('.video-modal');
    let videoTag = $('.modal-video');
    videoTag.empty();
    // let title = $(this).find('p').text();
    // mainVideoClass.find('h2').text(title);
    let videoLink = $(this).find('.video-link').text();
    $('.modal-video').append('<source src="'+videoLink+'" type="video/mp4">');
}
$('.video-box').click(playVideo);

let videoBoxes = document.querySelectorAll('.video-box');
let currentURL = window.location.href;
let getNumber = 0;
let indexOf = currentURL.indexOf('#');
getNumber = currentURL.slice(indexOf + 1);
getNumber -= 1;
console.log(getNumber);
if(indexOf > 0 && getNumber < 5){
  videoBoxes[getNumber].click(playVideo);
}else{
  $('.video-modal-container').addClass('non-visible');
}


$('.video-modal .close-modal').click(function(){
    // console.log('should close it');
    $('.video-modal-container').addClass('non-visible');
    let vid = document.getElementById('clicked-video');
  	vid.load();
  	$('.modal-video').empty();
  });

$('.becomeSP-formOpen').click(function(){
  $('.becomePartner-form-container').removeClass('non-visible');

  });
$('.becomePartner-form').find('.close-modal').click(function(){
   $('.becomePartner-form-container').addClass('non-visible');
  });

//


}); //main document ends
