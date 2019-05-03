# Bootstrap

- Open UI Plug-in
- HTML5 Framework using CSS, Javascript
- Responsive web 
  - smartphone, tablet, desktop, ETC ...
  - various browser
- Support component like layout, menu, button, list, tab image, ETC ...



## Install

- [Download](https://getbootstrap.com/docs/4.3/getting-started/download/)
- [Bootstrap CDN](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

```
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
     integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" 
     integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</head>

<body>
</body>
</html>
```



## File Struct 

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```



## Feature

### HTML5

- require HTML element and CSS attribute

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8"> 
  </head>
</html>
```

### Mobile-Friendly

- include this viewport tag in `<head>` for page rendering and zoom-in/out
  - `width=device-width` : set page width to suitable device width
  - `initial-scale=1` : set zoom level at first loaded page
  - `user-scalable=no` : set off zoom at mobile device

```
 <meta name="viewport" content="width=device-width, initial-scale=1">
```

### Need Container `<div>`

- Fix-width container

```
<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p> 
</div>
```

- max-width container

```
<div class="container-fluid">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p> 
</div>
```

## Function 

### Grid System

- see detail options [here](https://getbootstrap.com/docs/3.4/css/)
- bootstrap is provide 12-column grid layout system

```
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>
```

```
 <!DOCTYPE html>
<html lang="ko">
<head>
  <title>Bootstrap Grid System Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
         integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" 
         integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</head>
<body>
 
<div class="container">
  <h1>Grid</h1>
  <p>50%/50% split on small,it will stack (100% width).</p>      
  <p>Resize the browser window to see the effect.</p>      
  <div class="row">
    <div class="col-sm-6" style="background-color:yellow;">
      content 1
    </div>
    <div class="col-sm-6" style="background-color:pink;">
      content 2    
    </div>
  </div>
</div>
 
</body>
</html>
```

### Various CSS Style

- see detail about css [here](https://getbootstrap.com/docs/3.4/css/)
- table
- form
- button

## Component

- see detail about component [here](http://getbootstrap.com/components/)

### Glyphicons

- include over 250 glyphs in font format from the Glyphicon Halfings set
- Example
  - change class name you want

```
<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
```

### Pagination

- apply pagination class in `<ul>`
- if apply active class in `<li>`, it being active state
- if apply disable class in `<li>`, it being disable state

```
<ul class="pagination">
    <li><a href="#">Common</a></li>
    <li class="active"><a href="#">Active State</a></li>
    <li class="disable"><a href="#">Disable State</a></li>
</ul>
```

## Javascript

- control bootstrap UI component by to use jQuery plugin

### Modal

- have some constraint where mobile device

```
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
     integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" 
     integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</head>
 
<body>
<div class="container">
  <h2>Modal Example</h2>
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
 
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
 
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
 
    </div>
  </div>
 
</div>
 
</body>
</html>
```

