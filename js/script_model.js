

if ( WEBGL.isWebGLAvailable() === false ) {
    document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
// var container, stats, controls;
var container;
var camera, scene, renderer, light;
init();
function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set( 1, 0, 3 )
    // controls = new THREE.OrbitControls( camera );
    // controls.target.set( 0, - 0.2, - 0.2 );
    // controls.update();
    // envmap
    scene = new THREE.Scene();
    scene.background = '#000000'
    light = new THREE.HemisphereLight( 0xbbbbff, 0x444422 );
    light.position.set( 0, 1, 0 );
    scene.add( light );
    // model
    var loader = new THREE.GLTFLoader();

    var gltfStore = {}

    loader.load( './assets/models/Wolf.glb', function ( gltf ) {
        scene.add( gltf.scene );
        gltfStore.animations = gltf.animations;
        gltfStore.mixer = new THREE.AnimationMixer(camera)

        gltfStore.mixer.clipAction(gltfStore.animations[1]).play();

        console.log(gltfStore)
    }, undefined, function ( e ) {
        console.error( e );
    } );
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.gammaOutput = true;
    container.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
    animate(gltfStore);
    // stats
    // stats = new Stats();
    // container.appendChild( stats.dom );
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
//
function animate() {
    requestAnimationFrame( animate );
    gltfStore.mixer.update(clock.getdelta())
    renderer.render( scene, camera );
    // stats.update();
}