$(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
      });
 
  //collapse the sidebar
      $('.menu-btn').click(function(){
        $('.sidebar-menu').addClass('active');
        
      });
 
      $('.close-btn').click(function(){
        $('.sidebar-menu').removeClass('active');
      });








});