// Status lines shown while the page gets ready. Add or remove any; one is picked at random.
const words = [
  "Compiling…",
  "Hydrating…",
  "Bootstrapping…",
  "Reticulating splines…",
  "Resolving dependencies…",
  "Syncing Gradle…",
  "Recomposing…",
  "Tree-shaking…",
  "Warming the cache…",
  "Linking binaries…",
  "Collecting garbage…",
  "Shenaniganing…",
];

// Runs in <head> before paint: shows the splash, then lifts it once fonts are ready.
// It stays at least 700ms so it never flickers, and never longer than 2.5s.
// The word lives in a CSS variable so React's markup never changes before hydration.
export const splashScript = `(function(){var d=document.documentElement,w=${JSON.stringify(words)},i=-1,t0=Date.now(),show=function(){var j;do j=Math.floor(Math.random()*w.length);while(j===i&&w.length>1);i=j;d.style.setProperty("--splash",JSON.stringify(w[i]))},tick,done=function(){clearInterval(tick);d.classList.remove("is-loading")};show();tick=setInterval(show,500);d.classList.add("is-loading");setTimeout(done,2500);var go=function(){(document.fonts?document.fonts.ready:Promise.resolve()).then(function(){setTimeout(done,Math.max(0,700-(Date.now()-t0)))})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",go):go()})()`;

export function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <span />
    </div>
  );
}
