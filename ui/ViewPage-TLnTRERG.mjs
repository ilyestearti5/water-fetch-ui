import { j as o, a as z, F as W, E as R, L as it, d as dt, S as Te, b as Le, I as ie, e as qt, Q as Vt, J as Oe } from "./Loading-BpV9p4sz.mjs";
import * as ge from "react";
import g from "react";
import { u as j, a as K, b as k, ad as xe, h as ut, Q as ft, c as ce, r as I, ae as mt, af as ze, d as Z, ag as We, m as vt, ah as Jt, ai as _t, aj as er, ak as Ne, al as Ae, am as tr, an as rr, G as Ce, ao as nr, f as G, ap as Ke, q as V, aq as sr, g as qe, e as ee, N as or, o as lr, ac as oe, ar, i as cr, as as pt, x as gt, at as ir, I as me, a8 as dr, R as ur, au as Ve, av as fr, aw as mr, ax as vr, ay as pr, az as gr, aA as le, aB as Ar, v as hr } from "./index-a0LPp_Jl.mjs";
import { a2 as Qe, t as N, p as se, e as de, m as Re, r as yr, a3 as Je, a4 as At, a5 as ht, a6 as br, x as xr, w as yt, j as wr, k as Pr, i as He, s as ye, n as $e, S as be, a7 as bt, l as kr, a8 as Ue, a9 as xt, aa as zr, ab as wt, ac as Ee, ad as Nr, ae as Cr, h as Pt, af as Er, J as Mr, y as Br, P as kt, ag as Fr, ah as Sr, ai as jr, aj as Or, ak as Dr, al as Ir, am as Tr, an as Lr, ao as Qr, ap as Rr, aq as _e } from "./index-CxQCU1i7.mjs";
const Hr = "data:audio/wav;base64,UklGRsgsAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YaQsAADz/4P/qP6y/dn8NPzG+4n7ePuN+8X7HvyZ/DT98P3L/sf/4wAeAnkD9ASOBkoIJAodDDcObxDHEjwVqBeIGX8amRoRGhgZzhdOFqAUzBLZEMQOkQxACs0HPAWOAr//1fzJ+aP2W/P373Ls0egP5S7hM90a2ezUNNFzzinNZs3Rzg3R2NP/1m3aCt7V4cXl0ukA7lHyvfZN+/v/xASvCbUO2RMgGYYeBiSqKWcvSTU/O+FAU0V7SONJU0klR9NDuT8QOwU2uzA0K4Ulpx+rGYUTRQ3eBl4AuPnz8hTsFOXr3avWQ8+4xxPASLissEiqfKUaoo2gTqEUpF+otq3Rs2y6cMG2yD/Q+NfV39jnCfBd+MwAZQkYEvUa6yMNLUY2qz8pSdJSU1xbZGdqzW7Lcb9yDHESbVtnaWCSWAxQCUexPQc0JyoEILwVPwujANH11uq/33bUE8mGvcix46VbmpuQMomrgwCAAIAAgACAN4VYjNWURp5yqDazXb7nybvVwuEP7oL6JAf/EwchLS6NOwpJvlZ+ZEhxh3v/f/9//3//f/9//3//f/9/iXZaay9fL1KeRIE2CSgtGRQKp/r66iHbD8u4ujyq0JlYiwCAAIAAgACAAIAAgACAAIAAgACAAIAAgGKBPpbQq9TBVdgT7xAGWR3NNFBMC2Sze/9//3//f/9//3//f/9//3//f/9//3//f/9/0H53afBSojusIxkLGvLe2EO/gKV0jQCAAIAAgACAAIAAgACAAIAAgACAAIAAgACASI9opJK6s9F16doBnxreM0xN22RIeP9//3//f/9//3//f/9//3//f/9//39NdZ9gL0pSMjoZUP+M5OHJVLLknm2PJoMAgACAAIAAgACAAIAAgACA/oD0kVWlu7q70fHpMwNEHcs1hUohWxJoMXLcecZ//3//f/9//3/Mf/FzK2QhUXY7kyPzCXrw+dlfxzi426vYodWZNJPojXuJC4fiiOGPaZvQqmu9pdL06RQC4hcAKoQ4JEQxTVVUuFndXclg3GJNYvdceVJxQ5wwFhtLBjf0E+Wh2EnO5MUAvzS5ZbSEsIitFq6vs1C+QM2l35HyGwPZEP4bzyS6Ky0xXjVjOKA6+DvwO483+S1eIJcSbwYT/F3zMuxB5jXhG92d2bLWZ9Rw09/WYt9o6sH0dP2BBAUKVQ59EdITSxU7FoAWbRbiFMgQRwxECNAE8QGE/5j98fu2+qP56vg/+B74OPm7+ur7i/ys/Fv8tPvB+m759/cu9kL0FvSS90z8/wA0Be0IPgwnD80RGhQoFhAYqBe1EmkL1gO5/Cb2DvBW6gbl7d9K2yzZw9wL5kXyK/7bCFYSsBoSIo0oFS5WMFAsDCLoE2MF7Pe266Dgf9ZwzZzHH8g3z43c/u2C/5oP6h2eKsI1Sj02PtQ35Sp8GKAEs/F/4OfQBcRcvSu++8Um1O3nLP6PE+YmozeoQsxFIUFFNQsjBgzy82ndLcrcvcq5ib1uyKnZUPAZCtsiCjcSQ0VGVkH+NDIikgkz7orVvsTWvGS9osW/1N7pOQSBH/gzST+EQXw7+S3mGRoAIuWn0DvFpMI6yBzViOg2AScaXy2uN/U47jFyI48OFfeK4ZTSI8w7zifY/uis/bQRuiKmLA0uDieoGKsGD/Vm5Z7avtcU3Zbp/PjBB9gUvh6VIVwcFxGcBPP4dO7G5nzlmOs79cL+MgPlA+oI1RAMGoUjLij4I7IWOgMI8CbkPuJC6jT7oA+NHrcj+BpdB3P4IfQY++0LkB0dJk8jcRUSAZXxxuxS8xsDvBNaHLQZ0wwZ/Mzvgu3R9X0DEBD4FGUP7QMt+EzxAPSx/BsG6wzMC0MF/P0Q+Bb4d/xSATsFiAVCA8oA2P5i/rD+sf5m/hb/8gBYA1oFrgOs//D6H/hP+4kBMwg9CtIEUvza9BX1Jf2bB9YNHQoo/zD0W/El+VUGGQ8YDfEA+vP475f3KAZNDygNPwCE84PwMvkkB0sOBQpw/Yfz7vPI/aoIZQuABI76uvUW+jgC2AeqBZ//UfrY+r/+jwIBAwsBEf+O/tb+4v47/48AZgJzArz/Cvyw+xQAgQXdBfL/Kfkq+bwASwhFBx7+wPZs+eUDSwqTBVz6vvWa/DQHMQlsAJf3xPheAoAIUQRy+8f4qv5uBc4EBf9W+/P9RwL9ApsAg/68/nb//f+6AIsBTQCP/TP92QAYBEYBk/tD+64B5QXdAL35SPu6AzwGp/66+HP9ewU7BPv7CfrXABgFmwA3+079UwIlAoX+m/17/54AbAAaABf/Gf7g/2gCWgBb/Cj+VwMEAu/7x/yQA0cDJ/wY/CUDTQO//Kj8gQJoApj99/2eATcB7P4f/wMAbwCkACz/LP7cAOAB5/3I/cECYgFa/KD/uAP//s/8EwICAl/9K/8HAqn/mv4tAHsAFQAr/y3/NQH6/4797gCKASH9o/9vAtn9jf5RAhD/iv6BAer//P4YAEAA3f/r/oUAzgAY/qwAHAGJ/dsA4ADY/RQBSwCh/nkA7/9T/37/cQB0/zf/TAGa/ggAKQEy/iMB9P8+/+4Anv/D/0UACgAY//MAJv/3/78Al/4qARj/+/8vAHv/AwBcAEH/tQCS/w4AkQA5/wsBK/+OAMX/2/9NAKX/NQDt/67/TQA9/2kAQP88AJr/0f8NAFr/cwBR/7oAWf+CAI7/MwDs//P/9v/V/8v/7/+p/wEA4f/Q/xsAiP8PAKz/q//l/5//xv/O/9b/sv8xAKP/ZADs/y4AzP9IAO7/9f9CALv/DQDA/xYAtv/D/yoA2P8TAN3/9/8WAKb//v/p/9L/BwDj/wkAPwASADkAQQAFACgAMQD+/xYAEwDX/+P////c/9v/AADq/+T/AgAUAOv/2v/y//r/2//P/+L/6v/n/9z/5f/u/+X/0//F/8H/xP/J/7r/rP+g/5z/ov+s/7H/r/+t/6r/qP+j/5v/nv+h/6H/q/+z/7j/t/+x/7H/tP+x/6n/pP+b/5L/lP+U/5D/lv+U/4r/if+B/3//fP9//4H/g/+G/3r/df90/3f/ev+D/4z/iv+T/5j/mP+g/67/sv+0/6b/n/+h/5b/lP+a/5f/lv+c/5b/k/+M/4T/iP+E/4X/jf+N/43/j/+N/5D/jP+H/37/f/9+/3v/h/+S/47/iv+I/4T/hP+B/4D/gf+G/4r/i/+H/4H/fP92/3L/bf9r/3b/ff+B/4T/h/+K/43/iP9//3P/a/9j/1v/VP9M/0L/Pf85/0H/Sv9O/1P/WP9c/17/XP9b/1r/WP9P/0T/PP83/zL/Lf8p/yP/H/8b/xb/Df8C///+/v78/vz++/76/vn++P4B/wv/Ef8X/xz/If8m/yv/MP80/zj/NP8v/yr/Jf8g/xv/F/8S/w7/Cv8F/wL/Av8G/wv/Ef8W/xv/IP8k/yn/Lv8y/zf/O/8//0P/R/9L/0//Uv9W/1n/Xf9g/2P/Zv9q/23/cP9y/3X/eP97/33/gP+C/4X/h/+K/4z/jv+Q/5L/lP+W/5j/mv+c/57/oP+i/6P/pf+n/6j/qv+s/63/r/+w/7H/s/+0/7b/t/+4/7n/u/+8/73/vv+//8D/wf/C/8P/xP/F/8b/x//I/8n/yv/L/8z/zf/N/87/z//Q/9D/0f/S/9P/0//U/9X/1f/W/9b/1//Y/9j/2f/Z/9r/2//b/9z/3P/d/93/3v/e/97/3//f/+D/4P/h/+H/4f/i/+L/4//j/+P/5P/k/+T/5f/l/+X/5v/m/+b/5//n/+f/6P/o/+j/6P/p/+n/6f/p/+r/6v/q/+r/6//r/+v/6//r/+z/7P/s/+z/7P/t/+3/7f/t/+3/7v/u/+7/7v/u/+7/7//v/+//7//v/+//7//w//D/8P/w//D/8P/w//D/8f/x//H/8f/x//H/8f/x//L/8v/y//L/8v/y//L/8v/y//L/8//z//P/8//z//P/8//z//P/8//z//P/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/7//j/9P/w/+3/6//p/+f/5v/m/+b/5//o/+n/6//u//H/9P/4//3/AQAFAAkADAAOABAAEgATABQAFAAUABMAEAALAAUA///5//P/7f/o/+P/3//b/9n/2P/Y/9j/2v/c/9//5P/p/+7/9P/5////BAAKAA8AFAAZABwAHwAhACIAIgAhACAAHQAaABYAEQAMAAcAAgD9//j/8//u/+n/5f/i/9//3f/c/9z/3f/e/+D/4//n/+z/8P/1//r///8DAAgADAARABUAGAAbAB0AHgAeAB4AHAAaABgAFAAQAAwACAADAP//+//2//L/7v/q/+f/5P/i/+H/4P/g/+H/4//l/+j/6//v//T/+P/8/wAABAAIAAwADwATABYAGAAZABoAGgAaABkAFwAUABEADgAKAAYAAgD+//r/9//z/+//7P/p/+b/5f/k/+P/4//k/+b/6P/r/+7/8v/1//n//f8AAAQACAALAA8AEgAUABYAFwAYABgAFwAWABQAEQAOAAsABwAEAAAA/f/5//b/8v/v/+z/6f/o/+b/5v/m/+b/5//p/+v/7v/y//X/+f/8/wAAAwAGAAoADQAQABIAFAAVABUAFQAVABMAEgAPAAwACQAGAAIA///7//j/9P/x/+7/7P/q/+n/6P/o/+j/6f/r/+z/7//y//X/+f/8/wAAAwAHAAoADQAPABEAEgATABMAEwASABEADwAMAAkABgADAP//+//4//X/8v/v/+3/7P/r/+r/6v/r/+z/7f/v//L/9f/4//z///8DAAYACQAMAA4AEAARABEAEQAQAA8ADgAMAAkABgADAP//+//4//X/8v/w/+7/7f/s/+z/7f/t/+//8P/z//b/+f/8/wAABAAHAAkACwANAA4ADwAPAA4ADQAMAAoACAAFAAEA/v/6//f/9P/y//H/8P/v/+//7//w//H/8//1//j/+//+/wIABQAHAAkACwAMAAwADAALAAoACQAHAAQAAQD+//v/+f/2//T/8//y//L/8v/y//P/9f/3//n//P/+/wEAAwAGAAcACAAJAAkACQAIAAYABQACAAAA/v/8//n/+P/2//X/9f/1//X/9v/3//n/+//9////AQACAAQABQAGAAYABQAFAAMAAgAAAP///f/8//r/+f/4//j/+P/4//n/+//8//3//v///wAAAQACAAIAAgACAAEAAAAAAP///v/+//3//P/8//v/+//8//z//f/9//3//v/+//7////////////////////////////////////+//7//v/+//3//f/9//z//P/8//z//f/9//7//////wAAAAABAAEAAQAAAP///v/9//z/+//7//r/+v/7//z//f/+/wAAAQACAAIAAgACAAEA///+//z/+//6//r/+v/6//z//f///wEAAgACAAMAAgABAAAA/v/8//v/+v/6//r/+//8//7/AAABAAIAAgACAAEA///+//z/+//7//v/+//8//3///8AAAEAAQABAAAA///+//3//P/8//z//f/9//7///8AAAAAAAD//////v/+//3//f/9//7//v/+//7//v/+//7//v////////////7//v/+//3//f/9//3//v//////AAAAAP///v/+//3//P/8//3//v///wAAAAAAAP///v/9//z//P/9//7///8AAAAAAAD///7//f/8//z//f/+////AAAAAP///v/9//3//f/9//7////////////+//7//v/+//7//v/+///////+//7//v/+//7//v/+//7//v/+//////////7//v/9//3//v////////////7//f/9//3//v///wAA///+//3//f/9//7//////////v/9//3//v////////////7//v/+//7//////////v/+//7//v/+//7//v/////////+//7//v/+//////////7//v/+//7//////////v/+//7//////////v/+//7//v///////v/+//7//v///////v/+//7//v/+//7//v////7//v/+//7///////7//v/+//7///////7//v/+///////+//7//v/////////+//7//v///////v/+//7//v/+//7//v/+//7//v///////v/+//7///////7//v///////v/+//7///////7//v/+/////v/+//7///////7//v/+//7////+//7//v///////v/+//7////+//7//v////7//v/+/////v/+//7////+//7//v////7//v/+//7////+//7//v////7//v///////v/+/////v/+///////+//7////+//7//v/+/////v/+/////v/+///////+//7////+//7////+//7////+//7//v////7//v///////v///////v///////v///////v////7//v/+/////v/+/////v/+/////v////7//v////7//v////7//v/+//7//v////7//v/+//7////+/////v/+/////v/+/////v/+//7//v////7////+//7//v/+//7//v/+/////v////7////+//7//v/+//7//v/+//7////+/////v/+//7//v/+//7////+/////v////7////+/////v/+//7////+/////v////7//v/+/////v////7//v////7//v/+//7//v////7//v////7////+/////v/+/////v/+//////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
function os({ hidden: e, animted: r, className: t, style: n, children: i, onLoadContent: l, onTransitionEnd: c, ...a }) {
  const d = j(), v = typeof r == "boolean" ? r : K("preferences/animation.boolean"), p = k(e);
  return g.useEffect(() => {
    e || p.set(!1);
  }, [e]), xe(async () => {
    p.get && l && (await Qe(100), l());
  }, [p.get, l]), /* @__PURE__ */ o(
    "div",
    {
      className: N(
        "fixed inset-0 bg-opacity-40 flex justify-center items-center z-[100000000000000000]",
        v && "transition-[transform] duration-700",
        !e && "translate-y-0",
        e && "translate-y-full pointer-events-none",
        t
      ),
      style: {
        ...d({
          background: ut("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...n
      },
      onTransitionEnd: (f) => {
        p.set(e), c == null || c(f);
      },
      ...a,
      children: !p.get && i
    }
  );
}
function $r({ className: e, animted: r, style: t, hidden: n, onLoadContent: i, children: l, onTransitionEnd: c, ...a }) {
  const d = j(), v = k(n);
  g.useEffect(() => {
    n || v.set(!1);
  }, [n]);
  const p = g.useRef(null), f = typeof r == "boolean" ? r : K("preferences/animation.boolean");
  return xe(async () => {
    v.get && i && (await Qe(100), i());
  }, [v.get, i]), /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      className: N(
        "fixed inset-0 bg-opacity-40 flex justify-center items-center z-[100000000000000000]",
        f && "transition-[opacity,transform] duration-300",
        n && "pointer-events-none opacity-0 transform scale-110",
        !n && "opacity-100",
        e
      ),
      onTransitionEnd: (A) => {
        v.set(n), c == null || c(A);
      },
      style: {
        ...d("black.opacity"),
        ...t
      },
      ...a,
      children: !v.get && l
    }
  );
}
function zt({ className: e, alt: r, src: t, children: n, style: i, ...l }) {
  const c = j(), a = k(!1);
  return g.useEffect(() => {
  }, []), /* @__PURE__ */ z(
    "div",
    {
      tabIndex: -1,
      ...l,
      className: N("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", e),
      style: {
        ...c(a.get && { borderColor: "primary" }),
        ...i
      },
      onFocus: () => {
        a.set(!0);
      },
      onBlur: () => {
        a.set(!1);
      },
      children: [
        t && /* @__PURE__ */ o("img", { src: t, className: N("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !t && /* @__PURE__ */ o("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: r }),
        /* @__PURE__ */ o("div", { className: "absolute inset-0 overflow-hidden", children: n })
      ]
    }
  );
}
const ue = ({ icon: e, iconClassName: r }) => e ? /* @__PURE__ */ o(W, { icon: e, className: N("pointer-events-none", r) }) : /* @__PURE__ */ o(R, {});
function Nt({ state: e, config: r = {}, id: t }) {
  const n = g.useMemo(() => typeof e.get == "boolean" ? e.get : !1, [e.get]);
  g.useEffect(() => () => {
    l.set(!1);
  }, []);
  const i = j(), l = k(!1);
  return /* @__PURE__ */ z("span", { className: "inline-flex items-center gap-1", children: [
    r.style == "checkbox" ? /* @__PURE__ */ o(
      "button",
      {
        onClick: () => {
          e.set((c) => !c);
        },
        onFocus: () => {
          l.set(!0);
        },
        onBlur: () => {
          l.set(!1);
        },
        id: t,
        style: {
          ...i(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            l.get && { outlineColor: "primary" }
          )
        },
        className: N(`
            inline-flex
            w-[20px]
            h-[20px]
            items-center
            justify-center
            rounded-md
            border-solid
            border
            border-transparent
            outline-1
            -outline-offset-1
            outline-transparent
          `),
        children: /* @__PURE__ */ o(
          ue,
          {
            iconClassName: N(
              `
              transform
              transition-transform
              duration-300
              scale-0
            `,
              n && "scale-100"
            ),
            icon: se
          }
        )
      }
    ) : /* @__PURE__ */ o(
      "button",
      {
        id: t,
        onFocus: () => l.set(!0),
        onBlur: () => l.set(!1),
        onClick: () => {
          e.set((c) => !c);
        },
        type: "button",
        className: N(`
            inline-block
            w-[40px]
            h-[20px]
            relative
            rounded-full
            shadow-lg
            border-solid
            border
            border-transparent
          `),
        style: {
          ...i(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            l.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ o(
          "span",
          {
            className: N("absolute left-0 inline-flex items-center justify-center top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] rounded-full duration-300 text-white", n && "left-1/2"),
            style: {
              ...i(n && "checkbox.true", !n && "checkbox.false")
            },
            children: /* @__PURE__ */ o(W, { icon: n ? se : de })
          }
        )
      }
    ),
    /* @__PURE__ */ o("label", { htmlFor: t, children: (n ? r == null ? void 0 : r.onActive : r == null ? void 0 : r.onDisactive) || "" })
  ] });
}
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ne.apply(this, arguments);
}
const Ur = ["children", "options"];
var et, tt;
(function(e) {
  e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33";
})(et || (et = {})), function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(tt || (tt = {}));
const rt = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), { for: "htmlFor" }), nt = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Xr = ["style", "script"], Gr = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Yr = /mailto:/i, Zr = /\n{2,}$/, Ct = /^(\s*>[\s\S]*?)(?=\n{2,})/, Wr = /^ *> ?/gm, Kr = /^ {2,}\n/, qr = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Et = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, Mt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, Vr = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Jr = /^(?:\n *)*\n/, _r = /\r\n?/g, en = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, tn = /^\[\^([^\]]+)]/, rn = /\f/g, nn = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, sn = /^\s*?\[(x|\s)\]/, Bt = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Ft = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, St = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, De = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, on = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, jt = /^<!--[\s\S]*?(?:-->)/, ln = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, Ie = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, an = /^\{.*\}$/, cn = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, dn = /^<([^ >]+@[^ >]+)>/, un = /^<([^ >]+:\/[^ >]+)>/, fn = /-([a-z])?/gi, Ot = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, mn = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, vn = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, pn = /^\[([^\]]*)\] ?\[([^\]]*)\]/, gn = /(\[|\])/g, An = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, hn = /\t/g, yn = /(^ *\||\| *$)/g, bn = /^ *:-+: *$/, xn = /^ *:-+ *$/, wn = /^ *-+: *$/, we = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", Pn = new RegExp(`^([*_])\\1${we}\\1\\1(?!\\1)`), kn = new RegExp(`^([*_])${we}\\1(?!\\1|\\w)`), zn = new RegExp(`^==${we}==`), Nn = new RegExp(`^~~${we}~~`), Cn = /^\\([^0-9A-Za-z\s])/, En = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, Mn = /^\n+/, Bn = /^([ \t]*)/, Fn = /\\([^\\])/g, st = / *\n+$/, Sn = /(?:^|\n)( *)$/, Xe = "(?:\\d+\\.)", Ge = "(?:[*+-])";
function Dt(e) {
  return "( *)(" + (e === 1 ? Xe : Ge) + ") +";
}
const It = Dt(1), Tt = Dt(2);
function Lt(e) {
  return new RegExp("^" + (e === 1 ? It : Tt));
}
const jn = Lt(1), On = Lt(2);
function Qt(e) {
  return new RegExp("^" + (e === 1 ? It : Tt) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? Xe : Ge) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Rt = Qt(1), Ht = Qt(2);
function $t(e) {
  const r = e === 1 ? Xe : Ge;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const Ut = $t(1), Xt = $t(2);
function ot(e, r) {
  const t = r === 1, n = t ? Ut : Xt, i = t ? Rt : Ht, l = t ? jn : On;
  return { match(c, a, d) {
    const v = Sn.exec(d);
    return v && (a.list || !a.inline && !a.simple) ? n.exec(c = v[1] + c) : null;
  }, order: 1, parse(c, a, d) {
    const v = t ? +c[2] : void 0, p = c[0].replace(Zr, `
`).match(i);
    let f = !1;
    return { items: p.map(function(A, s) {
      const m = l.exec(A)[0].length, u = new RegExp("^ {1," + m + "}", "gm"), y = A.replace(u, "").replace(l, ""), b = s === p.length - 1, h = y.indexOf(`

`) !== -1 || b && f;
      f = h;
      const C = d.inline, w = d.list;
      let B;
      d.list = !0, h ? (d.inline = !1, B = y.replace(st, `

`)) : (d.inline = !0, B = y.replace(st, ""));
      const M = a(B, d);
      return d.inline = C, d.list = w, M;
    }), ordered: t, start: v };
  }, render: (c, a, d) => e(c.ordered ? "ol" : "ul", { key: d.key, start: c.type === "20" ? c.start : void 0 }, c.items.map(function(v, p) {
    return e("li", { key: p }, a(v, d));
  })) };
}
const Dn = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), In = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Gt = [Ct, Et, Mt, Bt, St, Ft, jt, Ot, Rt, Ut, Ht, Xt], Tn = [...Gt, /^[^\n]+(?:  \n|\n{2,})/, De, Ie];
function Ln(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Qn(e) {
  return wn.test(e) ? "right" : bn.test(e) ? "center" : xn.test(e) ? "left" : null;
}
function lt(e, r, t, n) {
  const i = t.inTable;
  t.inTable = !0;
  let l = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((a, d) => (d.trim() === "|" ? a.push(n ? { type: "26" } : { type: "27", text: d }) : d !== "" && a.push.apply(a, r(d, t)), a), []);
  t.inTable = i;
  let c = [[]];
  return l.forEach(function(a, d) {
    a.type === "26" ? d !== 0 && d !== l.length - 1 && c.push([]) : (a.type !== "27" || l[d + 1] != null && l[d + 1].type !== "26" || (a.text = a.text.trimEnd()), c[c.length - 1].push(a));
  }), c;
}
function Rn(e, r, t) {
  t.inline = !0;
  const n = e[2] ? e[2].replace(yn, "").split("|").map(Qn) : [], i = e[3] ? function(c, a, d) {
    return c.trim().split(`
`).map(function(v) {
      return lt(v, a, d, !0);
    });
  }(e[3], r, t) : [], l = lt(e[1], r, t, !!i.length);
  return t.inline = !1, i.length ? { align: n, cells: i, header: l, type: "25" } : { children: l, type: "21" };
}
function at(e, r) {
  return e.align[r] == null ? {} : { textAlign: e.align[r] };
}
function J(e) {
  return function(r, t) {
    return t.inline ? e.exec(r) : null;
  };
}
function _(e) {
  return function(r, t) {
    return t.inline || t.simple ? e.exec(r) : null;
  };
}
function q(e) {
  return function(r, t) {
    return t.inline || t.simple ? null : e.exec(r);
  };
}
function fe(e) {
  return function(r) {
    return e.exec(r);
  };
}
function Hn(e, r, t) {
  if (r.inline || r.simple || t && !t.endsWith(`
`)) return null;
  let n = "";
  e.split(`
`).every((l) => !Gt.some((c) => c.test(l)) && (n += l + `
`, l.trim()));
  const i = n.trimEnd();
  return i == "" ? null : [n, i];
}
function ae(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return;
  } catch {
    return null;
  }
  return e;
}
function ct(e) {
  return e.replace(Fn, "$1");
}
function he(e, r, t) {
  const n = t.inline || !1, i = t.simple || !1;
  t.inline = !0, t.simple = !0;
  const l = e(r, t);
  return t.inline = n, t.simple = i, l;
}
function $n(e, r, t) {
  const n = t.inline || !1, i = t.simple || !1;
  t.inline = !1, t.simple = !0;
  const l = e(r, t);
  return t.inline = n, t.simple = i, l;
}
function Un(e, r, t) {
  const n = t.inline || !1;
  t.inline = !1;
  const i = e(r, t);
  return t.inline = n, i;
}
const Me = (e, r, t) => ({ children: he(r, e[1], t) });
function Be() {
  return {};
}
function Fe() {
  return null;
}
function Xn(...e) {
  return e.filter(Boolean).join(" ");
}
function Se(e, r, t) {
  let n = e;
  const i = r.split(".");
  for (; i.length && (n = n[i[0]], n !== void 0); ) i.shift();
  return n || t;
}
function Gn(e = "", r = {}) {
  r.overrides = r.overrides || {}, r.slugify = r.slugify || Ln, r.namedCodesToUnicode = r.namedCodesToUnicode ? ne({}, nt, r.namedCodesToUnicode) : nt;
  const t = r.createElement || ge.createElement;
  function n(s, m, ...u) {
    const y = Se(r.overrides, `${s}.props`, {});
    return t(function(b, h) {
      const C = Se(h, b);
      return C ? typeof C == "function" || typeof C == "object" && "render" in C ? C : Se(h, `${b}.component`, b) : b;
    }(s, r.overrides), ne({}, m, y, { className: Xn(m == null ? void 0 : m.className, y.className) || void 0 }), ...u);
  }
  function i(s) {
    s = s.replace(nn, "");
    let m = !1;
    r.forceInline ? m = !0 : r.forceBlock || (m = An.test(s) === !1);
    const u = p(v(m ? s : `${s.trimEnd().replace(Mn, "")}

`, { inline: m }));
    for (; typeof u[u.length - 1] == "string" && !u[u.length - 1].trim(); ) u.pop();
    if (r.wrapper === null) return u;
    const y = r.wrapper || (m ? "span" : "div");
    let b;
    if (u.length > 1 || r.forceWrapper) b = u;
    else {
      if (u.length === 1) return b = u[0], typeof b == "string" ? n("span", { key: "outer" }, b) : b;
      b = null;
    }
    return ge.createElement(y, { key: "outer" }, b);
  }
  function l(s) {
    const m = s.match(Gr);
    return m ? m.reduce(function(u, y, b) {
      const h = y.indexOf("=");
      if (h !== -1) {
        const C = function(x) {
          return x.indexOf("-") !== -1 && x.match(ln) === null && (x = x.replace(fn, function(E, O) {
            return O.toUpperCase();
          })), x;
        }(y.slice(0, h)).trim(), w = function(x) {
          const E = x[0];
          return (E === '"' || E === "'") && x.length >= 2 && x[x.length - 1] === E ? x.slice(1, -1) : x;
        }(y.slice(h + 1).trim()), B = rt[C] || C, M = u[B] = function(x, E) {
          return x === "style" ? E.split(/;\s?/).reduce(function(O, D) {
            const U = D.slice(0, D.indexOf(":"));
            return O[U.trim().replace(/(-[a-z])/g, (P) => P[1].toUpperCase())] = D.slice(U.length + 1).trim(), O;
          }, {}) : x === "href" || x === "src" ? ae(E) : (E.match(an) && (E = E.slice(1, E.length - 1)), E === "true" || E !== "false" && E);
        }(C, w);
        typeof M == "string" && (De.test(M) || Ie.test(M)) && (u[B] = ge.cloneElement(i(M.trim()), { key: b }));
      } else y !== "style" && (u[rt[y] || y] = !0);
      return u;
    }, {}) : null;
  }
  const c = [], a = {}, d = { 0: { match: q(Ct), order: 1, parse: (s, m, u) => ({ children: m(s[0].replace(Wr, ""), u) }), render: (s, m, u) => n("blockquote", { key: u.key }, m(s.children, u)) }, 1: { match: fe(Kr), order: 1, parse: Be, render: (s, m, u) => n("br", { key: u.key }) }, 2: { match: q(qr), order: 1, parse: Be, render: (s, m, u) => n("hr", { key: u.key }) }, 3: { match: q(Mt), order: 0, parse: (s) => ({ lang: void 0, text: s[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (s, m, u) => n("pre", { key: u.key }, n("code", ne({}, s.attrs, { className: s.lang ? `lang-${s.lang}` : "" }), s.text)) }, 4: { match: q(Et), order: 0, parse: (s) => ({ attrs: l(s[3] || ""), lang: s[2] || void 0, text: s[4], type: "3" }) }, 5: { match: _(Vr), order: 3, parse: (s) => ({ text: s[2] }), render: (s, m, u) => n("code", { key: u.key }, s.text) }, 6: { match: q(en), order: 0, parse: (s) => (c.push({ footnote: s[2], identifier: s[1] }), {}), render: Fe }, 7: { match: J(tn), order: 1, parse: (s) => ({ target: `#${r.slugify(s[1])}`, text: s[1] }), render: (s, m, u) => n("a", { key: u.key, href: ae(s.target) }, n("sup", { key: u.key }, s.text)) }, 8: { match: J(sn), order: 1, parse: (s) => ({ completed: s[1].toLowerCase() === "x" }), render: (s, m, u) => n("input", { checked: s.completed, key: u.key, readOnly: !0, type: "checkbox" }) }, 9: { match: q(r.enforceAtxHeadings ? Ft : Bt), order: 1, parse: (s, m, u) => ({ children: he(m, s[2], u), id: r.slugify(s[2]), level: s[1].length }), render: (s, m, u) => n(`h${s.level}`, { id: s.id, key: u.key }, m(s.children, u)) }, 10: { match: q(St), order: 0, parse: (s, m, u) => ({ children: he(m, s[1], u), level: s[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: fe(De), order: 1, parse(s, m, u) {
    const [, y] = s[3].match(Bn), b = new RegExp(`^${y}`, "gm"), h = s[3].replace(b, ""), C = (w = h, Tn.some((E) => E.test(w)) ? Un : he);
    var w;
    const B = s[1].toLowerCase(), M = Xr.indexOf(B) !== -1, x = { attrs: l(s[2]), noInnerParse: M, tag: (M ? B : s[1]).trim() };
    return u.inAnchor = u.inAnchor || B === "a", M ? x.text = s[3] : x.children = C(m, h, u), u.inAnchor = !1, x;
  }, render: (s, m, u) => n(s.tag, ne({ key: u.key }, s.attrs), s.text || m(s.children, u)) }, 13: { match: fe(Ie), order: 1, parse: (s) => ({ attrs: l(s[2] || ""), tag: s[1].trim() }), render: (s, m, u) => n(s.tag, ne({}, s.attrs, { key: u.key })) }, 12: { match: fe(jt), order: 1, parse: () => ({}), render: Fe }, 14: { match: _(In), order: 1, parse: (s) => ({ alt: s[1], target: ct(s[2]), title: s[3] }), render: (s, m, u) => n("img", { key: u.key, alt: s.alt || void 0, title: s.title || void 0, src: ae(s.target) }) }, 15: { match: J(Dn), order: 3, parse: (s, m, u) => ({ children: $n(m, s[1], u), target: ct(s[2]), title: s[3] }), render: (s, m, u) => n("a", { key: u.key, href: ae(s.target), title: s.title }, m(s.children, u)) }, 16: { match: J(un), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], type: "15" }) }, 17: { match: (s, m) => m.inAnchor ? null : J(cn)(s, m), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], title: void 0, type: "15" }) }, 18: { match: J(dn), order: 0, parse(s) {
    let m = s[1], u = s[1];
    return Yr.test(u) || (u = "mailto:" + u), { children: [{ text: m.replace("mailto:", ""), type: "27" }], target: u, type: "15" };
  } }, 20: ot(n, 1), 33: ot(n, 2), 19: { match: q(Jr), order: 3, parse: Be, render: () => `
` }, 21: { match: Hn, order: 3, parse: Me, render: (s, m, u) => n("p", { key: u.key }, m(s.children, u)) }, 22: { match: J(mn), order: 0, parse: (s) => (a[s[1]] = { target: s[2], title: s[4] }, {}), render: Fe }, 23: { match: _(vn), order: 0, parse: (s) => ({ alt: s[1] || void 0, ref: s[2] }), render: (s, m, u) => a[s.ref] ? n("img", { key: u.key, alt: s.alt, src: ae(a[s.ref].target), title: a[s.ref].title }) : null }, 24: { match: J(pn), order: 0, parse: (s, m, u) => ({ children: m(s[1], u), fallbackChildren: m(s[0].replace(gn, "\\$1"), u), ref: s[2] }), render: (s, m, u) => a[s.ref] ? n("a", { key: u.key, href: ae(a[s.ref].target), title: a[s.ref].title }, m(s.children, u)) : n("span", { key: u.key }, m(s.fallbackChildren, u)) }, 25: { match: q(Ot), order: 1, parse: Rn, render(s, m, u) {
    const y = s;
    return n("table", { key: u.key }, n("thead", null, n("tr", null, y.header.map(function(b, h) {
      return n("th", { key: h, style: at(y, h) }, m(b, u));
    }))), n("tbody", null, y.cells.map(function(b, h) {
      return n("tr", { key: h }, b.map(function(C, w) {
        return n("td", { key: w, style: at(y, w) }, m(C, u));
      }));
    })));
  } }, 27: { match: fe(En), order: 4, parse: (s) => ({ text: s[0].replace(on, (m, u) => r.namedCodesToUnicode[u] ? r.namedCodesToUnicode[u] : m) }), render: (s) => s.text }, 28: { match: _(Pn), order: 2, parse: (s, m, u) => ({ children: m(s[2], u) }), render: (s, m, u) => n("strong", { key: u.key }, m(s.children, u)) }, 29: { match: _(kn), order: 3, parse: (s, m, u) => ({ children: m(s[2], u) }), render: (s, m, u) => n("em", { key: u.key }, m(s.children, u)) }, 30: { match: _(Cn), order: 1, parse: (s) => ({ text: s[1], type: "27" }) }, 31: { match: _(zn), order: 3, parse: Me, render: (s, m, u) => n("mark", { key: u.key }, m(s.children, u)) }, 32: { match: _(Nn), order: 3, parse: Me, render: (s, m, u) => n("del", { key: u.key }, m(s.children, u)) } };
  r.disableParsingRawHTML === !0 && (delete d[11], delete d[13]);
  const v = function(s) {
    let m = Object.keys(s);
    function u(y, b) {
      let h = [], C = "";
      for (; y; ) {
        let w = 0;
        for (; w < m.length; ) {
          const B = m[w], M = s[B], x = M.match(y, b, C);
          if (x) {
            const E = x[0];
            y = y.substring(E.length);
            const O = M.parse(x, u, b);
            O.type == null && (O.type = B), h.push(O), C = E;
            break;
          }
          w++;
        }
      }
      return h;
    }
    return m.sort(function(y, b) {
      let h = s[y].order, C = s[b].order;
      return h !== C ? h - C : y < b ? -1 : 1;
    }), function(y, b) {
      return u(function(h) {
        return h.replace(_r, `
`).replace(rn, "").replace(hn, "    ");
      }(y), b);
    };
  }(d), p = (f = /* @__PURE__ */ function(s, m) {
    return function(u, y, b) {
      const h = s[u.type].render;
      return m ? m(() => h(u, y, b), u, y, b) : h(u, y, b);
    };
  }(d, r.renderRule), function s(m, u = {}) {
    if (Array.isArray(m)) {
      const y = u.key, b = [];
      let h = !1;
      for (let C = 0; C < m.length; C++) {
        u.key = C;
        const w = s(m[C], u), B = typeof w == "string";
        B && h ? b[b.length - 1] += w : w !== null && b.push(w), h = B;
      }
      return u.key = y, b;
    }
    return f(m, s, u);
  });
  var f;
  const A = i(e);
  return c.length ? n("div", null, A, n("footer", { key: "footer" }, c.map(function(s) {
    return n("div", { id: r.slugify(s.identifier), key: s.identifier }, s.identifier, p(v(s.footnote, { inline: !0 })));
  }))) : A;
}
const Yn = (e) => {
  let { children: r = "", options: t } = e, n = function(i, l) {
    if (i == null) return {};
    var c, a, d = {}, v = Object.keys(i);
    for (a = 0; a < v.length; a++) l.indexOf(c = v[a]) >= 0 || (d[c] = i[c]);
    return d;
  }(e, Ur);
  return ge.cloneElement(Gn(r, t), n);
};
function Pe({ value: e }) {
  const r = j();
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    Yn,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ o("div", { className: "my-2", children: /* @__PURE__ */ o(it, {}) });
          },
          h1(t) {
            return /* @__PURE__ */ o("h1", { className: "text-6xl", children: t == null ? void 0 : t.children });
          },
          h2(t) {
            return /* @__PURE__ */ o("h1", { className: "text-5xl", children: t == null ? void 0 : t.children });
          },
          h3(t) {
            return /* @__PURE__ */ o("h1", { className: "text-4xl", children: t == null ? void 0 : t.children });
          },
          h4(t) {
            return /* @__PURE__ */ o("h1", { className: "text-3xl", children: t == null ? void 0 : t.children });
          },
          h5(t) {
            return /* @__PURE__ */ o("h1", { className: "text-2xl", children: t == null ? void 0 : t.children });
          },
          h6(t) {
            return /* @__PURE__ */ o("h1", { className: "text-xl", children: t == null ? void 0 : t.children });
          },
          code(t) {
            return /* @__PURE__ */ o(
              "code",
              {
                className: "px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]",
                style: {
                  ...r("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                children: t == null ? void 0 : t.children
              }
            );
          },
          input(t) {
            const n = k((t == null ? void 0 : t.checked) || !1);
            return (t == null ? void 0 : t.type) === "checkbox" ? /* @__PURE__ */ o(
              Nt,
              {
                id: ft(),
                state: n,
                config: {
                  style: "checkbox"
                }
              }
            ) : /* @__PURE__ */ o("input", { ...t });
          },
          img(t) {
            return /* @__PURE__ */ o("div", { className: "flex justify-center", children: /* @__PURE__ */ o(
              "div",
              {
                className: "rounded-lg sahdow-lg w-fit overflow-hidden",
                style: {
                  ...r({
                    boxShadow: ce([
                      {
                        colorId: "shadow.color"
                      }
                    ])
                  })
                },
                children: /* @__PURE__ */ o("img", { ...t })
              }
            ) });
          },
          p(t) {
            return /* @__PURE__ */ o("p", { className: "p-2", children: t == null ? void 0 : t.children });
          },
          a(t) {
            return /* @__PURE__ */ o(
              "a",
              {
                href: t == null ? void 0 : t.href,
                className: "hover:underline",
                style: {
                  ...r({
                    color: "primary"
                  })
                },
                children: t.children
              }
            );
          },
          table(t) {
            return /* @__PURE__ */ o(
              "div",
              {
                className: N(`
                    w-full
                    overflow-hidden
                    border
                    border-solid
                    border-transparent
                    my-2
                  `),
                style: {
                  ...r("gray.opacity", {
                    borderColor: "gray.opacity.2"
                  })
                },
                children: t.children
              }
            );
          },
          tr(t) {
            const n = g.createRef(), i = g.useMemo(() => {
              let l = n.current, c = 0;
              for (; l; )
                c++, l = l.previousElementSibling;
              return c;
            }, [n.current]);
            return /* @__PURE__ */ o(
              "div",
              {
                ref: n,
                style: {
                  ...r(i % 2 && "gray.opacity")
                },
                className: "flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full",
                children: t.children
              }
            );
          },
          td(t) {
            return /* @__PURE__ */ o("div", { className: "w-full", children: t == null ? void 0 : t.children });
          },
          tbody(t) {
            return /* @__PURE__ */ o("div", { children: t == null ? void 0 : t.children });
          },
          thead(t) {
            return /* @__PURE__ */ o("div", { children: t == null ? void 0 : t.children });
          },
          th(t) {
            return /* @__PURE__ */ o("div", { className: "w-full", children: t == null ? void 0 : t.children });
          }
        },
        namedCodesToUnicode: { le: "≤" }
      },
      children: e
    }
  ) });
}
function te({ children: e, className: r, icon: t, style: n, iconClassName: i, onPointerDown: l, onPointerLeave: c, onPointerUp: a, onMouseEnter: d, onMouseLeave: v, ...p }) {
  const f = j(), A = k(!1), s = k(!1), m = k(!1);
  g.useEffect(() => () => {
    A.set(!1), s.set(!1), m.set(!1);
  }, []);
  const u = g.useMemo(() => ({
    ...f(
      "primary",
      p["aria-disabled"] && "gray.opacity",
      !p["aria-disabled"] && {
        color: "primary.content"
      },
      A.get && {
        boxShadow: ce([
          {
            colorId: "shadow.color",
            isInset: !0,
            blur: 1
          }
        ])
      }
    ),
    ...n
  }), [f, p, A.get, ce, n, s.get]);
  return /* @__PURE__ */ z(
    "button",
    {
      onFocus: () => {
        A.set(!0);
      },
      onBlur: () => {
        A.set(!1);
      },
      onMouseEnter: (y) => {
        m.set(!0), d == null || d(y);
      },
      onMouseLeave: (y) => {
        m.set(!1), v == null || v(y);
      },
      onPointerDown: (y) => {
        s.set(!0), l == null || l(y);
      },
      onPointerUp: (y) => {
        s.set(!1), a == null || a(y);
      },
      onPointerLeave: (y) => {
        s.set(!1), c == null || c(y);
      },
      type: "button",
      style: {
        ...f("primary"),
        ...Re(u)
      },
      className: N("btn rounded-md cursor-pointer w-full px-3 py-2 relative capitalize overflow-hidden transition-[transform] active:scale-95", r),
      ...p,
      children: [
        /* @__PURE__ */ z("div", { className: "flex justify-center items-center gap-2 btn-content", children: [
          /* @__PURE__ */ o(ue, { iconClassName: i, icon: t }),
          e
        ] }),
        yr(1, 4).map((y) => /* @__PURE__ */ o(
          "i",
          {
            className: "btn__bg",
            style: {
              ...f("opacity")
            }
          },
          y
        ))
      ]
    }
  );
}
function H({
  icon: e,
  className: r,
  children: t,
  "aria-checked": n,
  iconClassName: i,
  onFocus: l,
  onBlur: c,
  onMouseEnter: a,
  onMouseLeave: d,
  onPointerDown: v,
  onPointerUp: p,
  onPointerLeave: f,
  style: A,
  ...s
}) {
  const m = j(), u = k(!1), y = k(!1), b = k(!1);
  return g.useEffect(() => () => {
    b.set(!1), y.set(!1), u.set(!1);
  }, []), /* @__PURE__ */ z(
    "span",
    {
      onFocus: (h) => {
        y.set(!0), l == null || l(h);
      },
      onPointerDown: (h) => {
        b.set(!0), v == null || v(h);
      },
      onPointerUp: (h) => {
        b.set(!1), p == null || p(h);
      },
      onPointerLeave: (h) => {
        b.set(!1), f == null || f(h);
      },
      onBlur: (h) => {
        y.set(!1), c == null || c(h);
      },
      onMouseEnter: (h) => {
        u.set(!0), a == null || a(h);
      },
      onMouseLeave: (h) => {
        u.set(!1), d == null || d(h);
      },
      className: N(
        `
          rounded-md
          p-1
          inline-flex
          items-center
          justify-center
          -outline-offset-1
          outline-1
          outline-transparent
          cursor-pointer
        `,
        s["aria-disabled"] && "pointer-events-none",
        r
      ),
      style: {
        ...m(
          u.get && {
            backgroundColor: "gray.opacity"
          },
          s["aria-disabled"] && {
            color: "gray.opacity.2"
          },
          n && "primary",
          n && {
            color: "primary.content"
          },
          y.get && {
            outlineColor: "primary"
          }
        ),
        ...A
      },
      ...s,
      children: [
        /* @__PURE__ */ o(ue, { iconClassName: i, icon: e }),
        t
      ]
    }
  );
}
function Zn({ slotId: e, component: r, data: t, skipFn: n }) {
  const i = I.getOneFeild(e, "focused"), l = I.getOneFeild(e, "submited"), c = I.getOneFeild(e, "selected"), a = I.getOneFeild(e, "direction");
  mt(e, t);
  const d = g.useMemo(() => r, []);
  g.useEffect(() => {
    if (typeof i != "number")
      return;
    const p = document.getElementById(Je(e, i));
    p && !At(p) && ht(p, a == "backward" ? 0 : -1);
  }, [i, a]);
  const v = g.useMemo(() => {
    if (!n)
      return {};
    const p = {};
    return t.forEach((f, A) => {
      if (n)
        p[A] = !!n(f, A);
      else
        return !1;
    }), p;
  }, [n, t]);
  return g.useEffect(() => {
    I.setOneFeild(e, "skiped", v);
  }, [v]), /* @__PURE__ */ o(R, { children: t.map((p, f) => {
    const A = {
      isFocused: f == i,
      isSelected: !!(c != null && c[f]),
      isSubmited: f == l,
      isSkiped: !!(n && n(p, f))
    };
    return /* @__PURE__ */ o(
      d,
      {
        id: Je(e, f),
        handelFocus: (s) => (m) => {
          I.setOneFeild(e, "focused", f), s == null || s(m);
        },
        handelSubmit: (s) => (m) => {
          I.setOneFeild(e, "submited", f), s == null || s(m);
        },
        handelSelect: (s) => (m) => {
        },
        tabIndex: A.isFocused ? 1 : -1,
        item: p,
        index: f,
        status: A
      },
      f
    );
  }) });
}
const ls = () => {
  const e = ze.getTemp("params"), r = ze.getTemp("id"), t = j(), n = k(!1), i = ze.useTemp("checked");
  g.useEffect(() => {
    typeof (e == null ? void 0 : e.checkboxChecked) == "boolean" && i.set(e.checkboxChecked);
  }, [e]), g.useEffect(() => {
    I.setOneFeild("dialog-list", "submited", null);
  }, [r]), g.useEffect(() => {
    I.setOneFeild("dialog-list", "focused", (e == null ? void 0 : e.defaultId) || 0);
  }, [e]), Z(
    "dialog.cancel",
    () => {
      typeof (e == null ? void 0 : e.cancelId) == "number" && I.setOneFeild("dialog-list", "submited", e.cancelId);
    },
    [e]
  );
  const l = g.useMemo(() => r ? Hr : null, [r, e]);
  xe(async () => {
    if (!l)
      return;
    const a = document.createElement("audio");
    a.src = l, await a.play();
  }, [r, e]);
  const c = K("preferences/animation.boolean");
  return /* @__PURE__ */ o($r, { hidden: !r, children: /* @__PURE__ */ o(
    dt,
    {
      className: "lg:w-1/2 max-lg:w-2/3",
      list: [
        (e == null ? void 0 : e.title) && /* @__PURE__ */ o("div", { className: "p-2", children: /* @__PURE__ */ o("h1", { className: "text-2xl", children: e == null ? void 0 : e.title }) }),
        e && /* @__PURE__ */ z("div", { className: "flex gap-5 p-2 w-full cursor-pointer", children: [
          !e.icon && /* @__PURE__ */ z(R, { children: [
            e.type == "question" && /* @__PURE__ */ o(W, { icon: br, className: "text-4xl" }),
            e.type == "info" && /* @__PURE__ */ o(
              W,
              {
                style: {
                  ...t({
                    color: "notifay.info"
                  })
                },
                icon: xr,
                className: "text-4xl"
              }
            ),
            e.type == "warning" && /* @__PURE__ */ o(
              W,
              {
                style: {
                  ...t({
                    color: "notifay.warning"
                  })
                },
                icon: yt,
                className: "text-4xl"
              }
            )
          ] }),
          typeof e.icon == "string" && /* @__PURE__ */ o(zt, { src: e.icon }),
          /* @__PURE__ */ z(
            "div",
            {
              onClick: () => {
                n.set(!n.get);
              },
              className: "flex justify-between items-center w-full",
              children: [
                /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("span", { children: e.message }) }),
                e.detail && /* @__PURE__ */ o(H, { className: "ml-2", icon: n.get ? wr : Pr })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o(Te, { className: N("h-[0vh] overflow-y-auto", n.get && (e == null ? void 0 : e.detail) && "h-[30vh]", c && "transition-[height]"), children: (e == null ? void 0 : e.detail) && /* @__PURE__ */ o("div", { className: "p-2", children: /* @__PURE__ */ o(Pe, { value: e.detail }) }) }),
        e && /* @__PURE__ */ z(Le, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ o("div", { children: e.checkboxLabel && /* @__PURE__ */ o(
            Nt,
            {
              id: "check",
              state: i,
              config: {
                style: "checkbox",
                onActive: `${e.checkboxLabel}`,
                onDisactive: `${e.checkboxLabel}`
              }
            }
          ) }),
          e.buttons && /* @__PURE__ */ o("div", { className: "flex gap-1 p-2 overflow-x-auto", children: /* @__PURE__ */ o(
            Zn,
            {
              slotId: "dialog-list",
              data: e.buttons,
              component: ({ item: a, index: d, status: v, handelSubmit: p, handelFocus: f }) => /* @__PURE__ */ o(
                te,
                {
                  className: "px-4 max-md:w-full",
                  style: {
                    ...t(
                      d != e.defaultId && "gray.opacity",
                      d != e.defaultId && { color: "text.color" },
                      v.isFocused && {
                        outlineColor: "primary"
                      },
                      v.isSubmited && {
                        backgroundColor: "primary",
                        color: "primary.content"
                      }
                    )
                  },
                  onPointerDown: f(),
                  onClick: p(),
                  children: a
                },
                d
              )
            }
          ) })
        ] })
      ]
    }
  ) });
};
function Wn({ className: e, style: r, ...t }) {
  const n = j(), i = k(!1);
  return /* @__PURE__ */ o(
    "a",
    {
      onMouseEnter: () => i.set(!0),
      onMouseLeave: () => i.set(!1),
      className: N(e, "hover:underline"),
      style: {
        ...n(
          i.get && {
            color: "primary"
          }
        )
      },
      ...t
    }
  );
}
const Ye = (e, r) => {
  const t = We.getEntity(), n = k(!1), i = vt("system.base"), l = Jt({ model: "gemini-pro" }), c = K("window/lang.enum"), a = g.useMemo(() => r || c, [r, c]);
  g.useEffect(() => {
    n.get && (_t(), n.set(!1));
  }, [i, n.get]);
  const d = g.useMemo(() => He(e, "normal", "cabab"), [e]), v = g.useMemo(() => a ? `${a}->${d}` : "", [a, d]), p = g.useMemo(() => {
    var s;
    return (s = t[v]) == null ? void 0 : s.value;
  }, [t, v]), f = xe(async () => {
    if (await Qe(300), !a || p || !l || a == "en")
      return;
    const { response: s } = await l.generateContent(`translate this text to ${a} :

${e}`);
    n.set(!0), We.upsert([{ langId: v, value: s.text() }]);
  }, [p, v, a, e, l]);
  return [g.useMemo(() => p || e, [p, e]), f];
};
function re({ content: e }) {
  const [r, t] = Ye(e);
  return /* @__PURE__ */ o(R, { children: t ? "..." : r });
}
function as({ component: e, text: r }) {
  const [t, n] = Ye(r);
  return /* @__PURE__ */ o(R, { children: e({ text: t, isLoading: n }) });
}
function cs({ state: e, id: r }) {
  const t = k(""), n = g.useMemo(() => Array.from(new Set(e.get)), [e.get]), i = j(), l = g.useCallback(() => {
    n.includes(t.get) || t.get === "" || (e.set([...n, t.get]), t.set(""), ye(r));
  }, [t.get, n, t.set, e.set]);
  return /* @__PURE__ */ z("div", { className: "array-field", children: [
    /* @__PURE__ */ o("div", { className: "items", children: n.map((c, a) => /* @__PURE__ */ z(
      "div",
      {
        className: N(`
                group
                flex
                items-center
                gap-1
                px-2 py-1
                border
                border-solid
                duration-200
                rounded-sm
              `),
        style: {
          ...i("gray.opacity", {
            borderColor: "borders"
          })
        },
        children: [
          /* @__PURE__ */ o("span", { children: c }),
          /* @__PURE__ */ z("span", { className: "flex items-center", children: [
            /* @__PURE__ */ o(
              H,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: async () => {
                  await navigator.clipboard.writeText(c);
                },
                icon: $e
              }
            ),
            /* @__PURE__ */ o(
              H,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: () => {
                  n.splice(a, 1), e.set(n);
                },
                icon: de
              }
            )
          ] })
        ]
      },
      a
    )) }),
    /* @__PURE__ */ z("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "w-full", children: /* @__PURE__ */ o(
        ie,
        {
          value: t.get,
          placeholder: "write item...",
          id: r,
          onKeyDown: (c) => {
            new be("enter").test(c) && l();
          },
          spellCheck: !1,
          onValueChange: t.set
        }
      ) }),
      t.get && /* @__PURE__ */ o(te, { onClick: l, className: "w-fit", children: /* @__PURE__ */ o(re, { content: "add" }) })
    ] })
  ] });
}
function is({ render: e, error: r = /* @__PURE__ */ o(R, {}), deps: t = [], loading: n = /* @__PURE__ */ o(R, {}) }) {
  const i = er(async () => {
    try {
      return await e();
    } catch {
      return r;
    }
  }, [e, r, n, ...t]);
  return /* @__PURE__ */ o(R, { children: i ?? n });
}
const ds = ({ className: e, style: r, ...t }) => {
  const n = j();
  return /* @__PURE__ */ o(
    "div",
    {
      ...t,
      className: bt("flex flex-col shadow-lg border border-transparent border-solid rounded-2xl w-1/2", e),
      style: {
        ...n({
          backgroundColor: "secondry.background",
          borderColor: "borders"
        }),
        ...r
      }
    }
  );
};
function ve({ children: e, className: r, icon: t, style: n, iconClassName: i, onPointerDown: l, onPointerLeave: c, onPointerUp: a, onMouseEnter: d, onMouseLeave: v, ...p }) {
  const f = j(), A = k(!1), s = k(!1);
  return g.useEffect(() => () => {
    A.set(!1), s.set(!1);
  }, []), /* @__PURE__ */ z(
    "button",
    {
      onMouseEnter: (m) => {
        s.set(!0), d == null || d(m);
      },
      onMouseLeave: (m) => {
        s.set(!1), v == null || v(m);
      },
      onPointerDown: (m) => {
        A.set(!0), l == null || l(m);
      },
      onPointerUp: (m) => {
        A.set(!1), a == null || a(m);
      },
      onPointerLeave: (m) => {
        A.set(!1), c == null || c(m);
      },
      className: N(
        `
        rounded-full
        w-[40px]
        h-[40px]
        gap-2
        flex
        items-center
        justify-center
        outline-2
        outline-offset-1
        outline-transparent
        truncate
      `,
        r,
        "relative"
      ),
      type: "button",
      style: {
        ...f(s.get && "gray.opacity", A.get && "gray.opacity.2")
      },
      ...p,
      children: [
        /* @__PURE__ */ o(ue, { iconClassName: bt("text-xl", i), icon: t }),
        e
      ]
    }
  );
}
function Yt({
  title: e,
  onClick: r,
  position: { x: t = "right", y: n = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: i,
  onMouseLeave: l,
  children: c,
  canMouseOn: a = !1,
  ...d
}) {
  const v = g.createRef();
  g.useEffect(() => () => {
    Ne(null), Ae(null);
  }, []);
  const p = () => {
    a || (Ne(null), Ae(null));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: v,
      onClick: (f) => {
        p(), r == null || r(f);
      },
      onMouseMove: (f) => {
        e && (Ne(e), Ae([f.clientX, f.clientY]), tr(t), rr(n)), i == null || i(f);
      },
      onMouseLeave: (f) => {
        p(), l == null || l(f);
      },
      ...d,
      children: c
    }
  );
}
const Zt = ({ onContentChange: e, ...r }) => {
  const t = g.createRef(), n = k(null);
  g.useEffect(() => {
    const l = t.current;
    if (l) {
      const c = () => {
        const p = l.getBoundingClientRect();
        n.set(p);
      };
      c();
      const a = new ResizeObserver(c), d = new MutationObserver(c), v = new IntersectionObserver(c);
      return a.observe(l, { box: "border-box" }), a.observe(l, { box: "content-box" }), a.observe(l, { box: "device-pixel-content-box" }), d.observe(l, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), v.observe(l), addEventListener("resize", c), () => {
        a.disconnect(), d.disconnect(), v.disconnect(), removeEventListener("resize", c);
      };
    }
  }, [t.current]), g.useEffect(() => {
    n.get && (e == null || e(n.get));
  }, [n.get]);
  const i = g.useMemo(() => {
    if (!n.get)
      return {};
    const { bottom: l, height: c, left: a, right: d, top: v, width: p, x: f, y: A } = n.get;
    return {
      bottom: l,
      height: c,
      left: a,
      right: d,
      top: v,
      width: p,
      x: f,
      y: A
    };
  }, [n.get]);
  return /* @__PURE__ */ o(
    "div",
    {
      ...r,
      "data-pos": Object.entries(i).map(([l, c]) => `${l}=${c}`).join(","),
      ref: t
    }
  );
}, us = ({ positionId: e, ...r }) => {
  const t = Ce.getOne(e);
  return g.useEffect(() => {
    t || Ce.upsert([
      {
        positionId: e
      }
    ]);
  }, [t]), /* @__PURE__ */ o(
    Zt,
    {
      onContentChange: ({ bottom: n, height: i, left: l, right: c, top: a, width: d, x: v, y: p }) => {
        const f = { bottom: n, height: i, left: l, right: c, top: a, width: d, x: v, y: p };
        Ce.setOne(e, f);
      },
      ...r
    }
  );
};
function Ze({ focusId: e, itemSize: r, slotId: t, component: n, handelSkip: i, data: l, countLastItems: c = 3, overflow: { top: a = 0, bottom: d = 0 } = { top: 0, bottom: 0 } }) {
  const v = I.getOne(t), p = k(0), f = k(0);
  let A = I.getOneFeild(t, "focused");
  mt(t, l), g.useEffect(() => {
    I.setOneFeild(t, "length", l.length), l.length || nr(t);
  }, [l]), g.useEffect(() => {
    typeof A == "number" && l.length <= A && I.setOneFeild(t, "focused", l.length - 1);
  }, [A, l]), g.useEffect(() => {
    let S = null;
    const F = () => {
      if (S = S || document.getElementById(t), !S)
        return;
      const $ = S.getBoundingClientRect().height;
      f.set($);
    };
    F();
    const T = setInterval(F, 1e3);
    return () => {
      clearInterval(T);
    };
  }, []);
  const s = k(!1);
  g.useEffect(() => {
    s.set(!1);
  }, [A]), g.useEffect(() => {
    if ([s.get, typeof A != "number", A >= l.length, f.get < r].some(Boolean))
      return;
    const S = p.get <= A * r, F = (A + 1) * r <= p.get + f.get;
    if (F && S)
      return;
    let T;
    A < 0 ? A = 0 : A > (T = Math.abs(l.length - c)) && (A = T), F || (A = A + 1 - f.get / r);
    const $ = r * A;
    p.set($);
  }, [A, l, c, p.get, f.get, s.get]);
  const m = K("preferences/fastScrollKey.enum"), u = g.useMemo(() => r * l.length, [r, l]), y = g.useMemo(() => u + r * c, [u, r, c]), b = g.useMemo(() => f.get * 100 / y, [y, f.get]), h = g.useMemo(() => p.get * 100 / y, [y, p.get]), C = K("preferences/scrollAnimation.boolean.boolean"), w = k(!1), B = k(null), M = g.useMemo(() => n, []), x = j(), E = (S) => {
    var T;
    const F = B.get;
    if (F) {
      let Q = (S - F.top - (((T = O.current) == null ? void 0 : T.clientHeight) || 0) / 2) / F.height * y;
      const Y = y - F.height;
      Q < 0 ? Q = 0 : Q > Y && (Q = Y), p.set(Q);
    }
  }, O = g.createRef(), D = g.useMemo(() => b <= 100, [b]), U = g.createRef(), P = (S) => {
  }, L = () => {
    document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", L);
  };
  return /* @__PURE__ */ o(Le, { focusId: e, className: "relative w-full h-full", ignoreOutline: typeof A == "number", id: t, children: /* @__PURE__ */ z(
    Zt,
    {
      onContentChange: (S) => {
        f.set(S.height), B.set(S);
      },
      className: "relative h-full overflow-hidden",
      onPointerDown: (S) => {
        P(S.nativeEvent), document.addEventListener("mousemove", P), document.addEventListener("mouseup", L);
      },
      onWheel: (S) => {
        if (b < 100) {
          let F = !1;
          m == "alt" ? F = S.altKey : m == "control" ? F = S.ctrlKey : m == "shift" && (F = S.shiftKey), s.set(!0), p.set((T) => (T += S.deltaY * (F ? 0.6 : 0.1), T < 0 ? 0 : Math.min(T, (l.length + c) * r - f.get)));
        }
      },
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: U,
            className: N("absolute inset-x-0", C && "transition-[top,left]"),
            style: {
              top: -p.get,
              height: u
            },
            children: l.map((S, F) => {
              var Q;
              const $ = r * F - p.get;
              if (kr(-(a + 1) * r, $, $ + r, f.get + (d + 1) * r)) {
                const Y = {
                  isFocused: F == (v == null ? void 0 : v.focused),
                  isSelected: !!((Q = v == null ? void 0 : v.selected) != null && Q[F]),
                  isSubmited: F == (v == null ? void 0 : v.submited),
                  isSkiped: !!(i && i({
                    data: S,
                    index: F
                  }))
                }, Kt = {
                  height: r,
                  position: "absolute",
                  top: r * F,
                  insetInline: "0px"
                };
                return /* @__PURE__ */ o(M, { status: Y, index: F, data: S, style: Kt, handel: {
                  focus() {
                    I.setOneFeild(t, "focused", F);
                  },
                  select(ke, pe) {
                    if (ke)
                      I.setOneFeild(t, "selected", {
                        [F]: pe
                      });
                    else {
                      if (!(v != null && v.selected))
                        return;
                      I.setOneFeild(t, "selected", {
                        ...v.selected,
                        [F]: pe
                      });
                    }
                  },
                  submit() {
                    I.setOneFeild(t, "submited", F);
                  },
                  skip(ke, pe) {
                    ke && I.setOneFeild(t, "skiped", { [F]: pe });
                  }
                } }, F);
              }
            })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            hidden: !D,
            "aria-label": "scroll-bar",
            onMouseEnter: () => {
              w.set(!0);
            },
            onMouseLeave: () => {
              w.set(!1);
            },
            onPointerDown: (S) => {
              s.set(!0), E(S.clientY);
            },
            style: {
              ...x(w.get && "gray.opacity")
            },
            className: N("absolute right-0 w-[5px] h-full inset-y-0 transition-[width] duration-300 backdrop-blur-md", w.get && "w-[20px]"),
            children: /* @__PURE__ */ o(
              "div",
              {
                "aria-label": "scroll-bar-thumb",
                className: "w-full transition-[top] duration-100 inset-x-0 absolute",
                ref: O,
                style: {
                  ...x("gray.opacity.2"),
                  ...Re({
                    height: `${b}%`,
                    top: `${h}%`
                  })
                },
                onMouseDown: () => {
                  s.set(!0);
                  const S = (T) => {
                    E(T.clientY);
                  };
                  document.addEventListener("mousemove", S);
                  const F = () => {
                    document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", F);
                  };
                  document.addEventListener("mouseup", F);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            "data-scrolled": p.get >= 10,
            className: "-top-[20px] absolute inset-x-0 h-[20px]",
            style: {
              ...x(
                p.get >= 10 && {
                  boxShadow: ce([
                    {
                      x: 0,
                      y: 4,
                      size: 10,
                      blur: 10,
                      colorId: "shadow.color"
                    }
                  ])
                }
              )
            }
          }
        )
      ]
    }
  ) });
}
function fs() {
  const e = G.getOneFeild("findConfigurations", "value"), r = Ke.getAll(), t = g.useMemo(() => typeof e == "string" ? r.filter(({ colorId: n }) => Ue(n, e)) : r, [r, e]);
  return g.useEffect(() => {
    V("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    Ze,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: t,
      itemSize: 50,
      component: ({ data: n, style: i, status: l, index: c, handel: a }) => {
        var m;
        const d = k(!1), v = k(!1), p = j(), f = K("window/dark.boolean"), A = g.useMemo(() => sr(!!f, n), [f, n]);
        let s = null;
        return /* @__PURE__ */ z(
          "div",
          {
            onMouseEnter: () => d.set(!0),
            onMouseLeave: () => d.set(!1),
            style: {
              ...i,
              ...p(
                c % 2 && "primary.background",
                d.get && "gray.opacity",
                l.isFocused && { borderColor: "primary" },
                l.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              )
            },
            className: N(`
              flex
              justify-between
              items-center
              p-3
              gap-2
              border
              border-solid
              border-transparent
            `),
            onClick: () => {
              a.focus(), a.submit();
            },
            children: [
              /* @__PURE__ */ o("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ o("span", { className: "capitalize", children: He(n.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ z("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (m = n.propositions) == null ? void 0 : m.map((u, y) => /* @__PURE__ */ o(
                  "span",
                  {
                    className: N(`
                      inline-block
                      w-[25px]
                      h-[25px]
                      rounded-md
                      border
                      border-solid
                      border-transparent
                    `),
                    style: {
                      backgroundColor: u,
                      ...p({
                        borderColor: "borders"
                      })
                    }
                  },
                  y
                )),
                /* @__PURE__ */ o(Yt, { title: `**${A}**`.toUpperCase(), children: /* @__PURE__ */ o(
                  "label",
                  {
                    className: N(`
                  inline-block
                  w-[25px]
                  h-[25px]
                  rounded-md
                  border
                  border-solid
                  border-transparent
                `),
                    style: {
                      backgroundColor: A,
                      borderColor: "white"
                    },
                    htmlFor: `color:${n.colorId}`
                  },
                  c
                ) }),
                /* @__PURE__ */ z("div", { className: "flex items-center tips", children: [
                  d.get && /* @__PURE__ */ o(
                    H,
                    {
                      icon: v.get ? se : $e,
                      onClick: async () => {
                        A && (v.set(!0), await navigator.clipboard.writeText(A));
                      },
                      onMouseLeave: () => {
                        v.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    ie,
                    {
                      id: `color:${n.colorId}`,
                      tabIndex: -1,
                      value: A,
                      type: "color",
                      onValueChange: (u) => {
                        s != null && clearTimeout(s), s = setTimeout(() => {
                          Ke.setOneFeild(n.colorId, f ? "dark" : "light", u);
                        }, 1e3);
                      },
                      className: "w-0 h-0 invisible pointer-events-none"
                    }
                  )
                ] })
              ] })
            ]
          }
        );
      }
    }
  );
}
const ms = () => {
  const e = qe.getTemp("type"), r = j();
  return /* @__PURE__ */ o(
    dt,
    {
      className: "flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full",
      list: [
        /* @__PURE__ */ o(
          qt,
          {
            title: e || "Work Off",
            rightSide: /* @__PURE__ */ o(
              ve,
              {
                icon: de,
                onClick: () => {
                  qe.setTemp("error", "Escape Take Image");
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o("div", { className: N("p-2 relative overflow-hidden flex items-center"), children: /* @__PURE__ */ o(
          "div",
          {
            className: "border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden",
            style: {
              ...r("secondry.background", {
                borderColor: "borders"
              })
            },
            children: e && /* @__PURE__ */ o(Vt, { onRead: () => {
            }, delay: 200, width: 400, height: 400, videoConstraints: !0 })
          }
        ) }),
        e == "take" && /* @__PURE__ */ o("div", { className: "flex justify-evenly p-4 w-full h-[70px] text-2xl", children: /* @__PURE__ */ o(Yt, { title: "take image", children: /* @__PURE__ */ o(
          ve,
          {
            onClick: () => {
              ee("camera-take");
            },
            icon: xt
          }
        ) }) })
      ],
      tabIndex: 1,
      id: "camera-view",
      style: {
        ...r("primary.background", {
          borderColor: "borders"
        })
      }
    }
  );
};
function Kn({ content: e }) {
  const r = j(), t = /mac/gi.test(navigator.platform), n = {
    ...r({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ z(
    "div",
    {
      style: n,
      className: N(`
        rounded-[4px]
        border-solid
        border-transparent
        border-b-4
        border-x
        border-t
        capitalize
        px-1
      `),
      children: [
        /control/gi.test(e) && (t ? /* @__PURE__ */ o(W, { icon: zr }) : "ctrl"),
        /shift/gi.test(e) && (t ? /* @__PURE__ */ o(W, { icon: wt }) : "shift"),
        [/control/gi, /shift/gi].every((i) => !i.test(e)) && e
      ]
    }
  );
}
function Wt({ shortcut: e = [], className: r, ...t }) {
  const n = typeof e == "string" ? [e] : e;
  return /* @__PURE__ */ o(
    "span",
    {
      ...t,
      className: N(
        `
        capitalize
        items-center
        gap-x-2
        truncate
        mx-1
      `,
        r
      ),
      children: /* @__PURE__ */ o(
        Oe,
        {
          list: n.map((i, l) => {
            const c = i.split("+");
            return /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ o(
              Oe,
              {
                list: c.map((a, d) => /* @__PURE__ */ o(Kn, { content: a }, d)),
                joinComponent: /* @__PURE__ */ o("span", { children: "+" })
              }
            ) }, l);
          }),
          joinComponent: /* @__PURE__ */ o("span", { className: "mx-1", children: "Or" })
        }
      )
    }
  );
}
function vs({ data: e }) {
  const r = vt("commandId"), t = G.getOneFeild("findCommand", "value"), n = g.useMemo(() => {
    if (r)
      return e[r];
  }, [r]), i = g.useMemo(() => (n == null ? void 0 : n.lines) || [], [n]), l = g.useMemo(() => i.filter(({ content: d }) => Ue(d, t)), [t, i]);
  g.useEffect(() => {
    I.setOneFeild("cmds/list", "focused", i != null && i.length ? 0 : null);
  }, [i]);
  const c = or(l, "cmds/list", "submited");
  g.useEffect(() => {
    var d;
    c && (lr("commands.close"), G.setOneFeild("findCommand", "value", ""), (d = n == null ? void 0 : n.onSubmit) == null || d.call(n, c), I.setOneFeild("cmds/list", "submited", null));
  }, [c, n]);
  const a = j();
  return /* @__PURE__ */ z(
    "div",
    {
      className: "relative py-1 h-[50vh]",
      onClick: (d) => {
        d.currentTarget.contains(d.target) && ye("findCommand");
      },
      children: [
        !l.length && /* @__PURE__ */ o(
          "div",
          {
            style: {
              ...a({
                color: "gray.opacity.2"
              })
            },
            className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ o(re, { content: "no result" })
          }
        ),
        /* @__PURE__ */ o(
          Ze,
          {
            data: l,
            itemSize: 30,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            component: ({ data: d, status: v, handel: p, style: f }) => {
              var m;
              const A = k(!1), s = g.createRef();
              return /* @__PURE__ */ z(
                "div",
                {
                  onMouseEnter: () => {
                    A.set(!0);
                  },
                  onMouseLeave: () => {
                    A.set(!1);
                  },
                  style: {
                    ...f,
                    ...a(A.get && "gray.opacity", v.isFocused && "secondry", v.isFocused && { color: "secondry.content" })
                  },
                  onClick: (u) => {
                    var y;
                    !((y = s.current) != null && y.contains(u.target)) && p.submit();
                  },
                  className: N(`
                flex
                border
                cursor-pointer
                border-transparent
                border-solid
                items-center
                justify-between
                mx-2
                px-3
                py-1
                rounded-md
              `),
                  children: [
                    /* @__PURE__ */ z("div", { className: "flex justify-between items-center gap-2 truncate", children: [
                      d.checked && /* @__PURE__ */ o(ue, { icon: se }),
                      /* @__PURE__ */ o("span", { children: d.content }),
                      d.sub && /* @__PURE__ */ o(
                        "div",
                        {
                          className: "inline-block mt-2 text-[10px]",
                          style: {
                            ...a({
                              color: "gray.opacity.2"
                            })
                          },
                          children: /* @__PURE__ */ o(Pe, { value: d.sub })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ z("span", { className: "inline-flex tools", children: [
                      d.keyPanding && /* @__PURE__ */ o(Wt, { shortcut: d.keyPanding }),
                      /* @__PURE__ */ o("span", { ref: s, children: (A.get || v.isFocused) && ((m = d.tools) == null ? void 0 : m.map(({ icon: u, onClick: y }, b) => /* @__PURE__ */ o(
                        H,
                        {
                          icon: u,
                          onClick: async () => {
                            const h = y == null ? void 0 : y();
                            if (ye("findCommand"), h instanceof Promise) {
                              V("commands.isLoading", !0);
                              try {
                                await h;
                              } catch {
                              }
                              V("commands.isLoading", !1);
                            }
                          }
                        },
                        b
                      ))) })
                    ] })
                  ]
                }
              );
            }
          }
        )
      ]
    }
  );
}
const qn = (e, r = "datetime-local") => r == "time" ? Ee(e, "HH:mm") : r == "month" ? Ee(e, "yyyy-MM") : r == "date" ? Ee(e, "yyyy-MM-dd") : e.toISOString().replace(/\.[0-9]+Z/gi, "");
function ps({ state: e, config: r = {}, id: t }) {
  const n = j(), i = k(!1), l = n("secondry.background", {
    borderColor: "borders"
  }), c = k(!0), a = n(
    i.get && c.get && {
      borderColor: "primary"
    },
    i.get && !c.get && {
      borderColor: "checkbox.true"
    }
  ), [d] = Ye("no provided"), v = g.useCallback(() => {
    const p = /* @__PURE__ */ new Date();
    e.set(qn(p, r.format));
  }, [r.format]);
  return /* @__PURE__ */ z(
    "div",
    {
      className: N(`
        border
        border-solid
        border-transparent
        rounded-[4px]
        flex
        px-1
      `),
      style: {
        ...l,
        ...a
      },
      children: [
        /* @__PURE__ */ o(
          ie,
          {
            id: t,
            style: {
              backgroundColor: "transparent"
            },
            type: r.format && ["date", "time", "month"].includes(r.format) ? r.format : "datetime-local",
            value: e.get ?? void 0,
            onKeyDown: (p) => {
              if (new be("control+shift+d").test(p)) {
                p.preventDefault(), v();
                return;
              }
              new be("control+backspace").test(p) && (p.preventDefault(), e.set(""));
            },
            onChange: (p) => {
              const f = p.currentTarget.value;
              if (!f) {
                c.set(!0);
                return;
              }
              c.set(!1), e.set(f);
            },
            className: N("p-1 border-none"),
            onBlur: () => {
              i.set(!1);
            },
            onFocus: () => {
              i.set(!0);
            },
            title: e.get || d
          }
        ),
        /* @__PURE__ */ o("div", { className: "inline-flex items-center tools", children: r.goToCurrent && /* @__PURE__ */ o(
          H,
          {
            icon: Nr,
            onClick: () => {
              v();
            }
          }
        ) })
      ]
    }
  );
}
const gs = "enum/list";
function As({ config: e = {}, id: r, state: t }) {
  var v;
  const n = g.createRef(), i = j(), l = k(!1), c = g.useMemo(() => {
    var p;
    return (p = e.list) == null ? void 0 : p.find(({ value: f }) => f == t.get);
  }, [e, t.get]), a = g.useMemo(() => r + "-" + ft() + "-" + crypto.randomUUID(), [r]), d = oe.getTemp("id");
  return /* @__PURE__ */ o("div", { className: "relative w-full", children: /* @__PURE__ */ z(
    "div",
    {
      id: r,
      ref: n,
      tabIndex: 1,
      onClick: () => {
        oe.setTemp("id", a), oe.setTemp("list", e.list || []), oe.setTemp("choised", t.get);
        const p = ar("object.data.enum.result", Boolean, (f) => {
          const A = f.object.data.enum;
          (!A.id || A.id == a) && (A.id == a && t.set(A.result), oe.setTemp("result", null), oe.setTemp("id", null), p());
        });
      },
      onFocus: () => {
        l.set(!0);
      },
      onBlur: () => {
        l.set(!1);
      },
      className: N(`
          border
          border-solid
          border-transparent
          px-2
          py-1
          cursor-pointer
          rounded-md
          min-w-[80px]
          flex
          justify-between
          items-center
        `),
      style: {
        ...i(
          "gray.opacity",
          {
            borderColor: "borders"
          },
          l.get && {
            borderColor: "primary",
            backgroundColor: "gray.opacity.2"
          }
        )
      },
      children: [
        /* @__PURE__ */ o("div", { className: "w-full text-center", children: (c == null ? void 0 : c.content) || (c == null ? void 0 : c.value) || "no option choised" }),
        e.expandIcon !== !1 && !!((v = e.list) != null && v.length) && /* @__PURE__ */ o(W, { icon: a == d ? wt : Cr })
      ]
    }
  ) });
}
function Vn({
  className: e,
  multiLines: r = !1,
  onChange: t,
  onKeyDown: n,
  onSelect: i,
  onSelectionChange: l,
  onValueChange: c,
  onFocus: a,
  onBlur: d,
  propositions: v,
  selection: p,
  style: f,
  tabSize: A = 4,
  supportTab: s = !1,
  hidden: m,
  acceptKeys: u,
  pattern: y,
  ...b
}) {
  const h = g.createRef(), C = cr(), w = g.useMemo(() => Pt.join({ commandId: "input.completeWord" }, C, "commandId->command"), [C]), B = j(), M = g.createRef(), x = k(0), E = g.useMemo(() => {
    var P, L;
    return (L = (P = b.value) == null ? void 0 : P.toString().match(/[^ ]*$/gi)) == null ? void 0 : L[0];
  }, [b.value]), O = g.useMemo(() => {
    const P = (v == null ? void 0 : v.filter((L) => E && L.length != (E == null ? void 0 : E.length) && L.startsWith(E))) || [];
    return Er(P).value;
  }, [v, E]), D = k(!1);
  g.useEffect(() => {
    M.current && (M.current.scrollTop = x.get);
  }, [x.get]), g.useEffect(() => () => {
    V("input.focusedHasProposition", !1), V("input.supportTab", !1), D.set(!1);
  }, []), g.useEffect(() => {
    !h.current || !p || h.current.setSelectionRange(p.start, p.end, p.direction);
  }, [h.current, p]);
  const U = g.useCallback((P) => {
    l == null || l({
      start: P.currentTarget.selectionStart,
      end: P.currentTarget.selectionEnd,
      direction: P.currentTarget.selectionDirection
    });
  }, []);
  return g.useEffect(() => {
    V("input.focusedHasProposition", !!(D.get && O));
  }, [D.get, O]), g.useEffect(() => {
    V("input.supportTab", D.get && s);
  }, [s, D.get]), Z(
    "input.tab",
    () => {
      if (!D.get) return;
      const P = h.current;
      if (!P) return;
      const { selectionStart: L, selectionEnd: X, value: S } = P, F = L, T = X, $ = S.slice(0, L), Q = S.slice(X), Y = " ".repeat(A);
      P.value = $ + Y + Q, P.setSelectionRange(F + A, T + A, "forward"), c == null || c(P.value), l == null || l({
        start: P.selectionStart,
        end: P.selectionEnd,
        direction: P.selectionDirection
      });
    },
    [h, D.get, l, c]
  ), Z(
    "input.completeWord",
    () => {
      D.get && h.current && (h.current.value = h.current.value.replace(/[^ ]+$/gi, "") + O + " ", c == null || c(h.current.value));
    },
    [h, D.get, O, c]
  ), Z(
    "input.selectLine",
    () => {
      if (!D.get || !h.current)
        return;
      const P = h.current, { selectionStart: L, selectionEnd: X, value: S } = P, F = S.slice(0, L), T = S.slice(X), $ = F.lastIndexOf(`
`) + 1;
      let Q = T.indexOf(`
`);
      Q === -1 && (Q = T.length), P.setSelectionRange($, X + Q, "forward"), l == null || l({
        start: P.selectionStart,
        end: P.selectionEnd,
        direction: P.selectionDirection
      });
    },
    [h, D.get, l]
  ), Z(
    "input.addLineBellow",
    () => {
      if (!D.get) return;
      const P = h.current;
      if (!P) return;
      const { selectionStart: L, selectionEnd: X, value: S } = P, F = S.slice(0, L), T = S.slice(X), $ = F.lastIndexOf(`
`) + 1;
      let Q = T.indexOf(`
`);
      Q === -1 && (Q = T.length);
      const Y = S.slice($, X + Q);
      P.value = F + `
` + Y + T, P.setSelectionRange(L + Y.length + 1, X + Y.length + 1, "forward"), c == null || c(P.value), l == null || l({
        start: P.selectionStart,
        end: P.selectionEnd,
        direction: P.selectionDirection
      });
    },
    [h, D.get, l, c]
  ), /* @__PURE__ */ z("div", { className: "relative flex w-full h-full", hidden: m, children: [
    /* @__PURE__ */ o(
      "textarea",
      {
        onScroll: (P) => {
          x.set(P.currentTarget.scrollTop);
        },
        ...b,
        onFocus: (P) => {
          D.set(!0), a == null || a(P);
        },
        onBlur: (P) => {
          D.set(!1), d == null || d(P);
        },
        style: {
          ...f,
          ...B({
            caretColor: "text.color"
          })
        },
        className: N(e, "font-[inherit] text-[inherit]"),
        spellCheck: !1,
        onSelect: (P) => {
          U(P), i == null || i(P);
        },
        ref: h,
        onKeyDown: (P) => {
          !r && P.key == "Enter" && P.preventDefault();
          const L = be.fromEvent(P);
          u && u.some((X) => new RegExp(X, "igm").test(L)) && P.preventDefault(), n == null || n(P);
        },
        onChange: (P) => {
          t == null || t(P), c == null || c(P.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ o("div", { ref: M, className: N(e, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ z("pre", { className: "font-[inherit] text-wrap", children: [
      /* @__PURE__ */ o("span", { className: "text-transparent", children: b.value }),
      typeof E == "string" && O && /* @__PURE__ */ z(R, { children: [
        /* @__PURE__ */ o(
          "span",
          {
            style: {
              ...B({
                color: "autoCompleteInput"
              })
            },
            children: O.replace(E, "")
          }
        ),
        !!w.length && /* @__PURE__ */ o(Wt, { shortcut: w.map(({ value: P }) => P) })
      ] })
    ] }) })
  ] });
}
function hs({
  inputName: e,
  selectWhenFocusIn: r,
  placeholder: t,
  controlsPosition: n = "bottom",
  className: i,
  value: l,
  rows: c,
  style: a,
  controls: d,
  onFocus: v,
  onBlur: p,
  acceptHistory: f,
  propositions: A,
  ...s
}) {
  const m = G.getOneFeild(e, "value"), u = G.getOneFeild(e, "selection"), y = G.useOneFeild(e, "history"), b = j(), h = k(!1);
  pt(
    () => {
      !f && !m || y.set((w) => w ? [...w, m] : [m]);
    },
    [m, f],
    2e3
  ), gt(e), g.useEffect(() => {
    G.setOneFeild(e, "controls", d || {});
  }, [d, e]);
  const C = g.useMemo(() => Object.entries(d || {}).map(([w, B]) => {
    try {
      const x = (m == null ? void 0 : m.match(new RegExp(w, "ig"))) ? "succ" : "err";
      return B[x] ? {
        type: x,
        content: B[x]
      } : void 0;
    } catch (M) {
      Mr.warn("expression not correct", M);
      return;
    }
  }).filter(Boolean).map((w) => w), [m, d]);
  return /* @__PURE__ */ z("div", { className: "relative flex items-center w-full h-full", children: [
    /* @__PURE__ */ o(
      Vn,
      {
        placeholder: `${t || ""}${h.get ? "..." : ""}`,
        propositions: A,
        className: N(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            rounded-sm
            w-full
            text-xs
          `,
          i
        ),
        onFocus: (w) => {
          r && w.currentTarget.select(), h.set(!0), v == null || v(w);
        },
        onBlur: (w) => {
          h.set(!1), p == null || p(w);
        },
        value: m,
        onValueChange: (w) => {
          G.setOneFeild(e, "value", w);
        },
        selection: u,
        onSelectionChange: (w) => {
          G.setOneFeild(e, "selection", w);
        },
        style: {
          ...b({
            borderColor: h.get ? "primary" : "borders",
            backgroundColor: "field.background"
          }),
          ...a
        },
        title: void 0,
        rows: c || 1,
        id: e,
        ...s
      }
    ),
    h.get && !!C.length && /* @__PURE__ */ o(
      "div",
      {
        className: N(
          `
              z-[100000000000000000000000000000000000000]
              rounded-md
              absolute
              right-0
              border
              border-solid
              border-transparent
              text-xs
              my-1
              max-w-full
              w-fit
            `,
          n == "top" ? "bottom-full" : "top-full"
        ),
        style: {
          ...b("primary.background", {
            borderColor: "borders"
          })
        },
        children: /* @__PURE__ */ o(
          Oe,
          {
            list: C.map(({ content: w, type: B }, M) => {
              const x = B == "err" ? yt : se;
              return /* @__PURE__ */ z("div", { className: "flex items-center gap-x-2 p-2", children: [
                /* @__PURE__ */ o(
                  W,
                  {
                    style: {
                      ...b(
                        B == "err" && {
                          color: "warning.text"
                        },
                        B == "succ" && {
                          color: "success.text"
                        }
                      )
                    },
                    icon: x
                  }
                ),
                w && /* @__PURE__ */ o(Pe, { value: w })
              ] }, M);
            }),
            joinComponent: /* @__PURE__ */ o(it, {})
          }
        )
      }
    )
  ] });
}
function ys({ state: e, config: r = {}, id: t }) {
  var c, a;
  const n = j(), i = k(!1), l = K("preferences/animation.boolean");
  return /* @__PURE__ */ z(
    "div",
    {
      className: N("relative border border-solid border-transparent flex items-center gap-1 w-full px-3 py-1 rounded-md", l && "transition-[background-color] duration-200"),
      onMouseEnter: () => i.set(!0),
      onMouseLeave: () => i.set(!1),
      style: {
        ...n("gray.opacity", i.get && "gray.opacity.2", {
          borderColor: "borders"
        })
      },
      children: [
        /* @__PURE__ */ z("div", { className: "relative flex flex-wrap gap-1 w-full", children: [
          (c = e.get) == null ? void 0 : c.map((d, v) => /* @__PURE__ */ z(
            "span",
            {
              className: "inline-flex justify-between items-center px-2 py-1 rounded-md",
              style: {
                ...n("gray.opacity")
              },
              children: [
                /* @__PURE__ */ o(Wn, { href: d, className: "max-w-[50px] truncate", children: d }),
                /* @__PURE__ */ o(
                  H,
                  {
                    onClick: () => {
                      var p;
                      e.set(((p = e.get) == null ? void 0 : p.filter((f) => f != d)) || null);
                    },
                    icon: de
                  }
                )
              ]
            },
            v
          )),
          !((a = e.get) != null && a.length) && /* @__PURE__ */ o("span", { className: "capitalize", children: /* @__PURE__ */ o(re, { content: "no files choised" }) })
        ] }),
        /* @__PURE__ */ z("div", { className: "flex items-center gap-x-1 tools", children: [
          r.nullable && /* @__PURE__ */ o(
            H,
            {
              onClick: () => {
                e.set(null);
              },
              icon: Br
            }
          ),
          /* @__PURE__ */ o(
            H,
            {
              id: `${t}:select`,
              icon: kt,
              onClick: async () => {
                const d = await ir(r);
                e.set((v) => v ? [.../* @__PURE__ */ new Set([...v, ...d])] : d);
              }
            }
          )
        ] })
      ]
    }
  );
}
const Jn = ({ isSelected: e, item: r, toggle: t }) => {
  const n = k(!1), i = j();
  return /* @__PURE__ */ z(
    "button",
    {
      onMouseEnter: () => n.set(!0),
      onMouseLeave: () => n.set(!1),
      className: "inline-flex items-center gap-1 px-2 py-1 rounded-md text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...i(
          {
            background: "gray.opacity"
          },
          n.get && {
            background: "gray.opacity.2"
          },
          e && {
            background: ut("to right", "secondry", "primary"),
            color: "secondry.content"
          }
        )
      },
      onClick: () => {
        t();
      },
      children: [
        /* @__PURE__ */ o(
          ue,
          {
            icon: se,
            iconClassName: N(
              `
            transition-transform
            duration-300
            transform
            scale-0
          `,
              e && "scale-100"
            )
          }
        ),
        r
      ]
    }
  );
};
function bs({ id: e, config: r = {}, state: t }) {
  var n;
  return /* @__PURE__ */ o("div", { id: e, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (n = r.list) == null ? void 0 : n.map((i, l) => {
    var a;
    const c = !!((a = t.get) != null && a.includes(i));
    return /* @__PURE__ */ o(
      Jn,
      {
        item: i,
        isSelected: c,
        toggle: () => {
          var d;
          c ? t.set((d = t.get) == null ? void 0 : d.filter((v) => v != i)) : t.set([...t.get || [], i]);
        }
      },
      l
    );
  }) });
}
function xs() {
  const e = G.getOneFeild("findConfigurations", "value"), r = g.useMemo(() => {
    const n = Object.entries(Fr).map(([c, a]) => ({
      iconName: c,
      icon: a,
      type: "solid"
    })), i = Object.entries(Sr).map(([c, a]) => ({ iconName: c, icon: a, type: "regular" })), l = Object.entries(jr).map(([c, a]) => ({
      iconName: c,
      icon: a,
      type: "brad"
    }));
    return Pt.orderBy([...n, ...i, ...l], "iconName", "asc");
  }, []), t = g.useMemo(() => typeof e == "string" ? r.filter(({ iconName: n }) => Ue(n, e)) : r, [r, e]);
  return g.useEffect(() => {
    V("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    Ze,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: t,
      itemSize: 50,
      component: ({ data: n, style: i, status: l, index: c, handel: a }) => {
        const d = k(!1), v = j(), p = g.useMemo(() => [d.get, l.isFocused, l.isSubmited].some(Boolean), [d.get, l]), f = k(!1);
        return /* @__PURE__ */ z(
          "div",
          {
            onMouseEnter: () => d.set(!0),
            onMouseLeave: () => d.set(!1),
            style: {
              ...i,
              ...v(
                c % 2 && "primary.background",
                d.get && "gray.opacity",
                l.isFocused && { borderColor: "primary" },
                l.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              )
            },
            className: N(`
              flex
              justify-between
              items-center
              p-3
              gap-2
              border
              border-solid
              border-transparent
            `),
            onClick: () => {
              a.focus(), a.submit();
            },
            children: [
              /* @__PURE__ */ z("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ o("div", { className: "flex justify-end w-[100px]", children: p && /* @__PURE__ */ o(R, { children: /* @__PURE__ */ o(
                  H,
                  {
                    onMouseLeave: () => {
                      f.set(!1);
                    },
                    icon: f.get ? se : $e,
                    onClick: async () => {
                      const { icon: A, ...s } = n;
                      await navigator.clipboard.writeText(s.iconName), f.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ z("span", { className: "capitalize", children: [
                  /* @__PURE__ */ o(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...v("gray.opacity")
                      },
                      children: n.type
                    }
                  ),
                  /* @__PURE__ */ o("span", { children: " / " }),
                  He(n.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ o(W, { className: "text-3xl", icon: n.icon })
            ]
          }
        );
      }
    }
  );
}
function ws({ state: e, config: r }) {
  const t = j(), n = K("preferences/animation.boolean"), i = k(!1), l = e.get, c = g.useCallback(
    async (a) => {
      if (e.set) {
        if (!a)
          return e.set(null);
        try {
          e.set(a);
        } catch {
          e.set(null);
        }
      }
    },
    [e.set]
  );
  return /* @__PURE__ */ o("div", { className: "flex justify-center", children: /* @__PURE__ */ o(
    zt,
    {
      onMouseEnter: () => {
        i.set(!0);
      },
      onMouseLeave: () => {
        i.set(!1);
      },
      className: N("mb-1 border border-transparent border-solid rounded-2xl text-center text-xl italic", (r == null ? void 0 : r.rounded) && "rounded-full"),
      style: {
        ...t({
          borderColor: "borders",
          boxShadow: ce([
            {
              colorId: "shadow.color",
              blur: 26,
              size: 1,
              x: 0,
              y: 2
            }
          ])
        })
      },
      alt: r == null ? void 0 : r.alt,
      src: l ?? void 0,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: N(
            `
            flex
            opacity-100
            absolute
            left-1/2
            transform
            -translate-x-1/2
            bottom-0
            items-center
          `
          ),
          children: /* @__PURE__ */ z(
            "div",
            {
              className: N(
                `
            inline-flex
            items-center
            rounded-ss-xl
            rounded-se-xl
            p-1
            text-xs
            border-solid
            border-t
            border-x            
            border-transparent
          `,
                !i.get && "translate-y-full pointer-events-none",
                n && "transition-transform"
              ),
              style: {
                ...t("secondry.background", {
                  borderColor: "borders"
                })
              },
              children: [
                l && /* @__PURE__ */ o(
                  H,
                  {
                    onClick: async () => {
                      const { response: a } = await me({
                        message: "do you want to recenlty this image",
                        title: "confirmation",
                        type: "warning",
                        buttons: ["no", "yes"],
                        defaultId: 1
                      });
                      a && c(null);
                    },
                    style: {
                      ...t({
                        color: "error"
                      })
                    },
                    icon: de
                  }
                ),
                /* @__PURE__ */ o(
                  H,
                  {
                    onClick: async () => {
                      if (l) {
                        const { response: d } = await me({
                          message: "do you want to recenlty this image",
                          title: "confirmation",
                          type: "warning",
                          buttons: ["no", "yes"],
                          defaultId: 1
                        });
                        if (!d)
                          return;
                      }
                      const a = document.createElement("input");
                      a.type = "file", a.accept = "image/*", a.onchange = async () => {
                        var d;
                        if ((d = a.files) != null && d.length) {
                          const v = a.files[0], p = new FileReader();
                          p.onload = () => {
                            var f;
                            c(((f = p.result) == null ? void 0 : f.toString()) || null);
                          }, p.readAsDataURL(v);
                        }
                      }, a.click();
                    },
                    style: {
                      ...t(
                        l && {
                          color: "notifay.warning"
                        },
                        !l && {
                          color: "primary"
                        }
                      )
                    },
                    icon: kt
                  }
                ),
                /* @__PURE__ */ o(
                  H,
                  {
                    style: {
                      ...t(
                        l && {
                          color: "notifay.warning"
                        },
                        !l && {
                          color: "primary"
                        }
                      )
                    },
                    onClick: async () => {
                      var a;
                      if (l) {
                        const { response: d } = await me({
                          message: "do you want to recenlty this image",
                          title: "confirmation",
                          type: "warning",
                          buttons: ["no", "yes"],
                          defaultId: 1
                        });
                        if (!d)
                          return;
                      }
                      try {
                        const d = await dr("take");
                        (a = e.set) == null || a.call(e, d);
                      } catch (d) {
                        ur(d, "error");
                      }
                    },
                    icon: xt
                  }
                )
              ]
            }
          )
        }
      )
    }
  ) });
}
function Ps({ pages: e = [], focused: r = 0 }) {
  const t = g.useMemo(() => e[r], [e, r]);
  return /* @__PURE__ */ z(
    "div",
    {
      className: N(`
        h-full
        flex
        absolute
        inset-y-0
        transition-[left]
        duration-300
        overflow-hidden
      `),
      style: {
        width: `${100 * e.length}%`,
        left: `${-100 * r}%`
      },
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full",
            style: {
              width: `${r / e.length * 100}%`
            }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full overflow-hidden",
            style: {
              width: `${1 / e.length * 100}%`
            },
            children: /* @__PURE__ */ o(Te, { children: t })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full",
            style: {
              width: `${(1 - (r + 1) / e.length) * 100}%`
            }
          }
        )
      ]
    }
  );
}
function ks({ onClick: e, className: r, children: t, iconClassName: n, ...i }) {
  const l = j();
  return /* @__PURE__ */ o(
    "span",
    {
      onClick: (c) => {
        c.preventDefault(), e == null || e(c);
      },
      className: N(
        r,
        `
          absolute
          top-0
          right-0
          rounded-xl
          flex
          min-w-[22px]
          h-[22px]
          justify-center
          items-center
          overflow-hidden
        `
      ),
      ...i,
      style: {
        ...l("primary", {
          color: "primary.content"
        })
      },
      children: t
    }
  );
}
function zs({ state: e, config: r = {}, id: t }) {
  g.useEffect(() => {
    typeof e.get == "number" && (typeof r.max == "number" && r.max < e.get ? e.set(r.max) : typeof r.min == "number" && r.min > e.get && e.set(r.min));
  }, [r.max, r.min, e.get]);
  const n = k(String(e.get)), i = g.createRef();
  g.useEffect(() => {
    var d;
    i.current && (i.current.value = ((d = e.get) == null ? void 0 : d.toString()) || "");
  }, [e.get, i.current]), g.useEffect(() => {
    if (!+n.get) {
      const d = document.getElementById(t);
      d == null || d.select();
    }
  }, [n.get, t]), Z(
    "number.changeState",
    (d) => {
      if (d == t)
        if (n.get.length) {
          const v = +n.get;
          e.set(v);
        } else
          e.set(null);
    },
    [n.get, t]
  ), Z(
    "number.cancelChangeState",
    (d) => {
      if (d == t) {
        const v = typeof e.get == "number" ? e.get.toString() : "";
        n.set(v), i.current && (i.current.value = v), ye(t);
      }
    },
    [e.get, i, t]
  ), g.useEffect(() => {
    r.noConfirm && ee("number.changeState", t);
  }, [n.get, r.noConfirm]);
  const l = k(!1), c = g.useMemo(() => !r.noConfirm && e.get != +n.get, [r.noConfirm, e.get, n.get]), a = j();
  return /* @__PURE__ */ z(
    "div",
    {
      className: N(`
        relative
        rounded-md
        flex
        items-center
        gap-1
        w-full
      `),
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center w-full", children: /* @__PURE__ */ o(
          ie,
          {
            ref: i,
            onFocus: (d) => {
              l.set(!0), d.currentTarget.select();
            },
            onBlur: () => {
              l.set(!1);
            },
            className: N(r.size == "small" ? "p-1" : "p-2", r.center && "text-center"),
            type: "number",
            id: t,
            min: r.min,
            max: r.max,
            placeholder: r.placeholder,
            onKeyDown: (d) => {
              c && d.key == "Enter" && (d.preventDefault(), d.stopPropagation(), d && ee("number.changeState", t));
            },
            onValueChange: n.set
          }
        ) }),
        c && /* @__PURE__ */ z("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ o(
            te,
            {
              className: "py-1",
              onClick: () => {
                ee("number.cancelChangeState", t);
              },
              style: {
                ...a("gray.opacity", {
                  color: "text.color"
                })
              },
              children: /* @__PURE__ */ o(re, { content: "cancel" })
            }
          ),
          /* @__PURE__ */ o(
            te,
            {
              className: "py-1",
              onClick: () => {
                ee("number.changeState", t);
              },
              children: /* @__PURE__ */ o(re, { content: "change" })
            }
          )
        ] })
      ]
    }
  );
}
const Ns = (e) => `object_${e}`;
function Cs({ state: e, id: r }) {
  return /* @__PURE__ */ o("div", { id: r, children: /* @__PURE__ */ o(re, { content: "The Object Is Defined Before" }) });
}
function je({ eays: e = !0, state: r, onFocus: t, onBlur: n, className: i, style: l, value: c, type: a, ...d }) {
  const v = j(), p = k(!1), f = k(!1), A = g.createRef();
  return /* @__PURE__ */ z("div", { className: "relative", children: [
    /* @__PURE__ */ o(
      "input",
      {
        ref: A,
        onFocus: (s) => {
          t == null || t(s), f.set(!0);
        },
        onBlur: (s) => {
          n == null || n(s), f.set(!1);
        },
        type: p.get ? "text" : "password",
        className: N("p-2 text-xs border border-solid border-transparent font-[inherit] whitespace-nowrap rounded-sm w-full", i),
        style: {
          ...v("field.background", {
            borderColor: f.get ? "primary" : "borders"
          }),
          ...l
        },
        onChange: ({ target: s }) => {
          r.set(s.value);
        },
        value: String(r.get || ""),
        ...d
      }
    ),
    e && /* @__PURE__ */ o(
      H,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          p.set((s) => !s), A.current && (A.current.focus(), A.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: p.get ? Or : Dr
      }
    )
  ] });
}
function Es({ state: e, config: r = {}, id: t }) {
  const n = k(void 0), i = k(void 0), l = k(void 0), c = g.useMemo(() => e.get ? n.get == e.get : !0, [n.get, e.get]), a = g.useMemo(() => i.get == l.get, [i.get, l.get]), d = g.useMemo(() => i.get == e.get, [i.get, e.get]);
  return Z(
    "password.change",
    (v) => {
      t == v && (c && a && e.set(i.get), l.set(""), i.set(""), n.set(""));
    },
    [n.get, i.get, l.get, c, a, t]
  ), /* @__PURE__ */ z("div", { className: "flex flex-col gap-1", children: [
    !!e.get && /* @__PURE__ */ o(je, { id: t, placeholder: "current password", state: n }),
    /* @__PURE__ */ o(je, { id: e.get ? void 0 : t, placeholder: "new password", state: i }),
    /* @__PURE__ */ o(je, { placeholder: "confirm password", state: l }),
    !i.get && !r.canEmpty && /* @__PURE__ */ o("span", { className: "p-1", children: /* @__PURE__ */ o(re, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ o("div", { className: "flex justify-end items-center gap-1", children: c && a && !d && /* @__PURE__ */ o(
      te,
      {
        onClick: () => {
          ee("password.change", t);
        },
        icon: Ir,
        className: "px-2 py-1",
        children: /* @__PURE__ */ o(re, { content: "change" })
      }
    ) })
  ] });
}
function Ms({ id: e, state: r }) {
  const t = k(null), n = k([]), i = g.useRef(null), l = j(), c = k(!1), a = k(!1), d = g.useCallback(async () => {
    const f = [];
    try {
      const A = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (A) {
        const s = new MediaRecorder(A);
        s.ondataavailable = (m) => {
          f.push(m.data), n.set(f);
        }, s.onstop = async () => {
          const m = new Blob(f, { type: "audio/mp3" });
          try {
            const u = URL.createObjectURL(m);
            r.set(u);
          } catch {
          }
        }, s.start(), t.set(s);
      } else
        n.set([]), t.set(null), await Ve({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (A) {
      n.set([]), t.set(null), await Ve({
        type: "error",
        title: "Error detected",
        desc: String(A.message),
        id: "recorder.error",
        showDesc: !0
      });
    }
  }, []), v = g.useCallback(() => {
    var f;
    (f = t.get) == null || f.stop();
  }, [t.get]);
  g.useEffect(() => () => {
    v();
  }, [v]), g.useEffect(() => {
    i.current && (i.current.onplay = () => {
      a.set(!0);
    }, i.current.onpause = () => {
      a.set(!1);
    }, i.current.onended = () => {
      a.set(!1);
    });
  }, [i.current]);
  const p = k(null);
  return g.useEffect(() => {
    if (a.get) {
      const f = setInterval(() => {
        p.set((A) => (A ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(f);
      };
    } else
      p.set(null);
  }, [a.get]), /* @__PURE__ */ o("div", { className: "flex gap-2", children: /* @__PURE__ */ z("div", { className: "inline-flex relative gap-1", children: [
    r.get && /* @__PURE__ */ z(R, { children: [
      /* @__PURE__ */ o(
        ve,
        {
          icon: de,
          onClick: async () => {
            const { response: f } = await me({
              title: "Delete audio",
              message: "Are you sure you want to delete the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            f === 1 && r.set(null);
          }
        }
      ),
      /* @__PURE__ */ o(
        ve,
        {
          onClick: () => {
            var f, A;
            a.get ? (A = i.current) == null || A.pause() : (f = i.current) == null || f.play();
          },
          icon: a.get ? Tr : Lr
        }
      )
    ] }),
    /* @__PURE__ */ o(
      ve,
      {
        id: e,
        style: {
          ...l(
            c.get && {
              backgroundColor: "primary",
              color: "primary.content"
            }
          )
        },
        onClick: async () => {
          if (r.get) {
            const { response: f } = await me({
              title: "Overwrite audio",
              message: "Are you sure you want to overwrite the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            if (!f)
              return;
          }
          c.set((f) => !f), c.get ? v() : d();
        },
        icon: c.get ? Qr : Rr
      }
    ),
    r.get && /* @__PURE__ */ o("audio", { ref: i, src: r.get })
  ] }) });
}
function Bs({ state: e, id: r }) {
  const t = k("");
  g.useEffect(() => {
    t.set(e.get || "");
  }, [e.get]);
  const n = k(!1), i = g.useMemo(() => {
    try {
      return new RegExp(t.get), n.set(!0), null;
    } catch (c) {
      return String(c == null ? void 0 : c.message);
    }
  }, [t.get]), l = j();
  return /* @__PURE__ */ z("div", { children: [
    /* @__PURE__ */ z("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o(
        ie,
        {
          id: `${r}:input`,
          placeholder: "write your regexp here...",
          onFocus: (c) => {
            c.target.select();
          },
          onValueChange: e.set,
          value: e.get
        }
      ),
      !i && /* @__PURE__ */ o(
        te,
        {
          className: "py-1",
          id: `${r}:submit`,
          onClick: () => {
            e.set(t.get), n.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    i && /* @__PURE__ */ o(
      "div",
      {
        className: N(`
            mt-2
            p-1
            text-xs
            border
            border-solid
            border-transparent
            w-fit
          `),
        style: {
          ...l("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: i
      }
    )
  ] });
}
function Fs({ temp: e, animited: r, style: t, children: n, max: i = 0, min: l = 600, position: c = "left", hidden: a = !1, handelResize: d, className: v, ...p }) {
  const f = k(null);
  g.useEffect(() => {
    const w = fr(`resizeData.${e}`);
    f.set(w);
  }, []), pt(
    () => {
      V(`resizeData.${e}`, f.get);
    },
    [f.get],
    1e3
  );
  const A = g.createRef(), s = ["left", "right"].includes(c) ? "width" : "height";
  let m = 0;
  const u = k(null), y = typeof r == "boolean" ? r : K("preferences/animation.boolean"), b = k(null);
  g.useEffect(() => {
    const w = () => {
      if (!f.get) return;
      const M = typeof l == "number" ? l : l(f.get), x = typeof i == "number" ? i : i(f.get);
      M >= f.get ? (u.set("min"), f.set(M)) : f.get >= x ? (u.set("max"), f.set(x)) : (u.set(null), f.set(f.get)), m = f.get;
    }, B = () => {
      b.set(null);
    };
    return addEventListener("resize", w), addEventListener("pointerup", B), () => {
      removeEventListener("resize", w), removeEventListener("pointerup", B);
    };
  }, [f.get, l, i]);
  const h = j();
  g.useEffect(() => {
    const w = typeof l == "function" ? l(f.get || 0) : l;
    if (!f.get) {
      f.set(w);
      return;
    }
  }, [f.get, l, i]);
  const C = g.useMemo(() => b.get ? "start" : "end", [b.get]);
  return /* @__PURE__ */ z("div", { className: "relative h-full", children: [
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          [s]: a ? "0px" : `${f.get}px`,
          ...t
        },
        ...p,
        className: N("overflow-hidden", v, y && C == "end" && "transition-[width]"),
        ref: A,
        children: n
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: N("resize-bar absolute transition-all opacity-0 cursor-e-resize z-[1000000] hover:opacity-100", c),
        onPointerDown: (w) => {
          const { currentTarget: B } = w;
          b.set(B.getBoundingClientRect());
        },
        style: {
          ...h({
            backgroundColor: "primary"
          })
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            hidden: !b.get,
            onMouseMove: (w) => {
              var U;
              w.preventDefault();
              const { pageX: B, pageY: M } = w;
              if (!f)
                return;
              const x = (U = A == null ? void 0 : A.current) == null ? void 0 : U.getBoundingClientRect();
              let E = 0;
              switch (c) {
                case "right": {
                  E = B - Number(x == null ? void 0 : x.left);
                  break;
                }
                case "left": {
                  E = -B + Number(x == null ? void 0 : x.right);
                  break;
                }
                case "top": {
                  E = Number(x == null ? void 0 : x.bottom) - M;
                  break;
                }
                case "bottom": {
                  E = M - Number(x == null ? void 0 : x.top);
                  break;
                }
              }
              const O = typeof l == "number" ? l : l(E), D = typeof i == "number" ? i : i(E);
              O >= E ? (u.set("min"), f.set(O)) : E >= D ? (u.set("max"), f.set(D)) : (u.set(null), f.set(E)), m = E, d && d({ ...w, size: m, min: O, max: D });
            },
            className: "resize-overview"
          }
        )
      }
    )
  ] });
}
function Ss({ data: e, slotId: r, focusId: t = r, component: n, children: i, handelSkipedItem: l, className: c, direction: a, ref: d, type: v = "horizontal", ...p }) {
  const f = typeof n == "function" ? n : ({ index: h, id: C, handelSubmit: w, handelFocus: B, handelSelect: M, status: x, item: E }) => {
    const O = k(!1), D = g.useMemo(() => O.get, [O.get]), U = h % 2 == 1, P = j();
    return /* @__PURE__ */ z(
      "div",
      {
        id: C,
        "data-is-odd": U,
        onMouseEnter: () => O.set(!0),
        onMouseLeave: () => O.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: w(),
        onPointerDown: B(M()),
        style: {
          ...P(
            U && "secondry.background",
            O.get && "gray.opacity",
            (x.isFocused || x.isSubmited) && {
              borderColor: "primary"
            },
            (x.isSelected || x.isSubmited) && {
              backgroundColor: "secondry",
              color: "secondry.content"
            }
          )
        },
        children: [
          /* @__PURE__ */ o("div", { className: "col", children: /* @__PURE__ */ o("div", { className: N("w-[100px] flex items-center justify-end", !D && "invisible") }) }),
          n == null ? void 0 : n.map((L) => /* @__PURE__ */ o("div", { className: "col", children: `${E[L]}` }))
        ]
      }
    );
  }, A = I.useOneFeild(r, "focused"), s = I.useOneFeild(r, "submited"), m = I.useOneFeild(r, "length"), u = I.useOneFeild(r, "selected"), y = I.useOneFeild(r, "direction"), b = g.useMemo(() => f, []);
  return g.useEffect(() => {
    m.set(e.length);
  }, [e]), g.useEffect(() => {
    if (typeof A.get != "number")
      return;
    const h = document.getElementById(`${r}/${A.get}`);
    h && !At(h) && ht(h, y.get == "backward" ? 0 : -1);
  }, [A.get, y.get]), /* @__PURE__ */ o(Le, { className: N("flex flex-col overflow-hidden h-full w-full", c), focusId: t, ...p, children: /* @__PURE__ */ z(Te, { className: N(v == "vertical" && "flex"), children: [
    /* @__PURE__ */ o(R, { children: e.map((h, C) => {
      var B;
      const w = {
        isFocused: C == A.get,
        isSelected: !!((B = u.get) != null && B[C]),
        isSubmited: C == s.get,
        isSkiped: !!(l && l(h))
      };
      return /* @__PURE__ */ o(
        b,
        {
          id: `${r}/${C}`,
          handelFocus: (M) => (x) => {
            A.set(C), M == null || M(x);
          },
          handelSubmit: (M) => (x) => {
            s.set(C), M == null || M(x);
          },
          handelSelect: (M) => (x) => {
            x.ctrlKey ? u.set((E) => ({
              ...E,
              [C]: !(E != null && E[C])
            })) : u.set({
              [C]: !0
            }), M == null || M(x);
          },
          tabIndex: w.isFocused ? 1 : -1,
          item: h,
          index: C,
          status: w
        },
        C
      );
    }) }),
    i
  ] }) });
}
function js({ state: e, config: r = {}, id: t }) {
  gt(`${t}:input`);
  const n = G.useOneFeild(`${t}:input`, "value");
  Z(
    "string.change",
    () => {
      const c = _e();
      c && [t, `${t}:change`].includes(c) && e.set(n.get || "");
    },
    [n.get, t]
  ), Z(
    "string.cancel",
    () => {
      if (r.uncancable)
        return;
      const c = _e();
      if (c && [t, `${t}:cancel`].includes(c)) {
        const a = e.get || "";
        n.set(a), e.set(a);
      }
    },
    [e.get, t, r]
  );
  const i = j(), l = g.useMemo(() => n.get || "", [n.get]);
  return /* @__PURE__ */ z("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ o(
      ie,
      {
        maxLength: r.maxLength,
        minLength: r.minLength,
        type: r.locked ? "password" : "text",
        id: t,
        className: "text-xs",
        value: l,
        placeholder: r.hint || `provide value for ${t}`,
        onValueChange: n.set
      }
    ),
    (e.get || "") != (n.get || "") && /* @__PURE__ */ z("div", { className: "flex items-cente gap-x-2", children: [
      !r.uncancable && /* @__PURE__ */ o(
        te,
        {
          className: "w-fit",
          id: `${t}:cancel`,
          onClick: () => {
            ee("string.cancel");
          },
          style: {
            ...i("gray.opacity.2")
          },
          children: "cancel"
        }
      ),
      /* @__PURE__ */ o(
        te,
        {
          className: "w-fit",
          id: `${t}:change`,
          onClick: () => {
            ee("string.change");
          },
          children: "change"
        }
      )
    ] })
  ] });
}
function Os() {
  const e = mr(), r = vr(), t = pr(), n = gr(), i = j();
  return /* @__PURE__ */ o(
    "div",
    {
      onTransitionEnd: () => {
        e || Ae(null);
      },
      className: N(
        `
          fixed
          z-[1000000000000000000000]
          pointer-events-none
          opacity-0
          transition-opacity
          delay-300
          duration-500
        `,
        r && "opacity-100",
        t == "left" && "-translate-x-full",
        t == "center" && "-translate-x-1/2",
        n == "top" && "-translate-y-full",
        n == "center" && "-translate-y-1/2",
        (e || e == 0) && "opacity-100"
      ),
      style: {
        ...Re(
          {
            left: "-1000px",
            top: "-2000px"
          },
          r && {
            left: `${r[0]}px`,
            top: `${r[1]}px`
          }
        )
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          className: N(`
            border
            border-solid
            border-transparent
            rounded-lg
            m-3
            py-1
            px-2
          `),
          style: {
            ...i("secondry.background", {
              borderColor: "borders",
              boxShadow: ce([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
            })
          },
          children: /* @__PURE__ */ o(Pe, { value: String(e) })
        }
      )
    }
  );
}
function _n({ treeId: e, tree: r = [], component: t, level: n = 0, position: i = "", parent: l }) {
  const c = g.useMemo(() => t, []), a = le.getOne(e);
  return n == 0 && Ar(e), g.useEffect(() => {
    if (!a)
      return;
    const d = Array.from(new Set(a.ends)), v = `${i}${a.separator}${r.length}`;
    d.includes(v) || le.setOneFeild(e, "ends", [...d, v]);
  }, [r, a]), /* @__PURE__ */ o(R, { children: r.map(({ data: d, innerTree: v }, p) => {
    var m, u;
    const f = `${i}${a == null ? void 0 : a.separator}${p}`, A = {
      data: d,
      parent: l
    }, s = {
      isFocused: f == (a == null ? void 0 : a.focused),
      isSelected: !!((m = a == null ? void 0 : a.selected) != null && m[f]),
      isSubmited: (a == null ? void 0 : a.submited) == f,
      isExpanded: !!((u = a == null ? void 0 : a.expanded) != null && u[f])
    };
    return /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ o(
        c,
        {
          status: s,
          handels: {
            focus() {
              a && le.setOneFeild(e, "focused", f);
            },
            select(y, b) {
              a && le.setOneFeild(
                e,
                "selected",
                y ? {
                  [f]: b
                } : {
                  ...a.selected,
                  [f]: b
                }
              );
            },
            submit() {
              a && le.setOneFeild(e, "submited", f);
            },
            expand(y, b) {
              a && le.setOneFeild(e, "expanded", {
                ...y ? {} : a.expanded || {},
                [f]: b
              });
            }
          },
          level: n,
          isFins: !v,
          position: f,
          data: d,
          index: p,
          parent: A,
          innerTree: v
        }
      ),
      Array.isArray(v) && s.isExpanded && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(_n, { position: f, component: t, tree: v, treeId: e, level: n + 1, parent: A }) })
    ] }, p);
  }) });
}
function Ds({ views: e, viewId: r }) {
  const t = hr.getOneFeild(r, "focused"), n = t && e[t];
  return /* @__PURE__ */ o("div", { className: "flex flex-col w-full h-full overflow-hidden", children: n ? /* @__PURE__ */ o(n, {}) : /* @__PURE__ */ o(R, {}) });
}
export {
  Wn as A,
  Nt as B,
  ve as C,
  ls as D,
  As as E,
  hs as F,
  Bs as G,
  Fs as H,
  ue as I,
  Ss as J,
  Wt as K,
  Zn as L,
  Pe as M,
  ks as N,
  Cs as O,
  je as P,
  js as Q,
  Ms as R,
  Kn as S,
  Yt as T,
  as as U,
  Vn as V,
  H as W,
  Os as X,
  _n as Y,
  Ds as Z,
  re as a,
  cs as b,
  is as c,
  te as d,
  ds as e,
  fs as f,
  Ye as g,
  ms as h,
  vs as i,
  qn as j,
  ps as k,
  Ze as l,
  ys as m,
  bs as n,
  xs as o,
  zt as p,
  ws as q,
  Ps as r,
  gs as s,
  zs as t,
  Ns as u,
  os as v,
  $r as w,
  Es as x,
  Zt as y,
  us as z
};
