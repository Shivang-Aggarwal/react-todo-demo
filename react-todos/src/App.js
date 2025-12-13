var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import TodoTable from './components/TodoTable.js';
import NewTodoForm from './components/NewTodoForm.js';
function App() {
    var _a = useState([
        { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User 1" },
        { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User 2" },
        { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User 1" },
        { rowNumber: 4, rowDescription: "Chargep phone battery", rowAssigned: "User 1" }
    ]), todos = _a[0], setTodos = _a[1];
    var deleteTodo = function () {
        if (todos.length > 0) {
            todos.pop();
            setTodos(function (todos) { return __spreadArray([], todos, true); });
        }
    };
    var addTodo = function (description, assigned) {
        if (todos.length > 0) {
            var newTodo_1 = {
                rowNumber: todos.length + 1,
                rowDescription: description,
                rowAssigned: assigned
            };
            setTodos(function (todos) { return __spreadArray(__spreadArray([], todos, true), [newTodo_1], false); });
        }
    };
    return (_jsx("div", __assign({ className: 'mt-5 container' }, { children: _jsxs("div", __assign({ className: 'card' }, { children: [_jsx("div", __assign({ className: 'card-header' }, { children: "Your Todo's" })), _jsxs("div", __assign({ className: 'card-body' }, { children: [_jsx(TodoTable, { todos: todos }), _jsx("button", __assign({ type: 'button', className: 'btn btn-danger mt-3', onClick: deleteTodo }, { children: "Delete" })), _jsx(NewTodoForm, { addTodo: addTodo })] }))] })) })));
}
export default App;
//# sourceMappingURL=App.js.map