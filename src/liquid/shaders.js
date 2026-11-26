export const vert = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

/**
 * Genie / z1han liquid lens — glass on TOP & BOTTOM.
 * Interior of the SDF stays clear; only the rim melts + disperses.
 * Params match bravohenry/genie-liquid-slider (rf/dp/colSt).
 */
export const frag = /* glsl */ `
uniform vec2 resolution;
uniform float rf, dp, colSt, zm;
uniform vec3 col;
uniform sampler2D tex;
varying vec2 vUv;

vec4 a(float x, vec2 y, vec2 z, vec2 w) {
  vec2 q = mix(vec2(0.), normalize(y) / x, length(y));
  vec2 r = q * (rf - .5);
  vec2 s = (z - w) / mix(1., zm, .5) + w;
  vec4 t = vec4(0., 0., 0., 1.);
  t.r = texture2D(tex, clamp(s + r * mix(.01, .008, dp), 0., 1.)).r;
  t.g = texture2D(tex, clamp(s + r * mix(.01, .01, dp), 0., 1.)).g;
  t.b = texture2D(tex, clamp(s + r * mix(.01, .02, dp), 0., 1.)).b;
  return vec4(t.rgb + (col / (-x * 35.)) * colSt, smoothstep(0., .003, -x));
}

void main() {
  vec2 x = vUv;
  vec4 y = texture2D(tex, x);
  vec2 p = x * resolution;
  vec2 q = vec2(.5) * resolution;
  vec2 r = p - q;
  // Vertical glass: capsule much wider than screen, slightly taller → rim at top/bottom
  vec2 s = vec2(resolution.x * 1.25, resolution.y * 0.525);
  float t = 72.;
  vec2 u = abs(r) - s + t;
  float v = length(max(u, 0.)) + min(max(u.x, u.y), 0.) - t;
  float w = fwidth(v);
  float A = smoothstep(w, -w, v);
  vec2 B = r / s;
  float C = v / min(s.x, s.y);
  float D = .0245;

  vec4 E = vec4(0.0);
  E += a(C, B, x, vec2(.5)) * .20;
  E += a(C, B + vec2( D,  0.0), x, vec2(.5)) * .10;
  E += a(C, B + vec2(-D,  0.0), x, vec2(.5)) * .10;
  E += a(C, B + vec2(0.0,  D), x, vec2(.5)) * .10;
  E += a(C, B + vec2(0.0, -D), x, vec2(.5)) * .10;
  E += a(C, B + vec2( D,  D) * .707, x, vec2(.5)) * .08;
  E += a(C, B + vec2(-D,  D) * .707, x, vec2(.5)) * .08;
  E += a(C, B + vec2( D, -D) * .707, x, vec2(.5)) * .08;
  E += a(C, B + vec2(-D, -D) * .707, x, vec2(.5)) * .08;
  E += a(C, B + vec2( D * 1.55,  D * .35), x, vec2(.5)) * .04;
  E += a(C, B + vec2(-D * 1.55, -D * .35), x, vec2(.5)) * .04;

  y = vec4(mix(y.rgb, E.rgb, E.a * A), 1.);
  gl_FragColor = y;
}`;

export const cardVert = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

export const cardFrag = /* glsl */ `
uniform sampler2D tex;
uniform vec2 ns;
uniform vec2 ps;
varying vec2 vUv;

vec2 coverUV(vec2 uv, vec2 ns, vec2 ps) {
  vec2 tu = uv - vec2(0.5);
  float pa = ps.x / ps.y;
  float ta = ns.x / ns.y;
  if (pa < ta) tu = tu * vec2(pa / ta, 1.);
  else tu = tu * vec2(1., ta / pa);
  return tu + vec2(0.5);
}

float sdRound(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r;
}

void main() {
  vec2 uv = (vUv - 0.5) * ps;
  // Match z1han soft round (~18–22px feel)
  float rad = min(ps.x, ps.y) * 0.045;
  float d = sdRound(uv, ps * 0.5, rad);
  vec2 c = coverUV(vUv, ns, ps);
  vec4 t = texture2D(tex, clamp(c, 0., 1.));
  gl_FragColor = vec4(t.rgb, t.a * smoothstep(1., 0., d));
}`;
