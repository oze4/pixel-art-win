canvas.addEventListener("wheel", function (event) {
    event.preventDefault(); // Prevent default zoom behavior

    // Determine the direction of the zoom based on the scroll direction
    let zoomDirection = event.deltaY < 0 ? 1 : -1;

    // Calculate the zoom factor
    let zoomDelta = zoomDirection * zoomFactor;

    // Update the zoom level
    zoomLevel += zoomDelta;

    // Ensure zoom level is within reasonable bounds (optional)
    zoomLevel = Math.max(0.1, zoomLevel); // Adjust as needed

    // console.log("zoomDelta" + zoomDelta);
    // console.log("zoomLevel" + zoomLevel);
    console.log("zoomDirection" + zoomDirection);
    // Get mouse position relative to canvas
    let boundingRect = canvas.getBoundingClientRect();
    mouseX = event.clientX - boundingRect.left;
    mouseY = event.clientY - boundingRect.top;

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // // Save the current transformation matrix
    // ctx.save();

    // Translate the canvas origin to the mouse position
    ctx.translate(mouseX, mouseY);

    // Scale the canvas context
    let customZoomValue = 1 + zoomDirection * zoomFactor;
    let prevZoom = currentZoom;
    currentZoom += zoomDirection * zoomFactor;

    if (zoomDirection == 1 && currentZoom < 2) {
        ctx.scale(customZoomValue, customZoomValue);
    } else if (zoomDirection == -1 && currentZoom > 1) {
        ctx.scale(customZoomValue, customZoomValue);
    } else {
        currentZoom = prevZoom;
    }

    console.log("currentZoom:  " + currentZoom);

    // Translate back to the inverse of the mouse position
    ctx.translate(-mouseX, -mouseY);

    // Draw your content
    // Example:
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 50, 50);

    // // Restore the saved transformation matrix
    // ctx.restore();
});
