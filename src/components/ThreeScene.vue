<template>
    <div ref="sceneContainer" style="width: 100%; height: 100vh;"></div>
</template>

<script>
import * as THREE from 'three';
import { onMounted, ref } from 'vue';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
export default {
    setup() {
        const sceneContainer = ref(null);

        onMounted(() => {
            // 在这里初始化 Three.js 场景
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            // 调整相机位置，使其更适合 H5
            camera.position.z = 8;

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            sceneContainer.value.appendChild(renderer.domElement);

            // 创建爱心形状 - 减小尺寸以适配 H5
            const heartShape = new THREE.Shape();
            heartShape.moveTo(0, 0);
            // 调整 bezierCurveTo 参数减小心形大小
            heartShape.bezierCurveTo(1.5, -2.25, 2.25, -3, 0, -4.5);
            heartShape.bezierCurveTo(-2.25, -3, -1.5, -2.25, 0, 0);

            // 创建爱心几何体
            const geometry = new THREE.ShapeGeometry(heartShape);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const heart = new THREE.Mesh(geometry, material);
            heart.position.set(0, 0, 0);
            scene.add(heart);

            // 创建粒子几何体
            const particleGeometry = new THREE.BufferGeometry();
            const particleCount = 500;
            const positions = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 10;
                positions[i3 + 1] = (Math.random() - 0.5) * 10;
                positions[i3 + 2] = (Math.random() - 0.5) * 10;
            }

            particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            // 创建粒子材质
            const particleMaterial = new THREE.PointsMaterial({
                color: 0xff69b4,
                size: 0.1
            });

            // 创建粒子系统
            const particles = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particles);


            // 渲染循环
            const animate = () => {
                requestAnimationFrame(animate);
                heart.rotation.x += 0.01;
                heart.rotation.y += 0.01;
                const positions = particles.geometry.attributes.position.array;
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    positions[i3 + 1] -= 0.01;
                    if (positions[i3 + 1] < -5) {
                        positions[i3 + 1] = 5;
                    }
                }
                particles.geometry.attributes.position.needsUpdate = true;

                renderer.render(scene, camera);


            };
            animate();


            const loader = new FontLoader();
            loader.load('/helvetiker_regular.typeface.json', function (font) {
                // 第一行文字
                // const textGeometry1 = new TextGeometry('情人节快乐，', {
                //     font: font,
                //     size: 0.3,
                //     height: 0.07
                // });
                
                // const textMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffffff });
                // const textMesh1 = new THREE.Mesh(textGeometry1, textMaterial1);
                // textMesh1.position.set(-1.0, 1.8, 0.2);
                // scene.add(textMesh1);
                
                // 第二行文字
                // const textGeometry2 = new TextGeometry('我爱你！', {
                //     font: font,
                //     size: 0.3,
                //     height: 0.7
                // });
                
                // const textMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
                // const textMesh2 = new THREE.Mesh(textGeometry2, textMaterial2);
                // textMesh2.position.set(-0.6, 1.4, 0.3);
                // scene.add(textMesh2);
            });
            
        });

        return {
            sceneContainer
        };
    }
};
</script>