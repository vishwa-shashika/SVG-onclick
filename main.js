const shapes = document.querySelector('.shapes');

for (let i = 0; i < shapes.children.length; i++) {
    const shape = document.getElementsByTagName('svg')[i];

    shape.childNodes[1].addEventListener('click', ()=>{
        document.querySelector('#shape_name').setAttribute("value", shape.id);
        document.querySelector('#shape_id').setAttribute("value", i.toString());
    })
}