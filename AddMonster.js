export default function createAddMonster(root, { handleAddMonster }) {
    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        handleAddMonster(data.get('name'));
    });
    return () => { };
}
