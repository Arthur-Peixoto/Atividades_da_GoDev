const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    Branco:getStyle(html, "--branquinho"),
    Preto:getStyle(html, "--pretinho"),
}

const DarkMode = {
    Branco:"#2429AF",
    Preto:"#f3f3f3",
}

const TransformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const ChangeColors = (colors) =>{
    Object.keys(colors).map(key =>
            html.style.setProperty(TransformKey(key), colors[key])
        )
}

checkbox.addEventListener("change", ({target}) =>{
    target.checked ? ChangeColors(DarkMode) : ChangeColors(initialColors)
})