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
import { useState } from "react";
function NewTodoForm(props) {
    var _a = useState(''), description = _a[0], setDescription = _a[1];
    var _b = useState(''), assigned = _b[0], setAssigned = _b[1];
    var submitTodo = function () {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    };
    return (_jsx("div", __assign({ className: "mt-5" }, { children: _jsxs("form", { children: [_jsxs("div", __assign({ className: "mb-3" }, { children: [_jsx("label", __assign({ className: "form-label" }, { children: "Assigned" })), _jsx("input", { type: "text", className: "form-control", required: true, onChange: function (e) { return setAssigned(e.target.value); }, value: assigned })] })), _jsxs("div", __assign({ className: "mb-3" }, { children: [_jsx("label", __assign({ className: "form-label" }, { children: "Description" })), _jsx("textarea", { className: "form-control", rows: 3, required: true, onChange: function (e) { return setDescription(e.target.value); }, value: description })] })), _jsx("button", __assign({ type: "button", className: "btn btn-primary mt-3", onClick: submitTodo }, { children: "Add Todo" }))] }) })));
}
export default NewTodoForm;
//# sourceMappingURL=NewTodoForm.js.map