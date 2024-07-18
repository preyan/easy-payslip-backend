Backend API Endpoints

# Employer Management

- `POST /api/employers`: Add a new employer
- `GET /api/employers/:id`: Get employer details
- `PUT /api/employers/:id`: Update employer details

# Employee Management

- `POST /api/employees`: Add a new employee
- `GET /api/employees/:id`: Get employee details
- `PUT /api/employees/:id`: Update employee details

# Salary Slip Management

- `POST /api/salaryslips`: Generate a new salary slip
- `GET /api/salaryslips/:id`: Get salary slip details
- `GET /api/salaryslips?employeeId=:employeeId`: Get all salary slips for an employee

# Authentication

- `POST /api/auth/login`: Login and get a JWT token
- `POST /api/auth/register`: Register a new user (HR)
