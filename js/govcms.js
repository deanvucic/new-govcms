$(document).ready(function(){$(".drupal-version-list").toggleClass("sr-only"),$(".drupal-version-checkbox").change(function(){$(".drupal-version-list").toggleClass("sr-only")}),$(".site-info-add").click(function(){var t=$(".site-info")[0].outerHTML,e=$(".site-info").length,i=e+1;return t=t.replace(/1\"/g,i+'"'),$(".site-info").last().after(t),!1}),$(".split").each(function(){$(window).width()>993&&(height1=$(".section-one",this).height(),height2=$(".section-two",this).height(),height1>height2?(rightHeight=$(".section-one",this).height(),$(".section-two",this).height(rightHeight)):(rightHeight=$(".section-two",this).height(),$(".section-one",this).height(rightHeight)))}),$(location).attr("pathname").indexOf("knowledge-base")!=-1&&($(".search-for").addClass("shake animated"),$("#about .navbar-form").before('<p class="lead search-for" aria-live="polite">&nbsp;</p>'),$(".col-md-12 .col-md-4:nth-of-type(3)").after('<div class="col-md-12 text-center"><p class="lead no-results" aria-live="polite"></p>'),$(".navbar-form").submit(function(){return $(".search-for").addClass("shake animate"),!1}),$(".navbar-form button").click(function(){$(".search-for").animateCss("pulse")}),$(".media").each(function(){$(this).attr("data-search-term",$(this).text().toLowerCase())}),$("#s").on("keyup",function(){var t=$(this).val(),e=t.toLowerCase();$(".media").each(function(){$(this).filter("[data-search-term *= "+e+"]").length>0||e.length<1?$(this).show():$(this).hide()});var i=$(".col-md-4 .media:visible").length;"&nbsp;"==$("#about .search-for").html()?$("#about .search-for").html('Showing matches for &quot;<span class="search-for-string">'+t+"</span>&quot;"):0==t.length?$("#about .search-for").html("&nbsp;"):$("#about .search-for-string").text(t),0==i?$("p.no-results").text("No matches found."):$("p.no-results").text("")})),$.fn.extend({animateCss:function(t){var e="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";this.addClass("animated "+t).one(e,function(){$(this).removeClass("animated "+t)})}})});