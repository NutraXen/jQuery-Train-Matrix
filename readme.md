# Train Matrix jQuery Plugin #

Train Matrix is a jQuery plugin that converts letters into a matrix like those used on old _First Great Western_ trains. The text remains selectable and displays normally without styles or javascript. It was inspired by [an article on Ministry of Type](http://ministryoftype.co.uk/words/article/serene_infoboards/ "Serene Infoboards | The Ministry of Type") by [Aegir Hallmundur](http://aegir.me/ "Aegir Hallmundur"). Aegir has mocked up the matrix and alphabet in Illustrator.

Train Matrix is relatively light, it only uses one 3KB image, and the minified css and javascript together come to 16KB. This is still a very early version (though was written about 4 years ago and until recently was forgotten), but you can fork or download the source (including the minified versions). At the moment this plugin hasn't been tested in anything so I wouldn't be surprised if it breaks.

There is a demo online at http://jedidiah.eu/code/js/trainmatrix/

## Examples ##

To use the plugin you first need to upload the files _jquery.trainmatrix.min.js_ and _matrix-min.css_ to your server and include links to them in your HTML. You will also need to upload _matrix-20_20.png_ and depending on where you put the files you will have to update the link to the image in the CSS file. It is only referenced once in the CSS right at the top of the minified CSS or in the _matrix-base.css_ in the un-minified files.


```html
<link rel="stylesheet" type="text/css" href="matrix-min.css" media="all">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="jquery.trainmatrix.js"></script>
```

To apply the effect to an element:

```javascript
$(element).trainmatrix();
```
To apply the effect to an element with a custom string:

```javascript
$(element).trainmatrix({matrixText: 'This text will be used to generate the matrix'});
```

## Limitations ##

There are currently no numbers. The only punctuation that is currently supported are the characters . , &ldquo; &rdquo; &#x27; : + - [ ] ( ) { } &bull; = _ ; *


Stick to A-Z and basic punctuation and you should be fine.