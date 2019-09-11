# DataTable
---
    Create Date <2019-04-30>
---

## DataTable

* open jQuery Library
* support to grid, paging, filtering, ordering



---

## DataTable Install

### Add File

- [File Download](https://datatables.net/download/index)

```
    - <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.css">
    - <script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.js"></script>
```

### Using npm

- npm install datatables.net
  : Core library
- npm install datatables.net-dt
  : Styling

### Using bower

- bower install --save datatables.net
- bower install --save datatables.net-dt



---

## Example Reference

- API URL : https://datatables.net/reference/api/

- Example URL : https://datatables.net/examples/index



---

## Create DataTable Object

* $(document).ready 단계에서 생성

  1. ```
     $('#tableid').DataTable(); //DataTable() returns an API instance immediately
     ```

  2. ```
     $('#tableid').dataTable().api(); //dataTable() returns a jQuery object
     ```

  3. ```
     new $.fn.dataTable.Api('#tableid');
     ```



---

## Basic API Example

#### Add Rows

- row.add ( [] )

  : add single row

- rows.add ( [], [], [] )

  : add multiple rows

```
$(document).ready(function() {
    var t = $('#example').DataTable();
    t.row.add([ // or t.rows.add
    	'col 1 value',
    	'col 2 value',
    	'col 3 value'
    ]).draw();
} );
```

#### Remove Row

- row( this ).remove()

  : remove this row

```
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'img.icon-delete', function () {
    table
        .row( $(this).parents('tr') )
        .remove()
        .draw();
} );
```

#### Get Row Data

- row( this ).data()

  : get existing data

- row( this ).data( d )

  : set new data

```
var table = $('#example').DataTable();
 
table.rows().every( function () {
    var d = this.data();
 
    d.counter++; // update data source for the row
 
    this.invalidate(); // invalidate the data DataTables has cached for this row
} );
```

#### Individual Column Searching

- quickly global search in the table
- quiclky search in specific columns
- different with filter() -> it is filter to a result set

```
<tfoot>
    <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start date</th>
        <th>Salary</th>
    </tr>
</tfoot>
```

```
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#example').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
```

####  Highlighting rows and columns

- highlighting rows

```
<table class="hover"></table>
```

```
td.highlight {
    background-color: whitesmoke !important;
}
```

- highlighting columns
  - cell().index()
    - get the index of the column to be operated on

  - cells().nodes()
    - remove css class
  - column().nodes() 
    - apply css class

```
$(document).ready(function() {
    var table = $('#example').DataTable();
     
    $('#example tbody')
        .on( 'mouseenter', 'td', function () {
            var colIdx = table.cell(this).index().column;
 
            $( table.cells().nodes() ).removeClass( 'highlight' );
            $( table.column( colIdx ).nodes() ).addClass( 'highlight' );
        } );
} );
```

#### Selection

- row().select()
  - row( '.selected').data()

```
$(document).ready(function() {
    var table = $('#example').DataTable();
 
    $('#example tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        console.log( table.row('.selected').data() );
    } );
} );
```

- rows().select()
  - rows('.selected').data()

```
$(document).ready(function() {
    var table = $('#example').DataTable();
 
    $('#example tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
 
    $('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } );
} );
```

- column().select()
  - column( {selected: true } ).data()
- columns().select()
  - columns( { selected: true } ).data()

 #### Input Form Data Sumbit

- get all `input`elements from HTML table.

```
$(document).ready(function() {
    var table = $('#example').DataTable({
        columnDefs: [{
            orderable: false,
            targets: [1,2,3]
        }]
    });
 
    $('button').click( function() {
        var data = table.$('input, select').serialize();
        alert(
            "The following data would have been submitted to the server: \n\n"+
            data.substr( 0, 120 )+'...'
        );
        return false;
    } );
} );
```



---

## Basic Example by use Javascript

### Set HTML Table Form

```
<table id="example" class="display" width="100%">
</table>
```

### Default Initialization

- Searching
- Ordering
- Paging

```
var dataSet = [
        [ "Column1 Data", "Column2 Data", "Column3 Data", "Column4 Data", "Column5 Data", "Column6 Data" ],
        [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    ];
var columnSet = [
	{ title: "Name" },
    { title: "Position" },
    { title: "Office" },
    { title: "Extn." },
    { title: "Start date" },
    { title: "Salary" }
];
$(document).ready(function() {
	$('#example').DataTable( {
        data: dataSet,
        columns: columnSet,
	} );
} );
```

### Set Customized Language

- it is possible to init language option with json file URL

```
$(document).ready(function() {
    "language": {
    	// "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
        "decimal":        "",
        "emptyTable":     "No data available in table",
        "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
        "infoEmpty":      "Showing 0 to 0 of 0 entries",
        "infoFiltered":   "(filtered from _MAX_ total entries)",
        "infoPostFix":    "",
        "thousands":      ",",
        "lengthMenu":     "Show _MENU_ entries",
        "loadingRecords": "Loading...",
        "processing":     "Processing...",
        "search":         "Search:",
        "zeroRecords":    "No matching records found",
        "paginate": {
            "first":      "First",
            "last":       "Last",
            "next":       "Next",
            "previous":   "Previous"
        },
        "aria": {
            "sortAscending":  ": activate to sort column ascending",
            "sortDescending": ": activate to sort column descending"
        }
    }
} );
```

### Set DataTables Column Options

- structure of columnDefs object
  - "targets" :  index number of target column
  - "data"  : display value
  - "orderData" : sort data of "targets" column
  - "visible" : show or hide
  - "searchable" : set search enable or disable
  - "render" : set function when rendered "targets" column

```
"columnDefs": [ {
    "targets": 4,
    "data": "description",
    "orderData": [4, 'desc'],
    "visible": false,
    "searchable": false,
    "render": function ( data, type, row, meta ) {
      return type === 'display' && data.length > 40 ?
        '<span title="'+data+'">'+data.substr( 0, 38 )+'...</span>' :
        data;
    }
  } ]
```

### Set Some Feature be Enable or Disable

```
$(document).ready(function() {
    $('#example').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false
    } );
} );
```

### Ordering

#### Default Ordering by Silngle Column

- ordering character of some column at init time.

```
$(document).ready(function() {
    $('#example').DataTable( {
        "order": [[ 3, "desc" ]]
    } );
} );
```

#### Default Ordering by Multi Column

- ordering character of some columns at init time.
- user to shift + click to order columns

```
$(document).ready(function() {
    $('#example').DataTable( {
        columnDefs: [ {
            targets: [ 0 ],
            orderData: [ 0, 'desc' ]
        }, {
            targets: [ 1 ],
            orderData: [ 1, 'desc' ]
        }, {
            targets: [ 4 ],
            orderData: [ 4, 'desc' ]
        } ]
    } );
} );
```

#### Control Order Direction Sequence

- set ordering direction sequence for columns

```
$(document).ready(function() {
    $('#example').DataTable( {
        "aoColumns": [ // total column count is 6.
            null,
            null,
            { "orderSequence": [ "asc" ] },
            { "orderSequence": [ "desc", "asc", "asc" ] },
            { "orderSequence": [ "desc" ] },
            null
        ]
    } );
} );
```

### Hidden Columns

- set some columns be shown or not shown

- hidden data is still part of the table

  - it can be visible to use API column().visible()

    column.visible API

    : get / set the visibility of a single selected column.

    : column(index).visible()

    : column(index).visible(true | false)

```
$(document).ready(function() {
    $('#example').DataTable( {
        "columnDefs": [
            {
                "targets": [ 2 ],
                "visible": false,
                "searchable": false
            }
        ]
    } );
} );
```

### DOM Customising (positioning or feautre option)

- `l` - `L`ength changing

- `f` - `F`iltering input

- `t` - The `T`able!

- `i` - `I`nformation

  - show now part and total count

    ex) 'Showing 1 to 10 of 57 entries'

- `p` - `P`agination

- `r` - p`R`ocessing

- `<` and `>` - div elements

- `<"#id"` and `>` - div with an id

- `<"class"` and `>` - div with a class

- `<"#id.class"` and `>` - div with an id and class

```
$(document).ready(function() {
    $('#example').DataTable( {
        "dom": '<"top"i>rt<"bottom"flp><"clear">'
    } );
} );
```

### Flexible table width

- set css width percentage

- State Save
  - It can stored state data like paging position, ordering state.
  - reloading when come back to this page at other page
  - saving in localStorage or sessionStorage
  - will not work with IE6/7

```
$(document).ready(function() {
    $('#example').DataTable( {
        stateSave: true
        // use localStorage
        // stateDuration : 60 * 60 * 24 //default 2 hours
        // use sessionStorage
        // stateDuration : -1
    } );
    // Alternative options of using cookies
    stateSaveCallback: function(settings,data) {
    	localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data) 
        )
    },
    //saving the state on the server through Ajax
    stateLoadCallback: function(settings) {
  		return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance))
	}
} );
```

### Alternative Pagination

- `numbers` - Page number buttons only
- `simple` - 'Previous' and 'Next' buttons only
- `simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
- `full` - 'First', 'Previous', 'Next' and 'Last' buttons
- `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
- `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers

```
$(document).ready(function() {
    $('#example').DataTable( {
        "pagingType": "full_numbers"
    } );
} );
```

### Use Scroll bar

- shows vertical and horizontal direction scroll bar in the DataTable's table body

```
$(document).ready(function() {
    $('#example').DataTable( {
    	"scrollX": true
        "scrollY":        "200px", // use vh for dynamic : "50vh"
        "scrollCollapse": true,
        "paging":         false
    } );
} );
```

### Events 

#### DOM / jQuery events

- control DataTable with jQuery's method

```
$(document).ready(function() {
    var table = $('#example').DataTable();
     
    $('#example tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        alert( 'You clicked on '+data[0]+'\'s row' );
    } );
} );
```

#### DataTables Events

- namespace `dt` is prevent colflicts arising with other jQuery plug-ins

```
$(document).ready(function() {
    var eventFired = function ( type ) {
        var n = $('#demo_info')[0];
        n.innerHTML += '<div>'+type+' event - '+new Date().getTime()+'</div>';
        n.scrollTop = n.scrollHeight;      
    }
 
    $('#example')
        .on( 'order.dt',  function () { eventFired( 'Order' ); } )
        .on( 'search.dt', function () { eventFired( 'Search' ); } )
        .on( 'page.dt',   function () { eventFired( 'Page' ); } )
        .DataTable();
} );
```

### Created callback function

- run the callback function when draw time

#### row callback ( row, data, index )

- `row` is row element
- `data` is this row data source (array or object)
- `index` is row index of DataTable's internal storage

```
$(document).ready(function() {
    $('#example').DataTable( {
        "createdRow": function ( row, data, index ) {
            if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('highlight');
            }
        }
    } );
} );
```

#### headerCallback ( thead, data, start, end, display )

- `thead` is element of tables' header
- `data` is full data array of table
- `start` is index starting point in the current display array
- `end` is index end point in the current display array
- `display` is index array to translate the visual position to the full data array

```
$('#example').dataTable( {
  "headerCallback": function( thead, data, start, end, display ) {
    $(thead).find('th').eq(0).html( 'Displaying '+(end-start)+' records' );
  }
} );
```

#### footer callback ( tfoot, data, start, end, display )

- `tfoot` is element of tables' footer
- `data` is full data array of table
- `start` is index starting point in the current display array
- `end` is index end point in the current display array
- `display` is index array to translate the visual position to the full data array

```
$(document).ready(function() {
    $('#example').DataTable( {
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 			$( api.column( 5 ).footer() ).html(
                api.column( 5 ).data().reduce( function ( a, b ) {
                    return a + b;
                }, 0 )
            );
        }
    } );
} );
```

### Change CSS Style

- apply in HTML `<table classes=" ">` tag

  ```
  <table id="example" class="display" style="width:100%">
  ```

- display

- cell-border

- display compact

- hover

- order-column

- row-border

- stripe





# Reference

- [Datatables.net](https://datatables.net)

  