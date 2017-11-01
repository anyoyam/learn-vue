window.addEventListener('load', function() {
    function c(t, h, o, p) {
        let i = document.createElement(t);
        if (i) {
            i.innerHTML = h || "";
            if (typeof o === "object") {
                for (let k in o) {
                    if (k === "css") {
                        i.style.cssText = o[k];
                        continue;
                    }
                    i[k] = o[k];
                }
            }
            p && p.appendChild(i);
            return i;
        }
        return false;
    }
    ~function (d, s) {
        let md = new markdownit();
        Array.from(d.querySelectorAll(s)).map((s) => {
            c("DIV", "<details><summary>笔记</summary><div>" + md.render(s.innerText) + "</div></details>", {className: "fmt", css: "margin-top:20px;border-left:5px solid #eee;padding:10px 20px;"}, d.body);
        });
    }(document, 'body > script[type=markdown]');
    ~function() {
        if (typeof _FILENAME_ === "undefined") return;
        let r = _FILENAME_.match(/^([^\d]+?)(\d+?)\.(.+)$/);
        if (r) {
            let i = parseInt(r[2]) || 1;
            let h = `<a href="${r[1]}${i+1}.${r[3]}">&gt;</a>`;
            if (i > 1) {
                h = `<a href="${r[1]}${i-1}.${r[3]}">&lt;</a> ` + h;
            }
            c("DIV", h, {css: "position:fixed;left:10px;bottom:10px;"}, document.body);
        }
    }();
})