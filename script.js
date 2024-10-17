document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');
    const loadBtn = document.getElementById('loadBtn');
    const clearBtn = document.getElementById('clearBtn');

    let isEditing = false;

    editBtn.addEventListener('click', function() {
        isEditing = !isEditing;
        editor.readOnly = !isEditing;
        editor.style.backgroundColor = isEditing ? '#fff' : '#f0f0f0';
        editBtn.textContent = isEditing ? 'Done' : 'Edit';
        editBtn.style.backgroundColor = isEditing ? '#FFA500' : '#2196F3';
    });

    saveBtn.addEventListener('click', function() {
        const content = editor.value;
        localStorage.setItem('editorContent', content);
        alert('Content saved successfully!');
    });

    loadBtn.addEventListener('click', function() {
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            editor.value = savedContent;
            alert('Content loaded successfully!');
        } else {
            alert('No saved content found.');
        }
    });

    clearBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear the editor?')) {
            editor.value = '';
            alert('Editor cleared!');
        }
    });

    setInterval(function() {
        if (isEditing) {
            const content = editor.value;
            localStorage.setItem('editorContent', content);
            console.log('Content auto-saved');
        }
    }, 30000);

    window.addEventListener('load', function() {
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            editor.value = savedContent;
        }
    });
});