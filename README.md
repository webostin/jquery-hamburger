# jquery-hamburger
plugin for menu hamburger animated

## use

include jquery lib, hamburger css and js files and init hamburger:
```
<link rel="stylesheet" href="/css/hamburger.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
<script src="/js/hamburger.min.js"></script>
<script>
$("#menuId").hamburger();
</script>
```
menuId points the element which will be changed to visible after clicking hamburger

## possible options

* menuToggleElement:
	** default:  ".menu-hamburger"
	** description:  point the hamburger element (if you change origin css elements)