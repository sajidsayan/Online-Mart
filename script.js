let i = 0

function handleClick(){
    document.getElementById('clickBtn').textContent = `Count: ${i}`;
    i++;
}

function handleMouseOver(){
    document.getElementById('hoverBtn').classList.replace('bg-green-500', 'bg-red-500')
    document.getElementById('hoverBtn').innerText = 'I am on Focus';
}

function handleMouseout(){
    document.getElementById('hoverBtn').classList.replace('bg-red-500', 'bg-green-500')
    document.getElementById('hoverBtn').innerText = 'Hover Me';
}
