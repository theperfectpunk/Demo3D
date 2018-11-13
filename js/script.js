var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, innerHeight)
document.body.appendChild( renderer.domElement );

var cubeGeometry = new THREE.BoxGeometry(1,1,1);
var cubeMaterial = new THREE.MeshBasicMaterial({color: '#ff0066'});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);

var hollowCubeGeometry = new THREE.EdgesGeometry(cubeGeometry);
var hollowCubeMaterial = new THREE.LineBasicMaterial({color: '#ff0066'})
var hollowCube = new THREE.LineSegments(hollowCubeGeometry, hollowCubeMaterial);
var hollowCube2 = new THREE.LineSegments(hollowCubeGeometry, hollowCubeMaterial);
var hollowCube3 = new THREE.LineSegments(hollowCubeGeometry, hollowCubeMaterial);

scene.add(cube)
scene.add(cube2)
scene.add(hollowCube)
scene.add(hollowCube2)
scene.add(hollowCube3)

cube.position.x = 0;
cube.position.y = 0;

cube2.position.x = 2;
cube2.position.y = 2;

hollowCube.position.x = -2;
hollowCube.position.y = -2;

hollowCube2.position.x = -2;
hollowCube2.position.y = 2;

hollowCube3.position.x = 2;
hollowCube3.position.y = -2;

camera.position.z = 5;

function animate () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera )
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    hollowCube.rotation.x += 0.01;
    hollowCube.rotation.y += 0.01;
    hollowCube2.rotation.x += 0.01;
    hollowCube2.rotation.y += 0.01;
    hollowCube3.rotation.x += 0.01;
    hollowCube3.rotation.y += 0.01;
}

animate();

document.addEventListener("mousemove", function(event) {
    xCoord = event.clientX-window.innerWidth/2;
    yCoord = event.clientY-window.innerHeight/2;
    renderer.render( scene, camera )
    if(xCoord>0) {
        // cube.rotation.y +=0.1;
        cube2.rotation.y +=0.1;
        hollowCube.rotation.y +=0.1;
        // cube.position.x = -xCoord/250;
        cube2.position.x = xCoord/250+1.25;
        hollowCube.position.x = -xCoord/250
    }
    if(xCoord<0) {
        // cube.rotation.y -=0.1;
        cube2.rotation.y -=0.1;
        hollowCube.rotation.y -=0.1
        // cube.position.x = Math.abs(xCoord)/250;
        cube2.position.x = -Math.abs(xCoord)/250+1.25;
        hollowCube.position.x = Math.abs(xCoord)/250
    }

    if(yCoord>0) {
        // cube.rotation.x +=0.1;
        cube2.rotation.x +=0.1;
        hollowCube.rotation.x +=0.1
        // cube.position.y = -yCoord/250;
        cube2.position.y = yCoord/250+1.25;
        hollowCube.position.y = -yCoord/250
    }
    if(yCoord<0) {
        // cube.rotation.x -=0.1;
        cube2.rotation.x -=0.1;
        hollowCube.rotation.x -=0.1
        // cube.position.y = Math.abs(yCoord)/250;
        cube2.position.y = Math.abs(yCoord)/250+1.25;
        hollowCube.position.y = -Math.abs(yCoord)/250
    }

    console.log(event.clientY-window.innerHeight/2)
})

