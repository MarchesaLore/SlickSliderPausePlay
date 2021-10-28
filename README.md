# SlickSliderPausePlay

Accessility require that when having a slider with autoplay there is visible a button play and pause and it does not come with in the slider slick 

sources of slick
https://kenwheeler.github.io/slick/

![image](https://user-images.githubusercontent.com/22336407/139304940-d3b66b59-2887-4a29-b5dc-cb0d7f628765.png)

html for the buttons
```rd
        <div class="slick_pause_and_play_container">
            <button class="slick-pause" aria-label="Pause" type="button">Pause</button>
            <button class="slick-play" aria-label="Play" type="button">Play</button>
        </div>
        
````
js functionality 
```rd
        $(".slick-pause").click(function () {
            $(".image_slider").slick('slickPause');
        });
        $(".slick-play").click(function () {
            $(".image_slider").slick('slickPlay');
        });
```
