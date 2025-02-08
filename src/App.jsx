// src/App.jsx
import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import TaskExtension from './TaskExtension'; // Import custom TaskExtension

import './App.css'; // Import styles for tasks

function App() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TaskExtension, // Add the TaskExtension to the editor
    ],
    content: '<ul><li data-type="task"><input type="checkbox"/> My first task</li></ul>',
  });

  // Function to toggle task completion
  const toggleCompletion = () => {
    editor.chain().focus().toggleTaskCompletion().run();
  };

  return (
    <div className="App">
      <h1>Task Completion Tracker</h1>
      <div>
        <EditorContent editor={editor} />
        <button onClick={toggleCompletion}>Toggle Task Completion</button>
      </div>
    </div>
  );
}

export default App;
