 //constant
    

$(window).scroll(function() {
    var height = $(window).scrollTop(); //change this to your element you want to add the css to
    if((height < 300)&&(height==0)) {
        $('.heading').css('width','340px')
        $('.heading').html('PRIMARY COLOR');
        $('.heading2').html(""); 
        $('.heading2').css('width','20px');
        $('.heading2').css('margin-left','300px');
        $('.text').html('They are the source of all other colors. Secondary colors are mixed from two primary colors adjacent to each other on the color wheel. The secondary colors are orange, green and violet.');
        $('.rc,.bc,.yc').css('display','block');
        $('#img2,#img3,#img4').css('display','none');
    }
    if(height > 300) {
        $('.heading').css('width','20px');
        $('.heading2').css('width','280px');
        $('.heading2').css('margin-left','40px');
        $('.heading').html("");
        $('.heading2').html("SATURARION");
        $('.text').html('<span>The saturation of a color is determined by a combination of light intensity and how much it is distributed across the spectrum of different wavelengths.<span>');   
        $('.heading3').css('width','20px');
        $('.heading3').css('margin-left','320px');
        $('.heading3').html("");
        $('.rc,.bc,.yc').css('display','none');
        
    }
    if((height>300 )&& (height<600)){
        $('#img2,#img3,#img4').css('display','none');
        $('#img2').css('display','block');
        $('#img2').css('margin-top','44px');
        $('#img2').css('margin-left','20px');

    }
     if((height>600) && (height<900)){
        $('.heading').css('width','20px');
        $('.heading').css('margin-left','20px');
        $('.heading3').css('width','280px');
        $('.heading3').css('margin-left','60px');
        $('.heading3').html("COMPLEMENTRY COLOR");
        $('.text').html('colours appear opposite each other on colour models such as the colour wheel. The colour complement of each primary colour obtained by mixing the two other primary colours together.');
        $('#img2,#img3,#img4').css('display','none');
        $('#img3').css('display','block');
        $('#img3').css('margin-top','40px');
        $('#img3').css('margin-left','20px');

    }
    if(height>600){
        $('.heading2').css('width','20px');
        $('.heading2').css('margin-left','40px');
        $('.heading2').html("");
 }
    if((height>900) && (height<1200)){
        $('.heading4').css('width','280px');
        $('.heading4').css('margin-left','80px');
        $('.heading4').html("TRIAD COLOR");
 }
    if(height<900){
        $('.heading4').css('width','20px');
        $('.heading4').css('margin-left','340px');
        $('.heading4').html("");
}
    if(height>900){
        $('.heading3').css('width','20px');
        $('.heading3').css('margin-left','60px');
        $('.heading3').html("");
        $('.text').html("This comprised three colors evenly spaced on the color wheel. Two most basic triadic palettes are the primary colors red, blue, and yellow, and the secondary hues orange, purple, green.");
        $('#img2,#img3,#img4').css('display','none');
        $('#img4').css('display','block');
        $('#img4').css('margin-top','37px');
        $('#img4').css('margin-left','80px');
        $('#img4').css('border-radius','50%');

 }   
});