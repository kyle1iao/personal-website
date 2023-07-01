"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_voxel-dog_js",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voxel-dog-loader */ \"./components/voxel-dog-loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelDog = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const urlDogGLB = \"/treecut.glb\";\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: renderer } = refRenderer;\n        const { current: container } = refContainer;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container } = refContainer;\n        if (container) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n            const target = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0);\n            const initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI));\n            // 640 -> 240\n            // 8   -> 6\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, urlDogGLB, {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.ArtSpinner, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kylel\\\\Documents\\\\vscode\\\\personal-website\\\\components\\\\voxel-dog.js\",\n            lineNumber: 121,\n            columnNumber: 50\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kylel\\\\Documents\\\\vscode\\\\personal-website\\\\components\\\\voxel-dog.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelDog, \"zURt50pwc+mytDe3zC6SvtguxBo=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SXNCO29CQUM1Q2xCLE9BQU9FLFNBQVNrQixJQUNkSCxFQUFFRyxJQUFJekQsS0FBS21DLElBQUlvQixZQUFZRCxFQUFFdkQsSUFBSUMsS0FBS2lDLElBQUlzQjtvQkFDNUNsQixPQUFPSSxPQUFPWDtnQkFDaEIsT0FBTztvQkFDTGUsU0FBU2E7Z0JBQ1g7Z0JBRUEvQyxTQUFTZ0QsT0FBTy9CLE9BQU9TO1lBQ3pCO1lBRUEsT0FBTztnQkFDTHVCLHFCQUFxQlQ7Z0JBQ3JCeEMsU0FBU2dCLFdBQVdrQztnQkFDcEJsRCxTQUFTbUQ7WUFDWDtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUx4RSxnREFBU0EsQ0FBQztRQUNSZ0MsT0FBT3lDLGlCQUFpQixVQUFVdEQsb0JBQW9CO1FBQ3RELE9BQU87WUFDTGEsT0FBTzBDLG9CQUFvQixVQUFVdkQsb0JBQW9CO1FBQzNEO0lBQ0YsR0FBRztRQUFDQTtLQUFtQjtJQUV2QixxQkFDRSw4REFBQ1osMkRBQVlBO1FBQUNvRSxLQUFLN0Q7a0JBQWVDLHlCQUFXLDhEQUFDVCx5REFBVUE7Ozs7Ozs7Ozs7QUFFNUQ7R0FoSE1PO0tBQUFBO0FBa0hOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5pbXBvcnQgeyBBcnRTcGlubmVyLCBEb2dDb250YWluZXIgfSBmcm9tICcuL3ZveGVsLWRvZy1sb2FkZXInXHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XHJcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxyXG59XHJcblxyXG5jb25zdCBWb3hlbERvZyA9ICgpID0+IHtcclxuICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgcmVmUmVuZGVyZXIgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IHVybERvZ0dMQiA9ICcvdHJlZWN1dC5nbGInXHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudDogcmVuZGVyZXIgfSA9IHJlZlJlbmRlcmVyXHJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXHJcbiAgICBpZiAoY29udGFpbmVyICYmIHJlbmRlcmVyKSB7XHJcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgIGFscGhhOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICByZWZSZW5kZXJlci5jdXJyZW50ID0gcmVuZGVyZXJcclxuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxyXG5cclxuICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKVxyXG4gICAgICBjb25zdCBpbml0aWFsQ2FtZXJhUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxyXG4gICAgICAgIDEwLFxyXG4gICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgICAgKVxyXG5cclxuICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAvLyA4ICAgLT4gNlxyXG4gICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XHJcbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIC1zY2FsZSxcclxuICAgICAgICAwLjAxLFxyXG4gICAgICAgIDUwMDAwXHJcbiAgICAgIClcclxuICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuXHJcbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXHJcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcblxyXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcblxyXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCB1cmxEb2dHTEIsIHtcclxuICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcclxuICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBhbmltYXRlKClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IHJlcSA9IG51bGxcclxuICAgICAgbGV0IGZyYW1lID0gMFxyXG4gICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG5cclxuICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXHJcblxyXG4gICAgICAgIGlmIChmcmFtZSA8PSAxMDApIHtcclxuICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxyXG5cclxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcclxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID1cclxuICAgICAgICAgICAgcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9XHJcbiAgICAgICAgICAgIHAueiAqIE1hdGguY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXHJcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtoYW5kbGVXaW5kb3dSZXNpemVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERvZ0NvbnRhaW5lciByZWY9e3JlZkNvbnRhaW5lcn0+e2xvYWRpbmcgJiYgPEFydFNwaW5uZXIgLz59PC9Eb2dDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3hlbERvZ1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJBcnRTcGlubmVyIiwiRG9nQ29udGFpbmVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbERvZyIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmUmVuZGVyZXIiLCJ1cmxEb2dHTEIiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NlbmUiLCJTY2VuZSIsInRhcmdldCIsIlZlY3RvcjMiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJzaW4iLCJQSSIsImNvcyIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n"));

/***/ })

});