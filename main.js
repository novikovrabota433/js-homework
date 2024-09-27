const onDataLoaded = (text) => {
    console.log(text);
     const lines = text.split('\n');
     const names = lines.shift().trim().split(', ');

     const items = lines.map(line => {
         const splitted = line.split(', ');
         const object = splitted.reduce((result, value, index) => ({
             ...result,
             [names[index]]: value
         }), {});
         console.log(object);
         return object;
    });
    console.log(items);


    const table = document.getElementById('data-table');
     items.forEach((item) => {
         table.insertAdjacentHTML('beforeend', `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.work}</td>
                    <td>${item.payd}</td>
                    <td>${item.boss}</td>
                </tr>
         `);
     });
}

document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
});




const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.csv', true);
xhr.onload = () => {
    onDataLoaded(xhr.responseText);
}
xhr.send(null);
