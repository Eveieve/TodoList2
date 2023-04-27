(() => {
  "use strict";
  var e = {
      28: (e, n, t) => {
        t.d(n, { Z: () => m });
        var r = t(537),
          o = t.n(r),
          a = t(645),
          d = t.n(a),
          i = t(667),
          s = t.n(i),
          c = new URL(t(613), t.b),
          A = new URL(t(53), t.b),
          l = d()(o()),
          u = s()(c),
          p = s()(A);
        l.push([
          e.id,
          ":root {\n  --blue: rgb(83, 127, 231);\n  --skyblue: rgb(192, 238, 242);\n  --light-blue: rgb(192, 238, 242);\n  --grey: rgb(95, 99, 104);\n  --light-grey: rgba(169, 174, 183, 0.5);\n}\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n \n}\n* {\n box-sizing: border-box;\n/* border: 1px solid salmon; */\n}\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-container {\n    width: 70rem;\n    background-color: rgb(255, 255, 255);\n    height:45rem;\n    border-radius: 1rem;\n    padding: 1.5rem;\n   \nbox-shadow: rgba(169, 174, 183, 0.5) 1px 1px 2px 2px;\n\n  }\n  h1 {\n    margin: 0;\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    color: var(--blue);\n  }\n  h1:hover{\n    zoom: 120%;\n  }\n  .project-section {\n    /* overflow: scroll; */\n    background-color:white;\n   height: 100%;\n   display: flex;\n   flex-direction: column;\n   gap: 1rem;\n   padding: 1rem;\n  }\n  \n  .project-form {\n    display: flex;\n    gap:.5rem;\n  }\n\n.rendered-projects,\n.rendered-tasks {\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n}\n\n  .sec-container {\n    background-color: white;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    gap: 1rem;\n   /* height: 100%; */\n   \n  }\n.rendered-task,\n.rendered-project{\n \n  display: flex;\n  align-items: center;\n  \n  width: 23rem;\n  height: min-content;\n  border-radius: .3rem;\n  padding: .3rem;\n gap: .5rem;\n}\n.checkbox-checked{\n  text-decoration: line-through;\n}\n.rendered-task:hover,\n.rendered-project:hover{\n/* box-shadow: 1px .1px 1px 2px rgb(199, 199, 199); */\nbox-shadow: rgba(169, 174, 183, 0.5) 0px 1px 2px 0px;\n}\n  /* both rendered tasks & projects style */\n  .rendered-project-title,\n  .rendered-task-title {\n    font-size: 1rem;\n   border-style: none;\n  width: 20rem;\n  }\n  .task-section{\n    padding: .5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n  }\n \n  /* task box containing title&notes&date */\n.title-box{\nwidth: 15rem;\noverflow-wrap: break-word;\n}\n.rendered-date,\n.rendered-notes{\n  margin: 0;\n\n}\n.rendered-notes{\n  color: var(--grey);\n}\n.rendered-date {\n  color: var(--grey);\n  font-size: .8rem;\n}\ninput:focus {\n  outline-style: none;\n  /* border: 2px solid rgb(124, 164, 250); */\n}\ninput.project-title{\n  border-style: none;\n  /* background-color: var(--light-grey); */\n border-radius: .5rem;\n padding: .3rem;\n}\ninput.project-title:hover,\ninput.project-title:focus {\n  background-color: var(--light-grey);\n}\ninput.project-title:hover::placeholder  {\n  color: var(--blue);\n}\n.task-input:hover::placeholder {\n  color: var(--blue);\n}\n.task-input {\n  border: 2px solid transparent;\n border-radius: .5rem;\n padding: .3rem;\n}\n.task-input:hover,\n.task-input:focus {\n  background-color: var(--light-grey);\n}\n.add-btn {\n  width: 2.5rem;\n  background-image: url(" +
            u +
            ");\n  background-repeat: no-repeat;\n  border-style: none;\n  filter: invert(45%) sepia(63%) saturate(879%) hue-rotate(193deg) brightness(95%) contrast(90%);\n}\n.add-btn:hover {\n  background-image: url(" +
            p +
            ');\n  background-repeat: no-repeat;\n}\n.editable:focus {\n  border: 1px solid rgb(124, 164, 250);\n border-radius: .2rem;\n}\n\n/* input {\n  cursor: pointer;\n} */\n\ninput[type="checkbox"]{\nwidth: 2rem;\naccent-color: var(--blue);\npadding: .3rem;\n\n}\ninput[type="checkbox"]:hover{\n  zoom: 120%;\n}\n.modal{\n  box-sizing: content-box; \n  border: 1px solid  var(--blue);\n  border-radius: .3rem;\n  width: 12rem;\n  height: 10rem;\n }\ntextarea {\n  border: 1px solid  var(--blue);\n  border-radius: .3rem;\n\n  height: 8rem;\n}\ntextarea:focus{\n  outline: none;\n  border: 1px solid  var(--blue);\n  border-radius: .3rem;\n}\n\n.edit-btn {\n  display: none;\n}\n.delete-btn{\n  /* background-image: url("svg/delete-outline.svg"); */\n  background-repeat: no-repeat;\n  min-width: 1rem;\n  min-height: 1rem;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles.css"],
            names: [],
            mappings:
              "AAAA;EACE,yBAAyB;EACzB,6BAA6B;EAC7B,gCAAgC;EAChC,wBAAwB;EACxB,sCAAsC;AACxC;AACA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;;AAEX;AACA;CACC,sBAAsB;AACvB,8BAA8B;AAC9B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;IACI,YAAY;IACZ,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;IACnB,eAAe;;AAEnB,oDAAoD;;EAElD;EACA;IACE,SAAS;IACT,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,UAAU;EACZ;EACA;IACE,sBAAsB;IACtB,sBAAsB;GACvB,YAAY;GACZ,aAAa;GACb,sBAAsB;GACtB,SAAS;GACT,aAAa;EACd;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;AAEF;;EAEE,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;;EAEE;IACE,uBAAuB;IACvB,aAAa;IACb,8BAA8B;IAC9B,SAAS;GACV,kBAAkB;;EAEnB;AACF;;;EAGE,aAAa;EACb,mBAAmB;;EAEnB,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,cAAc;CACf,UAAU;AACX;AACA;EACE,6BAA6B;AAC/B;AACA;;AAEA,qDAAqD;AACrD,oDAAoD;AACpD;EACE,yCAAyC;EACzC;;IAEE,eAAe;GAChB,kBAAkB;EACnB,YAAY;EACZ;EACA;IACE,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,SAAS;;EAEX;;EAEA,yCAAyC;AAC3C;AACA,YAAY;AACZ,yBAAyB;AACzB;AACA;;EAEE,SAAS;;AAEX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,0CAA0C;AAC5C;AACA;EACE,kBAAkB;EAClB,yCAAyC;CAC1C,oBAAoB;CACpB,cAAc;AACf;AACA;;EAEE,mCAAmC;AACrC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,6BAA6B;CAC9B,oBAAoB;CACpB,cAAc;AACf;AACA;;EAEE,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,yDAAqC;EACrC,4BAA4B;EAC5B,kBAAkB;EAClB,8FAA8F;AAChG;AACA;EACE,yDAA4C;EAC5C,4BAA4B;AAC9B;AACA;EACE,oCAAoC;CACrC,oBAAoB;AACrB;;AAEA;;GAEG;;AAEH;AACA,WAAW;AACX,yBAAyB;AACzB,cAAc;;AAEd;AACA;EACE,UAAU;AACZ;AACA;EACE,uBAAuB;EACvB,8BAA8B;EAC9B,oBAAoB;EACpB,YAAY;EACZ,aAAa;CACd;AACD;EACE,8BAA8B;EAC9B,oBAAoB;;EAEpB,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;AACA;EACE,qDAAqD;EACrD,4BAA4B;EAC5B,eAAe;EACf,gBAAgB;AAClB",
            sourcesContent: [
              ':root {\n  --blue: rgb(83, 127, 231);\n  --skyblue: rgb(192, 238, 242);\n  --light-blue: rgb(192, 238, 242);\n  --grey: rgb(95, 99, 104);\n  --light-grey: rgba(169, 174, 183, 0.5);\n}\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n \n}\n* {\n box-sizing: border-box;\n/* border: 1px solid salmon; */\n}\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-container {\n    width: 70rem;\n    background-color: rgb(255, 255, 255);\n    height:45rem;\n    border-radius: 1rem;\n    padding: 1.5rem;\n   \nbox-shadow: rgba(169, 174, 183, 0.5) 1px 1px 2px 2px;\n\n  }\n  h1 {\n    margin: 0;\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    color: var(--blue);\n  }\n  h1:hover{\n    zoom: 120%;\n  }\n  .project-section {\n    /* overflow: scroll; */\n    background-color:white;\n   height: 100%;\n   display: flex;\n   flex-direction: column;\n   gap: 1rem;\n   padding: 1rem;\n  }\n  \n  .project-form {\n    display: flex;\n    gap:.5rem;\n  }\n\n.rendered-projects,\n.rendered-tasks {\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n}\n\n  .sec-container {\n    background-color: white;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    gap: 1rem;\n   /* height: 100%; */\n   \n  }\n.rendered-task,\n.rendered-project{\n \n  display: flex;\n  align-items: center;\n  \n  width: 23rem;\n  height: min-content;\n  border-radius: .3rem;\n  padding: .3rem;\n gap: .5rem;\n}\n.checkbox-checked{\n  text-decoration: line-through;\n}\n.rendered-task:hover,\n.rendered-project:hover{\n/* box-shadow: 1px .1px 1px 2px rgb(199, 199, 199); */\nbox-shadow: rgba(169, 174, 183, 0.5) 0px 1px 2px 0px;\n}\n  /* both rendered tasks & projects style */\n  .rendered-project-title,\n  .rendered-task-title {\n    font-size: 1rem;\n   border-style: none;\n  width: 20rem;\n  }\n  .task-section{\n    padding: .5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n  }\n \n  /* task box containing title&notes&date */\n.title-box{\nwidth: 15rem;\noverflow-wrap: break-word;\n}\n.rendered-date,\n.rendered-notes{\n  margin: 0;\n\n}\n.rendered-notes{\n  color: var(--grey);\n}\n.rendered-date {\n  color: var(--grey);\n  font-size: .8rem;\n}\ninput:focus {\n  outline-style: none;\n  /* border: 2px solid rgb(124, 164, 250); */\n}\ninput.project-title{\n  border-style: none;\n  /* background-color: var(--light-grey); */\n border-radius: .5rem;\n padding: .3rem;\n}\ninput.project-title:hover,\ninput.project-title:focus {\n  background-color: var(--light-grey);\n}\ninput.project-title:hover::placeholder  {\n  color: var(--blue);\n}\n.task-input:hover::placeholder {\n  color: var(--blue);\n}\n.task-input {\n  border: 2px solid transparent;\n border-radius: .5rem;\n padding: .3rem;\n}\n.task-input:hover,\n.task-input:focus {\n  background-color: var(--light-grey);\n}\n.add-btn {\n  width: 2.5rem;\n  background-image: url("svg/plus.svg");\n  background-repeat: no-repeat;\n  border-style: none;\n  filter: invert(45%) sepia(63%) saturate(879%) hue-rotate(193deg) brightness(95%) contrast(90%);\n}\n.add-btn:hover {\n  background-image: url("svg/plus-circle.svg");\n  background-repeat: no-repeat;\n}\n.editable:focus {\n  border: 1px solid rgb(124, 164, 250);\n border-radius: .2rem;\n}\n\n/* input {\n  cursor: pointer;\n} */\n\ninput[type="checkbox"]{\nwidth: 2rem;\naccent-color: var(--blue);\npadding: .3rem;\n\n}\ninput[type="checkbox"]:hover{\n  zoom: 120%;\n}\n.modal{\n  box-sizing: content-box; \n  border: 1px solid  var(--blue);\n  border-radius: .3rem;\n  width: 12rem;\n  height: 10rem;\n }\ntextarea {\n  border: 1px solid  var(--blue);\n  border-radius: .3rem;\n\n  height: 8rem;\n}\ntextarea:focus{\n  outline: none;\n  border: 1px solid  var(--blue);\n  border-radius: .3rem;\n}\n\n.edit-btn {\n  display: none;\n}\n.delete-btn{\n  /* background-image: url("svg/delete-outline.svg"); */\n  background-repeat: no-repeat;\n  min-width: 1rem;\n  min-height: 1rem;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const m = l;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var d = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (d[s] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var A = [].concat(e[c]);
                (r && d[A[0]]) ||
                  (void 0 !== a &&
                    (void 0 === A[5] ||
                      (A[1] = "@layer"
                        .concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")
                        .concat(A[1], "}")),
                    (A[5] = a)),
                  t &&
                    (A[2]
                      ? ((A[1] = "@media "
                          .concat(A[2], " {")
                          .concat(A[1], "}")),
                        (A[2] = t))
                      : (A[2] = t)),
                  o &&
                    (A[4]
                      ? ((A[1] = "@supports ("
                          .concat(A[4], ") {")
                          .concat(A[1], "}")),
                        (A[4] = o))
                      : (A[4] = "".concat(o))),
                  n.push(A));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              a = "/*# ".concat(o, " */");
            return [n].concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, d = [], i = 0; i < e.length; i++) {
            var s = e[i],
              c = r.base ? s[0] + r.base : s[0],
              A = a[c] || 0,
              l = "".concat(c, " ").concat(A);
            a[c] = A + 1;
            var u = t(l),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(p);
            else {
              var m = o(p, r);
              (r.byIndex = i),
                n.splice(i, 0, { identifier: l, updater: m, references: 1 });
            }
            d.push(l);
          }
          return d;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var d = 0; d < a.length; d++) {
              var i = t(a[d]);
              n[i].references--;
            }
            for (var s = r(e, o), c = 0; c < a.length; c++) {
              var A = t(a[c]);
              0 === n[A].references && (n[A].updater(), n.splice(A, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      53: (e, n, t) => {
        e.exports = t.p + "057fbbe813d06c74ac0c.svg";
      },
      613: (e, n, t) => {
        e.exports = t.p + "3cffe9a515498593b872.svg";
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        o = t.n(r),
        a = t(569),
        d = t.n(a),
        i = t(565),
        s = t.n(i),
        c = t(216),
        A = t.n(c),
        l = t(589),
        u = t.n(l),
        p = t(28),
        m = {};
      (m.styleTagTransform = u()),
        (m.setAttributes = s()),
        (m.insert = d().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = A()),
        n()(p.Z, m),
        p.Z && p.Z.locals && p.Z.locals;
      class C {
        constructor(e, n) {
          (this.title = e),
            (this.dueDate = n),
            (this.doneStatus = !1),
            (this.id = crypto.randomUUID()),
            (this.task = []);
        }
        toggleDoneStatus() {
          this.doneStatus = !this.doneStatus;
        }
      }
      const g =
        JSON.parse(localStorage.getItem("storageProjectsArr"))?.map((e) =>
          Object.assign(new C(), e)
        ) ?? [];
      class b extends C {
        constructor(e, n) {
          super(e, n), (this.dueDate = ""), (this.notes = "");
        }
      }
      const h = t.p + "de0bb67a90c508546224.svg",
        f = document.querySelector(".task-section"),
        E = document.createElement("div");
      function v(e) {
        const n = (n) => {
          const r = document.createElement("div");
          r.classList.add("rendered-task"),
            r.setAttribute("id", `${n.id}`),
            E.prepend(r);
          const o = document.createElement("input");
          o.setAttribute("type", "checkbox"),
            n.doneStatus && o.setAttribute("checked", "checked"),
            r.appendChild(o),
            o.addEventListener("click", () => {
              !(function (e) {
                e.doneStatus = !e.doneStatus;
              })(n),
                localStorage.setItem("storageProjectsArr", JSON.stringify(g));
            });
          const a = document.createElement("div");
          a.classList.add("title-box"), r.appendChild(a);
          const d = document.createElement("input");
          d.classList.add("rendered-task-title"),
            d.setAttribute("readonly", "readonly"),
            (d.value = n.title),
            a.appendChild(d),
            d.addEventListener("dblclick", () => {
              d.classList.add("editable"), d.focus(), (d.readOnly = !1);
            }),
            d.addEventListener("keypress", (e) => {
              "Enter" === e.key && (e.preventDefault(), c.click());
            });
          const i = document.createElement("p");
          i.classList.add("rendered-notes"), a.appendChild(i);
          const s = document.createElement("p");
          s.classList.add("rendered-date"), a.appendChild(s);
          const c = document.createElement("button");
          (c.textContent = "edit"),
            c.classList.add("edit-btn"),
            r.appendChild(c),
            c.addEventListener("click", () => {
              !(function (e, n) {
                (n.title = e.value),
                  localStorage.setItem("storageProjectsArr", JSON.stringify(g));
              })(d, n),
                t(e);
            });
          const A = document.createElement("img");
          A.classList.add("delete-btn"), (A.src = h), r.appendChild(A);
          const l = n.id;
          r.addEventListener("click", (n) => {
            "delete-btn" === n.target.className &&
              (n.target.closest(".rendered-task"),
              (function (n) {
                const t = e.task.findIndex((e) => e.id === n);
                e.task.splice(t, 1),
                  localStorage.setItem("storageProjectsArr", JSON.stringify(g));
              })(l),
              t(e));
          });
          const u = document.createElement("div");
          (u.textContent = "details"),
            u.classList.add("notes-div"),
            r.appendChild(u);
          const p = document.createElement("dialog");
          p.classList.add("modal"), document.body.appendChild(p);
          const m = document.createElement("div");
          p.appendChild(m);
          const C = document.createElement("form");
          C.classList.add("notes-form"), m.appendChild(C);
          const b = document.createElement("textarea");
          (b.textContent = `${n.notes}`), C.appendChild(b);
          const f = document.createElement("input");
          f.classList.add("date-input"),
            f.setAttribute("type", "date"),
            (f.value = `${n.dueDate}`),
            C.appendChild(f);
          const v = document.createElement("button");
          (v.textContent = "save"),
            C.appendChild(v),
            u.addEventListener("click", () => {
              p.showModal();
            }),
            v.addEventListener("click", (e) => {
              e.preventDefault();
              let t = b.value;
              !(function (e, n) {
                (e.notes = n),
                  localStorage.setItem("storageProjectsArr", JSON.stringify(g));
              })(n, t);
              var r;
              (r = f.value),
                (n.dueDate = r),
                localStorage.setItem("storageProjectsArr", JSON.stringify(g)),
                console.log(n),
                p.close(),
                B(n, i),
                y(n, s);
            }),
            B(n, i),
            y(n, s);
        };
        function t(e) {
          for (; E.firstChild; ) E.firstChild.remove();
          e.task.forEach(n);
        }
        t(e);
      }
      function B(e, n) {
        "" !== e.notes && (n.textContent = `${e.notes}`);
      }
      function y(e, n) {
        "" !== e.dueDate && (n.textContent = `${e.dueDate}`);
      }
      E.classList.add("rendered-tasks");
      const x = document.querySelector(".project-section"),
        k = document.querySelector(".rendered-projects"),
        S = document.querySelector(".project-form");
      function w(e) {
        const n = document.createElement("div");
        n.classList.add("rendered-project"), k.prepend(n);
        const t = document.createElement("input");
        t.setAttribute("type", "checkbox"),
          e.doneStatus && t.setAttribute("checked", "checked"),
          n.appendChild(t),
          n.classList.add("project-rendered"),
          n.setAttribute("id", `${e.id}`);
        const r = document.createElement("input");
        r.setAttribute("readonly", "readonly"),
          (r.value = e.title),
          r.classList.add("rendered-project-title", "rendered-title"),
          n.appendChild(r),
          r.addEventListener("dblclick", () => {
            r.classList.add("editable"), r.focus(), (r.readOnly = !1);
          }),
          n.addEventListener("click", (n) => {
            (n.target == n.currentTarget ||
              n.target.classList.contains("rendered-project-title")) &&
              ((function (e) {
                for (; f.firstChild; ) f.firstChild.remove();
                !(function (e) {
                  const n = document.createElement("h2");
                  (n.textContent = e.title), f.appendChild(n);
                  const t = document.createElement("form");
                  f.appendChild(t);
                  const r = document.createElement("input");
                  r.setAttribute("placeholder", "Add a task"),
                    r.classList.add("task-input"),
                    t.appendChild(r),
                    f.appendChild(E),
                    t.addEventListener("keypress", (n) => {
                      "task-input" === n.target.className &&
                        ("Enter" === n.key) & ("" !== r.value) &&
                        (n.preventDefault(),
                        (function (e) {
                          const n = document.querySelector(".task-input").value,
                            t = new b(n);
                          console.log(g),
                            e.task.push(t),
                            localStorage.setItem(
                              "storageProjectsArr",
                              JSON.stringify(g)
                            );
                        })(e),
                        v(e),
                        (r.value = ""));
                    });
                })(e);
              })(e),
              v(e));
          });
        const o = document.createElement("button");
        o.classList.add("project-edit-btn"),
          (o.textContent = "edit"),
          o.addEventListener("click", () => {
            !(function (e, n) {
              (n.title = e.value),
                localStorage.setItem("storageProjectsArr", JSON.stringify(g));
            })(r, e),
              j();
          }),
          r.addEventListener("keypress", (e) => {
            "Enter" === e.key && (e.preventDefault(), o.click());
          }),
          n.appendChild(o);
        const a = document.createElement("button");
        (a.textContent = "delete"),
          n.appendChild(a),
          t.addEventListener("click", (n) => {
            n.stopPropagation(),
              e.toggleDoneStatus(),
              localStorage.setItem("storageProjectsArr", JSON.stringify(g));
          });
        const d = e.id;
        a.addEventListener("click", () => {
          !(function (e) {
            const n = g.findIndex((n) => n.id === e);
            g.splice(n, 1),
              localStorage.setItem("storageProjectsArr", JSON.stringify(g));
          })(d),
            j();
        });
      }
      function j() {
        for (; k.firstChild; ) k.firstChild.remove();
        console.log(g), g.forEach(w);
      }
      x.appendChild(S), x.appendChild(k);
      const I = document.querySelector(".add-btn"),
        L = document.querySelector(".project-title");
      j(),
        I.addEventListener("click", (e) => {
          e.preventDefault(),
            "" !== L.value &&
              ((function () {
                const e = document.querySelector(".project-title").value,
                  n = new C(e);
                g.push(n),
                  console.log(n),
                  localStorage.setItem("storageProjectsArr", JSON.stringify(g));
              })(),
              j(),
              (L.value = ""));
        }),
        L.addEventListener("keypress", (e) => {
          "Enter" === e.key && (e.preventDefault(), I.click());
        });
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qm5FLEVBQVl2SixLQUFLa0ssR0FDakI0QyxRQUFRQyxJQUFJN0MsR0FDWlQsYUFBYWdCLFFBQVEscUJBQXNCakksS0FBS0MsVUFBVThHLEdBQzVELENJYklvRixHQUNBTCxJQUNBWixFQUFhOUMsTUFBUSxHQUN2QixJQUdGOEMsRUFBYWxELGlCQUFpQixZQUFhcEYsSUFDM0IsVUFBVkEsRUFBRWdDLE1BQ0poQyxFQUFFMkYsaUJBQ0YyRCxFQUFPekQsUUFDVCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Mi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0Mi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0Mi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0Mi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0Mi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdDIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9saXN0Mi8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Mi8uL3NyYy9saXR0bGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9zcmMvbGl0dGxlLXRhc2tET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJzdmcvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJzdmcvcGx1cy1jaXJjbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmx1ZTogcmdiKDgzLCAxMjcsIDIzMSk7XFxuICAtLXNreWJsdWU6IHJnYigxOTIsIDIzOCwgMjQyKTtcXG4gIC0tbGlnaHQtYmx1ZTogcmdiKDE5MiwgMjM4LCAyNDIpO1xcbiAgLS1ncmV5OiByZ2IoOTUsIDk5LCAxMDQpO1xcbiAgLS1saWdodC1ncmV5OiByZ2JhKDE2OSwgMTc0LCAxODMsIDAuNSk7XFxufVxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuIFxcbn1cXG4qIHtcXG4gYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4vKiBib3JkZXI6IDFweCBzb2xpZCBzYWxtb247ICovXFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGhlaWdodDo0NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgIFxcbmJveC1zaGFkb3c6IHJnYmEoMTY5LCAxNzQsIDE4MywgMC41KSAxcHggMXB4IDJweCAycHg7XFxuXFxuICB9XFxuICBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIH1cXG4gIGgxOmhvdmVye1xcbiAgICB6b29tOiAxMjAlO1xcbiAgfVxcbiAgLnByb2plY3Qtc2VjdGlvbiB7XFxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgaGVpZ2h0OiAxMDAlO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBnYXA6IDFyZW07XFxuICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDouNXJlbTtcXG4gIH1cXG5cXG4ucmVuZGVyZWQtcHJvamVjdHMsXFxuLnJlbmRlcmVkLXRhc2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4gIC5zZWMtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICBcXG4gIH1cXG4ucmVuZGVyZWQtdGFzayxcXG4ucmVuZGVyZWQtcHJvamVjdHtcXG4gXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbiAgd2lkdGg6IDIzcmVtO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcbiAgcGFkZGluZzogLjNyZW07XFxuIGdhcDogLjVyZW07XFxufVxcbi5jaGVja2JveC1jaGVja2Vke1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5yZW5kZXJlZC10YXNrOmhvdmVyLFxcbi5yZW5kZXJlZC1wcm9qZWN0OmhvdmVye1xcbi8qIGJveC1zaGFkb3c6IDFweCAuMXB4IDFweCAycHggcmdiKDE5OSwgMTk5LCAxOTkpOyAqL1xcbmJveC1zaGFkb3c6IHJnYmEoMTY5LCAxNzQsIDE4MywgMC41KSAwcHggMXB4IDJweCAwcHg7XFxufVxcbiAgLyogYm90aCByZW5kZXJlZCB0YXNrcyAmIHByb2plY3RzIHN0eWxlICovXFxuICAucmVuZGVyZWQtcHJvamVjdC10aXRsZSxcXG4gIC5yZW5kZXJlZC10YXNrLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIH1cXG4gIC50YXNrLXNlY3Rpb257XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICB9XFxuIFxcbiAgLyogdGFzayBib3ggY29udGFpbmluZyB0aXRsZSZub3RlcyZkYXRlICovXFxuLnRpdGxlLWJveHtcXG53aWR0aDogMTVyZW07XFxub3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLnJlbmRlcmVkLWRhdGUsXFxuLnJlbmRlcmVkLW5vdGVze1xcbiAgbWFyZ2luOiAwO1xcblxcbn1cXG4ucmVuZGVyZWQtbm90ZXN7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcbi5yZW5kZXJlZC1kYXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI0LCAxNjQsIDI1MCk7ICovXFxufVxcbmlucHV0LnByb2plY3QtdGl0bGV7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTsgKi9cXG4gYm9yZGVyLXJhZGl1czogLjVyZW07XFxuIHBhZGRpbmc6IC4zcmVtO1xcbn1cXG5pbnB1dC5wcm9qZWN0LXRpdGxlOmhvdmVyLFxcbmlucHV0LnByb2plY3QtdGl0bGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcbmlucHV0LnByb2plY3QtdGl0bGU6aG92ZXI6OnBsYWNlaG9sZGVyICB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcbi50YXNrLWlucHV0OmhvdmVyOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcbi50YXNrLWlucHV0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gcGFkZGluZzogLjNyZW07XFxufVxcbi50YXNrLWlucHV0OmhvdmVyLFxcbi50YXNrLWlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG4uYWRkLWJ0biB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBmaWx0ZXI6IGludmVydCg0NSUpIHNlcGlhKDYzJSkgc2F0dXJhdGUoODc5JSkgaHVlLXJvdGF0ZSgxOTNkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MCUpO1xcbn1cXG4uYWRkLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLmVkaXRhYmxlOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjQsIDE2NCwgMjUwKTtcXG4gYm9yZGVyLXJhZGl1czogLjJyZW07XFxufVxcblxcbi8qIGlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59ICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXG53aWR0aDogMnJlbTtcXG5hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xcbnBhZGRpbmc6IC4zcmVtO1xcblxcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmhvdmVye1xcbiAgem9vbTogMTIwJTtcXG59XFxuLm1vZGFse1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxuICB3aWR0aDogMTJyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiB9XFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxuXFxuICBoZWlnaHQ6IDhyZW07XFxufVxcbnRleHRhcmVhOmZvY3Vze1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRlbGV0ZS1idG57XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcInN2Zy9kZWxldGUtb3V0bGluZS5zdmdcXFwiKTsgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtaW4td2lkdGg6IDFyZW07XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUzs7QUFFWDtBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCLDhCQUE4QjtBQUM5QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQixvREFBb0Q7O0VBRWxEO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixzQkFBc0I7R0FDdkIsWUFBWTtHQUNaLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsU0FBUztHQUNULGFBQWE7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7O0FBRUY7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0VBRUU7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0dBQ1Ysa0JBQWtCOztFQUVuQjtBQUNGOzs7RUFHRSxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjO0NBQ2YsVUFBVTtBQUNYO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQsb0RBQW9EO0FBQ3BEO0VBQ0UseUNBQXlDO0VBQ3pDOztJQUVFLGVBQWU7R0FDaEIsa0JBQWtCO0VBQ25CLFlBQVk7RUFDWjtFQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7RUFFWDs7RUFFQSx5Q0FBeUM7QUFDM0M7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCO0FBQ0E7O0VBRUUsU0FBUzs7QUFFWDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUNBQXlDO0NBQzFDLG9CQUFvQjtDQUNwQixjQUFjO0FBQ2Y7QUFDQTs7RUFFRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2QkFBNkI7Q0FDOUIsb0JBQW9CO0NBQ3BCLGNBQWM7QUFDZjtBQUNBOztFQUVFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHlEQUFxQztFQUNyQyw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDhGQUE4RjtBQUNoRztBQUNBO0VBQ0UseURBQTRDO0VBQzVDLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usb0NBQW9DO0NBQ3JDLG9CQUFvQjtBQUNyQjs7QUFFQTs7R0FFRzs7QUFFSDtBQUNBLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsY0FBYzs7QUFFZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9COztFQUVwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxxREFBcUQ7RUFDckQsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ibHVlOiByZ2IoODMsIDEyNywgMjMxKTtcXG4gIC0tc2t5Ymx1ZTogcmdiKDE5MiwgMjM4LCAyNDIpO1xcbiAgLS1saWdodC1ibHVlOiByZ2IoMTkyLCAyMzgsIDI0Mik7XFxuICAtLWdyZXk6IHJnYig5NSwgOTksIDEwNCk7XFxuICAtLWxpZ2h0LWdyZXk6IHJnYmEoMTY5LCAxNzQsIDE4MywgMC41KTtcXG59XFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gXFxufVxcbioge1xcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbi8qIGJvcmRlcjogMXB4IHNvbGlkIHNhbG1vbjsgKi9cXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgaGVpZ2h0OjQ1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgXFxuYm94LXNoYWRvdzogcmdiYSgxNjksIDE3NCwgMTgzLCAwLjUpIDFweCAxcHggMnB4IDJweDtcXG5cXG4gIH1cXG4gIGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgfVxcbiAgaDE6aG92ZXJ7XFxuICAgIHpvb206IDEyMCU7XFxuICB9XFxuICAucHJvamVjdC1zZWN0aW9uIHtcXG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICBoZWlnaHQ6IDEwMCU7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGdhcDogMXJlbTtcXG4gICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOi41cmVtO1xcbiAgfVxcblxcbi5yZW5kZXJlZC1wcm9qZWN0cyxcXG4ucmVuZGVyZWQtdGFza3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiAgLnNlYy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgIFxcbiAgfVxcbi5yZW5kZXJlZC10YXNrLFxcbi5yZW5kZXJlZC1wcm9qZWN0e1xcbiBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxuICB3aWR0aDogMjNyZW07XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxuICBwYWRkaW5nOiAuM3JlbTtcXG4gZ2FwOiAuNXJlbTtcXG59XFxuLmNoZWNrYm94LWNoZWNrZWR7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnJlbmRlcmVkLXRhc2s6aG92ZXIsXFxuLnJlbmRlcmVkLXByb2plY3Q6aG92ZXJ7XFxuLyogYm94LXNoYWRvdzogMXB4IC4xcHggMXB4IDJweCByZ2IoMTk5LCAxOTksIDE5OSk7ICovXFxuYm94LXNoYWRvdzogcmdiYSgxNjksIDE3NCwgMTgzLCAwLjUpIDBweCAxcHggMnB4IDBweDtcXG59XFxuICAvKiBib3RoIHJlbmRlcmVkIHRhc2tzICYgcHJvamVjdHMgc3R5bGUgKi9cXG4gIC5yZW5kZXJlZC1wcm9qZWN0LXRpdGxlLFxcbiAgLnJlbmRlcmVkLXRhc2stdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgfVxcbiAgLnRhc2stc2VjdGlvbntcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gIH1cXG4gXFxuICAvKiB0YXNrIGJveCBjb250YWluaW5nIHRpdGxlJm5vdGVzJmRhdGUgKi9cXG4udGl0bGUtYm94e1xcbndpZHRoOiAxNXJlbTtcXG5vdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4ucmVuZGVyZWQtZGF0ZSxcXG4ucmVuZGVyZWQtbm90ZXN7XFxuICBtYXJnaW46IDA7XFxuXFxufVxcbi5yZW5kZXJlZC1ub3Rlc3tcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuLnJlbmRlcmVkLWRhdGUge1xcbiAgY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjQsIDE2NCwgMjUwKTsgKi9cXG59XFxuaW5wdXQucHJvamVjdC10aXRsZXtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpOyAqL1xcbiBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gcGFkZGluZzogLjNyZW07XFxufVxcbmlucHV0LnByb2plY3QtdGl0bGU6aG92ZXIsXFxuaW5wdXQucHJvamVjdC10aXRsZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuaW5wdXQucHJvamVjdC10aXRsZTpob3Zlcjo6cGxhY2Vob2xkZXIgIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuLnRhc2staW5wdXQ6aG92ZXI6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuLnRhc2staW5wdXQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiBwYWRkaW5nOiAuM3JlbTtcXG59XFxuLnRhc2staW5wdXQ6aG92ZXIsXFxuLnRhc2staW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcbi5hZGQtYnRuIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcInN2Zy9wbHVzLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgc2VwaWEoNjMlKSBzYXR1cmF0ZSg4NzklKSBodWUtcm90YXRlKDE5M2RlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDkwJSk7XFxufVxcbi5hZGQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwic3ZnL3BsdXMtY2lyY2xlLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLmVkaXRhYmxlOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjQsIDE2NCwgMjUwKTtcXG4gYm9yZGVyLXJhZGl1czogLjJyZW07XFxufVxcblxcbi8qIGlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59ICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXG53aWR0aDogMnJlbTtcXG5hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xcbnBhZGRpbmc6IC4zcmVtO1xcblxcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmhvdmVye1xcbiAgem9vbTogMTIwJTtcXG59XFxuLm1vZGFse1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxuICB3aWR0aDogMTJyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiB9XFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XFxuXFxuICBoZWlnaHQ6IDhyZW07XFxufVxcbnRleHRhcmVhOmZvY3Vze1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRlbGV0ZS1idG57XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcInN2Zy9kZWxldGUtb3V0bGluZS5zdmdcXFwiKTsgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtaW4td2lkdGg6IDFyZW07XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZG9uZVN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIHRoaXMudGFzayA9IFtdOyAvLyBjcmVhdGUgc3BhY2UgZm9yIGxpdHRsZSB0YXNrc1xuICB9XG4gIHRvZ2dsZURvbmVTdGF0dXMoKSB7XG4gICAgdGhpcy5kb25lU3RhdHVzID0gIXRoaXMuZG9uZVN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHNBcnIgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZVByb2plY3RzQXJyXCIpKT8ubWFwKChvYmopID0+XG4gICAgT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBvYmopXG4gICkgPz8gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikudmFsdWU7XG4gIC8vIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRhdGVcIikudmFsdWU7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuXG4gIHByb2plY3RzQXJyLnB1c2gocHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JhZ2VQcm9qZWN0c0FyclwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChJRCkge1xuICBjb25zdCBpbmRleFRvUmVtb3ZlID0gcHJvamVjdHNBcnIuZmluZEluZGV4KChwcm9qKSA9PiBwcm9qLmlkID09PSBJRCk7XG4gIHByb2plY3RzQXJyLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yYWdlUHJvamVjdHNBcnJcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3RUaXRsZSwgcHJvamVjdFRvRWRpdCkge1xuICBwcm9qZWN0VG9FZGl0LnRpdGxlID0gcHJvamVjdFRpdGxlLnZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JhZ2VQcm9qZWN0c0FyclwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycikpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHNBcnIsIFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIGV4dGVuZHMgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlKSB7XG4gICAgc3VwZXIodGl0bGUsIGR1ZURhdGUpO1xuICAgIHRoaXMuZHVlRGF0ZSA9IFwiXCI7XG4gICAgdGhpcy5ub3RlcyA9IFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpdHRsZVRhc2tUb1Byb2plY3QocHJvamVjdFRvQWRkVGFzaykge1xuICBjb25zdCBsaXR0bGVUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGxpdHRsZVRhc2sgPSBuZXcgVGFzayhsaXR0bGVUYXNrVGl0bGUpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0Fycik7XG4gIHByb2plY3RUb0FkZFRhc2sudGFzay5wdXNoKGxpdHRsZVRhc2spO1xuXG4gIC8vIGFkZCB0YXNrIHRvIHRoZSBzdG9yYWdlIHRvbyFcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yYWdlUHJvamVjdHNBcnJcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURvbmVTdGF0dXModGFzaykge1xuICB0YXNrLmRvbmVTdGF0dXMgPSAhdGFzay5kb25lU3RhdHVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2sodGFza1RpdGxlLCB0YXNrVG9FZGl0KSB7XG4gIHRhc2tUb0VkaXQudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZVByb2plY3RzQXJyXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb3Rlcyh0YXNrVG9Ob3RlLCBub3Rlc1ZhbHVlKSB7XG4gIHRhc2tUb05vdGUubm90ZXMgPSBub3Rlc1ZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JhZ2VQcm9qZWN0c0FyclwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF0ZSh0YXNrVG9EYXRlLCBkYXRlVmFsdWUpIHtcbiAgdGFza1RvRGF0ZS5kdWVEYXRlID0gZGF0ZVZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JhZ2VQcm9qZWN0c0FyclwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycikpO1xufVxuIiwiaW1wb3J0IHsgYWRkTGl0dGxlVGFza1RvUHJvamVjdCwgdG9nZ2xlRG9uZVN0YXR1cyB9IGZyb20gXCIuL2xpdHRsZS10YXNrXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FyciB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGVkaXRUYXNrLCBhZGROb3RlcywgYWRkRGF0ZSB9IGZyb20gXCIuL2xpdHRsZS10YXNrXCI7XG5pbXBvcnQgRGVsZXRlU3ZnIGZyb20gXCIuL3N2Zy9kZWxldGUtb3V0bGluZS5zdmdcIjtcblxuY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stc2VjdGlvblwiKTtcbmNvbnN0IHJlbmRlcmVkVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucmVuZGVyZWRUYXNrcy5jbGFzc0xpc3QuYWRkKFwicmVuZGVyZWQtdGFza3NcIik7XG5cbmZ1bmN0aW9uIHJlbmRlcklucHV0RmllbGQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIHRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQWRkIGEgdGFza1wiKTtcbiAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dFwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChyZW5kZXJlZFRhc2tzKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrLWlucHV0XCIgJiZcbiAgICAgIChlLmtleSA9PT0gXCJFbnRlclwiKSAmIChpbnB1dFRpdGxlLnZhbHVlICE9PSBcIlwiKVxuICAgICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkTGl0dGxlVGFza1RvUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHJlbmRlckxpdHRsZVRhc2socHJvamVjdCk7XG4gICAgICBpbnB1dFRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVyZW5kZXJJbnB1dEZpZWxkKHByb2plY3QpIHtcbiAgd2hpbGUgKHRhc2tTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrU2VjdGlvbi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIHJlbmRlcklucHV0RmllbGQocHJvamVjdCk7XG59XG5cbi8vIHB1bGwgb3V0IHByb2plY3QudGFzayBhcnJheSBmcm9tIGVhY2ggcHJvamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckxpdHRsZVRhc2socHJvamVjdCkge1xuICAvLyBsb29waW5nIHRocm91Z2ggdGFza0FycmF5LCBjYWxsIHJlbmRlcigpIG9uIGVhY2ggZWxlbWVudFxuICBjb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IHJlbmRlcmVkVGFza0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVuZGVyZWRUYXNrQm94LmNsYXNzTGlzdC5hZGQoXCJyZW5kZXJlZC10YXNrXCIpO1xuICAgIHJlbmRlcmVkVGFza0JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHt0YXNrLmlkfWApO1xuICAgIHJlbmRlcmVkVGFza3MucHJlcGVuZChyZW5kZXJlZFRhc2tCb3gpO1xuXG4gICAgY29uc3QgZG9uZVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkb25lU3RhdHVzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBpZiAodGFzay5kb25lU3RhdHVzKSB7XG4gICAgICBkb25lU3RhdHVzLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpO1xuICAgIH1cbiAgICByZW5kZXJlZFRhc2tCb3guYXBwZW5kQ2hpbGQoZG9uZVN0YXR1cyk7XG5cbiAgICBkb25lU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2dnbGVEb25lU3RhdHVzKHRhc2spO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yYWdlUHJvamVjdHNBcnJcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcbiAgICB9KTtcbiAgICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveFwiKTtcbiAgICByZW5kZXJlZFRhc2tCb3guYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwicmVuZGVyZWQtdGFzay10aXRsZVwiKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJyZWFkb25seVwiKTtcbiAgICB0YXNrVGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZWRpdGFibGVcIik7XG4gICAgICB0YXNrVGl0bGUuZm9jdXMoKTtcbiAgICAgIHRhc2tUaXRsZS5yZWFkT25seSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlZGl0QnRuLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gcmVuZGVyIG5vdGVzIHVuZGVyIHRoZSB0YXNrVGl0bGVcbiAgICBjb25zdCByZW5kZXJlZE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcmVuZGVyZWROb3Rlcy5jbGFzc0xpc3QuYWRkKFwicmVuZGVyZWQtbm90ZXNcIik7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQocmVuZGVyZWROb3Rlcyk7XG5cbiAgICBjb25zdCByZW5kZXJlZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByZW5kZXJlZERhdGUuY2xhc3NMaXN0LmFkZChcInJlbmRlcmVkLWRhdGVcIik7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQocmVuZGVyZWREYXRlKTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcbiAgICByZW5kZXJlZFRhc2tCb3guYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0VGFzayh0YXNrVGl0bGUsIHRhc2spO1xuICAgICAgcmVyZW5kZXIocHJvamVjdCk7XG4gICAgfSk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICBkZWxldGVCdG4uc3JjID0gRGVsZXRlU3ZnO1xuICAgIHJlbmRlcmVkVGFza0JveC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgLy8gaWQgb2YgY3VycmVudCB0YXNrIGVsZW1lbnQgd2hpbGUgbG9vcGluZ1xuICAgIGNvbnN0IGlkVG9SZW1vdmUgPSB0YXNrLmlkO1xuXG4gICAgcmVuZGVyZWRUYXNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSAhPT0gXCJkZWxldGUtYnRuXCIpIHJldHVybjtcbiAgICAgIGNvbnN0IHRhc2tCb3ggPSBlLnRhcmdldC5jbG9zZXN0KFwiLnJlbmRlcmVkLXRhc2tcIik7XG4gICAgICBkZWxldGVMaXR0bGVUYXNrKGlkVG9SZW1vdmUpO1xuICAgICAgcmVyZW5kZXIocHJvamVjdCk7XG4gICAgICAvLyB0YXNrQm94LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIG5vdGVzXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzRGl2LnRleHRDb250ZW50ID0gXCJkZXRhaWxzXCI7IC8vIGNoYW5nZSB0byBub3RlIHN2ZyBsYXRlclxuICAgIG5vdGVzRGl2LmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1kaXZcIik7XG4gICAgcmVuZGVyZWRUYXNrQm94LmFwcGVuZENoaWxkKG5vdGVzRGl2KTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgIGNvbnN0IG5vdGVzUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChub3Rlc1BvcHVwKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwibm90ZXMtZm9ybVwiKTtcbiAgICBub3Rlc1BvcHVwLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBub3Rlc0lucHV0LnRleHRDb250ZW50ID0gYCR7dGFzay5ub3Rlc31gO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSBgJHt0YXNrLmR1ZURhdGV9YDtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBub3Rlc0FkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbm90ZXNBZGRCdG4udGV4dENvbnRlbnQgPSBcInNhdmVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5vdGVzQWRkQnRuKTtcblxuICAgIG5vdGVzRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBub3Rlc0FkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBub3Rlc1ZhbHVlID0gbm90ZXNJbnB1dC52YWx1ZTtcbiAgICAgIGFkZE5vdGVzKHRhc2ssIG5vdGVzVmFsdWUpO1xuICAgICAgY29uc3QgZGF0ZUlucHV0VmFsdWUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICBhZGREYXRlKHRhc2ssIGRhdGVJbnB1dFZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICByZW5kZXJOb3Rlcyh0YXNrLCByZW5kZXJlZE5vdGVzKTtcbiAgICAgIHJlbmRlckRhdGUodGFzaywgcmVuZGVyZWREYXRlKTtcbiAgICB9KTtcblxuICAgIHJlbmRlck5vdGVzKHRhc2ssIHJlbmRlcmVkTm90ZXMpOyAvLyByZW5kZXIgbm90ZXMgZXZlbiBhZnRlciByZWZyZXNoXG4gICAgcmVuZGVyRGF0ZSh0YXNrLCByZW5kZXJlZERhdGUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZUxpdHRsZVRhc2sodGFza0lEKSB7XG4gICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHByb2plY3QudGFzay5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gdGFza0lEKTtcbiAgICBwcm9qZWN0LnRhc2suc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZVByb2plY3RzQXJyXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXJlbmRlcihwcm9qZWN0KSB7XG4gICAgd2hpbGUgKHJlbmRlcmVkVGFza3MuZmlyc3RDaGlsZCkge1xuICAgICAgcmVuZGVyZWRUYXNrcy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBwcm9qZWN0LnRhc2suZm9yRWFjaChyZW5kZXIpO1xuICB9XG4gIHJlcmVuZGVyKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOb3Rlcyh0YXNrLCByZW5kZXJlZE5vdGVzKSB7XG4gIGlmICh0YXNrLm5vdGVzICE9PSBcIlwiKSByZW5kZXJlZE5vdGVzLnRleHRDb250ZW50ID0gYCR7dGFzay5ub3Rlc31gO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEYXRlKHRhc2ssIHJlbmRlcmVkRGF0ZSkge1xuICBpZiAodGFzay5kdWVEYXRlICE9PSBcIlwiKSByZW5kZXJlZERhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcbn1cbiIsImltcG9ydCB7IHByb2plY3RzQXJyLCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHJlcmVuZGVySW5wdXRGaWVsZCwgcmVuZGVyTGl0dGxlVGFzayB9IGZyb20gXCIuL2xpdHRsZS10YXNrRE9NXCI7XG5cbmNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb25cIik7XG5jb25zdCByZW5kZXJlZFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW5kZXJlZC1wcm9qZWN0c1wiKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcblxucHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xucHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVuZGVyZWRQcm9qZWN0cyk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2opIHtcbiAgLy8gcmVuZGVyZWREaXYgdG8gY29udGFpbiByZW5kZXJlZCBwcm9qZWN0IGJveFxuICBjb25zdCByZW5kZXJlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlbmRlcmVkRGl2LmNsYXNzTGlzdC5hZGQoXCJyZW5kZXJlZC1wcm9qZWN0XCIpO1xuICByZW5kZXJlZFByb2plY3RzLnByZXBlbmQocmVuZGVyZWREaXYpO1xuXG4gIGNvbnN0IGRvbmVTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRvbmVTdGF0dXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBpZiAocHJvai5kb25lU3RhdHVzKSBkb25lU3RhdHVzLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpO1xuXG4gIHJlbmRlcmVkRGl2LmFwcGVuZENoaWxkKGRvbmVTdGF0dXMpO1xuXG4gIHJlbmRlcmVkRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXJlbmRlcmVkXCIpO1xuICByZW5kZXJlZERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcm9qLmlkfWApO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcInJlYWRvbmx5XCIpO1xuICBwcm9qZWN0VGl0bGUudmFsdWUgPSBwcm9qLnRpdGxlO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInJlbmRlcmVkLXByb2plY3QtdGl0bGVcIiwgXCJyZW5kZXJlZC10aXRsZVwiKTtcbiAgcmVuZGVyZWREaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImVkaXRhYmxlXCIpO1xuICAgIHByb2plY3RUaXRsZS5mb2N1cygpO1xuICAgIHByb2plY3RUaXRsZS5yZWFkT25seSA9IGZhbHNlO1xuICB9KTtcblxuICByZW5kZXJlZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBpZiB3aGF0J3MgY2xpY2tlZCBpcyB3aGF0IGhhcyB0aGUgaGFuZGxlclxuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0ID09IGUuY3VycmVudFRhcmdldCB8fFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVuZGVyZWQtcHJvamVjdC10aXRsZVwiKVxuICAgICkge1xuICAgICAgcmVyZW5kZXJJbnB1dEZpZWxkKHByb2opO1xuICAgICAgcmVuZGVyTGl0dGxlVGFzayhwcm9qKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1lZGl0LWJ0blwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBlZGl0UHJvamVjdChwcm9qZWN0VGl0bGUsIHByb2opO1xuICAgIHJlcmVuZGVyUHJvamVjdEFycigpO1xuICB9KTtcblxuICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGVkaXRCdG4uY2xpY2soKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJlbmRlcmVkRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG4gIHJlbmRlcmVkRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgZG9uZVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHByb2oudG9nZ2xlRG9uZVN0YXR1cygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZVByb2plY3RzQXJyXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGlkVG9SZW1vdmUgPSBwcm9qLmlkO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVByb2plY3QoaWRUb1JlbW92ZSk7XG4gICAgcmVyZW5kZXJQcm9qZWN0QXJyKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVyZW5kZXJQcm9qZWN0QXJyKCkge1xuICB3aGlsZSAocmVuZGVyZWRQcm9qZWN0cy5maXJzdENoaWxkKSB7XG4gICAgcmVuZGVyZWRQcm9qZWN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIGNvbnNvbGUubG9nKHByb2plY3RzQXJyKTtcbiAgcHJvamVjdHNBcnIuZm9yRWFjaChyZW5kZXJQcm9qZWN0KTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgcmVyZW5kZXJQcm9qZWN0QXJyIH0gZnJvbSBcIi4vcHJvamVjdERPTVwiO1xuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idG5cIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG5cbnJlcmVuZGVyUHJvamVjdEFycigpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKHByb2plY3RUaXRsZS52YWx1ZSAhPT0gXCJcIikge1xuICAgIGFkZFByb2plY3QoKTtcbiAgICByZXJlbmRlclByb2plY3RBcnIoKTtcbiAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSBcIlwiO1xuICB9XG59KTtcblxucHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRCdG4uY2xpY2soKTtcbiAgfVxufSk7XG5cbi8vIGNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLWJ0blwiKTtcbi8vIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcblxuLy8gcmVyZW5kZXJUYXNrQXJyKCk7XG5cbi8vIHRhc2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgYWRkVGFzaygpO1xuLy8gICByZXJlbmRlclRhc2tBcnIoKTtcbi8vICAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIiwiVVJMIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18iLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsIl9rIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJhcGkiLCJkb21BUEkiLCJ1cGRhdGUiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsIm1lbW8iLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibSIsIm4iLCJnZXR0ZXIiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicCIsImIiLCJiYXNlVVJJIiwic2VsZiIsImhyZWYiLCJuYyIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZHVlRGF0ZSIsImRvbmVTdGF0dXMiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwidGFzayIsInRvZ2dsZURvbmVTdGF0dXMiLCJwcm9qZWN0c0FyciIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFzc2lnbiIsIlRhc2siLCJzdXBlciIsIm5vdGVzIiwidGFza1NlY3Rpb24iLCJyZW5kZXJlZFRhc2tzIiwicmVuZGVyTGl0dGxlVGFzayIsInByb2plY3QiLCJyZW5kZXIiLCJyZW5kZXJlZFRhc2tCb3giLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmVwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iLCJ0aXRsZUJveCIsInRhc2tUaXRsZSIsInZhbHVlIiwiZm9jdXMiLCJyZWFkT25seSIsInByZXZlbnREZWZhdWx0IiwiZWRpdEJ0biIsImNsaWNrIiwicmVuZGVyZWROb3RlcyIsInJlbmRlcmVkRGF0ZSIsInRleHRDb250ZW50IiwidGFza1RvRWRpdCIsImVkaXRUYXNrIiwicmVyZW5kZXIiLCJkZWxldGVCdG4iLCJpZFRvUmVtb3ZlIiwiY2xhc3NOYW1lIiwiY2xvc2VzdCIsInRhc2tJRCIsImluZGV4VG9SZW1vdmUiLCJmaW5kSW5kZXgiLCJlbCIsImRlbGV0ZUxpdHRsZVRhc2siLCJub3Rlc0RpdiIsImRpYWxvZyIsImJvZHkiLCJub3Rlc1BvcHVwIiwiZm9ybSIsIm5vdGVzSW5wdXQiLCJkYXRlSW5wdXQiLCJub3Rlc0FkZEJ0biIsInNob3dNb2RhbCIsIm5vdGVzVmFsdWUiLCJ0YXNrVG9Ob3RlIiwiYWRkTm90ZXMiLCJkYXRlVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJyZW5kZXJOb3RlcyIsInJlbmRlckRhdGUiLCJmb3JFYWNoIiwicHJvamVjdFNlY3Rpb24iLCJyZW5kZXJlZFByb2plY3RzIiwicHJvamVjdEZvcm0iLCJyZW5kZXJQcm9qZWN0IiwicHJvaiIsInJlbmRlcmVkRGl2IiwicHJvamVjdFRpdGxlIiwiY3VycmVudFRhcmdldCIsImNvbnRhaW5zIiwiaW5wdXRUaXRsZSIsInByb2plY3RUb0FkZFRhc2siLCJsaXR0bGVUYXNrVGl0bGUiLCJsaXR0bGVUYXNrIiwiYWRkTGl0dGxlVGFza1RvUHJvamVjdCIsInJlbmRlcklucHV0RmllbGQiLCJyZXJlbmRlcklucHV0RmllbGQiLCJwcm9qZWN0VG9FZGl0IiwiZWRpdFByb2plY3QiLCJyZXJlbmRlclByb2plY3RBcnIiLCJzdG9wUHJvcGFnYXRpb24iLCJJRCIsImRlbGV0ZVByb2plY3QiLCJhZGRCdG4iLCJhZGRQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==
