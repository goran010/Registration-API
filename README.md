# Reservations API

Jednostavan REST API za upravljanje terminima i rezervacijama.  
Izgrađen s NestJS, PostgreSQL i Dockerom.

## 🛠 Tehnologije

- NestJS (TypeScript)
- PostgreSQL
- Docker + Docker Compose
- JWT autentikacija
- Bcrypt za hashiranje lozinki

🧪 How to Run It Locally:

git clone https://github.com/ime-korisnika/Reservations-API.git
cd Reservations-API

⚙️ 2. Set Up Environment Variables:


Endpoints:

Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login and get JWT token
GET	/reservations	List all reservations
POST	/reservations	Create a new reservation
