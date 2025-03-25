document.addEventListener('DOMContentLoaded', function() {
    const cube = document.getElementById('cube');

    // Check if the cube element exists
    if (!cube) {
        console.error('Cube element not found!');
        return;
    }

    let isMouseDown = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        startX = event.clientX;
        startY = event.clientY;
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    document.addEventListener('mousemove', (event) => {
        if (isMouseDown) {
            currentX = event.clientX - startX;
            currentY = event.clientY - startY;

            // Check if the cube element is valid before applying styles
            if (cube) {
                cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
            } else {
                console.error('Cube element is missing or not found during mouse move!');
            }
        }
    });
});
