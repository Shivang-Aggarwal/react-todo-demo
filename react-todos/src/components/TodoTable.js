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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TodoRowItem from './TodoRowItem.js';
function TodoTable(props) {
    return (_jsxs("table", __assign({ className: "table table-hover" }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", __assign({ scope: "col" }, { children: "#" })), _jsx("th", __assign({ scope: "col" }, { children: "Description" })), _jsx("th", __assign({ scope: "col" }, { children: "Assigned" }))] }) }), _jsx("tbody", { children: props.todos.map(function (todo) { return (_jsx(TodoRowItem, { rowNumber: todo.rowNumber, rowDescription: todo.rowDescription, rowAssigned: todo.rowAssigned }, todo.rowNumber)); }) })] })));
}
export default TodoTable;
//# sourceMappingURL=TodoTable.js.map