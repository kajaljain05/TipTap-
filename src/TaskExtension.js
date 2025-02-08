// src/TaskExtension.js
import { Node, mergeAttributes } from '@tiptap/core';

const TaskExtension = Node.create({
  name: 'task',

  group: 'block',

  content: 'text*',

  defining: true,

  addAttributes() {
    return {
      checked: {
        default: false,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'li[data-type="task"]',
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    const checked = node.attrs.checked ? 'checked' : '';
    return [
      'li',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'task',
        class: 'task-item',
      }),
      `<input type="checkbox" ${checked} />`,
      node.content.size ? node.content : '',
    ];
  },

  addCommands() {
    return {
      toggleTaskCompletion: () => ({ commands }) => {
        return commands.updateAttributes('task', {
          checked: !this.editor.state.selection.$from.nodeAfter.attrs.checked,
        });
      },
    };
  },
});

export default TaskExtension;
