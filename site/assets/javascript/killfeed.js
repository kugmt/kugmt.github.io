$(function() {
    var tKillNames = ["lol", "urbad", "trash", "jk", "lmao", "idk what to say"];
    var ctKillNames = ["nn"]; 
    var weapons = ["ssg"];
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', '.img' + weapons[Math.floor(Math.random() * weapons.length)] + '.png'); 
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]); 
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);
        $killFeedContainer.append($newFeedElement.show().delay(1000).fadeOut(1000, function() { 
            $(this).remove()
        }))
    }
    $(document).on("contextmenu", function(e) {
        e.preventDefault()
    });
    window.setInterval(handleKillFeed, 750)
}); 
