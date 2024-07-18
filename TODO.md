Backend API Endpoints

# Employer Management

- [x] `POST /api/employers`: Add a new employer
- [x] `GET /api/employers/:id`: Get employer details
- [x] `GET /api/employers/`: Get all employer details
- [x] `PUT /api/employers/:id`: Update employer details
- [x] `DELETE /api/employers/:id`: Delete employer

# Employee Management

- [x] `POST /api/employees`: Add a new employee
- [x] `GET /api/employees/:id`: Get employee details
- [x] `GET /api/employees/`: Get all employee details
- [x] `PUT /api/employees/:id`: Update employee details
- [x] `DELETE /api/employees/:id`: Delete employee

# Salary Slip Management

- `POST /api/salaryslips`: Generate a new salary slip
- `GET /api/salaryslips/:id`: Get salary slip details
- `GET /api/salaryslips?employeeId=:employeeId`: Get all salary slips for an employee
- `DELETE /api/salaryslips/:id`: Delete salary slip

# Authentication

- `POST /api/auth/login`: Login and get a JWT token
- `POST /api/auth/register`: Register a new user (HR)
