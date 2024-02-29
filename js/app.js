// alert(1111);



// $("#gu,cho,par").on("click",function(){
// $(".answer-box").html();
// });

// 乱数 １〜３
// $("#gu").on("click", function() {
// const r = Math.ceil(Math.random() * 3);

// if分岐
// if (r === 1) {}else{}else{}

// 表示処理
// $("#answer-box").html("グー");
// $("#judgment").html("あいこ");


$(document).ready(function () {
    $(document).ready(function () {
        $("#gu").on("click", function () {
            const r = Math.ceil(Math.random() * 3);
            if (r === 1) {
                $("#answer-box").html("グー");
                $("#judgment").html('<img src="img/IMG_1564.GIF" alt="あいこ" class="large-image">');
                $("#judgment").append('<p>あいこ</p>');
            } else if (r === 2) {
                $("#answer-box").html("チョキ");
                $("#judgment").html('<img src="img/IMG_1570.GIF" alt="勝ち" class="large-image">');
                $("#judgment").append('<p>勝ち</p>');
            } else {
                $("#answer-box").html("パー");
                $("#judgment").html('<img src="img/IMG_1565.GIF" alt="負け" class="large-image">');
                $("#judgment").append('<p>負け</p>');
            }
        });
    });


    $("#cho").on("click", function () {
        const r = Math.ceil(Math.random() * 3);
        if (r === 1) {
            $("#answer-box").html("グー");
            $("#judgment").html('<img src="img/IMG_1565.GIF" alt="負け" class="large-image">');
            $("#judgment").append('<p>負け</p>');
        } else if (r === 2) {
            $("#answer-box").html("チョキ");
            $("#judgment").html('<img src="img/IMG_1564.GIF" alt="あいこ" class="large-image">');
            $("#judgment").append('<p>あいこ</p>');
        } else {
            $("#answer-box").html("パー");
            $("#judgment").html('<img src="img/IMG_1570.GIF" alt="勝ち" class="large-image">');
            $("#judgment").append('<p>勝ち</p>');
        }
    });

    $("#par").on("click", function () {
        const r = Math.ceil(Math.random() * 3);
        if (r === 1) {
            $("#answer-box").html("グー");
            $("#judgment").html('<img src="img/IMG_1570.GIF" alt="勝ち" class="large-image">');
            $("#judgment").append('<p>勝ち</p>');
        } else if (r === 2) {
            $("#answer-box").html("チョキ");
            $("#judgment").html('<img src="img/IMG_1565.GIF" alt="負け" class="large-image">');
            $("#judgment").append('<p>負け</p>');
        } else {
            $("#answer-box").html("パー");
            $("#judgment").html('<img src="img/IMG_1564.GIF" alt="あいこ" class="large-image">');
            $("#judgment").append('<p>あいこ</p>');
        }
    });

});
//jQueryを使うときのルール htmlに目印をつけること！
// $("").on("click", function () {});