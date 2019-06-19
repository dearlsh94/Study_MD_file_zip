# Spring Boot Form

## Box-Header

```
<div class="box-header with-border">
```

```
	<label> Header </label>
```

```
</div>
```

## Box-Body

```
<div class="box-body">
```

### Select

```
<div class="col-sm-12">
    <div class="form-group">
        <label for="setDBType">DBMS</label>
        <select class="form-control" id="setDBType" name="setDBType">
        	<option value="normal" selected="selected">Default</option>
        	<option value="ms" 
        		<c:if test="${type eq 'ms'}">selected</c:if>>MS-SQL</option>
        </select>
    </div>
</div>
```

### TextBox

```
<div class="col-sm-12">
    <div class="form-group">
        <label for="setDBName">DataBase 이름</label>
        <input type="text" class="form-control" id="setDBName" name="setDBName" placeholder="DataBase Name">
    </div>
</div>
```

### TextBox With Button

```
<div class="col-sm-12">
    <label for="setDBPwd">Password</label>
    <div class="input-group">
        <input type="password" class="form-control" id="setDBPwd" name="setDBPwd" placeholder="DB Password">
        <div class="input-group-btn">
        <button type="button" class="btn btn-danger"
        id="btnConnTest" name="btnConnTest">연결테스트</button>
        </div>
    </div>
</div>
```

```
</div>
```

## Box-Footer

```
<div class="box-footer">
```

### Submit

```
<button type="submit" class="btn btn-primary pull-right" id="btnSubmit" name="btnSubmit">Next</button>
```

```
</div>
```

