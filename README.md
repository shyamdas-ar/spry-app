Read me to the spry app
04/08/2024

 Employee Information App
This application is created using visual studio code as angular frontend and backend typescript
This Angular application captures employee information and provides dynamic theming based on client selection.

 Features

1.Employee Information Form
2.First Name (Text Field)
3.Last Name (Text Field)
4.Email (Text Field with validation for email format)
5.Phone Number (Text Field with validation for phone number format)
6.Address (Textarea)
7.Position (Dropdown: 'Manager', 'Developer', 'Designer', 'HR')
8.Date of Joining (Date Picker)
9.Client Selection Dropdown
10.Available clients: 'Client A', 'Client B', 'Client C'

11.Dynamic Theming
12.Client A: Blue header and white background
13.Client B: Green header and light gray background
14.Client C: Red header and beige background


Project Structure
*src/app/app.component.ts: Main application component
*src/app/app.component.html: Main application template
*src/app/app.module.ts: Main application module
*src/app/employee-form/employee-form.component.ts: Employee form component logic
*src/app/employee-form/employee-form.component.html: Employee form template
*src/app/client-selector/client-selector.component.ts: Client selector component logic
*src/app/client-selector/client-selector.component.html: Client selector template
*src/app/header/header.component.ts: Header component logic
*src/app/header/header.component.html: Header template
*src/styles.css: Global styles including themes


Running the Application
*Start the development server: ng serve
*Open your browser and navigate to:  http://localhost:4200
