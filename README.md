# To-Do App - Technical Test 📝

## [Español](#prueba-técnica-mini-app-de-gestión-de-tareas-to-do-app)

---

## 📜 **Description**

Create a **task management mini-app** using **Vue 3 + TypeScript + Vite**, following **Atomic Design**, documenting components in **Storybook**, managing state with **Pinia** (or Vuex), and applying **POO in TypeScript**. The app should include unit tests (mandatory) and optionally E2E tests.

---

## 🚀 **Requirements**

- **Vue 3** with **TypeScript**.
- **Atomic Design** for component structure (atoms, molecules, organisms).
- **Pinia** or **Vuex** for state management.
- **POO** in TypeScript for modeling tasks.
- **Storybook** for component documentation.
- **Unit Tests** with **Vitest** or **Jest**.
- **E2E Tests** with **Cypress** or **Playwright** (optional).
- **Styling options** (free to choose tools like Tailwind, CSS Modules, SCSS, etc.).
- **Linter/Formatter** with **ESLint**, **Prettier**, and **Biome**.

---

## ✅ **Functionalities**

1. **List tasks** 📋  
   Each task should contain:
    - `id` (string)
    - `title` (string)
    - `description` (string)
    - `createdAt` (Date)
    - `completed` (boolean)

2. **Create task** ✍️  
   A form with basic validation to add new tasks.

3. **Mark/Unmark completed** ✅❌  
   Checkbox or button to toggle task completion.

4. **Edit task** ✏️  
   Allow editing the title and description.

5. **Delete task** 🗑️  
   Confirm before deleting the task.

---

## 🔧 **Technical Requirements**

### 1. **Atomic Design** 🔢

- **Atoms**: Button, Input, Checkbox, Badge, etc.
- **Molecules**: TaskForm, TaskItem, etc.
- **Organisms**: TaskList, Header, Footer, etc.
- **Templates/Pages**: Main layout with content area.

> Document components in **Storybook**, including controls (knobs) for variants (e.g., primary/secondary Button).

### 2. **State Management** 💾

- Use **Pinia** (or **Vuex**) for managing the task state.
- Create a store with actions for:
    - `addTask`, `updateTask`, `toggleComplete`, `removeTask`.
    - Getters to filter tasks (e.g., by completion status, task type).

### 3. **TypeScript** ⚙️

- Use **TypeScript** with `strict: true` in `tsconfig.json`.
- Create interfaces/Types for tasks, payloads, and store state.
- Use `<script setup lang="ts">` in components.

### 4. **Tests** 🧪

- **Mandatory**:
    - Write unit tests with **Vitest** or **Jest** for store actions and at least one component (TaskItem or TaskForm).

- **Recommended**:
    - Add an E2E test with **Cypress** or **Playwright**, validating the task creation and completion flow.

### 5. **Object-Oriented Programming (POO) with TypeScript** 🧑‍💻

- Create an abstract `Task` class and two subclasses (e.g., `UrgentTask`, `ScheduledTask`).
- Implement a static factory method that returns the appropriate class based on a `TaskType` enum.
- The components and store should correctly handle these classes using **type guards** and `instanceof`.

### 6. **UI/UX and Responsiveness** 📱💻

- Free to choose styling tools (e.g., Tailwind, CSS Modules, SCSS).
- Ensure **responsive** design (mobile-first).
- The UI should be visually consistent and accessible.

### 7. **Linter and Formatter** 🛠️

- Configure **ESLint**, **Prettier**, and **Biome** to ensure code quality and consistency.

---

## 📦 **Delivery**

- **Public Git repository** (GitHub/GitLab/Bitbucket).
- **README** with:
    - Installation: `npm install`
    - Development: `npm run dev`
    - Storybook: `npm run storybook`
    - Tests: `npm run test`
- Clear commits, e.g.,:
    - `feat: add TaskItem component`
    - `test: add unit tests for store actions`

---

## ⏱️ **Time Estimate**

The test should take around **4-6 hours** for someone experienced with Vue 3 + TypeScript, Storybook, and Pinia.

---

## 📊 **Evaluation Criteria**

We will evaluate the following aspects:
- **Code quality**: Readability, organization, and best practices.
- **Atomic Design**: Correct implementation and component structure.
- **State Management**: Proper use of Pinia/Vuex.
- **POO in TypeScript**: Design and implementation of classes and subclasses.
- **Tests**: Coverage and robustness of unit and E2E tests.
- **UI/UX**: Visual design and user experience.
- **Responsiveness**: The app should work correctly on different screen sizes.
- **Documentation**: Quality and clarity of the documentation and README.

---

## **Prueba Técnica: Mini-App de Gestión de Tareas (To-Do App)**

## [English](#to-do-app---technical-test)

---

## 📜 **Descripción**

Crea una **mini-app de gestión de tareas** utilizando **Vue 3 + TypeScript + Vite**, siguiendo el enfoque de **Atomic Design**, documentando los componentes en **Storybook**, gestionando el estado con **Pinia** (o Vuex) y aplicando **POO en TypeScript**. La aplicación debe incluir tests unitarios (obligatorios) y, opcionalmente, pruebas E2E.

---

## 🚀 **Requisitos**

- **Vue 3** con **TypeScript**.
- **Atomic Design** para la estructura de componentes (átomos, moléculas, organismos).
- **Pinia** o **Vuex** para la gestión del estado.
- **POO** en TypeScript para modelar las tareas.
- **Storybook** para la documentación de los componentes.
- **Tests unitarios** con **Vitest** o **Jest**.
- **Tests E2E** con **Cypress** o **Playwright** (opcional).
- **Herramientas de estilo** libres (puedes elegir Tailwind, CSS Modules, SCSS, etc.).
- **Linter/Formatter** con **ESLint**, **Prettier** y **Biome**.

---

## ✅ **Funcionalidades**

1. **Listar tareas** 📋  
   Cada tarea debe contener:
    - `id` (string)
    - `title` (string)
    - `description` (string)
    - `createdAt` (Date)
    - `completed` (boolean)

2. **Crear tarea** ✍️  
   Formulario con validación básica para añadir nuevas tareas.

3. **Marcar/Desmarcar completada** ✅❌  
   Checkbox o botón para cambiar el estado de la tarea.

4. **Editar tarea** ✏️  
   Permitir la edición del título y descripción.

5. **Eliminar tarea** 🗑️  
   Confirmación antes de eliminar la tarea.

---

## 🔧 **Requisitos Técnicos**

### 1. **Atomic Design** 🔢

- **Átomos**: Button, Input, Checkbox, Badge, etc.
- **Moléculas**: TaskForm, TaskItem, etc.
- **Organismos**: TaskList, Header, Footer, etc.
- **Templates/Pages**: Layout principal con zona de contenido.

> Documenta los componentes en **Storybook**, incluyendo controles (knobs) para variantes (por ejemplo, Button primario/secundario).

### 2. **State Management** 💾

- Usa **Pinia** (o **Vuex**) para gestionar el estado de las tareas.
- Crea un store con acciones para:
    - `addTask`, `updateTask`, `toggleComplete`, `removeTask`.
    - Getters para filtrar tareas (por ejemplo, por estado de completado, tipo de tarea).

### 3. **TypeScript** ⚙️

- Usa **TypeScript** con `strict: true` en `tsconfig.json`.
- Crea interfaces/Types para las tareas, payloads y estado del store.
- Usa `<script setup lang="ts">` en los componentes.

### 4. **Tests** 🧪

- **Obligatorios**:
    - Escribe tests unitarios con **Vitest** o **Jest** para las acciones del store y al menos un componente (TaskItem o TaskForm).

- **Recomendados**:
    - Añadir una prueba E2E con **Cypress** o **Playwright**, validando el flujo de creación y marca de tareas.

### 5. **Programación Orientada a Objetos (POO) con TypeScript** 🧑‍💻

- Crea una clase abstracta `Task` y dos subclases (por ejemplo, `UrgentTask`, `ScheduledTask`).
- Implementa un método estático o fábrica que devuelva la clase adecuada según un `enum` (por ejemplo, `TaskType`).
- Los componentes y el store deben manejar correctamente estas clases utilizando **type guards** y `instanceof`.

### 6. **UI/UX y Responsividad** 📱💻

- Estilos libres (elige herramientas como Tailwind, CSS Modules, SCSS).
- Asegúrate de que la app sea **responsive** (mobile-first).
- La UI debe ser visualmente coherente y accesible.

### 7. **Linter y Formatter** 🛠️

- Configura **ESLint**, **Prettier** y **Biome** para asegurar la calidad y consistencia del código.

---

## 📦 **Entrega**

- **Repositorio Git público** (GitHub/GitLab/Bitbucket).
- **README** con:
    - Instalación: `npm install`
    - Desarrollo: `npm run dev`
    - Storybook: `npm run storybook`
    - Tests: `npm run test`
- Realiza commits claros, como por ejemplo:
    - `feat: add TaskItem component`
    - `test: add unit tests for store actions`

---

## ⏱️ **Tiempo estimado**

Se estima que la prueba debería tomar entre **4-6 horas** si el candidato tiene experiencia en Vue 3 + TypeScript, Storybook y Pinia.

---

## 📊 **Criterios de Evaluación**

La evaluación se realizará en las siguientes áreas:
- **Calidad del código**: Legibilidad, organización y buenas prácticas.
- **Atomic Design**: Implementación y estructura correcta de los componentes.
- **State Management**: Uso adecuado de Pinia/Vuex.
- **POO en TypeScript**: Diseño e implementación de clases y subclases.
- **Tests**: Cobertura y robustez de los tests unitarios y E2E.
- **UI/UX**: Diseño visual y experiencia de usuario.
- **Responsividad**: La aplicación debe funcionar correctamente en distintos tamaños de pantalla.
- **Documentación**: Calidad y claridad de la documentación y README.

---

¡Buena suerte! 🍀
