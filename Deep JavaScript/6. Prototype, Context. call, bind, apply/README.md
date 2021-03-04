<table><tr>
<td valign="top" width="50%">
<div align="center"><h6> ES 5</h6></div>
<div> 

```sh
function Task(title) {
    this._title = title
    this._done = false
    Task.count += 1
}

Object.defineProperty(Task, 'title', {
    get: function() {
        return this._title
    },
    set: function(val) {
        this._title = val
    }
})

Task.prototype.complete = function(){
    this._done = true
}

Task.getDefaultTitle = function() {
    return 'Task'
}

Task.count = 0

function SubTask(title, parent) {
    Task.call(this, title)
    this._parent = parent
}

SubTask.prototype = Object.create(Task)
SubTask.prototype.constructor = SubTask

var rabiz = new Task('Es kmernem u kgnam... mp3')
var subRabiz = new SubTask('Ur vor gnas hett kgam')
console.log(rabiz, subRabiz)

```

</div></td>
<td valign="top" width="50%">
<div align="center"><h6>ES 6</h6></div>
<div> 
   
```sh

class Task {
    constructor(title = 'Task') {
        this._title = title
        this._done = false
        Task.count += 1
    }

    get title(){
        return this._title
    }
    set title(val) {
        this._title = val
    }

    complete() {
        this._done = true
    }

    static getDefaultTitle() {
        return 'Task'
    }
}

Task.count = 0

class SubTask extends Task {
    constructor(title, parent) {
        super();
        this._parent = parent
    }
}

let rabiz = new Task('Es kmernem u kgnam... mp3')
let subRabiz = new SubTask('Ur vor gnas hett kgam')
console.log(rabiz, subRabiz)

```
</div></td>
</tr></table> 