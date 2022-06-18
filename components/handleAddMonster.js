export default function createAddMonster(root, { handleAddMonster }) {
    const form = root.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get('name');
        handleAddMonster(name);
        form.reset();
    });
    return () => { };
}
