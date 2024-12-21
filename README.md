# Task Management App

## Project Overview
The Task Management App is a simple React-based application that allows users to manage tasks. The main features include:

- Adding tasks
- Marking tasks as complete/incomplete
- Editing tasks by double-clicking
- Deleting tasks

The app utilizes Tailwind CSS for styling and manages state using React hooks and context.

---

## Folder Structure

The application has a modular structure for easier scalability and maintainability:

```
src/
├── components/
│   ├── TaskManager.jsx    # Main component for managing tasks
├── context/
│   ├── AppContext.js      # Context provider for global state management
├── styles/
│   ├── tailwind.css       # Tailwind CSS configuration
├── App.jsx                # Root component
├── index.js               # Entry point of the application
```

---

## Component Breakdown

### 1. **TaskManager Component**
- Responsible for rendering the task management interface.
- Features include:
  - **Task Input:** Add new tasks.
  - **Task List:** Display tasks in a numbered list.
  - **Edit Functionality:** Double-click a task to edit it.
  - **Complete/Undo:** Toggle task completion.
  - **Delete:** Remove tasks.

#### Key Methods:
- `addTask()`: Adds a new task to the list.
- `toggleComplete(index)`: Toggles the completed status of a task.
- `handleEdit(index)`: Enables editing mode for a task.
- `saveEdit(index)`: Saves the edited task.
- `deleteTask(index)`: Deletes a task from the list.

---

## Styling

Tailwind CSS is used for all the styling. The main styles include:

- **Task List:**
  - Numbered using the `<ol>` tag.
  - Strikethrough and gray text for completed tasks.
- **Buttons:**
  - Green button for `Complete`.
  - Red button for `Delete`.
- **Responsive Design:**
  - Uses utility classes like `flex`, `p-4`, and `bg-gray-100`.

---

## How to Run the App

1. Clone the repository:
   ```bash
   git clone https://github.com/xeen0/task-management.git
   cd task_management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:5173/`.

---

