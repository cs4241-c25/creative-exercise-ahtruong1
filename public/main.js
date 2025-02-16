document.addEventListener("DOMContentLoaded", drawSquidGameCard);

function drawSquidGameCard() {
    // Grab HTML elements from homepage
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    // Define the card's left dimension
    const LEFT_MARGIN = 200;
    const TOP_MARGIN = 160;

    // Define the dimensions of each shape
    const WIDTH = 180, HEIGHT = 180;
    const HALF_WIDTH = WIDTH / 2;
    const GAP = 20;

    // Draw Circle
    context.beginPath();
    context.arc(LEFT_MARGIN + HALF_WIDTH, TOP_MARGIN + (HEIGHT / 2), HALF_WIDTH, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = "#730f2b";
    context.fill();
    context.closePath();

    // Draw Triangle
    context.beginPath();
    context.moveTo(LEFT_MARGIN + WIDTH + GAP, TOP_MARGIN + HEIGHT);
    context.lineTo(LEFT_MARGIN + WIDTH + GAP + HALF_WIDTH, TOP_MARGIN);
    context.lineTo(LEFT_MARGIN + WIDTH + GAP + WIDTH, TOP_MARGIN + HEIGHT);
    context.lineTo(LEFT_MARGIN + WIDTH + GAP, TOP_MARGIN + HEIGHT);
    context.stroke();
    const gradient = context.createRadialGradient(
        LEFT_MARGIN + WIDTH + GAP + HALF_WIDTH, TOP_MARGIN + HALF_WIDTH, 40,
        LEFT_MARGIN + WIDTH + GAP + HALF_WIDTH, TOP_MARGIN + HALF_WIDTH, 180
    );
    gradient.addColorStop(0, "#ed1a76");
    gradient.addColorStop(1, "#FFFFFF");
    context.fillStyle = gradient;
    context.fill();
    context.closePath();

    // Draw Square
    context.beginPath();
    context.moveTo(LEFT_MARGIN + (2 * (WIDTH + GAP)), TOP_MARGIN);
    context.lineTo(LEFT_MARGIN + (2 * (WIDTH + GAP)) + WIDTH, TOP_MARGIN);
    context.lineTo(LEFT_MARGIN + (2 * (WIDTH + GAP)) + WIDTH, TOP_MARGIN + HEIGHT);
    context.lineTo(LEFT_MARGIN + (2 * (WIDTH + GAP)), TOP_MARGIN + HEIGHT);
    context.lineTo(LEFT_MARGIN + (2 * (WIDTH + GAP)), TOP_MARGIN);
    context.stroke();
    context.fillStyle = "#249e9c";
    context.fill();
    context.closePath();
}