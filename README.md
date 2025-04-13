# CRUD de Municipios y Provincias

Este proyecto es una Single Page Application (SPA) para registrar las necesidades de los municipios, organizados por provincias. Está desarrollado con **Vue.js 3 (Vite)** en el frontend y **Node.js + Express + PostgreSQL** en el backend.

Repositorio: https://github.com/dewrygabrielp/crud-municipios

---

## Tecnologías utilizadas

- Frontend: Vue 3 + Vite + Axios
- Backend: Node.js + Express
- Base de datos: PostgreSQL (local)
- Estilos: Tailwind CSS (CDN)

---

## Requisitos previos

- Node.js y npm instalados
- PostgreSQL instalado y corriendo localmente
- Git

---

## Estructura del proyecto

```
crud-municipios/
├── backend/            # Express + PostgreSQL
│   ├── db.js
│   ├── index.js
│   ├── routes/
│   │   ├── provincias.js
│   │   ├── municipios.js
│   │   └── peticiones.js
│   └── sql/
│       └── provincias_municipios.sql
└── frontend/           # SPA en Vue 3 (Vite)
    ├── src/
    │   ├── App.vue
    │   └── main.js
    └── index.html
```

---

## Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/dewrygabrielp/crud-municipios.git
cd crud-municipios
```

---

### 2. Configurar la base de datos local

1. Crear la base de datos:

```bash
sudo -u postgres createdb crud_municipios
```

2. Cargar estructura y datos:

```bash
sudo -u postgres psql crud_municipios < backend/sql/provincias_municipios.sql
```

---

### 3. Instalar y correr el backend

```bash
cd backend
npm install
node index.js
```

El backend se levantará en `http://localhost:3000`

---

### 4. Instalar y correr el frontend

```bash
cd ../frontend
npm install
npm run dev
```

El frontend se abrirá en `http://localhost:5173`

---

## Endpoints principales del backend

| Método | Ruta                              | Descripción                            |
| ------ | --------------------------------- | -------------------------------------- |
| GET    | `/api/provincias`                 | Lista todas las provincias             |
| GET    | `/api/municipios?provincia_id=ID` | Lista municipios por provincia         |
| GET    | `/api/peticiones`                 | Lista todas las peticiones registradas |
| POST   | `/api/peticiones`                 | Crea una nueva petición                |
| DELETE | `/api/peticiones/:id`             | Elimina una petición                   |

---

## Autor

Proyecto creado por Gabriel Peña como parte de una prueba técnica.

---

## Estado del proyecto

Funcional y listo para ser usado en entorno local. Puede ser adaptado para despliegue en producción usando Render (backend) y Neon o Supabase (base de datos).
