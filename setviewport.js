/* setviewport v1.02, by Joe Komenda (Komejo). Copyright 2014, MIT Licence.

  This script inserts a viewport metatag into the document head,
  based on the width set in the mobileWidth(); function call below.
  Useful if you want device scaling to be the default behavior for
  large mobile devices, such as tablets.

  Note that it also has orientation detection and substitution,
  so that rotated devices will use the widest aspect.

  The function mobileWidth(); makes two variable available to the
  global window object:
    viewportWidth  -  window or screen (whichever is smaller),
                      based on device orientation.
    triggerWidth -  the width you set to trigger setviewport();
*/

<script>
    function mobileWidth(){
      window.viewportWidth;
      var c=screen.width,
      e=screen.height,
      a=document.documentElement.clientWidth,
      d=document.documentElement.clientHeight;

      if(c<=a){a=c}
      if(e<=d){d=e}
      if(window.orientation===undefined){
        viewportWidth=a
      }else{
        if(window.orientation===0){
          viewportWidth=c
        }else{
          viewportWidth=e
        }
      }
    };

    function addViewport(){docHead.appendChild(viewport)};

    var hasViewport=document.getElementById("viewport"),
        docHead=document.getElementsByTagName("head")[0],
        viewport=document.createElement("meta");
        viewport.id="viewport";
        viewport.name="viewport";
        viewport.content="width=device-width initial-scale=1";
    window.triggerWidth=640;
    mobileWidth();

    if(viewportWidth<=triggerWidth&&!hasViewport){addViewport()};
</script>