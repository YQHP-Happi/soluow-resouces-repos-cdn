$(function () {
    var imgLoadError = "https://cdn.jsdelivr.net/gh/YQHP-Happi/soluow-resouces-repos-cdn@master/images/img-load-error.svg";
    var imgLoad = "https://cdn.jsdelivr.net/gh/YQHP-Happi/soluow-resouces-repos-cdn@master/images/img-load.svg";
    var $searchText = $("#searchText");
    var $search = $("#search");
    var $searchBox = $("header .search-box");
    var $phoneSearchText = $searchBox.find('input');
    var $searchCancel = $searchBox.find('.cancel');

    var $searchIcon = $("header .menu-btn");

    $searchIcon.on("click", function (e) {
        e.stopPropagation();
        $searchBox.toggle();
        $(this).toggle();
        $phoneSearchText.focus();
    });

    $searchCancel.on('click', function () {
        $searchIcon.click();
    });


    $search.on('click', function () {
        var text = $searchText.val().trim();
        if (text.length === 0) {
            $searchText.focus();
            return;
        }
        search(text);
    });

    $searchText.on('keyup', function (event) {
        if (event.keyCode === 13) {
            search($searchText.val().trim());
        }
    });

    $phoneSearchText.on('keyup', function (event) {
        if (event.keyCode === 13) {
            search($(this).val().trim());
        }
    });


    function search(text) {
        (text && text.trim().length !== 0) && (location.href = '/search/' + text);
    }

    /**
     * 懒加载图片
     */
    function lazyLoadImg($img) {
        if ($img.data('src').trim() === '') {
            return;
        }
        var img = new Image();
        var retryCount = parseInt($img.data('retry-count')) || 0;
        $img.attr('src', imgLoad);

        img.onload = function (res) {
            $img.replaceWith(img);
        };

        img.onerror = function () {
            if (retryCount < 3) {
                setTimeout(function () {
                    lazyLoadImg($img);
                }, 300);
            } else {
                $img.attr('src', imgLoadError);
                console.log('图片加载失败:' + $img.data('src'))
            }
        };

        $img.data('retry-count', retryCount + 1);
        img.src = $img.data('src');
    }

    var $itemPwd = $(".content .data .lock input").select().focus();

    $(".content .data ").find('img').on("click", function () {
        lazyLoadImg($(this).data('retry-count', 0));
    }).each(function () {
        lazyLoadImg($(this));
    }).end().find('.lock .error').fadeOut(5000).end()
        .find('.lock button').on('click', function () {
        $(this).prop('disabled', true);
        gotoItemWithPwd();
    });

    $itemPwd.on('keyup', function (event) {
        if (event.keyCode === 13) {
            gotoItemWithPwd();
        }
    });

    function gotoItemWithPwd() {
        location.href = location.protocol + '//' + location.host + location.pathname + '?pw=' + $itemPwd.val();
    }

    siteInfoLog("温馨提示", "感谢您访问搜罗资源网！");

    function siteInfoLog(prefix, suffix) {
        console.log("%c%c" + prefix + "%c" + suffix, "line-height:26px;", "line-height:16px;padding:2px 6px;border-radius: 5px 0px 0px 5px;background:#35495e;color:#fff;font-size:12px;", "padding:2px 8px;background:#0093ff;color:#fff;line-height:16px;font-size:12px;border-radius: 0px 5px 5px 0px;");
    }

});
