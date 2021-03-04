<table><tr>
<td valign="top" width="50%">
<div align="center"><h6> Օրինակ </h6></div>
<div> 

```sh
let a = 22;
const b = 11;
var c;

function foo(e,f) {
    var g = 33;
    return e + f + g;
}

c = foo(11,22)

ExectionContext = {
    ThisBinding: <this value>,
    LexicalEnvironment: {...},
    VaribalEnvironment: {...}
}

```

</div></td>
<td valign="top" width="50%">
<div align="center"><h6>Exection Context (Hoisting)</h6></div>
<div> 
   
```sh
GlobalExectionContext = {
    ThisBinding: <global object>,
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'object',
            a: <uninitialized>,
            b: <uninitialized>,
            foo: <func>
        }
        outer: <null>
    }
    VaribalEnvironment: {
        EnvironmentRecord: {
            Type: 'object',
            c: <undefined>
        }
        outer: <null>
    }
}

FunctionExectionContext = {
    ThisBinding: <global object>,
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            Arguments: (0:11, 1:22, length: 2),
        }
        outer: <GlobalLexicalEnvironment>
    }
    VaribalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            g: <undefined>
        }
        outer: <GlobalLexicalEnvironment>
    }
}

```
</div></td>
</tr></table> 