# Auth2.0 🔐

Proyecto completo de autenticación OAuth 2.0 con Google, manejo de JWT, pruebas con Jest/Cypress y despliegue con CI/CD en GitHub Actions.

---

## 📁 Estructura de Carpetas

```
auth2.0/
├── backend/
│   ├── app.js
│   ├── database.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── auth/
│   │   └── passport.js
│   ├── tests/
│   │   └── auth.test.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   └── PrivateRoute.js
│   │   └── __tests__/
│   │       └── Login.test.js
│   ├── cypress/
│   │   └── e2e/
│   │       └── auth.cy.js
│   └── package.json
└── .github/
    └── workflows/
        └── ci-cd.yml
```

---

## 🔐 Autenticación

### Backend

- Autenticación con Google OAuth 2.0 usando Passport.js (`auth/passport.js`)
- Usuarios almacenados en MongoDB Atlas (`models/User.js`)
- Tokens generados con JWT (`jsonwebtoken`)
- Middleware protege rutas (`middleware/auth.js`)

### Frontend

- Login con Google redirige al backend (`components/Login.js`)
- El token JWT se guarda en `localStorage`
- `PrivateRoute.js` protege las rutas del frontend
- `App.js` define las rutas principales con React Router

---

## 🧪 Pruebas

### Backend

- **Jest** + **Supertest** para probar rutas protegidas (`tests/auth.test.js`)

### Frontend

- **Testing Library** para componentes React (`__tests__/Login.test.js`)
- **Cypress** para pruebas E2E (`cypress/e2e/auth.cy.js`)

---

## ⚙️ CI/CD con GitHub Actions

- Ruta: `.github/workflows/ci-cd.yml`
- Instala dependencias en frontend y backend
- Ejecuta pruebas unitarias (Jest + React)
- Ejecuta pruebas E2E con Cypress

Ideal para integración continua con Vercel y Render.

---

## 🗄️ Variables de Entorno

Archivo: `backend/.env`

```
MONGO_URI=mongodb://localhost:27017/auth
JWT_SECRET=miclaveultrasecreta
CLIENT_URL=http://localhost:3000
GOOGLE_CLIENT_ID=<tu-client-id>
GOOGLE_CLIENT_SECRET=<tu-client-secret>
```

---

## 🚀 Siguientes pasos

- [ ] Configurar credenciales en Google Cloud Console (OAuth)
- [ ] Crear cluster en MongoDB Atlas (producción)
- [ ] Subir proyecto a GitHub
- [ ] Conectar frontend a Vercel
- [ ] Conectar backend a Render
- [ ] Agregar control de roles si se requiere

---

## 🧠 Tecnologías utilizadas

- **Node.js / Express**
- **MongoDB / Mongoose**
- **Passport.js (OAuth 2.0)**
- **React / React Router**
- **JWT**
- **Jest / Cypress / Testing Library**
- **GitHub Actions**

---

## 📦 Instalación Rápida

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd ../frontend
npm install
npm start
```

---

## ✅ Listo para desarrollo y despliegue