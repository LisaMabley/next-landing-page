module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/ParticleBackground.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ParticleBackground": (()=>ParticleBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/Particles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/engine/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/engine/esm/Enums/Directions/MoveDirection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/engine/esm/Enums/Modes/OutMode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tsparticles/esm/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ParticleBackground = ()=>{
    const [init, setInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Should be run only once per application lifetime
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initParticlesEngine"])(async (engine)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadFull"])(engine);
        }).then(()=>{
            setInit(true);
        });
    }, []);
    const particlesLoaded = async (container)=>{
        console.log(container);
    };
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            background: {
                image: "url('/images/space.jpg')",
                color: {
                    value: "#ffffff"
                }
            },
            fpsLimit: 120,
            interactivity: {
                detect_on: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble"
                    }
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    bubble: {
                        distance: 100,
                        size: 40,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: "#ffffff",
                    distance: 90,
                    enable: true,
                    opacity: 0.25,
                    width: 1
                },
                move: {
                    direction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoveDirection"].none,
                    enable: true,
                    outModes: {
                        default: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OutMode"].out
                    },
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true
                    },
                    value: 190
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "polygon",
                    stroke: {
                        width: 0
                    },
                    polygon: {
                        nb_sides: 6
                    }
                },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        }), []);
    if (init) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            id: "tsparticles",
            particlesLoaded: particlesLoaded,
            options: options
        }, void 0, false, {
            fileName: "[project]/app/components/ParticleBackground.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__2270f63e._.js.map