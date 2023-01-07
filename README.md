# Clean Code
## Key Pain Point
1. Names
* Variables
* Functions
* Classes
2. Structure & Comment
* Code Formatting
* Good & Bad Comment
3. Functions
* Length
* Parameters
4. Conditions & Error Handling
* Deep Nesting
* Missing Error Handling
5. Classes & Data Structure
* Missing Distinction
* Bloated Classes
## Naming - Assigning Names to Variables, Functions, Classes
### Casing convention 
1. snake_case: tất cả các chữ cái đều viết thường, và các từ cách nhau bởi dấu gạch dưới.
```javascript
let is_valid
function send_response()
```
2. camelCase: ký tự đầu tiên của từ đầu tiên viết thường những ký tự đầu tiên của những từ tiếp theo được viết hoa.
```javascript
let isValid
function sendResponse()
```
3. PascalCase: Cú pháp Pascal viết hoa chữ cái đầu tiên của mỗi từ.
```javascript
class UserRepository {}
class UserEntity {}
```
4. kebab-case: Các từ của tên nối với nhau bởi ký hiệu gạch ngang - và các từ viết in thường (giống với snake case chỉ khác ký hiệu nối từ)
```html
<nav-header></nav-header>
<container-fluid></container-fluid>
```

### Naming Variables, Constants & Properties