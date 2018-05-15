function language_change(x) {

    var i = 0;

    switch (x) {

        case "flag_selector":

            document.getElementById("language_selector").style.display = "block";
            document.getElementById("corpo").style.position = "fixed";
            setTimeout(function() {

                document.getElementById("language_selector").style.opacity = "1";
            }, 1);
            break;
        case "l_uk":

            if (pagina === "home") {

                for (i = 0; i < language.id_1.length; i++) {

                    try {

                        document.getElementById(language.id_1[i]).innerHTML = language.english_1[i];
                    } catch (err) {

                        console.log(language.id_1[i]);
                    }

                }
            } else if (pagina === "game") {

                for (i = 0; i < language.id_2.length; i++) {

                    try {

                        document.getElementById(language.id_2[i]).innerHTML = language.english_2[i];
                    } catch (err) {

                        console.log(language.id_2[i]);
                    }
                }
            } else if (pagina === "review") {

                for (i = 0; i < language.id_3.length; i++) {

                    try {

                        document.getElementById(language.id_3[i]).innerHTML = language.english_3[i];
                    } catch (err) {

                        console.log(language.id_3[i]);
                    }
                }
            }

            document.getElementById("flag_img").src = "../img/bandeiras/260-united-kingdom.svg";
            language_change();
            break;
        case "l_br":

            if (pagina === "home") {

                for (i = 0; i < language.id_1.length; i++) {

                    try {

                        document.getElementById(language.id_1[i]).innerHTML = language.portuguese_1[i];
                    } catch (err) {

                        console.log(language.id_1[i]);
                    }
                }
            } else if (pagina === "game") {

                for (i = 0; i < language.id_2.length; i++) {

                    try {

                        document.getElementById(language.id_2[i]).innerHTML = language.portuguese_2[i];
                    } catch (err) {

                        console.log(language.id_2[i]);
                    }
                }
            } else if (pagina === "review") {

                for (i = 0; i < language.id_3.length; i++) {

                    try {

                        document.getElementById(language.id_3[i]).innerHTML = language.portuguese_3[i];
                    } catch (err) {

                        console.log(language.id_3[i]);
                    }
                }
            }

            document.getElementById("flag_img").src = "../img/bandeiras/255-brazil.svg";
            language_change();
            break;
        case "l_de":

            if (pagina === "home") {

                for (i = 0; i < language.id_1.length; i++) {

                    try {

                        document.getElementById(language.id_1[i]).innerHTML = language.germany_1[i];
                    } catch (err) {

                        console.log(language.id_1[i]);
                    }
                }
            } else if (pagina === "game") {

                for (i = 0; i < language.id_2.length; i++) {

                    try {

                        document.getElementById(language.id_2[i]).innerHTML = language.germany_2[i];
                    } catch (err) {

                        console.log(language.id_2[i]);
                    }
                }
            } else if (pagina === "review") {

                for (i = 0; i < language.id_3.length; i++) {

                    try {

                        document.getElementById(language.id_3[i]).innerHTML = language.germany_3[i];
                    } catch (err) {

                        console.log(language.id_3[i]);
                    }
                }
            }

            document.getElementById("flag_img").src = "../img/bandeiras/162-germany.svg";
            language_change();
            break;
        default:
            document.getElementById("language_selector").style.opacity = "0";
            setTimeout(function() {

                document.getElementById("language_selector").style.display = "none";
            }, 500);
            document.getElementById("corpo").style.position = "initial";
    }
}

function play_vid(x, y, imagem) {

    if (x === "mg_video_close") {

        document.getElementById("mg_video_div").style.opacity = "0";
        setTimeout(function() {

            document.getElementById("mg_video_div").style.display = "none";
            document.getElementById("mg_video_video").src = "";
        }, 500);
        document.getElementById("corpo").style.position = "initial";
    } else {

        document.getElementById("mg_video_div").style.display = "block";
        document.getElementById("corpo").style.position = "fixed";
        document.getElementById("mg_video_video").src = "https://www.youtube-nocookie.com/embed/" + y + "?rel=0&amp;showinfo=0";
        imagem = imagem.replace("t_thumb", "t_720p");
        document.getElementById("mg_video_close").setAttribute("style", "position: fixed;left: 0px;top: 0px;width: 100%;height: 100%;background-image: url(" + imagem + ");background-size: cover;background-position: center;opacity: 0.3;");
        setTimeout(function() {

            document.getElementById("mg_video_div").style.opacity = "1";
        }, 1);
    }
}

function newsletter_add() {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email_newsletter").value;

    if (re.test(String(email).toLowerCase())) {

        json_convert = "newsletter";

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: ajax_url + 'newsletter_add',
            dataType: "json",
            data: formToJSON(),
            success: function(data, textStatus, jqXHR) {

                if (data !== 'Error') {

                    alert("This e-mail is add to Newsletter");
                } else {

                    alert("This e-mail address is not valid...");
                }

                document.getElementById("email_newsletter").value = "";
            },
            error: function(jqXHR, textStatus, errorThrown) {

                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
                alert("This e-mail address is not valid...");
                document.getElementById("email_newsletter").value = "";
            }
        });
    } else {

        alert("This e-mail address is not valid...");
    }
}

function loader(x) {

    render_page();

    var url_string = window.location.href;

    if (url_string.indexOf("www.") !== -1) {

        ajax_url = "http://www.mundogamer.org/admin/api/";
    }

    setTimeout(function() {

        switch (x) {

            case "clean":

                document.getElementById("loading_page").style.display = "none";
                document.getElementById("pagina").style.display = "block";
                break;
            case "loading_page":

                document.getElementById("pagina").style.display = "block";

                setTimeout(function() {

                    busca_noticias();

                    $.ajax({
                        type: "get",
                        url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1434336885.9c56da2.57929ebfac8e4e61ad3c119a95eeb1a0",
                        dataType: "json",
                        success: function(data) {

                            for (var i = 1; i <= 12; i++) {

                                document.getElementById("image_instagram_" + i).style.backgroundImage = "url(" + data.data[i - 1].images.low_resolution.url + ")";
                                document.getElementById("image_instagram_" + i + "_sub").setAttribute("href", data.data[i - 1].link);
                            }
                            /*
                            setTimeout(function() {

                                for (i = 1; i <= 12; i++) {

                                    document.getElementById("image_instagram_1_" + i).style.height = (document.getElementById("image_instagram_1_" + i).offsetWidth * 1.1) + "px";
                                }
                            }, 1);
                            */
                        },
                        error: function(jqXHR, textStatus, errorThrown) {

                            check_clean();
                            console.log(jqXHR);
                            console.log(textStatus);
                            console.log(errorThrown);
                            m("Erro ao verificar se há atualizações");
                        }
                    });

                    $.ajax({
                        type: "get",
                        url: ajax_url + "get_videos",
                        dataType: "json",
                        success: function(data) {

                            var html = "<div class='owl-carousel owl-videos'>";
                            var cont = [];

                            for (var i = 0; i < data.length; i++) {

                                if (cont.length < 7 && cont.indexOf(data[i].Game_id) == -1) {

                                    cont[cont.length] = data[i].Game_id;
                                    var imagem = data[i].url_imagem;
                                    imagem = imagem.replace("t_thumb", "t_cover_big");
                                    html += "<div class='card card-video' onclick='play_vid(null, &#39;" + data[i].video_youtube + "&#39;, &#39;" + imagem + "&#39;);'> <div class='card-img'> <div id='mg_carousel_video_" + i + "' style='background-image: url(" + imagem + ");background-size: cover;background-position:center;height: 150px;'><img src='../img/youtube.png' style='margin:auto;height:50px;width:auto;opacity:0.5;position:relative;top:50px;'></div> <div class='card-meta'> </div></div><div class='card-block'> <h4 class='card-title' style='text-align:center;'> " + data[i].nome + "<br>" + data[i].video_nome + " </h4> <div class='card-meta'>  </div></div></div>";
                                    //html += "<div class='card card-video'> <div class='card-img'> <a href='video-post.html'> <img src='" + data[i].url_imagem + "' class='card-img-top'> </a> <div class='card-meta'> <span>6:46</span> </div></div><div class='card-block'> <h4 class='card-title'> <a target='_blank' href='https://www.youtube.com/watch?v=" + data[i].video_youtube + "'>" + data[i].video_nome + "</a> </h4> <div class='card-meta'> /*<span> <i class='fa fa-clock-o'></i> 2 weeks ago </span> <span>447 views</span>*/ </div></div></div>";
                                }
                            }

                            html += "</div>";

                            document.getElementById("game_header_videos").innerHTML = html;

                            setTimeout(function() {

                                if (!carousel_create) {

                                    carousel_create = true;

                                    $('.owl-videos').owlCarousel({
                                        margin: 15,
                                        loop: true,
                                        dots: false,
                                        responsive: {
                                            0: {
                                                items: 1
                                            },
                                            700: {
                                                items: 2
                                            },
                                            800: {
                                                items: 3
                                            },
                                            1000: {
                                                items: 4
                                            },
                                            1200: {
                                                items: 6
                                            }
                                        }
                                    });
                                } else {

                                    if (screen.width <= 500) {

                                        document.getElementById("game_header_videos").style.display = "none";
                                    }
                                }
                            }, 1);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {

                            check_clean();
                            console.log(jqXHR);
                            console.log(textStatus);
                            console.log(errorThrown);
                            m("Erro ao verificar se há atualizações");
                        }
                    });
                }, 1);
                break;
            case "loading_page_games":

                document.getElementById("pagina").style.display = "block";

                setTimeout(function() {

                    // lightbox
                    $('[data-lightbox]').lightbox({
                        disqus: 'gameforestyakuzieu'
                    });

                    get_var('game');

                    window.scrollTo(0, 10);
                    setTimeout(function() {
                        window.scrollTo(0, 0);
                    }, 1);
                }, 1);
                break;
            case "loading_page_review":

                document.getElementById("pagina").style.display = "block";

                setTimeout(function() {

                    get_var('review');

                    window.scrollTo(0, 10);
                    setTimeout(function() {
                        window.scrollTo(0, 0);
                    }, 1);
                }, 1);
                break;
        }
    }, 1);
}

function render_page() {

    document.getElementById("footer").innerHTML = html_footer;
    document.getElementById("header").innerHTML = html_header;
}

function troca_style(x) {

    var c = "";

    if (x !== "") {

        style_news = x;
    }

    if (style_news == "style_new_i") {

        c = "II";
        style_news = "style_new_ii";
    } else if (style_news == "style_new_ii") {

        c = "I";
        style_news = "style_new_i";
    }
    /* else if (style_news == "style_new_iii") {

            c = "I";
            style_news = "style_new_i";
        }*/

    localStorage.setItem('troca_style', style_news);

    if (news_data.length > 0) {

        render_news();
    }
}

function busca_noticias_plus(x) {

    document.getElementById("loading_more").style.display = "none";
    var complemento = "";

    if (x) {

        complemento = "_more/" + news_id;
    }

    $.ajax({
        type: "get",
        url: ajax_url + "get_news" + complemento,
        dataType: "json",
        success: function(data) {

            if (screen.width <= 500) {

                carousel_create = true;
            }

            var html = "";

            for (var i = 0; i < data.length; i++) {

                if (i < 3 && !carousel_create) {

                    var fix_d = fixed_date(data[i].igdb_published, false);
                    var imagem = data[i].url_imagem;

                    if (imagem === "") {

                        imagem = "img/logo_2.png";
                    }

                    html += "<div class='post-carousel'> <a href='" + data[i].url + "' target='_blank'> <div id='videos_header_" + i + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;height: 65vh;'><img id='videos_header_" + i + "' src='" + imagem + "' alt='' style='height: 65vh;'></div> </a> <div class='post-block'> <div class='post-caption'> <h2 class='post-title'> <a href='" + data[i].url + "' target='_blank'>" + data[i].titulo + "</a> </h2> <div class='post-meta'> <span> by <a href='profile.html'>" + data[i].nome + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4) + "  </span> </div></div></div></div>";
                }
                news_data[news_data.length] = data[i];
                news_id = data[i].id;
            }

            if (!carousel_create) {

                document.getElementById("header_news").innerHTML = html;
            }

            setTimeout(function() {
                /*
                    var largura = 0;
                    var altura = 0;

                    for (var i = 0; i < data.length; i++) {

                        if (largura < (parseInt(document.getElementById("videos_header_" + i).offsetWidth) / 100 * 56)) {

                            altura = parseInt(document.getElementById("videos_header_" + i).offsetWidth) / 100 * 56;
                            largura = parseInt(document.getElementById("videos_header_" + i).offsetWidth);
                        }
                    }

                    for (var i = 0; i < data.length; i++) {

                        document.getElementById("videos_header_" + i + "_").style.width = largura + "px";
                        document.getElementById("videos_header_" + i + "_").style.height = altura + "px";
                        document.getElementById("videos_header_" + i + "_").innerHTML = "";
                    }
                */


                if (!carousel_create) {

                    $('.owl-posts').owlCarousel({
                        margin: 5,
                        loop: true,
                        dots: false,
                        autoplay: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            1024: {
                                items: 1,
                                center: false
                            },
                            1200: {
                                items: 2,
                                center: true
                            }
                        }
                    });
                } else {

                    if (screen.width <= 500) {

                        document.getElementById("game_header_news").style.display = "none";
                    }
                }
            });

            render_news();
        },
        error: function(jqXHR, textStatus, errorThrown) {

            loader("clean");
            document.getElementById("loading_more").style.display = "block";
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}

function render_news() {

    var html = "";
    var data = news_data;
    var num = "";
    //var u = 1;
    carregando.max = data.length;

    for (var i = 0; i < data.length; i++) {

        var fix_d = fixed_date(data[i].igdb_published, false);
        var imagem = data[i].url_imagem;

        if (imagem === "") {

            imagem = "img/logo_2.png";
        }

        var descricao = data[i].descricao;

        if (style_news == "style_new_i" || screen.width <= 500) {

            num = descricao.length;

            if (descricao.length > 135) {

                num = descricao.indexOf(",", 135);
                if (num == -1) {

                    num = descricao.length;
                }
            }

            descricao = descricao.substr(0, num) + "...";
        }

        if (descricao.length > 350) {

            num = descricao.indexOf(",", 350);

            if (num == -1) {

                num = descricao.length;
            }

            descricao = descricao.substr(0, num) + "...";
        }

        switch (style_news) {

            case "style_new_iii":

                html += "<div class='post mg_news_div' style='padding-bottom: 0px;margin-bottom: 0px;'> <h2 class='post-title'><a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'>" + data[i].titulo + "</a></h2> <div class='post-meta'> <span>by <a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'>" + data[i].nome + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + " </span> <span></span> </div><a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'><div class='post-thumbnail'> <div id='style_new_iii_" + i + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;'><img id='style_new_iii_" + i + "'  src='" + imagem + "' alt='" + data[i].titulo + "' style='width:100%;'></div></a> </div><p style='width: 100%;margin-left: 0%;text-align: justify;'>" + descricao + "</p></div>";
                break;
            case "style_new_ii":

                var media_query = "";

                if (screen.width > 500) {

                    media_query = " style='width:20%;'";
                }

                html += "<div class='post post-md'> <div class='post-thumbnail'" + media_query + "> <a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'> <div id='style_new_ii_" + i + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;'><img id='style_new_ii_" + i + "' src='" + imagem + "' alt='" + data[i].autor + "' style='opacity:0;width:100%;'></div> </a> </div><div class='post-block'> <h2 class='post-title'> <a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'>" + data[i].titulo + "</a> </h2> <div class='post-meta'> <span> by <a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'>" + data[i].nome + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4) + "  </span> </div><p>" + descricao + "</p></div></div>";
                break;
            case "style_new_i":

                /*
                    u -= 1;
                    if (u == 0) {

                        html += "<div>";
                        u = 5;
                    } else if (u == 1) {

                        html += "</div>";
                        u = 5;

                        if ((i + 1) < data.length) {

                            html += "<div>";
                        }
                    }
                */

                html += "<div class='col-12 col-sm-6 col-md-3' style='" + tipo + ";'> <div class='card card-video'> <div class='card-img'" + media_query + "> <a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'> <div id='style_new_i_" + i + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;'><img id='style_new_i_" + i + "' class='card-img-top' alt='" + data[i].titulo + "' style='opacity:0;width:100%;'></div> </a> </div><div class='card-block'> <h4 class='card-title'> <a href='" + data[i].url + "' target='_blank' onclick='conta_click(" + data[i].id + ", &#39;Pulse&#39;);'>" + data[i].titulo + "</a> </h4> <div class='card-meta'> <span> by " + data[i].nome + "</span>, <span> <i class='fa fa-calendar-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4) + " </span> </div><p>" + descricao + "</p></div></div></div>";
                break;
        }
    }

    html += "<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><ins class='adsbygoogle' style='display:block' data-ad-format='fluid' data-ad-layout-key='-99+2a-h4+g4+oe' data-ad-client='ca-pub-0061672681197040' data-ad-slot='4460453956'></ins><script>(adsbygoogle=window.adsbygoogle || []).push({});</script>";

    document.getElementById(style_news).innerHTML = html;
    document.getElementById("style_new_iii").style.display = "none";
    document.getElementById("style_new_ii").style.display = "none";
    document.getElementById("style_new_i").style.display = "none";
    document.getElementById(style_news).style.display = "block";

    setTimeout(function() {

        var largura = 0;
        var altura = 0;

        for (var i = 0; i < data.length; i++) {

            if (largura < (parseInt(document.getElementById(style_news + "_" + i + "_").offsetWidth) / 100 * 56)) {

                altura = parseInt(document.getElementById(style_news + "_" + i + "_").offsetWidth) / 100 * 56;
                largura = parseInt(document.getElementById(style_news + "_" + i + "_").offsetWidth);
            }
        }

        for (i = 0; i < data.length; i++) {

            document.getElementById(style_news + "_" + i + "_").style.width = largura + "px";
            document.getElementById(style_news + "_" + i + "_").style.height = altura + "px";
            document.getElementById(style_news + "_" + i + "_").innerHTML = "";
        }

        document.getElementById("loading_more").style.display = "block";

        setTimeout(function() {
            loader("clean");
        }, 500);
    }, 1);
}

function busca_noticias() {

    if (screen.width <= 500) {

        troca_style("style_new_iii");
    } else if (localStorage.getItem("troca_style") !== null && localStorage.getItem("troca_style") !== "" && localStorage.getItem("troca_style") !== undefined) {

        style_news = localStorage.troca_style;

        if (style_news == "style_new_i") {

            c = "II";
            style_news = "style_new_ii";
        } else if (style_news == "style_new_ii") {

            c = "I";
            style_news = "style_new_i";
        } else if (style_news == "style_new_iii") {

            c = "I";
            style_news = "style_new_i";
        }

        troca_style(style_news);
    }

    busca_noticias_plus(false);

    var html = "";
    var imagem = "";
    var cor = "";

    $.ajax({
        type: "get",
        url: ajax_url + "get_review",
        dataType: "json",
        success: function(data) {

            var repete = [];
            var data_guarda = [];

            for (var i = 0; i < data.length; i++) {

                if (repete.indexOf(data[i].id) == -1 && repete.length < 12) {

                    data_guarda[data_guarda.length] = data[i];
                    imagem = data[i].imagem;
                    imagem = imagem.replace("t_thumb", "t_cover_big");

                    if (parseInt(data[i].nota) > 79) {

                        cor = "success";
                    } else if (parseInt(data[i].nota) > 59) {

                        cor = "warning";
                    } else {

                        cor = "danger";
                    }

                    html += "<div id='review_" + repete.length + "' class='card card-review'> <a class='card-img' href='http://mundogamer.org/games/?id=" + data[i].id + "&type=reviews'> <div id='review_" + repete.length + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;'><img src='" + imagem + "' alt='" + data[i].nome + "'></div> <div class='badge badge-" + cor + "'>" + parseInt(data[i].nota) + "</div></a> <div class='card-block'> <h4 class='card-title'> <a href='http://mundogamer.org/games/?id=" + data[i].id + "&type=reviews'>" + data[i].nome + "</a> </h4> <p>...</p></div></div>";
                    repete[repete.length] = data[i].id;
                }
            }

            document.getElementById("review_html").innerHTML = html;

            setTimeout(function() {

                // Recent Reviews 
                $('.owl-list').owlCarousel({
                    margin: 25,
                    nav: true,
                    dots: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        701: {
                            items: 3
                        },
                        1000: {
                            items: 4
                        }
                    }
                });

                var largura = 0;
                var altura = 0;
                var margem = 0;
                data = data_guarda;

                for (var i = 0; i < data.length; i++) {

                    if (largura < parseInt(document.getElementById("review_" + i).offsetWidth)) {

                        largura = parseInt(document.getElementById("review_" + i).offsetWidth);
                        altura = parseInt(largura * 1.5);
                    }
                }

                if (largura > 200) {

                    var operacao = largura - 200;
                    var a = operacao * 100 / largura;
                    var b = altura / 100 * a;

                    largura = 200;
                    altura = altura - b;
                    margem = operacao / 2;
                }

                for (i = 0; i < data.length; i++) {

                    document.getElementById("review_" + i + "_").style.width = largura + "px";
                    document.getElementById("review_" + i + "_").style.height = altura + "px";
                    document.getElementById("review_" + i + "_").style.marginLeft = margem + "px";
                    document.getElementById("review_" + i + "_").innerHTML = "";
                }
            }, 1);
        },
        error: function(jqXHR, textStatus, errorThrown) {

            busca_noticias();
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}

function fixed_date(x, y) {

    var f = "";

    if (y) {

        f = x.split("-");
        return new Date(f[0], parseInt(f[1]) - 1, f[2], "0", "0", "0", "0").getTime();
    } else {

        f = (parseInt(x) + (new Date(parseInt(x)).getTimezoneOffset() / 60 * 3600000));
        var a = "";
        var b = "";

        f = new Date(parseInt(f));
        if ((f.getMonth() + 1) < 10) {

            a = "0";
        }
        if (f.getDate() < 10) {

            b = "0";
        }
        f = f.getFullYear() + "-" + a + (f.getMonth() + 1) + "-" + b + f.getDate();
        return f;
    }
}

function retorna_estado(x) {

    var a = parseInt(x);
    var b = "";

    switch (a) {
        case 1:
            b = "January";
            break;
        case 2:
            b = "February";
            break;
        case 3:
            b = "March";
            break;
        case 4:
            b = "April";
            break;
        case 5:
            b = "May";
            break;
        case 6:
            b = "June";
            break;
        case 7:
            b = "July";
            break;
        case 8:
            b = "August";
            break;
        case 9:
            b = "September";
            break;
        case 10:
            b = "October";
            break;
        case 11:
            b = "November";
            break;
        case 12:
            b = "December";
            break;
    }

    return b;
}

function get_var(x) {

    if (x !== null && x !== undefined) {

        var url_string = window.location.href;
        var url = new URL(url_string);
        var variavel = null;
        var contador = 0;

        while (variavel === null) {

            contador++;

            switch (contador) {

                case 1:

                    variavel = url.searchParams.get("url");
                    break;
                case 2:

                    variavel = url.searchParams.get("name");
                    break;
                case 3:

                    variavel = url.searchParams.get("id");
                    break;
                default:

                    variavel = "vazio";
                    break;
            }
        }

        busca_banco(contador, variavel, x);
    }
}

function busca_banco(x, y, z) {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var caminho = "";
    var imagem = "";
    var num = 0;
    var descricao = "";
    g_x = x;
    g_y = y;
    g_z = z;

    switch (z) {

        case "game":

            caminho += "game_";

            switch (x) {

                case 1:

                    alert("url");
                    break;
                case 2:

                    alert("nome");
                    break;
                case 3:

                    caminho += "id/";
                    break;
            }

            if (caminho != "game_") {

                $.ajax({
                    type: "get",
                    url: ajax_url + caminho + y,
                    dataType: "json",
                    success: function(data) {

                        search_val = y;

                        if (data.length > 0) {

                            for (var i = 0; i < data.length; i++) {

                                document.getElementById("game_titulo").innerHTML = data[i].nome;
                                document.getElementById("game_titulo_2").innerHTML = data[i].nome;

                                if (data[i].pegi !== null) {

                                    var pegi = "";

                                    switch (parseInt(data[i].pegi)) {

                                        case 1:

                                            pegi = "3";
                                            break;
                                        case 2:

                                            pegi = "7";
                                            break;
                                        case 3:

                                            pegi = "12";
                                            break;
                                        case 4:

                                            pegi = "16";
                                            break;
                                        case 5:

                                            pegi = "ALL";
                                            break;
                                        case 6:

                                            pegi = "18";
                                            break;
                                    }

                                    pegi += " years";

                                    document.getElementById("game_pegi").innerHTML = "<h5>PEGI : " + pegi + "</h5><p>" + data[i].pegi_synopsis + "</p>";
                                } else {

                                    document.getElementById("game_pegi").innerHTML = "";
                                }

                                document.getElementById("game_titulo_2").innerHTML = data[i].nome;

                                var fix_d = fixed_date(data[i].first_release_date, false);
                                var datas = retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4);

                                document.getElementById("game_data").innerHTML = "Released: " + datas;

                                title_page = "Mundo Gamer - " + data[i].nome;
                                document.getElementById("game_title").innerHTML = title_page;

                                descricao = data[i].descricao;
                                overview_text = data[i].descricao;

                                num = descricao.length;
                                if (num > 90) {

                                    num = 90;
                                }
                                descricao = descricao.substr(0, num) + "...";
                                document.getElementById("game_descricao").innerHTML = descricao;
                                descricao = data[i].descricao;
                                num = descricao.length;

                                if (num > 200) {

                                    num = 200;
                                }

                                descricao = descricao.substr(0, num) + "...";
                                document.getElementById("game_overview_rating").setAttribute("data-percent", parseInt(data[i].nota));
                                document.getElementById("game_overview_rating").innerHTML = parseInt(data[i].nota);
                                document.getElementById("game_rating").setAttribute("data-percent", parseInt(data[i].nota));
                                document.getElementById("game_rating").innerHTML = parseInt(data[i].nota);
                                document.getElementById("game_popularity").innerHTML = parseInt(data[i].popularidade);
                                document.getElementById("game_hypes").innerHTML = parseInt(data[i].hypes);
                                if (data[i].steam_id !== "") {

                                    document.getElementById("game_steam").setAttribute("href", "http://store.steampowered.com/app/" + data[i].steam_id);
                                    document.getElementById("game_steam").style.opacity = 1;
                                }
                            }

                            if (title_page.length >= 20) {

                                setInterval(title_animate, 250);
                            }

                            $.ajax({
                                type: "get",
                                url: ajax_url + "get_best_review/" + search_val,
                                dataType: "json",
                                success: function(data) {

                                    game_review.positive = [];
                                    game_review.negative = [];

                                    for (var i = 0; i < data.length; i++) {

                                        var sabao = data[i].pontos_positivos;
                                        sabao = sabao.split("\n");

                                        for (var u = 0; u < sabao.length; u++) {

                                            if (sabao[u] !== "") {

                                                game_review.positive[game_review.positive.length] = sabao[u];
                                            }
                                        }

                                        sabao = data[i].pontos_negativos;
                                        sabao = sabao.split("\n");

                                        for (u = 0; u < sabao.length; u++) {

                                            if (sabao[u] !== "") {

                                                game_review.negative[game_review.negative.length] = sabao[u];
                                            }
                                        }

                                        game_review.user = data[i].username;
                                    }

                                    if (data.length > 0) {

                                        document.getElementById("game_overview_titulo").innerHTML = document.getElementById("game_titulo").innerHTML;
                                        document.getElementById("game_overview_rating").style.display = "block";

                                        html = "<h5 id='t_positive'>Positive:</h5>";

                                        for (i = 0; i < game_review.positive.length; i++) {

                                            html += "<p>" + game_review.positive[i] + "</p>";
                                        }

                                        document.getElementById("review_good").innerHTML = html;
                                        html = "<h5 id='t_negative'>Negative:</h5>";

                                        for (i = 0; i < game_review.negative.length; i++) {

                                            html += "<p>" + game_review.negative[i] + "</p>";
                                        }

                                        document.getElementById("review_bad").innerHTML = html;
                                    } else {

                                        document.getElementById("game_overview_titulo").innerHTML = "";
                                        document.getElementById("game_overview_rating").style.display = "none";
                                        document.getElementById("review_bad").innerHTML = "";
                                        document.getElementById("review_good").innerHTML = "";
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "extras_" + caminho + y,
                                dataType: "json",
                                success: function(data) {

                                    imagens_game = [];
                                    videos_id_game = [];
                                    videos_nome_game = [];

                                    if (data.length > 0) {

                                        var valida_capa = "";
                                        var valida_capa_2 = "";
                                        var valida_capa_3 = "";

                                        for (var i = 0; i < data.length; i++) {

                                            imagem = data[i].url_imagem;
                                            imagem = imagem.replace("t_thumb", "t_screenshot_big");

                                            if (imagem === "" && valida_capa === "") {

                                                imagem = "../img/logo_2.png";
                                            } else {


                                                if (imagem === "") {

                                                    imagem = valida_capa;
                                                } else {

                                                    if (imagens_game.indexOf(imagem) === -1) {

                                                        imagens_game[imagens_game.length] = imagem;
                                                        valida_capa = imagem;
                                                    }
                                                }
                                            }

                                            document.getElementById("game_capa").style.backgroundImage = "url(" + valida_capa + ")";

                                            //  -----------------------------------------------------------------------------------------------

                                            imagem = data[i].imagem;
                                            imagem = imagem.replace("t_thumb", "t_screenshot_big");

                                            if (imagem === "" && valida_capa_2 === "") {

                                                imagem = "../img/logo_2.png";
                                                search_imagem = imagem;
                                            } else {

                                                if (imagem === "") {

                                                    imagem = valida_capa_2;
                                                } else {

                                                    search_imagem = imagem;
                                                    valida_capa_2 = imagem;
                                                }
                                            }

                                            document.getElementById("game_capa_2").style.backgroundImage = "url(" + valida_capa_2 + ")";

                                            //  -----------------------------------------------------------------------------------------------

                                            imagem = data[i].url_imagem;
                                            imagem = imagem.replace("t_thumb", "t_screenshot_big");

                                            if (imagem === "" && valida_capa_3 === "") {

                                                imagem = "../img/logo_2.png";
                                            } else {

                                                if (imagem === "") {

                                                    imagem = valida_capa_3;
                                                } else {

                                                    if (imagem != valida_capa) {

                                                        valida_capa_3 = imagem;
                                                    }
                                                }
                                            }

                                            if (valida_capa_3 === "") {

                                                valida_capa_3 = valida_capa;
                                            }

                                            document.getElementById("game_overview").style.backgroundImage = "url(" + valida_capa_3 + ")";

                                            //  -----------------------------------------------------------------------------------------------

                                            if (data[i].video_youtube !== "") {

                                                videos_id_game[videos_id_game.length] = data[i].video_youtube;
                                                videos_nome_game[videos_nome_game.length] = data[i].video_nome;
                                            }

                                            if (data[i].video_nome.indexOf("Trailer") != -1) {

                                                document.getElementById("game_trailer").setAttribute("href", "https://www.youtube.com/watch?v=" + data[i].video_youtube);
                                                document.getElementById("game_trailer").style.opacity = 1;
                                            }
                                        }

                                        if (url.searchParams.get("type") !== null) {

                                            if (url.searchParams.get("type") != "articles" && url.searchParams.get("type") != "reviews" && url.searchParams.get("type") != "images" && url.searchParams.get("type") != "videos" && url.searchParams.get("type") != "streams" && url.searchParams.get("type") != "overview" && url.searchParams.get("type") != "forum") {

                                                search_tab = "game_link_overview";
                                            } else {

                                                search_tab = "game_link_" + url.searchParams.get("type");
                                            }
                                        } else {

                                            search_tab = "game_link_overview";
                                        }

                                        if (screen.width <= 500) {

                                            document.getElementById("game_link_2").style.display = "none";
                                            search_tab += "_2";
                                        } else {

                                            document.getElementById("game_link_1").style.display = "none";
                                        }

                                        game_tabs(search_tab);

                                        setTimeout(function() {

                                            loader("clean");
                                        }, 500);
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    loader("clean");
                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "plataforma_" + caminho + y,
                                dataType: "json",
                                success: function(data) {


                                    var html = "";
                                    var plataforma = "";

                                    for (var i = 0; i < data.length; i++) {

                                        plataforma = data[i].nome;

                                        if (plataforma.indexOf("PlayStation") != -1) {

                                            html += "<span class='badge badge-primary' style='margin-bottom: 5px;' id='" + data[i].id + "'>" + plataforma + "</span>";
                                        } else if (plataforma.indexOf("Xbox") != -1) {

                                            html += "<span class='badge badge-success' style='margin-bottom: 5px;' id='" + data[i].id + "'>" + plataforma + "</span>";
                                        } else if (plataforma.indexOf("Nintendo") != -1 || plataforma.indexOf("Wii") != -1 || plataforma.indexOf("Game Boy") != -1 || plataforma.indexOf("Famicom") != -1) {

                                            html += "<span class='badge badge-danger' style='margin-bottom: 5px;' id='" + data[i].id + "'>" + plataforma + "</span>";
                                        } else if (plataforma.indexOf("PC") != -1 || plataforma.indexOf("Windows") != -1 || plataforma.indexOf("Linux") != -1) {

                                            html += "<span class='badge badge-warning' style='margin-bottom: 5px;' id='" + data[i].id + "'>" + plataforma + "</span>";
                                        } else if (plataforma.indexOf("iOS") != -1 || plataforma.indexOf("Mac") != -1) {

                                            html += "<span class='badge' style='background-color:grey;margin-bottom: 5px;' id='" + data[i].id + "'>" + plataforma + "</span>";
                                        } else if (plataforma.indexOf("Android") != -1) {

                                            html += "<span class='badge badge-primary' style='margin-bottom: 5px;' id='" + data[i].id + "'>" + plataforma + "</span>";
                                        } else {

                                            html += "<span class='badge badge-dark' style='margin-bottom: 5px;' id='" + data[i].id + "'>" + plataforma + "</span>";
                                        }

                                        html += "<br>";
                                    }

                                    if (html === "") {

                                        html = "<span class='badge badge-dark' style='margin-bottom: 5px;'>Edit Game Details</span>";
                                    }

                                    document.getElementById("game_plataformas").innerHTML = html;
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "genero_" + caminho + y,
                                dataType: "json",
                                success: function(data) {


                                    var html = "";

                                    for (var i = 0; i < data.length; i++) {

                                        html += "<li id='" + data[i].id + "'>" + data[i].nome + "</li><br>";
                                    }

                                    if (html === "") {

                                        html = "<li>Edit Game Details</li>";
                                    }

                                    document.getElementById("game_genero").innerHTML = html;
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "modo_" + caminho + y,
                                dataType: "json",
                                success: function(data) {

                                    var html = "";

                                    for (var i = 0; i < data.length; i++) {

                                        html += "<li id='" + data[i].id + "'>" + data[i].nome + "</li><br>";
                                    }

                                    if (html === "") {

                                        html = "<li>Edit Game Details</li>";
                                    }

                                    document.getElementById("game_modo").innerHTML = html;
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "perspectives_" + caminho + y,
                                dataType: "json",
                                success: function(data) {

                                    var html = "";

                                    for (var i = 0; i < data.length; i++) {

                                        html += "<li id='" + data[i].id + "'>" + data[i].nome + "</li><br>";
                                    }

                                    if (html === "") {

                                        html = "<li>Edit Game Details</li>";
                                    }

                                    document.getElementById("game_perspectives").innerHTML = html;
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "engine_" + caminho + y,
                                dataType: "json",
                                success: function(data) {

                                    var html = "";
                                    //var plataforma = "";

                                    for (var i = 0; i < data.length; i++) {

                                        html += "<li>" + data[i].nome + "</li><br>";
                                    }

                                    if (html === "") {

                                        html = "<li>Edit Game Details</li>";
                                    }

                                    document.getElementById("game_engine").innerHTML = html;
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "empresa_" + caminho + y,
                                dataType: "json",
                                success: function(data) {

                                    //var html = "";
                                    var publicadora = "";
                                    var desenvolvedora = "";

                                    for (var i = 0; i < data.length; i++) {

                                        if (data[i].publicadora == 1) {

                                            publicadora += "<li id='" + data[i].id + "'>" + data[i].nome + "</li><br>";
                                        } else if (data[i].desenvolvedora == 1) {

                                            desenvolvedora += "<li id='" + data[i].id + "'>" + data[i].nome + "</li><br>";
                                        }
                                    }

                                    if (publicadora !== "") {

                                        document.getElementById("game_desenvolvedora").innerHTML = desenvolvedora;
                                    } else {

                                        document.getElementById("game_desenvolvedora").innerHTML = "<li>Edit Game Details</li>";
                                    }

                                    if (desenvolvedora !== "") {

                                        document.getElementById("game_publicadora").innerHTML = publicadora;
                                    } else {

                                        document.getElementById("game_publicadora").innerHTML = "<li>Edit Game Details</li>";
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "site_" + caminho + y,
                                dataType: "json",
                                success: function(data) {

                                    if (data.length > 0) {

                                        for (var i = 0; i < data.length; i++) {

                                            document.getElementById("game_site").setAttribute("href", data[i].url);
                                            document.getElementById("game_site").style.opacity = 1;
                                        }
                                    } else {

                                        document.getElementById("game_site").setAttribute("target", "");
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            $.ajax({
                                type: "get",
                                url: ajax_url + "franquia_" + caminho + y,
                                dataType: "json",
                                success: function(data) {

                                    var html = "";

                                    for (var i = 0; i < data.length; i++) {

                                        if (data[i].nome !== "") {

                                            html += "<li style='text-decoration: underline;display:block;'><a href='http://mundogamer.org/games/?id=" + data[i].id + "&type=articles'>" + data[i].nome + "</a></li>";
                                        }
                                    }

                                    if (html === "") {

                                        html = "<li>Edit Game Details</li>";
                                    }

                                    document.getElementById("game_franchise").innerHTML = html;
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            setTimeout(function() {

                                // easyPieChart
                                $('.chart').easyPieChart({
                                    barColor: '#5eb404',
                                    trackColor: '#e3e3e3',
                                    easing: 'easeOutBounce',
                                    onStep: function(from, to, percent) {
                                        $(this.el).find('span').text(Math.round(percent));
                                    }
                                });
                            }, 1);
                        } else {

                            alert("Game não encontrado");
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        alert("Game não encontrado");
                        loader("clean");
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            }
            break;
        case "review":

            caminho += "review_";

            switch (x) {

                case 3:

                    caminho += "id/";
                    break;
            }

            if (caminho != "review_") {

                $.ajax({
                    type: "get",
                    url: ajax_url + caminho + y,
                    dataType: "json",
                    success: function(data) {

                        search_val = y;

                        if (data.length > 0) {

                            game_review.positive = [];
                            game_review.negative = [];
                            var imagem_i = "";
                            var imagem_ii = "";
                            var imagem_iii = "";
                            var html = "";

                            for (var i = 0; i < 1; i++) {

                                var sabao = data[i].pontos_positivos;
                                sabao = sabao.split("\n");

                                for (var u = 0; u < sabao.length; u++) {

                                    if (sabao[u] !== "") {

                                        game_review.positive[game_review.positive.length] = sabao[u];
                                    }
                                }

                                sabao = data[i].pontos_negativos;
                                sabao = sabao.split("\n");

                                for (u = 0; u < sabao.length; u++) {

                                    if (sabao[u] !== "") {

                                        game_review.negative[game_review.negative.length] = sabao[u];
                                    }
                                }

                                game_review.user = data[i].username;
                            }

                            if (game_review.positive.length > 0 || game_review.negative.length > 0) {

                                html = "<h5 id='t_positive'>Positive:</h5>";

                                for (i = 0; i < game_review.positive.length; i++) {

                                    html += "<p>" + game_review.positive[i] + "</p>";
                                }

                                document.getElementById("review_good").innerHTML = html;
                                html = "<h5 id='t_negative'>Negative:</h5>";

                                for (i = 0; i < game_review.negative.length; i++) {

                                    html += "<p>" + game_review.negative[i] + "</p>";
                                }

                                document.getElementById("review_bad").innerHTML = html;
                            } else {

                                document.getElementById("review_bad").innerHTML = "";
                                document.getElementById("review_good").innerHTML = "";
                                document.getElementById("game_overview_rating").style.display = "none";
                            }

                            for (i = 0; i < data.length; i++) {

                                document.getElementById("game_titulo").innerHTML = data[i].nome;

                                if (document.getElementById("review_good").innerHTML !== "" || document.getElementById("review_bad").innerHTML !== "") {

                                    document.getElementById("game_overview_titulo").innerHTML = data[i].nome;
                                }

                                if (imagem_i === "") {

                                    imagem_i = data[i].imagem;
                                    imagem_i = imagem_i.replace("t_thumb", "t_screenshot_big");
                                    document.getElementById("game_capa").style.backgroundImage = "url(" + imagem_i + ")";
                                }

                                if (imagem_ii === "" || imagem_ii === imagem_i) {

                                    imagem_ii = data[i].imagem;
                                    imagem_ii = imagem_ii.replace("t_thumb", "t_screenshot_big");
                                    document.getElementById("game_imagem_i").setAttribute("href", imagem_ii);
                                    document.getElementById("game_imagem_i").setAttribute("data-src", imagem_ii);
                                    document.getElementById("game_imagem_ii").setAttribute("src", imagem_ii);
                                    document.getElementById("game_imagem_iii").setAttribute("href", imagem_ii);
                                    document.getElementById("game_imagem_iii").setAttribute("data-src", imagem_ii);
                                }

                                if (imagem_iii === "" || imagem_iii === imagem_i || imagem_iii === imagem_ii) {

                                    imagem_iii = data[i].imagem;
                                    imagem_iii = imagem_iii.replace("t_thumb", "t_screenshot_big");

                                    document.getElementById("game_overview").style.backgroundImage = "url(" + imagem_iii + ")";

                                    if (data[i].video !== "") {

                                        document.getElementById("game_video").innerHTML = "<div class='video-play m-b-30 m-t-30' data-src='https://www.youtube.com/embed/" + data[i].video + "?rel=0&amp;amp;autoplay=1&amp;amp;showinfo=0'> <div class='embed-responsive embed-responsive-16by9'> <img class='embed-responsive-item' src='" + imagem_iii + "'> <div class='video-caption'> <h5>" + data[i].nome + "</h5> </div><div class='video-play-icon'> <i class='fa fa-play'></i> </div></div></div>";

                                        video_play_html = "<div class='video-play m-b-30 m-t-30 played' data-src='https://www.youtube.com/embed/" + data[i].video + "?rel=0&amp;amp;autoplay=1&amp;amp;showinfo=0'> <div class='embed-responsive embed-responsive-16by9'> <img class='embed-responsive-item animated fadeOut' src='" + imagem_iii + "'> <div class='video-caption animated fadeOut'> <h5>" + data[i].nome + "</h5> </div><div class='video-play-icon'> <i class='fa fa-play'></i> <iframe class='embed-responsive-item' src='https://www.youtube.com/embed/d5nfXqffvyc?rel=0&amp;autoplay=1&amp;showinfo=0' allowfullscreen></iframe> </div></div></div>";

                                        document.getElementById("game_trailer").setAttribute("href", "https://www.youtube.com/watch?v=" + data[i].video);
                                        document.getElementById("game_trailer").style.opacity = 1;
                                    } else {

                                        document.getElementById("game_trailer").style.display = "none";
                                        document.getElementById("game_video").setAttribute("onclick", "");
                                    }
                                }

                                document.getElementById("game_overview_rating").setAttribute("data-percent", parseInt(data[i].nota));
                                document.getElementById("game_overview_rating").innerHTML = parseInt(data[i].nota);
                                document.getElementById("game_rating").setAttribute("data-percent", parseInt(data[i].nota));
                                document.getElementById("game_rating").innerHTML = parseInt(data[i].nota);

                                document.getElementById("game_introducao").innerHTML = data[i].introducao;
                                var fix_d = fixed_date(data[i].igdb_update, false);
                                document.getElementById("game_title").innerHTML = "by " + data[i].username + ", <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4); //    http://mundogamer.org/reviews/?id=
                                document.getElementById("game_conteudo").innerHTML = data[i].conteudo;
                                document.getElementById("game_conclusao").innerHTML = data[i].conclusao;

                                descricao = data[i].descricao;
                                overview_text = data[i].descricao;

                                num = descricao.length;
                                if (num > 90) {

                                    num = 90;
                                }
                                descricao = descricao.substr(0, num) + "...";
                                document.getElementById("game_descricao").innerHTML = descricao;
                            }

                            html = "<h5 id='t_last' class='widget-title'>Top Reviews</h5>";

                            $.ajax({
                                type: "get",
                                url: ajax_url + "review_last",
                                dataType: "json",
                                success: function(data) {

                                    for (i = 0; i < data.length; i++) {

                                        fix_d = fixed_date(data[i].first_release_date, false);
                                        fix_d = retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4);
                                        imagem = data[i].imagem;
                                        imagem = imagem.replace("t_thumb", "t_cover_big");

                                        html += "<a href='http://mundogamer.org/reviews/?id=" + data[i].id + "' style='background-image: url(" + imagem + ")'> <span class='overlay'></span> <div class='widget-block'> <div class='count'>" + (i + 1) + "</div><div class='description'> <h5 class='title'>" + data[i].nome + "</h5> <span class='date'>" + fix_d + "</span> </div></div></a>";
                                    }

                                    document.getElementById("game_last").innerHTML = html;
                                    document.getElementById("loading_page").style.display = "none";

                                    document.getElementById("game_recommendations").innerHTML = "<div class='container'><div class='heading'><h2 id='t_recommendations'>Recommendations</h2></div><div id='game_simulares' class='owl-carousel owl-list'></div></div>";

                                    $.ajax({
                                        type: "get",
                                        url: ajax_url + "game_similar_id/" + search_val,
                                        dataType: "json",
                                        success: function(data) {

                                            if (data.length > 0) {

                                                var ids = "";

                                                for (var i = 0; i < data.length; i++) {

                                                    if (ids !== "") {

                                                        ids += ",";
                                                    }

                                                    ids += data[i].id_Game_Similar;
                                                }

                                                $.ajax({
                                                    type: "get",
                                                    url: ajax_url + "get_similares/" + ids,
                                                    dataType: "json",
                                                    success: function(data) {

                                                        html = "";
                                                        var repete = [];
                                                        var data_guarda = [];

                                                        for (var i = 0; i < data.length; i++) {

                                                            if (repete.indexOf(data[i].id) == -1 && repete.length < 12) {

                                                                data_guarda[data_guarda.length] = data[i];
                                                                imagem = data[i].imagem;
                                                                imagem = imagem.replace("t_thumb", "t_cover_big");

                                                                if (parseInt(data[i].nota) > 79) {

                                                                    cor = "success";
                                                                } else if (parseInt(data[i].nota) > 59) {

                                                                    cor = "warning";
                                                                } else {

                                                                    cor = "danger";
                                                                }

                                                                html += "<div id='simular_" + repete.length + "' class='card card-review'> <a class='card-img' href='http://mundogamer.org/games/?id=" + data[i].id + "'> <div id='simular_" + repete.length + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;'><img src='" + imagem + "' alt='" + data[i].nome + "'></div> <div class='badge badge-" + cor + "'>" + parseInt(data[i].nota) + "</div></a> <div class='card-block'> <h4 class='card-title'> <a href='http://mundogamer.org/games/?id=" + data[i].id + "&type=reviews'>" + data[i].nome + "</a> </h4> <p>...</p></div></div>";
                                                                repete[repete.length] = data[i].id;
                                                            }
                                                        }

                                                        document.getElementById("game_simulares").innerHTML = html;

                                                        setTimeout(function() {

                                                            // Recent Reviews 
                                                            $('.owl-list').owlCarousel({
                                                                margin: 25,
                                                                nav: true,
                                                                dots: false,
                                                                responsive: {
                                                                    0: {
                                                                        items: 1
                                                                    },
                                                                    500: {
                                                                        items: 2
                                                                    },
                                                                    701: {
                                                                        items: 3
                                                                    },
                                                                    1000: {
                                                                        items: 4
                                                                    }
                                                                }
                                                            });

                                                            var largura = 0;
                                                            var altura = 0;
                                                            var margem = 0;
                                                            data = data_guarda;

                                                            for (var i = 0; i < data.length; i++) {

                                                                if (largura < parseInt(document.getElementById("simular_" + i).offsetWidth)) {

                                                                    largura = parseInt(document.getElementById("simular_" + i).offsetWidth);
                                                                    altura = parseInt(largura * 1.5);
                                                                }
                                                            }

                                                            if (largura > 200) {

                                                                var operacao = largura - 200;
                                                                var a = operacao * 100 / largura;
                                                                var b = altura / 100 * a;

                                                                largura = 200;
                                                                altura = altura - b;
                                                                margem = operacao / 2;
                                                            }

                                                            for (i = 0; i < data.length; i++) {

                                                                document.getElementById("simular_" + i + "_").style.width = largura + "px";
                                                                document.getElementById("simular_" + i + "_").style.height = altura + "px";
                                                                document.getElementById("simular_" + i + "_").style.marginLeft = margem + "px";
                                                                document.getElementById("simular_" + i + "_").innerHTML = "";
                                                            }

                                                            setTimeout(function() {

                                                                var data_class = $(".owl-item");

                                                                for (var i = 0; i < data_class.length; i++) {

                                                                    data_class[i].style.float = "left";
                                                                }

                                                            }, 1);
                                                        }, 1);
                                                    },
                                                    error: function(jqXHR, textStatus, errorThrown) {

                                                        console.log(jqXHR);
                                                        console.log(textStatus);
                                                        console.log(errorThrown);
                                                    }
                                                });
                                            }
                                        },
                                        error: function(jqXHR, textStatus, errorThrown) {

                                            console.log(jqXHR);
                                            console.log(textStatus);
                                            console.log(errorThrown);
                                        }
                                    });
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });

                            setTimeout(function() {

                                $('.select2').select2({
                                    minimumResultsForSearch: -1
                                });

                                // easyPieChart
                                $('.chart').easyPieChart({
                                    barColor: '#5eb404',
                                    trackColor: '#e3e3e3',
                                    easing: 'easeOutBounce',
                                    onStep: function(from, to, percent) {
                                        $(this.el).find('span').text(Math.round(percent));
                                    }
                                });
                                // lightbox
                                $('[data-lightbox]').lightbox();
                            }, 1);
                        } else {

                            alert("Review não encontrada");
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        alert("Review não encontrada");
                        loader("clean");
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            } else {

                //document.getElementById("loading_page").style.display = "none";
                if (html_review_bool) {

                    html_review_bool = false;
                    document.getElementById("corpo_div").innerHTML = html_review;
                }
                news_reviews_count = 0;

                //  $('#select_platform').val(); = [];
                //  document.getElementById("select_genre").value; = "0"

                var array_plataforma = $('#select_platform').val();

                if (array_plataforma.length === 0) {

                    array_plataforma = "";
                }

                $.ajax({
                    type: "get",
                    url: ajax_url + "get_reviews_game_all/0",
                    dataType: "json",
                    headers: {
                        'busca': guarda_review_search,
                        'plataforma': array_plataforma,
                        'genero': document.getElementById("select_genre").value,
                    },
                    success: function(data) {

                        //Review.id, Review.username, Review.title, Review.conteudo, Review.igdb_update, Game.aggregated_rating, Game_imagens_videos.url_imagem

                        if (guarda_review_search === "") {

                            document.getElementById("review_all_pai").setAttribute("class", "container mg_review_card_pai");

                            imagem = data[0].url_imagem_capa;
                            imagem = imagem.replace("t_thumb", "t_cover_big");

                            if (parseInt(data[0].aggregated_rating) > 79) {

                                cor = "success";
                            } else if (parseInt(data[0].aggregated_rating) > 59) {

                                cor = "warning";
                            } else {

                                cor = "danger";
                            }

                            document.getElementById("review_all_img").setAttribute("style", "width: 100%;height: 402px;background-image: url(" + imagem + ");background-size: cover;background-position: center;");
                            document.getElementById("review_all_img_2").setAttribute("style", "padding: 30px;width:100%;height:100%;position:relative;");
                            document.getElementById("review_all_name").innerHTML = data[0].nome;

                            if (data[0].title === "c") {

                                document.getElementById("review_all_title").innerHTML = "Review";
                            } else {

                                document.getElementById("review_all_title").innerHTML = data[0].title;
                            }
                            document.getElementById("review_all_rating").innerHTML = parseInt(data[0].aggregated_rating);
                            document.getElementById("review_all_rating").setAttribute("class", "badge badge-" + cor);
                            var fix_d = fixed_date(data[0].igdb_update, false);
                            document.getElementById("review_all_author").innerHTML = " by <a href='http://mundogamer.org/reviews/?id=" + data[0].id + "' target='_blank'>" + data[0].username + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4); //data[0].title;
                            var descricao = data[0].conteudo;

                            if (style_news == "style_new_i" || screen.width <= 500) {

                                num = descricao.length;

                                if (descricao.length > 135) {

                                    num = descricao.indexOf(",", 135);
                                    if (num == -1) {

                                        num = descricao.length;
                                    }
                                }

                                descricao = descricao.substr(0, num) + "...";
                            }

                            document.getElementById("review_all_conteudo").innerHTML = descricao;
                        } else {

                            document.getElementById("review_all_pai").setAttribute("class", "container mg_review_card_pai_none");
                        }

                        render_reviews_gamer_all(data, true);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });

                $.ajax({
                    type: "get",
                    url: ajax_url + "review_last",
                    dataType: "json",
                    success: function(data) {

                        var html = "<h5 id='t_last' class='widget-title'>Top Reviews</h5>";

                        for (i = 0; i < data.length; i++) {

                            fix_d = fixed_date(data[i].first_release_date, false);
                            fix_d = retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4);
                            imagem = data[i].imagem;
                            imagem = imagem.replace("t_thumb", "t_cover_big");

                            html += "<a href='http://mundogamer.org/reviews/?id=" + data[i].id + "' style='background-image: url(" + imagem + ")'> <span class='overlay'></span> <div class='widget-block'> <div class='count'>" + (i + 1) + "</div><div class='description'> <h5 class='title'>" + data[i].nome + "</h5> <span class='date'>" + fix_d + "</span> </div></div></a>";
                        }

                        document.getElementById("game_last").innerHTML = html;
                        document.getElementById("loading_page").style.display = "none";
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });

                $.ajax({
                    type: "get",
                    url: ajax_url + "review_last",
                    dataType: "json",
                    success: function(data) {

                        var html = "<h5 id='t_last' class='widget-title'>Top Reviews</h5>";

                        for (i = 0; i < data.length; i++) {

                            fix_d = fixed_date(data[i].first_release_date, false);
                            fix_d = retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4);
                            imagem = data[i].imagem;
                            imagem = imagem.replace("t_thumb", "t_cover_big");

                            html += "<a href='http://mundogamer.org/reviews/?id=" + data[i].id + "' style='background-image: url(" + imagem + ")'> <span class='overlay'></span> <div class='widget-block'> <div class='count'>" + (i + 1) + "</div><div class='description'> <h5 class='title'>" + data[i].nome + "</h5> <span class='date'>" + fix_d + "</span> </div></div></a>";
                        }

                        document.getElementById("game_last").innerHTML = html;
                        document.getElementById("loading_page").style.display = "none";
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });

                $.ajax({
                    type: "get",
                    url: ajax_url + "get_plataformas",
                    dataType: "json",
                    success: function(data) {

                        var html = "";

                        for (i = 0; i < data.length; i++) {

                            html += "<option value='" + data[i].id + "'>" + data[i].nome + "</option>";
                        }

                        document.getElementById("select_platform").innerHTML = html;
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });

                $.ajax({
                    type: "get",
                    url: ajax_url + "get_generos",
                    dataType: "json",
                    success: function(data) {

                        var html = "<option value='0'>All genres</option>";

                        for (i = 0; i < data.length; i++) {

                            html += "<option value='" + data[i].id + "'>" + data[i].nome + "</option>";
                        }

                        document.getElementById("select_genre").innerHTML = html;
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });


                setTimeout(function() {

                    // select2
                    $('.select2').select2();

                    // flatpickr
                    $("#date").flatpickr();
                }, 1);
            }
            break;
    }
}

function video_play(x) {

    document.getElementById(x).setAttribute("onclick", "");
    document.getElementById(x).innerHTML = video_play_html;
}

function render_news_gamer(data, x) {

    document.getElementById("game_content_html").style.opacity = "0";

    if (x) {

        news_game_count = 10;
    } else {

        news_game_count += 10;
    }

    var html = "";
    var repete = [];
    var limite = -1;
    news_game_data = [];
    var num = "";

    for (var i = 0; i < data.length; i++) {

        if (repete.indexOf(data[i].id) == -1) {

            news_game_data[news_game_data.length] = data[i];
            repete[repete.length] = data[i].id;

            if (i < news_game_count) {

                limite++;
                var fix_d = fixed_date(data[i].igdb_published, false);
                var imagem = data[i].url_imagem;

                if (imagem === "") {

                    imagem = "../img/logo_2.png";
                } else {

                    var imagem_fixed = imagem.length;

                    if (imagem.indexOf("http") != -1) {

                        if (imagem.indexOf("http", 1) != -1) {

                            imagem_fixed = imagem.indexOf("http", 1);
                            imagem = imagem.substr(imagem_fixed, imagem.length);
                        }
                    }

                }

                var descricao = data[i].descricao;

                if (style_news == "style_new_i" || screen.width <= 500) {

                    num = descricao.length;

                    if (descricao.length > 135) {

                        num = descricao.indexOf(",", 135);
                        if (num == -1) {

                            num = descricao.length;
                        }
                    }

                    descricao = descricao.substr(0, num) + "...";
                }

                if (descricao.length > 350) {

                    num = descricao.indexOf(",", 350);
                    if (num == -1) {

                        num = descricao.length;
                    }

                    descricao = descricao.substr(0, num) + "...";
                }

                var media_query = "";

                if (screen.width > 500) {

                    media_query = " style='width:30%;'";
                }

                html += "<div class='post post-md'> <div class='post-thumbnail'" + media_query + "> <a href='" + data[limite].url + "' target='_blank' onclick='conta_click(" + data[limite].id + ", &#39;Pulse&#39;);'> <div id='style_new_ii_" + limite + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;'><img id='style_new_ii_" + limite + "' src='" + imagem + "' alt='" + data[limite].autor + "' style='opacity:0;width:100%;'></div> </a> </div><div class='post-block'> <h2 class='post-title'> <a href='" + data[limite].url + "' target='_blank' onclick='conta_click(" + data[limite].id + ", &#39;Pulse&#39;);'>" + data[limite].titulo + "</a> </h2> <div class='post-meta'> <span> by <a href='" + data[limite].url + "' target='_blank' onclick='conta_click(" + data[limite].id + ", &#39;Pulse&#39;);'>" + data[limite].nome + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4) + " </span> </div><p>" + descricao + "</p></div></div>";
            }
        }
    }

    if (news_game_data.length < 11 || news_game_count >= news_game_data.length) {

        document.getElementById("loading_more").style.display = "none";
    } else {

        document.getElementById("loading_more").style.display = "block";
    }

    document.getElementById("game_content_html").innerHTML = html;

    setTimeout(function() {

        var largura = 0;
        var altura = 0;

        for (var i = 0; i <= limite; i++) {

            if (largura < (parseInt(document.getElementById("style_new_ii_" + i).offsetWidth))) {

                altura = parseInt(document.getElementById("style_new_ii_" + i).offsetWidth) / 100 * 56;
                largura = parseInt(document.getElementById("style_new_ii_" + i).offsetWidth);
            }
        }

        for (i = 0; i <= limite; i++) {

            document.getElementById("style_new_ii_" + i + "_").style.width = largura + "px";
            document.getElementById("style_new_ii_" + i + "_").style.height = altura + "px";
            document.getElementById("style_new_ii_" + i + "_").innerHTML = "";
        }

        document.getElementById("game_content_html").style.opacity = "1";
        document.getElementById("game_content_header").innerHTML = document.getElementById("game_titulo").innerHTML + " <span>(" + news_game_data.length + ")</span>";
    }, 500);
}

function busca_reviews() {

    $.ajax({
        type: "get",
        url: ajax_url + "get_reviews_game_all/" + guarda_review,
        dataType: "json",
        headers: {
            'busca': guarda_review_search,
        },
        success: function(data) {

            if (data.length < 10) {

                document.getElementById("loading_more").style.display = "none";
            }

            render_reviews_gamer_all(data, false);
        },
        error: function(jqXHR, textStatus, errorThrown) {

            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}

function render_reviews_gamer_all(data, x) {

    if (x) {

        news_reviews_count = 10;
        guarda_review_data = [];
    } else {

        news_reviews_count += 10;
    }

    var guarda_repete = true;
    var fix_d = "";
    var cor = "";
    var imagem = "";

    for (var i = 0; i < data.length; i++) {

        guarda_repete = true;

        for (var u = 0; u < guarda_review_data.length; u++) {

            if (data[i].id == guarda_review_data[u].id) {

                guarda_repete = false;
            }
        }

        if (guarda_repete) {

            guarda_review_data[guarda_review_data.length] = data[i];

            if (data[i].title === "c") {

                guarda_review_data[guarda_review_data.length - 1].title = data[i].nome;
            }
        }
    }

    var html = "";
    var descricao = "";

    if (guarda_review_search === "") {

        for (i = 1; i <= 4; i++) {

            imagem = guarda_review_data[i].url_imagem_capa;
            imagem = imagem.replace("t_thumb", "t_cover_big");

            document.getElementById("review_all_src_" + i).setAttribute("style", "background-image: url(" + imagem + ");background-size: cover;background-position: center;");

            if (parseInt(guarda_review_data[i].aggregated_rating) > 79) {

                cor = "success";
            } else if (parseInt(guarda_review_data[i].aggregated_rating) > 59) {

                cor = "warning";
            } else {

                cor = "danger";
            }

            document.getElementById("review_all_title_" + i).innerHTML = guarda_review_data[i].title;
            document.getElementById("review_all_rating_" + i).innerHTML = parseInt(guarda_review_data[i].aggregated_rating);
            document.getElementById("review_all_rating_" + i).setAttribute("class", "badge badge-" + cor);
            fix_d = fixed_date(guarda_review_data[i].igdb_update, false);
            document.getElementById("review_all_author_" + i).innerHTML = " by <a href='http://mundogamer.org/reviews/?id=" + guarda_review_data[i].id + "' target='_blank'>" + guarda_review_data[i].username + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4);

            descricao = guarda_review_data[i].conteudo;

            num = descricao.length;

            if (descricao.length > 100) {

                num = descricao.indexOf(",", 60);
                if (num == -1 || num > 90) {

                    num = 90;
                }
            }

            descricao = descricao.substr(0, num) + "...";
            document.getElementById("review_all_conteudo_" + i).innerHTML = descricao;
            document.getElementById("review_all_conteudo_" + i).style.opacity = 0;
            document.getElementById("review_all_conteudo_" + i).style.height = "0px";
        }
    }

    if (guarda_review_data.length < news_reviews_count) {

        news_reviews_count = guarda_review_data.length;
        document.getElementById("loading_more").style.display = "none";
    }

    for (i = 0; i < news_reviews_count; i++) {

        descricao = guarda_review_data[i].conteudo;

        if (style_news == "style_new_i" || screen.width <= 500) {

            num = descricao.length;

            if (descricao.length > 135) {

                num = descricao.indexOf(",", 135);
                if (num == -1) {

                    num = descricao.length;
                }
            }

            descricao = descricao.substr(0, num) + "...";
        }

        guarda_review = guarda_review_data[i].id;
        fix_d = fixed_date(guarda_review_data[i].igdb_update, false);

        //  t_cover_big
        //  666
        imagem = guarda_review_data[i].url_imagem_capa;
        imagem = imagem.replace("t_thumb", "t_cover_big");

        if (parseInt(guarda_review_data[i].aggregated_rating) > 79) {

            cor = "success";
        } else if (parseInt(guarda_review_data[i].aggregated_rating) > 59) {

            cor = "warning";
        } else {

            cor = "danger";
        }

        var classe = "";

        if (i < 5 && guarda_review_search === "") {

            classe = " mg_review_card";
        }

        html += "<div class='post post-review" + classe + "' style='display:block;'> <div class='post-thumbnail'> <a href='http://mundogamer.org/reviews/?id=" + guarda_review_data[i].id + "'> <div class='mg_review_card_img' style='width: 150px;height: 150px;background-image: url(" + imagem + ");background-size: cover;background-position: center;'></div><span class='badge badge-" + cor + " mg_review_card_nota'>" + parseInt(guarda_review_data[i].aggregated_rating) + "</span> </a> </div><div class='post-block mg_review_card_textos'> <h2 class='post-title mg_review_card_titulo'><a href='http://mundogamer.org/reviews/?id=" + guarda_review_data[i].id + "'>" + guarda_review_data[i].nome + "</a></h2> <div class='post-meta mg_review_card_autor'> <span>by <a href='http://mundogamer.org/reviews/?id=" + guarda_review_data[i].id + "' target='_blank'>" + guarda_review_data[i].username + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4) + "</span> <span><a href='review-post.html#comments'> </div><p>" + descricao + "</p></div></div>";
    }

    if (guarda_review_search === "") {

        document.getElementById("lastest_reviews").innerHTML = "Lastest Reviews";
    } else {

        document.getElementById("lastest_reviews").innerHTML = "Lastest Reviews";
    }

    document.getElementById("reviews_all").innerHTML = html;

    if (news_reviews_count >= guarda_review_data) {

        document.getElementById("loading_more").style.display = "none";
    }

    document.getElementById("loading_page").style.display = "none";
}

function searchs(x) {

    switch (x) {

        case "btn_reviews_search":
        case "input_reviews_search":
        case "select_genre":
        case "select_platform":

            if (document.getElementById("input_reviews_search").value !== "" && document.getElementById("input_reviews_search").value !== undefined && document.getElementById("input_reviews_search").value !== null) {

                guarda_review_search = document.getElementById("input_reviews_search").value;
            } else {

                guarda_review_search = "";
            }

            guarda_review = 0;
            //document.getElementById("loading_page").style.display = "block";
            busca_banco(g_x, g_y, g_z);
            break;
    }
}

function render_reviews_gamer(data, x) {

    if (x) {

        news_reviews_count = 10;
    } else {

        news_reviews_count += 10;
    }

    var html = "";
    reviews_game_data = [];
    var num = "";

    for (var i = 0; i < data.length; i++) {

        reviews_game_data[reviews_game_data.length] = data[i];

        if (i < news_reviews_count) {

            var fix_d = fixed_date(data[i].igdb_update, false);
            var imagem = search_imagem;
            imagem = imagem.replace("t_screenshot_big", "t_cover_big");

            var descricao = data[i].conteudo;

            var titulo = data[i].title;

            if (titulo === null || titulo === "" || titulo == "c") {

                titulo = document.getElementById("game_titulo").innerHTML;
            }

            if (screen.width <= 500) {

                num = descricao.length;

                if (descricao.length > 135) {

                    num = descricao.indexOf(",", 135);
                    if (num == -1) {

                        num = descricao.length;
                    }
                }

                descricao = descricao.substr(0, num) + "...";
            }

            if (descricao.length > 350) {

                num = descricao.indexOf(",", 350);
                if (num == -1) {

                    num = descricao.length;
                }

                descricao = descricao.substr(0, num) + "...";
            }

            var media_query = "";

            if (screen.width > 500) {

                media_query = " style='width:30%;'";
            }

            html += "<div class='post post-md'> <div class='post-thumbnail'" + media_query + "> <a href='http://mundogamer.org/reviews/?id=" + data[i].id + "' target='_blank'> <div id='style_new_ii_" + i + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;margin-left:auto;margin-right:auto;'><img id='style_new_ii_" + i + "' src='" + imagem + "' alt='" + document.getElementById("game_titulo").innerHTML + "' style='opacity:0;width:100%;'></div> </a> </div><div class='post-block'> <h2 class='post-title'> <a href='http://mundogamer.org/reviews/?id=" + data[i].id + "' target='_blank'>" + titulo + "</a> </h2> <div class='post-meta'> <span> by <a href='http://mundogamer.org/reviews/?id=" + data[i].id + "' target='_blank'>" + data[i].username + "</a>, <i class='fa fa-clock-o'></i> " + retorna_estado(fix_d.substr(5, 2)) + " " + fix_d.substr(8, 2) + ", " + fix_d.substr(0, 4) + " </span> </div><p>" + descricao + "</p></div></div>";
        }
    }

    if (reviews_game_data.length < 11 || news_reviews_count >= reviews_game_data.length) {

        document.getElementById("loading_more").style.display = "none";
    }

    document.getElementById("game_content_html").innerHTML = html;

    setTimeout(function() {

        var largura = 0;
        var altura = 0;

        for (var i = 0; i < reviews_game_data.length; i++) {

            if (largura < (parseInt(document.getElementById("style_new_ii_" + i).offsetWidth) / 100 * 66)) {

                altura = parseInt(document.getElementById("style_new_ii_" + i).offsetWidth);
                largura = parseInt(document.getElementById("style_new_ii_" + i).offsetWidth) / 100 * 66;
            }
        }

        for (i = 0; i < reviews_game_data.length; i++) {

            document.getElementById("style_new_ii_" + i + "_").style.width = largura + "px";
            document.getElementById("style_new_ii_" + i + "_").style.height = altura + "px";
            document.getElementById("style_new_ii_" + i + "_").innerHTML = "";
        }
    }, 1);
}

function title_animate() {

    if (title_bool) {

        var cont = title_page.length - title_position;

        if (cont == 20) {

            title_position = 0;
            title_bool = false;

            setTimeout(function() {

                title_bool = true;
            }, 1000);
        }

        document.getElementById("game_title").innerHTML = title_page.substr(title_position, title_page.length);
        title_position++;
    }
}

function game_tabs(x) {

    //  imagens_game
    window.scrollTo(0, 0);

    var id_plus = "";
    var class_plus = "";

    if (x.indexOf("_2") != -1) {

        id_plus = "_2";
        class_plus = "dropdown-item";
    }

    document.getElementById("game_overview").style.display = "none";
    document.getElementById("game_recommendations").style.display = "none";
    document.getElementById("game_link_articles" + id_plus).setAttribute("class", class_plus);
    document.getElementById("game_link_reviews" + id_plus).setAttribute("class", class_plus);
    document.getElementById("game_link_images" + id_plus).setAttribute("class", class_plus);
    document.getElementById("game_link_videos" + id_plus).setAttribute("class", class_plus);
    document.getElementById("game_link_overview" + id_plus).setAttribute("class", class_plus);
    //  document.getElementById("game_link_forum" + id_plus).setAttribute("class", class_plus);
    search_tab = x;
    document.getElementById(x).setAttribute("class", class_plus + " active");
    document.getElementById("game_content_html").innerHTML = "";
    document.getElementById("loading_more").style.display = "none";
    document.getElementById("game_content_header").innerHTML = document.getElementById("game_titulo").innerHTML + " <span class='fa fa-refresh loading' ></span>";

    switch (x) {

        case "game_link_articles":
        case "game_link_articles_2":

            history.pushState("", "", "?id=" + search_val + "&type=articles");

            $.ajax({
                type: "get",
                url: ajax_url + "get_news_game/" + search_val,
                dataType: "json",
                success: function(data) {

                    render_news_gamer(data, true);
                },
                error: function(jqXHR, textStatus, errorThrown) {

                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
            break;
        case "game_link_reviews":
        case "game_link_reviews_2":

            history.pushState("", "", "?id=" + search_val + "&type=reviews");

            $.ajax({
                type: "get",
                url: ajax_url + "get_reviews_game/" + search_val,
                dataType: "json",
                success: function(data) {

                    render_reviews_gamer(data, true);

                    document.getElementById("game_content_header").innerHTML = document.getElementById("game_titulo").innerHTML + " <span>(" + reviews_game_data.length + ")</span>";
                },
                error: function(jqXHR, textStatus, errorThrown) {

                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
            break;
        case "game_link_images":
        case "game_link_images_2":

            history.pushState("", "", "?id=" + search_val + "&type=images");
            html = "<div class='row row-3 figure-effect'>";

            for (var i = 0; i < imagens_game.length; i++) {

                html += "<div class='col-12 col-sm-6 col-md-4'><figure><div class='figure-img'><a href='" + imagens_game[i] + "' data-lightbox='{'disqus': true, 'gallery': 'uncharted'}'><img src='" + imagens_game[i] + "' alt='" + document.getElementById("game_titulo").innerHTML + "'></a></div></figure></div>";
            }

            html += "</div>";

            document.getElementById("game_content_html").innerHTML = html;
            document.getElementById("game_content_header").innerHTML = document.getElementById("game_titulo").innerHTML + " <span>(" + imagens_game.length + ")</span>";

            setTimeout(function() {

                $('[data-lightbox]').lightbox({
                    disqus: 'gameforestyakuzieu'
                });
            }, 1);
            break;
        case "game_link_videos":
        case "game_link_videos_2":

            history.pushState("", "", "?id=" + search_val + "&type=videos");
            html = "<div class='row row-3 figure-effect'>";

            for (i = 0; i < videos_id_game.length; i++) {

                html += "<div class='col-12 col-sm-6 col-md-4'><figure><div class='figure-img'><a href='https://youtu.be/" + videos_id_game[i] + "' data-lightbox='{'disqus': true, 'gallery': 'uncharted'}'><iframe width='376' height='211' src='https://www.youtube.com/embed/" + videos_id_game[i] + "?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></a></div></figure></div>";
            }

            html += "</div>";

            document.getElementById("game_content_html").innerHTML = html;
            document.getElementById("game_content_header").innerHTML = document.getElementById("game_titulo").innerHTML + " <span>(" + videos_id_game.length + ")</span>";

            setTimeout(function() {

                $('[data-lightbox]').lightbox({
                    disqus: 'gameforestyakuzieu'
                });
            }, 1);
            break;
        case "game_link_overview":
        case "game_link_overview_2":

            history.pushState("", "", "?id=" + search_val + "&type=overview");
            document.getElementById("game_overview").style.display = "block";
            document.getElementById("game_recommendations").style.display = "block";
            document.getElementById("loading_more").style.display = "none";
            document.getElementById("game_content_header").innerHTML = document.getElementById("game_titulo").innerHTML;
            document.getElementById("game_content_html").innerHTML = "<pre style='white-space: pre-wrap;background-color:transparent;'>" + overview_text + "</pre>";

            if (!overview_render) {

                overview_render = true;
                document.getElementById("game_recommendations").innerHTML = "<div class='container'><div class='heading'><h2 id='t_recommendations'>Recommendations</h2></div><div id='game_simulares' class='owl-carousel owl-list'></div></div>";

                $.ajax({
                    type: "get",
                    url: ajax_url + "game_similar_id/" + search_val,
                    dataType: "json",
                    success: function(data) {

                        if (data.length > 0) {

                            var ids = "";

                            for (var i = 0; i < data.length; i++) {

                                if (ids !== "") {

                                    ids += ",";
                                }

                                ids += data[i].id_Game_Similar;
                            }

                            $.ajax({
                                type: "get",
                                url: ajax_url + "get_similares/" + ids,
                                dataType: "json",
                                success: function(data) {

                                    var html = "";
                                    var repete = [];
                                    var data_guarda = [];

                                    for (var i = 0; i < data.length; i++) {

                                        if (repete.indexOf(data[i].id) == -1 && repete.length < 12) {

                                            data_guarda[data_guarda.length] = data[i];
                                            imagem = data[i].imagem;
                                            imagem = imagem.replace("t_thumb", "t_cover_big");

                                            if (parseInt(data[i].nota) > 79) {

                                                cor = "success";
                                            } else if (parseInt(data[i].nota) > 59) {

                                                cor = "warning";
                                            } else {

                                                cor = "danger";
                                            }

                                            html += "<div id='simular_" + repete.length + "' class='card card-review'> <a class='card-img' href='http://mundogamer.org/games/?id=" + data[i].id + "'> <div id='simular_" + repete.length + "_' style='background-image: url(" + imagem + ");background-size: cover;background-position: center center;background-repeat:  no-repeat;'><img src='" + imagem + "' alt='" + data[i].nome + "'></div> <div class='badge badge-" + cor + "'>" + parseInt(data[i].nota) + "</div></a> <div class='card-block'> <h4 class='card-title'> <a href='http://mundogamer.org/games/?id=" + data[i].id + "&type=reviews'>" + data[i].nome + "</a> </h4> <p>...</p></div></div>";
                                            repete[repete.length] = data[i].id;
                                        }
                                    }

                                    document.getElementById("game_simulares").innerHTML = html;

                                    setTimeout(function() {

                                        // Recent Reviews 
                                        $('.owl-list').owlCarousel({
                                            margin: 25,
                                            nav: true,
                                            dots: false,
                                            responsive: {
                                                0: {
                                                    items: 1
                                                },
                                                500: {
                                                    items: 2
                                                },
                                                701: {
                                                    items: 3
                                                },
                                                1000: {
                                                    items: 4
                                                }
                                            }
                                        });

                                        var largura = 0;
                                        var altura = 0;
                                        var margem = 0;
                                        data = data_guarda;

                                        for (var i = 0; i < data.length; i++) {

                                            if (largura < parseInt(document.getElementById("simular_" + i).offsetWidth)) {

                                                largura = parseInt(document.getElementById("simular_" + i).offsetWidth);
                                                altura = parseInt(largura * 1.5);
                                            }
                                        }

                                        if (largura > 200) {

                                            var operacao = largura - 200;
                                            var a = operacao * 100 / largura;
                                            var b = altura / 100 * a;

                                            largura = 200;
                                            altura = altura - b;
                                            margem = operacao / 2;
                                        }

                                        for (i = 0; i < data.length; i++) {

                                            document.getElementById("simular_" + i + "_").style.width = largura + "px";
                                            document.getElementById("simular_" + i + "_").style.height = altura + "px";
                                            document.getElementById("simular_" + i + "_").style.marginLeft = margem + "px";
                                            document.getElementById("simular_" + i + "_").innerHTML = "";
                                        }

                                        setTimeout(function() {

                                            var data_class = $(".owl-item");

                                            for (var i = 0; i < data_class.length; i++) {

                                                data_class[i].style.float = "left";
                                            }

                                        }, 1);
                                    }, 1);
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            }
            break;
        case "game_link_forum":
        case "game_link_forum_2":
            /*
            history.pushState("", "", "?id=" + search_val + "&type=forum");
            document.getElementById("game_content_header").innerHTML = document.getElementById("game_titulo").innerHTML;
            document.getElementById("game_content_html").innerHTML = "<div class='container'> <h5 class='forum-headline'>General Forums <span>Everything about games and gameforest.</span></h5> <div class='forum'> <div class='forum-head'> <div></div><div>Thread</div><div>Topics</div><div>Replies</div><div>Latest Post</div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-comments'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Games Discussion</a></h4> <p>Disquss everything about games and videos here.</p></div><div class='forum-thread'>71</div><div class='forum-thread'>405</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-1.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Call of Duty: Infinite Warfare</a></h5> <span>Venom on June 16, 2017</span> </div></div></div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <span class='badge badge-success'>New</span> <i class='fa fa-film'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Gametrailers</a></h4> <p>Share game trailers about your favourite game.</p></div><div class='forum-thread'>35</div><div class='forum-thread'>6305</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-2.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Machinima Videos</a></h5> <span>Elizabeth on June 29, 2017</span> </div></div></div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-camera-retro'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Recent Photos</a></h4> <p>New pictures from upcoming games.</p></div><div class='forum-thread'>138</div><div class='forum-thread'>906</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-3.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Grand Theft Auto Modding</a></h5> <span>Clark on April 18, 2017</span> </div></div></div></div><div class='forum-group forum-closed'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-lock'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Closed Thread</a></h4> <p>This is an example for locked forum.</p></div><div class='forum-thread'>16</div><div class='forum-thread'>70</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-4.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Epic Gaming Theme</a></h5> <span>Strange on March 21, 2017</span> </div></div></div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-bug'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Bug Report</a></h4> <p>Have a bug to report? Post here!</p></div><div class='forum-thread'>43</div><div class='forum-thread'>167</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-2.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Forum Close Tab</a></h5> <span>Elizabeth on July 5, 2017</span> </div></div></div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-rebel'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Rebel Forces</a></h4> <p>The force is with you!</p></div><div class='forum-thread'>79</div><div class='forum-thread'>427</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-4.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>SW Battlefront DLC</a></h5> <span>Strange on July 5, 2017</span> </div></div></div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-bomb'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Bomb Squad</a></h4> <p>Join to our bomb squad</p></div><div class='forum-thread'>67</div><div class='forum-thread'>45</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-1.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Dust 2 map glitch</a></h5> <span>Venom on August 13, 2017</span> </div></div></div></div><div class='forum-footer'> <div></div><div>Thread</div><div>Topics</div><div>Replies</div><div>Latest Post</div></div></div><h5 class='forum-headline'>Platform Forums <span>Disquss comments on your platforms</span></h5> <div class='forum'> <div class='forum-head'> <div></div><div>Thread</div><div>Topics</div><div>Replies</div><div>Latest Post</div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-twitch'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Twitch</a></h4> <p>Share your achievements</p></div><div class='forum-thread'>53</div><div class='forum-thread'>449</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-3.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Best streamer solutions</a></h5> <span>Clark on June 7, 2017</span> </div></div></div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <i class='fa fa-youtube-play'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Youtube</a></h4> <p>Talking about streaming</p></div><div class='forum-thread'>23</div><div class='forum-thread'>378</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-2.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Uploading videos</a></h5> <span>Elizabeth on June 29, 2017</span> </div></div></div></div><div class='forum-group'> <div class='forum-row'> <div class='forum-icon'> <span class='badge badge-danger'>Sale</span> <i class='fa fa-steam'></i> </div><div class='forum-title'> <h4><a href='forum-topic.html'>Steam</a></h4> <p>Everyting about steam and sales</p></div><div class='forum-thread'>65</div><div class='forum-thread'>96</div><div class='forum-latest'> <a href='profile.html'><img src='img/user/user-1.jpg' alt=''></a> <div> <h5><a href='forum-post.html'>Counter Strike</a></h5> <span>Venom on April 22, 2017</span> </div></div></div></div><div class='forum-footer'> <div></div><div>Thread</div><div>Topics</div><div>Replies</div><div>Latest Post</div></div></div></div>";
            */
            break;
    }
}

function search_name(x) {

    if (x !== "" && x !== undefined && x !== null) {

        document.getElementById("game_input_div").style.width = document.getElementById("game_input").offsetWidth + "px";

        $.ajax({
            type: "get",
            url: ajax_url + "search_game_name/" + encodeURI(x),
            dataType: "json",
            success: function(data) {

                var html = "";
                var ids = "";
                var id_array = [];

                if (data.length > 0) {

                    document.getElementById("game_header").setAttribute("style", "background-color:black;");
                    document.getElementById("game_shadow").style.display = "block";
                    document.getElementById("game_input_div").style.display = "block";

                    for (var i = 0; i < data.length; i++) {

                        if (ids !== "") {

                            ids += ",";
                        }

                        ids += data[i].id;
                        id_array[id_array.length] = data[i].id;

                        html += "<div id='result_" + i + "' class='input_results' style='width: 100%;height: 80px;' onclick='change_page(" + data[i].id + ");'> <div style='width: 80px;height: 80px;padding:10px;float:left;'> <div id='result_" + i + "_' style='width: 60px;height: 60px;background-image:url();background-size:cover;'></div></div><div style='width: calc(100% - 80px);height: 80px;padding:10px;float:left;overflow: hidden;'> <div style='width: 100%;height: 60px;line-height: 60px;font-size: 15px;color:black;font-weight: 500;'> <div style='float:left;'>" + data[i].nome + "</div><div style='float:right;'>Games</div></div></div></div>";
                    }


                    html += "<div style='width: 100%;height: 50px;line-height: 50px;font-size: 15px;color: black;font-weight: 900;text-align: center;'>See All Results...</div>";

                    document.getElementById("game_input_div").style.height = ((data.length * 80) + 50) + "px";

                    if (document.getElementById("game_input").value !== "" && document.getElementById("game_input").value !== undefined && document.getElementById("game_input").value !== null) {

                        document.getElementById("game_input_div").innerHTML = html;

                        setTimeout(function() {

                            $.ajax({
                                type: "get",
                                url: ajax_url + "search_game_imagens/" + ids,
                                dataType: "json",
                                success: function(data) {

                                    if (document.getElementById("game_input").value !== "" && document.getElementById("game_input").value !== undefined && document.getElementById("game_input").value !== null) {

                                        for (var i = 0; i < id_array.length; i++) {

                                            var n = -1;

                                            for (var u = 0; u < data.length; u++) {

                                                if (id_array[i] == data[u].id) {

                                                    n = u;
                                                }
                                            }

                                            if (n == -1) {

                                                var url = window.location.href;
                                                var completa = "";

                                                if (url.indexOf("http://mundogamer.org/games") != -1) {

                                                    completa = "../";
                                                }

                                                document.getElementById("result_" + i + "_").style.backgroundImage = "url(" + completa + "img/logo_3.png)";
                                            } else {

                                                document.getElementById("result_" + i + "_").style.backgroundImage = "url(" + data[n].imagem + ")";
                                            }
                                        }
                                    } else {

                                        document.getElementById("game_header").setAttribute("onclick", "");
                                        document.getElementById("corpo").setAttribute("class", "fixed-header");
                                        document.getElementById("game_header").setAttribute("style", "");
                                        document.getElementById("game_shadow").style.display = "none";
                                        document.getElementById("game_input_div").style.display = "none";
                                        document.getElementById("game_input").value = "";
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {

                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);
                                }
                            });
                        }, 1);
                    } else {

                        document.getElementById("game_header").setAttribute("onclick", "");
                        document.getElementById("corpo").setAttribute("class", "fixed-header");
                        document.getElementById("game_header").setAttribute("style", "");
                        document.getElementById("game_shadow").style.display = "none";
                        document.getElementById("game_input_div").style.display = "none";
                        document.getElementById("game_input").value = "";
                    }
                } else {

                    document.getElementById("game_header").setAttribute("style", "");
                    document.getElementById("game_shadow").style.display = "none";
                    document.getElementById("game_input_div").style.display = "none";
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {

                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    } else if (x === undefined) {

        document.getElementById("corpo").setAttribute("class", "fixed-header navbar-search-open");
        document.getElementById('game_input').focus();

        setTimeout(function() {

            document.getElementById("game_header").setAttribute("onclick", "search_name(null);");
            document.getElementById("game_lupa").setAttribute("onclick", "");
        }, 10);
    } else {

        document.getElementById("game_header").setAttribute("onclick", "");
        document.getElementById("corpo").setAttribute("class", "fixed-header");
        document.getElementById("game_header").setAttribute("style", "");
        document.getElementById("game_shadow").style.display = "none";
        document.getElementById("game_input_div").style.display = "none";
        document.getElementById("game_input").value = "";

        setTimeout(function() {

            document.getElementById("game_header").setAttribute("onclick", "");
            document.getElementById("game_lupa").setAttribute("onclick", "search_name(undefined);");
        }, 10);
    }
}

function change_page(x) {

    document.location.href = "http://mundogamer.org/games/?id=" + x + "&type=articles";
    conta_click(x, "Game");
}

function formToJSON() {

    switch (json_convert) {
        case "null":
            return JSON.stringify({});
        case "newsletter":
            return JSON.stringify({
                "email": document.getElementById("email_newsletter").value
            });
    }
}

function conta_click(x, y) {

    json_convert = "null";
    $.ajax({
        type: 'PUT',
        contentType: 'application/json',
        url: ajax_url + 'put_click/' + x + '/' + y,
        dataType: "json",
        data: formToJSON(),
        success: function(data, textStatus, jqXHR) {

            console.log("Click adicionado com Sucesso");
        },
        error: function(jqXHR, textStatus, errorThrown) {

            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log("Erro ao inserir Click");
        }
    });
}