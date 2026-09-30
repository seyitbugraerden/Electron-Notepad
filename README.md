<div align="center">

# 📝 Note Mark

### Cross-platform Markdown note-taking desktop application built with Electron, React and TypeScript

A lightweight desktop notes application focused on **Markdown editing, local file architecture, desktop-native packaging and secure Electron process separation**.

<br />

![Electron](https://img.shields.io/badge/Electron-31-47848F?style=for-the-badge&logo=electron&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## About the Project

**Note Mark** is a cross-platform desktop note-taking application built with **Electron, React and TypeScript**.

The project explores a native desktop architecture with:

- Electron Main / Preload / Renderer separation
- Markdown editing
- Local filesystem integration
- Jotai-based application state
- Desktop packaging
- Secure Electron configuration
- Cross-platform builds

The application is designed around a two-column layout with a note list on the left and a Markdown editor on the right.

---

## Current Features

- Electron desktop application
- React-based renderer
- TypeScript
- Markdown editor
- Note preview sidebar
- New note creation
- Note deletion
- Note selection
- Selected note title
- Markdown headings
- Lists
- Blockquotes
- Markdown shortcuts
- Jotai state management
- Local `.md` file discovery architecture
- IPC handler architecture
- macOS vibrancy support
- Windows, macOS and Linux packaging
- ESLint and Prettier configuration
- Electron sandboxing
- Context isolation

---

## Application Layout

The interface follows a traditional desktop notes layout:

```text
┌──────────────────────────────────────────┐
│                                          │
│  Notes Sidebar      Markdown Editor      │
│                                          │
│  + New Note         Selected Note        │
│  - Delete Note      Title                │
│                                          │
│  Note 1             Markdown Content     │
│  Note 2                                  │
│  Note 3                                  │
│                                          │
└──────────────────────────────────────────┘
```

The renderer is split into reusable components instead of placing the full application logic inside a single component.

---

## Markdown Editor

The application uses:

```text
@mdxeditor/editor
```

for Markdown editing.

The current editor includes plugins for:

- Headings
- Lists
- Blockquotes
- Markdown shortcuts

Example configuration:

```tsx
<MDXEditor
  markdown={selectedNote.content}
  plugins={[
    headingsPlugin(),
    listsPlugin(),
    quotePlugin(),
    markdownShortcutPlugin()
  ]}
/>
```

The editor is styled with Tailwind Typography for a readable Markdown writing experience.

---

## State Management

Application state is managed with **Jotai**.

Current atoms include:

```text
notesAtom
selectedNoteIndexAtom
selectedNoteAtom
createEmptyNoteAtom
deleteNoteAtom
```

The selected note is derived from the note list and active index.

```text
Notes
  │
  ├── Selected Index
  │       │
  │       ▼
  └── Selected Note
```

---

## Note Creation

The New Note action creates a note using a generated title:

```text
Note 1
Note 2
Note 3
...
```

The new note is inserted at the start of the list and automatically becomes the active note.

---

## Note Deletion

The delete action removes the currently selected note from the application state.

If no note is selected, the action safely exits without modifying the note list.

---

## Local File Architecture

The Electron Main process contains filesystem utilities for discovering locally stored Markdown files.

The application uses:

```text
fs-extra
```

and stores notes under an application directory inside the user's home folder.

The root directory is resolved through:

```ts
homedir()
```

and the configured application directory name.

---

## Reading Local Notes

The local note layer:

1. Creates the note directory if it does not exist
2. Reads files inside the directory
3. Filters `.md` files
4. Reads file metadata
5. Returns note information

```text
User Home Directory
       │
       ▼
 Application Notes Folder
       │
       ├── note-one.md
       ├── note-two.md
       └── note-three.md
```

Each discovered note currently exposes:

```ts
{
  title,
  lastEditTime
}
```

---

## IPC Architecture

The Main process registers an IPC handler:

```ts
ipcMain.handle(
  "getNotes",
  (_, ...args) => getNotes(...args)
)
```

This creates the backend side of the renderer-to-main communication flow.

The intended architecture is:

```text
React Renderer
      │
      ▼
Preload / Context Bridge
      │
      ▼
Electron IPC
      │
      ▼
Main Process
      │
      ▼
Node.js Filesystem
```

---

## Security

The Electron window is configured with:

```ts
sandbox: true
contextIsolation: true
```

The preload layer also explicitly verifies that context isolation is active:

```ts
if (!process.contextIsolated) {
  throw new Error(
    "contextIsolation must be enabled in the BrowserWindow"
  )
}
```

This follows a safer Electron architecture by keeping Node.js APIs outside the renderer context.

---

## Current Development Status

The application's interface and core architecture are implemented, but local persistence is still **partially integrated**.

### Implemented

- Markdown editor
- Notes sidebar
- Create note action
- Delete note action
- Selected note state
- Main process filesystem utilities
- `.md` file discovery
- IPC handler for reading notes
- Secure preload architecture
- Cross-platform build configuration

### Still in Progress

The current renderer state initializes from:

```text
notesMock
```

rather than loading notes from the filesystem.

In addition, the Main process defines:

```text
getNotes
```

through IPC, but the Preload layer currently only exposes:

```ts
{
  locale: navigator.language
}
```

Therefore the renderer is not yet connected to the local filesystem through the preload bridge.

Note creation and deletion also currently update Jotai state only and do not yet persist those operations to `.md` files.

---

## Desktop Window Configuration

The main application window currently uses:

```text
Width: 900
Height: 670
Resizable: Yes
Minimizable: Yes
Maximizable: Yes
Fullscreenable: Yes
Opacity: 0.95
```

On macOS, the application additionally enables:

```text
under-window vibrancy
```

for a more native desktop appearance.

---

## External Links

New windows are intercepted by Electron:

```ts
mainWindow.webContents.setWindowOpenHandler(...)
```

External URLs are opened using the operating system browser through:

```ts
shell.openExternal(...)
```

rather than creating uncontrolled Electron windows.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| **Electron 31** | Desktop runtime |
| **React 18** | Renderer UI |
| **TypeScript 5.5** | Type safety |
| **Electron Vite 2** | Electron build tooling |
| **Vite 5** | Renderer bundling |
| **Jotai 2** | State management |
| **MDXEditor 3** | Markdown editor |
| **Tailwind CSS 3.4** | Styling |
| **Tailwind Typography** | Markdown typography |
| **fs-extra** | Local filesystem operations |
| **Electron Builder** | Desktop packaging |
| **React Icons** | UI icons |
| **ESLint** | Code quality |
| **Prettier** | Code formatting |

---

## Process Architecture

Electron applications consist of multiple isolated environments.

Note Mark follows this structure:

```text
┌─────────────────────────────┐
│        Main Process         │
│                             │
│ BrowserWindow               │
│ Filesystem                  │
│ IPC Handlers                │
└──────────────┬──────────────┘
               │
               │ IPC
               ▼
┌─────────────────────────────┐
│          Preload            │
│                             │
│ Context Bridge              │
│ Secure API Boundary         │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│         Renderer            │
│                             │
│ React                       │
│ Jotai                       │
│ MDXEditor                   │
│ Tailwind CSS                │
└─────────────────────────────┘
```

---

## Project Structure

```text
Electron-Notepad/
│
├── build/
│   ├── entitlements.mac.plist
│   ├── icon.icns
│   ├── icon.ico
│   └── icon.png
│
├── resources/
│   └── icon.png
│
├── src/
│   ├── main/
│   │   ├── lib/
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── preload/
│   │   ├── index.d.ts
│   │   └── index.ts
│   │
│   ├── renderer/
│   │   ├── index.html
│   │   └── src/
│   │       ├── components/
│   │       │   ├── Button/
│   │       │   ├── ActionButtonsRow.tsx
│   │       │   ├── AppLayout.tsx
│   │       │   ├── FloatingNotetitle.tsx
│   │       │   ├── MarkDownEditor.tsx
│   │       │   ├── NotePreview.tsx
│   │       │   └── NotePreviewList.tsx
│   │       │
│   │       ├── hooks/
│   │       ├── store/
│   │       ├── utils/
│   │       ├── App.tsx
│   │       └── main.tsx
│   │
│   └── shared/
│       ├── constants.ts
│       ├── models.ts
│       └── types.ts
│
├── electron-builder.yml
├── electron.vite.config.ts
├── tailwind.config.js
├── package.json
└── tsconfig.json
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/seyitbugraerden/Electron-Notepad.git
```

Navigate into the project:

```bash
cd Electron-Notepad
```

Install dependencies:

```bash
npm install
```

Start the development environment:

```bash
npm run dev
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts Electron using Electron Vite development mode.

### Preview

```bash
npm start
```

Runs the Electron Vite preview build.

### Type Check

```bash
npm run typecheck
```

Checks both Node and renderer TypeScript projects.

### Lint

```bash
npm run lint
```

Runs ESLint and automatically applies supported fixes.

### Format

```bash
npm run format
```

Formats the project using Prettier.

---

## Production Build

Build the application:

```bash
npm run build
```

---

## Windows Build

```bash
npm run build:win
```

Electron Builder generates a Windows installer using NSIS.

The configured executable name is:

```text
note-mark
```

---

## macOS Build

```bash
npm run build:mac
```

The repository includes:

```text
icon.icns
entitlements.mac.plist
```

for macOS packaging.

---

## Linux Build

```bash
npm run build:linux
```

Configured Linux targets include:

```text
AppImage
Snap
Deb
```

---

## Cross-Platform Packaging

The Electron Builder configuration supports:

| Platform | Output |
| --- | --- |
| **Windows** | NSIS Installer |
| **macOS** | macOS application / DMG |
| **Linux** | AppImage |
| **Linux** | Snap |
| **Linux** | DEB |

---

## Development Roadmap

Natural next steps for the application include:

- Expose filesystem methods through the preload bridge
- Replace mock note data with filesystem data
- Persist newly created notes
- Persist note deletion
- Save Markdown content automatically
- Rename notes
- Add debounced autosave
- Add search
- Add keyboard shortcuts
- Add note sorting
- Add recent notes
- Add pinned notes
- Add light / dark themes
- Add export functionality
- Add confirmation before destructive actions
- Add filesystem error states
- Add automated tests
- Improve accessibility

---

## Security Improvements

The current project already uses:

```text
Sandbox
Context Isolation
Preload Layer
```

A production version should continue limiting renderer access by exposing only narrowly scoped APIs through `contextBridge`.

For example:

```text
getNotes()
readNote()
writeNote()
deleteNote()
```

rather than exposing Node.js or Electron APIs directly.

---

## Developer

<div align="center">

### Seyit Buğra Erden

**Full Stack Developer · Software Engineer**

[GitHub](https://github.com/seyitbugraerden) ·
[LinkedIn](https://www.linkedin.com/in/sbugraerden/)

<br />

Built with **Electron · React · TypeScript · Jotai · MDXEditor**

</div>
