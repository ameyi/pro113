function setup(){
    canvas = createCanvas(2000, 2000)
    canvas.position(110, 250)
    video = createCapture(VIDEO)  
    video.hide()
    filter_color = ""
}
function draw(){
    fill(0, 100, 255)
    stroke(0, 100, 255)
    rect(0, 20, 1000, 1000)

    fill(100, 0, 0)
    stroke(255, 0, 0)
    circle(1000, 1000, 100, 100)

    fill(100, 0, 0)
    stroke(255, 0, 0)
    circle(50, 1000, 100, 100)

    fill(100, 0, 0)
    stroke(255, 0, 0)
    circle(950, 50, 100, 100)

    fill(100, 0, 0)
    stroke(255, 0, 0)
    circle(50, 50, 100, 100)

    image(video, 300, 400, 640, 480)
    tint(filter_color)

    image(video, 300, 400, 620, 460)
    tint(filter_color)

    image(video,300, 400, 620, 460)
    tint(filter_color)

    image(video, 300, 400, 600, 440)
    tint(filter_color)

    image(video, 300, 400, 580, 420)
    tint(filter_color)

    image(video,300, 400, 560, 400)
    tint(filter_color)

    image(video, 300, 400, 540, 380)
    tint(filter_color)

    image(video, 300, 400, 520, 360)
    tint(filter_color)
}
function take_snapshot(){
    save('ameya.png')
}
function filtercolor(){
    filter_color = document.getElementById("color_name").value;
}